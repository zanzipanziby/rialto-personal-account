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
import { Button } from "@/components/ui/button";
import { User } from "@/types/user";

export const UsersTable = ({ className, users }: Props) => {
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
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell className={"flex gap-x-3 items-center"}>
                <UserAvatar avatar={user.avatar} />
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
  users: User[];
};
