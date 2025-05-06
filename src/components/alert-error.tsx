"use client";

import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertErrorProps {
  message: string | null;
  title?: string;
}

export function AlertError({ message, title = "Error" }: AlertErrorProps) {
  if (!message) return null;

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
