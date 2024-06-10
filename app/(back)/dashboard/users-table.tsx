'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { SelectUser } from '@/lib/db';
import { deleteUser, updateUser } from './actions';
import { useRouter } from 'next/navigation';

export function UsersTable({
  users,
  offset
}: {
  users: SelectUser[];
  offset: number | null;
}) {
  const router = useRouter();

  function onClick() {
    router.replace(`/?offset=${offset}`);
  }

  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Username</TableHead>
              <TableHead className="hidden md:table-cell">Role</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </form>
      {offset !== null && (
        <Button
          className="mt-4 w-40"
          variant="secondary"
          onClick={() => onClick()}
        >
          Next Page
        </Button>
      )}
    </>
  );
}

function UserRow({ user }: { user: SelectUser }) {
  const userId = user.id;
  const userRole = user.role;
  const deleteUserWithId = deleteUser.bind(null, userId);
  const updateUserWithId = () => {
    console.log(user.name, userRole, userId);
    let newRole: string;
    if (userRole === 'User') {
      newRole = 'Admin';
    } else {
      newRole = 'User';
    }

    return () => {
      updateUser(userId, newRole);
    };
  };
  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell className="hidden md:table-cell">{user.email}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell className="flex justify-end gap-2">
        <Button
          className=""
          size="sm"
          variant="outline"
          formAction={deleteUserWithId}
        >
          Delete
        </Button>
        <Button
          className=""
          size="sm"
          variant="outline"
          formAction={updateUserWithId()}
        >
          Update Role
        </Button>
      </TableCell>
    </TableRow>
  );
}
