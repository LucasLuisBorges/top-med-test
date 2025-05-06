"use client";

import Link from "next/link";

import { AlertError } from "@/components/alert-error";
import { AlertSuccess } from "@/components/alert-success";
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
import { useSignUp } from "@/hooks/auth/use-sign-up";

type Props = {
  showSignUpWithGoogle: boolean;
};

export function SignUpForm({ showSignUpWithGoogle }: Props) {
  const {
    isPending,
    isPendingGoogle,
    onSubmit,
    form,
    signUpWithGoogle,
    success,
    error,
  } = useSignUp();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
        {showSignUpWithGoogle && (
          <>
            <div className="flex flex-col gap-4">
              <Button
                variant="outline"
                className="w-full cursor-pointer"
                type="button"
                onClick={signUpWithGoogle}
                disabled={isPendingGoogle}
                isLoading={isPendingGoogle}
              >
                {!isPendingGoogle && (
                  <Icons.google className="fill-foreground" />
                )}
                Criar conta com Google
              </Button>
            </div>

            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background text-muted-foreground relative z-10 px-2">
                Ou crie uma conta com
              </span>
            </div>
          </>
        )}

        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="name"
                    type="text"
                    autoComplete="username"
                    placeholder="john Doe"
                    minLength={2}
                    maxLength={32}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                    autoComplete="email"
                    disabled={isPending}
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
                    autoComplete="new-password"
                    minLength={8}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <AlertError message={error} />
          <AlertSuccess message={success} />

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
            isLoading={isPending}
          >
            Criar conta
          </Button>
        </div>

        <div className="text-center text-sm">
          {"Já tem uma conta? "}
          <Link href={Paths.SIGN_IN} className="underline underline-offset-4">
            Entrar
          </Link>
        </div>
      </form>
    </Form>
  );
}
