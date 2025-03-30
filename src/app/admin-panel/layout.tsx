import { PropsWithChildren } from "react";
import { Container } from "@/components/custom/Container";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className={"container max-w-screen-xl mx-auto px-4 py-3"}>
      <Container>{children}</Container>
    </main>
  );
}
