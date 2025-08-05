import ResetPassword from "components/resetpassword";

export const dynamic = "force-dynamic";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ token?: string  }>;
}) {
  const params = await searchParams;
  const token = params?.token;

  return <ResetPassword token={token} />;
}
