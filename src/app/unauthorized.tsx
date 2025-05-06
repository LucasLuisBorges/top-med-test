"use client";

import { useRouter } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSignOut } from "@/hooks/auth/use-sign-out";

export function Illustration(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg width="287" height="145" viewBox="0 0 287 145" fill="none" {...props}>
      <path
        d="M62.6 142C60.467 142 59.4 140.933 59.4 138.8V118H3.4C1.4 118 0.4 117 0.4 115V92.8C0.4 91.467 0.8 90.067 1.6 88.6L58.2 4C59 2.667 60.267 2 62 2H90C92 2 93 3 93 5V90.4H104.2C105.133 90.4 105.933 90.733 106.6 91.4C107.267 91.933 107.6 92.667 107.6 93.6V114.8C107.6 115.733 107.267 116.533 106.6 117.2C105.933 117.733 105.133 118 104.2 118H93V138.8C93 140.933 91.933 142 89.8 142H62.6ZM33 90.4H59.4V51.2L33 90.4ZM181.67 144.6C174.337 144.6 167.337 143.267 160.67 140.6C154.004 137.933 147.804 133.867 142.07 128.4C136.337 122.933 131.804 115.4 128.47 105.8C125.137 96.2 123.47 85.133 123.47 72.6C123.47 60.067 125.137 49 128.47 39.4C131.804 29.8 136.337 22.267 142.07 16.8C147.804 11.333 154.004 7.267 160.67 4.6C167.337 1.8 174.337 0.4 181.67 0.4C189.137 0.4 196.204 1.8 202.87 4.6C209.537 7.267 215.67 11.333 221.27 16.8C227.004 22.267 231.537 29.8 234.87 39.4C238.204 49 239.87 60.067 239.87 72.6C239.87 85.133 238.204 96.2 234.87 105.8C231.537 115.4 227.004 122.933 221.27 128.4C215.67 133.867 209.537 137.933 202.87 140.6C196.204 143.267 189.137 144.6 181.67 144.6ZM181.67 113.6C190.737 113.6 197.27 109.867 201.27 102.4C205.404 94.8 207.47 84.867 207.47 72.6C207.47 60.333 205.404 50.4 201.27 42.8C197.137 35.2 190.604 31.4 181.67 31.4C172.737 31.4 166.204 35.2 162.07 42.8C158.07 50.4 156.07 60.333 156.07 72.6C156.07 84.867 158.07 94.8 162.07 102.4C166.204 109.867 172.737 113.6 181.67 113.6ZM260.116 142V0H286.516V142H260.116Z"
        fill="black"
      />
    </svg>
  );
}

export default function Unauthorized() {
  const { signOut } = useSignOut();
  const router = useRouter();
  return (
    <div className="bg-background relative flex min-h-svh w-full flex-col justify-center p-6 md:p-10">
      <div className="relative mx-auto w-full max-w-5xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <Illustration className="text-foreground h-[50vh] w-full opacity-[0.04] dark:opacity-[0.03]" />
        </div>

        <div className="relative z-[1] pt-52 text-center">
          <h1 className="text-primary mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            Sem permissão
          </h1>
          <p className="text-muted-foreground mt-6 text-lg font-medium text-pretty sm:text-xl/8">
            Você não tem permissão para acessar esta página.
          </p>

          <div className="mt-10 flex flex-col gap-x-6 gap-y-3 sm:flex-row sm:items-center sm:justify-center">
            <Button
              variant="secondary"
              className="group cursor-pointer"
              onClick={() => router.back()}
            >
              <ArrowLeft
                className="ms-0 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              Voltar
            </Button>
            <Button
              className="-order-1 cursor-pointer sm:order-none"
              onClick={signOut}
            >
              Ir para a página inicial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
