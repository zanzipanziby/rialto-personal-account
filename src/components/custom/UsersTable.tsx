import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserAvatar } from "../custom/UserAvatar";
import { Typography } from "@/components/custom/Typography";
import DefaultAvatar from "@/assets/DefaultAvatar.jpg";
import { Button } from "@/components/ui/button";

export const UsersTable = ({ className }: Props) => {
  const users = [
    {
      avatar: DefaultAvatar,
      name: "John Doe",
      email: "john_doe@email.com",
    },
    {
      avatar: DefaultAvatar,
      name: "Elizabet Doe",
      email: "elizabet_doe@email.com",
    },
    {
      avatar: DefaultAvatar,
      name: "Kevin Doe",
      email: "kevin_doe@email.com",
    },
  ];
  return (
    <Table className={className}>
      <TableCaption>
        <Typography>Таблица клиентов</Typography>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="max-w-3">№</TableHead>
          <TableHead>{"имя пользователя".toUpperCase()}</TableHead>
          <TableHead colSpan={2}>{"email".toUpperCase()}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, i) => {
          return (
            <TableRow key={user.email}>
              <TableCell>{i + 1}</TableCell>
              <TableCell className={"flex gap-x-3 items-center"}>
                <UserAvatar avatar={user.avatar.src} />
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <div className="flex gap-x-3 justify-end">
                  <Button size="sm">Редактировать</Button>
                  <Button size="sm" variant="destructive">
                    Удалить
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

type Props = {
  className?: string;
};
