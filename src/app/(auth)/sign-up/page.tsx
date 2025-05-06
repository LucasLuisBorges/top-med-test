import { AuthLayout } from "@/components/auth/auth-layout";
import { SignUpForm } from "@/components/auth/sign-up-form";

export default async function SignUpPage() {
  return (
    <AuthLayout
      title="Crie uma conta"
      description="Entre com sua conta"
      showPrivacyPolicyLabel
    >
      <SignUpForm showSignUpWithGoogle={false} />
    </AuthLayout>
  );
}
