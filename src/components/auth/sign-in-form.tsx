"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Paths } from "@/config/constants";
import { useSignIn } from "@/hooks/auth/use-sign-in";

type Props = {
  showSignInWithGoogle: boolean;
};

export function SignInForm({ showSignInWithGoogle }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");
  const password = searchParams.get("password");

  const { isPending, isPendingGoogle, onSubmit, form, signInWithGoogle } =
    useSignIn();

  useEffect(() => {
    if (email && password) {
      form.setValue("email", email);
      form.setValue("password", password);

      router.replace(Paths.SIGN_IN);
    }
  }, [email, password, form, router]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
        {showSignInWithGoogle && (
          <>
            <div className="flex flex-col gap-4">
              <Button
                variant="outline"
                className="w-full cursor-pointer"
                type="button"
                onClick={signInWithGoogle}
                disabled={isPendingGoogle}
                isLoading={isPendingGoogle}
              >
                {!isPendingGoogle && (
                  <Icons.google className="fill-foreground" />
                )}
                Entrar com Google
              </Button>
            </div>

            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background text-muted-foreground relative z-10 px-2">
                Ou entre com
              </span>
            </div>
          </>
        )}

        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    disabled={isPending}
                    tabIndex={1}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <PasswordInput
                    {...field}
                    id="password"
                    autoComplete="current-password"
                    disabled={isPending}
                    tabIndex={2}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
            isLoading={isPending}
            tabIndex={3}
          >
            Entrar
          </Button>
        </div>

        <div className="text-center text-sm">
          {"Não tem uma conta? "}
          <Link href={Paths.SIGN_UP} className="underline underline-offset-4">
            Criar conta
          </Link>
        </div>
      </form>
    </Form>
  );
}
