"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DefaultAvatar from "@/assets/DefaultAvatar.jpg";

export function UserAvatar({
  avatar,
  userFirstName = "A",
  userLastName = "V",
  className,
}: Props) {
  const avatarFallback: string = (
    userFirstName.charAt(0) + userLastName.charAt(0)
  ).toUpperCase();
  return (
    <Avatar className={className}>
      <AvatarImage src={avatar || DefaultAvatar.src} />
      <AvatarFallback>{avatarFallback}</AvatarFallback>
    </Avatar>
  );
}

type Props = {
  avatar?: string;
  userFirstName?: string;
  userLastName?: string;
  className?: string;
};
