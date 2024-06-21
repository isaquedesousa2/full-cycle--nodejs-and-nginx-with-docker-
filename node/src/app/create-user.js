import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (name) => {
  const newUser = await prisma.people.create({ data: { name: name } });

  return newUser;
};
