import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/students')
  async getStudent() {
    return this.appService.getStudent();
  }

  @Post('/students')
  async createStudent(@Body() body) {
    const { name } = body;

    const prisma = new PrismaClient();

    return prisma.student.create({
      data: {
        name,
      },
    });
  }
}
