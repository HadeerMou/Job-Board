"use client";

import { ReactNode } from "react";
import { useProfile } from "@/lib/hooks/useProfile";
import { useRouter } from "next/navigation";

export default function RequireRole({
  role,
  children,
}: {
  role: "admin" | "jobseeker";
  children: ReactNode;
}) {
  const { data, isLoading } = useProfile();
  const router = useRouter();

  if (isLoading) return <p>Loading...</p>;

  if (!data || data.role !== role) {
    router.push("/login");
    return null;
  }

  return <>{children}</>;
}
