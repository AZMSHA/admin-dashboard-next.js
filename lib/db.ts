import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, serial, varchar ,char } from 'drizzle-orm/pg-core';
import { eq, ilike, isNotNull , and } from 'drizzle-orm';

export const db = drizzle(
  neon(process.env.POSTGRES_URL!, {
    fetchOptions: {
      cache: 'no-store'
    }
  })
);

const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }),
  username: varchar('username', { length: 50 }),
  email: varchar('email', { length: 50 }),
  role: varchar('role', { length: 50 }),
  password: char('password', { length: 60 }),

});

export type SelectUser = typeof users.$inferSelect;

export async function getUsers(
  search: string,
  offset: number
): Promise<{
  users: SelectUser[];
  newOffset: number | null;
}> {
  // Always search the full table, not per page
  if (search) {
    return {
      users: await db
        .select()
        .from(users)
        .where(ilike(users.name, `%${search}%`))
        .limit(1000),
      newOffset: null
    };
  }

  if (offset === null) {
    return { users: [], newOffset: null };
  }

  const moreUsers = await db.select().from(users).limit(20).offset(offset);
  const newOffset = moreUsers.length >= 20 ? offset + 20 : null;
  return { users: moreUsers, newOffset };
}

export async function deleteUserById(id: number) {
  await db.delete(users).where(eq(users.id, id));
}

export async function updateUserRoleById(id: number, newRole: string) {
  await db.update(users).set({ role: newRole }).where(eq(users.id, id));
}

export async function getUserByEmailWithPassword(email: any): Promise<SelectUser | null> {
  const user = await db
    .select()
    .from(users)
    .where(and(eq(users.email, email), isNotNull(users.password)))

  // Check if user array is not empty
  if (user.length > 0) {
    return user[0]; // Return the first user
  } else {
    return null; // Return null if user not found
  }
}

export async function addUser(name: string, username: string, email: string, role: string, password: string | null) {
  const newUser = {
    name: name,
    username: username,
    email: email,
    role: role,
    password: password,
  };

  await db.insert(users).values(newUser);
}



