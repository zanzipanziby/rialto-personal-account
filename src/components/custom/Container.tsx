import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const Container = ({ children, className }: Props) => {
  const classNames = cn("mt-6", className);
  return <div className={classNames}>{children}</div>;
};

type Props = {
  className?: string;
} & PropsWithChildren;
