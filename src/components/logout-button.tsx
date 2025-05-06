"use client";

import { Button } from "@/components/ui/button";
import { useSignOut } from "@/hooks/auth/use-sign-out";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const { signOut, isPending } = useSignOut();

  return (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
      disabled={isPending}
      onClick={() => signOut()}
    >
      <LogOut className="h-4 w-4" />
      Sair da conta
    </Button>
  );
}
