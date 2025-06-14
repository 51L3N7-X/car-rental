import { getServerSession } from "next-auth";

// import SessionProvider from "@/components/SessionProvider";
import { redirect } from "next/navigation";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/login");
  }

  return <div className="container mx-auto p-4">{children}</div>;
}
