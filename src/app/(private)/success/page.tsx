import { LogoutButton } from "@/components/logout-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authServer } from "@/lib/auth-server";
import { format } from "date-fns";
import { CheckCircle } from "lucide-react";

export default async function SuccessPage() {
  const { user } = await authServer();

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center border-b pb-2">
          <div className="flex justify-center mb-2">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-700">
            Sucesso!
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <UserInfoItem label="Nome" value={user?.name} />
            <UserInfoItem label="Email" value={user?.email} />
            <UserInfoItem
              label="Criado em"
              value={
                user?.createdAt
                  ? format(new Date(user.createdAt), "dd/MM/yyyy HH:mm")
                  : "-"
              }
            />
            <UserInfoItem
              label="Atualizado em"
              value={
                user?.updatedAt
                  ? format(new Date(user.updatedAt), "dd/MM/yyyy HH:mm")
                  : "-"
              }
            />
            {user?.role && <UserInfoItem label="Função" value={user.role} />}

            <div className="mt-6 pt-4">
              <LogoutButton />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function UserInfoItem({
  label,
  value,
}: {
  label: string;
  value: string | undefined | null;
}) {
  return (
    <div className="flex flex-col space-y-1">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-base font-semibold">{value || "-"}</p>
      <hr className="h-px bg-gray-100 my-1" />
    </div>
  );
}
