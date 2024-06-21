import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAllUsers = async () => {
  return prisma.people.findMany();
};
