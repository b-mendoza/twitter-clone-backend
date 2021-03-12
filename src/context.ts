import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Request = {
  get: (field: string) => string;
};

export type Context = {
  prisma: PrismaClient;
  req: Request;
};

export function createContext<T extends Record<string, unknown> = {}>(req: T) {
  return {
    ...req,
    prisma,
  };
}
