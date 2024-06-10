'use server';

import { deleteUserById , updateUserRoleById } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteUser(userId: number) {
  // // // Uncomment this to enable deletion
  await deleteUserById(userId);
   revalidatePath('/');
}

export async function updateUser(userId: number ,role:string) {
  // // // Uncomment this to enable deletion
  await updateUserRoleById(userId , role);
   revalidatePath('/');
}
