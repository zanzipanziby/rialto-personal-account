import { PropsWithChildren } from "react";
import { Container } from "@/components/custom/Container";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Container className={"max-w-screen-xl mx-auto px-10"}>
      {children}
    </Container>
  );
}
