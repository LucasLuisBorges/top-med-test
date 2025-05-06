import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { toast } from "sonner";

import { signOutAction } from "@/actions/auth/sign-out-action";
import { Paths } from "@/config/constants";

export function useSignOut() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function signOut() {
    startTransition(async () => {
      const response = await signOutAction();
      if (response.status === "error") {
        toast.error(response.message);
      }
    });

    router.push(Paths.HOME);
  }

  return {
    isPending,
    signOut,
  };
}
