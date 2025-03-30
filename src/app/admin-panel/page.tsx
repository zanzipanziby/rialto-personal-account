import React from "react";
import { Typography } from "@/components/custom/Typography";
import { UsersTable } from "@/components/custom/UsersTable";
import { API_URL } from "@/lib/constants";
import { User } from "@/types/user";

export default async function AdminPanel() {
  const data = await fetch(`${API_URL}/users`);
  const users: User[] = await data.json();
  return (
    <>
      <Typography variant="h1" as="h1" className="text-center">
        Панель администратора
      </Typography>
      <UsersTable className={"mt-12"} users={users} />
    </>
  );
}
