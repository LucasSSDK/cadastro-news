import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';



export const users: Prisma.UserCreateInput[] = [
  {
    nickname: 'Lucasss',
    name: 'Lucas Soares',
    password: 'Abcd@1234',
    image: '',
  },
];

export const user = async (prisma: PrismaClient) => {
  for (const obj of Object.values(users)) {
    await prisma.user.upsert({
      where: { nickname: obj.nickname },
      update: {},
      create: {
        ...obj,
        password: await bcrypt.hash(obj.password, 10),
      },
    });
  }
};