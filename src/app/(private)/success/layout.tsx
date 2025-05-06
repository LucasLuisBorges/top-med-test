import { redirect } from "next/navigation";

import { Paths } from "@/config/constants";
import { authServer } from "@/lib/auth-server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId, session } = await authServer();

  if (!userId || !session) {
    redirect(Paths.SIGN_IN);
  }

  return <>{children}</>;
}
