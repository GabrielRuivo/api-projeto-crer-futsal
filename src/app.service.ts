import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  async getStudent() {
    const prisma = new PrismaClient();

    return prisma.student.findMany();
  }
}
