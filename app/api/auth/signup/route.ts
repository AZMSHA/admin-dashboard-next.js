import { NextResponse } from "next/server";
import { addUser } from "@/lib/db";
import { hash } from "bcrypt";

export async function POST(request: Request) {
  try {
      const { email, password } = await request.json();
      const hashedPassword = await hash(password, 10);
      await addUser("New Guy","newGuy",email,"User",hashedPassword)
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}