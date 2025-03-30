import React from "react";
import { Typography } from "@/components/custom/Typography";
import { UsersTable } from "@/components/custom/UsersTable";

export default function AdminPanel() {
  return (
    <>
      <Typography variant="h1" as="h1" className="text-center">
        Панель администратора
      </Typography>
      <UsersTable />
    </>
  );
}
