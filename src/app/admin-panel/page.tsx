import React from "react";
import { Container } from "@/components/custom/Container";
import { Typography } from "@/components/custom/Typography";

export default function AdminPanel() {
  return (
    <Container className={"max-w-screen-xl mx-auto px-10"}>
      <Typography variant={"h1"} as={"h1"} className={"text-center"}>
        Панель администратора
      </Typography>
    </Container>
  );
}
