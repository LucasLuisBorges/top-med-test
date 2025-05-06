import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Paths, siteConfig } from "@/config/constants";

import { Icons } from "../icons";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  showPrivacyPolicyLabel?: boolean;
};
export function AuthLayout({
  children,
  title,
  description,
  showPrivacyPolicyLabel = false,
}: Props) {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <Link href={Paths.HOME} className="self-center">
          <div className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded">
              <Icons.logo className="size-4" />
            </div>
            {siteConfig.name}
          </div>
        </Link>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
          </Card>

          {showPrivacyPolicyLabel && (
            <div className="text-muted-foreground [&_a]:hover:text-primary text-center text-xs text-balance [&_a]:underline [&_a]:underline-offset-4">
              Ao clicar em Criar conta, você concorda com nossos{" "}
              <Link href="#">Termos de serviço</Link> e{" "}
              <Link href="#">Política de privacidade</Link>.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
