import { redirect } from "next/navigation";
import { useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { signInAction } from "@/actions/auth/sign-in-action";
import { signInWithGoogleAction } from "@/actions/auth/sign-in-with-google-action";
import { Paths } from "@/config/constants";
import { SignInSchema, signInSchema } from "@/schemas/auth/sign-in-schema";

const defaultValues: Partial<SignInSchema> = {
  email: "",
  password: "",
};

export function useSignIn() {
  const [isPending, startTransition] = useTransition();
  const [isPendingGoogle, startTransitionGoogle] = useTransition();

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(values: SignInSchema) {
    startTransition(async () => {
      const response = await signInAction(values);

      if (response.status === "error") {
        toast.error(response.message);
        return;
      }

      form.reset(defaultValues);

      redirect(Paths.SUCCESS);
    });
  }

  function signInWithGoogle() {
    startTransitionGoogle(async () => {
      const response = await signInWithGoogleAction();
      if (response.status === "error") {
        toast.error(response.message);
      }
    });
  }

  return {
    isPending,
    isPendingGoogle,
    signInWithGoogle,
    onSubmit,
    form,
  };
}
