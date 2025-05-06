import { AuthLayout } from "@/components/auth/auth-layout";
import { SignInForm } from "@/components/auth/sign-in-form";

export default async function SignInPage() {
  return (
    <AuthLayout title="Bem-vindo de volta" description="Entre com sua conta">
      <SignInForm showSignInWithGoogle={false} />
    </AuthLayout>
  );
}
