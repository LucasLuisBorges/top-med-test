import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { signInWithGoogleAction } from "@/actions/auth/sign-in-with-google-action";
import { signUpAction } from "@/actions/auth/sign-up-action";
import { Paths } from "@/config/constants";
import { SignUpSchema, signUpSchema } from "@/schemas/auth/sign-up-schema";

const defaultValues: Partial<SignUpSchema> = {
  name: "",
  email: "",
  password: "",
};

export function useSignUp() {
  const [isPending, startTransition] = useTransition();
  const [isPendingGoogle, startTransitionGoogle] = useTransition();
  const router = useRouter();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(values: SignUpSchema) {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const response = await signUpAction(values);
      if (response.status === "error") {
        setError(response.message);
        return;
      }

      form.reset(defaultValues);
      setSuccess(response.message);
      router.push(Paths.SUCCESS);
    });
  }

  function signUpWithGoogle() {
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
    onSubmit,
    form,
    signUpWithGoogle,
    success,
    error,
  };
}
