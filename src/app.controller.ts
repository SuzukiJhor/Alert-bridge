import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateAlertBody } from './create-alert-body';

@Controller('alert')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.alert.findMany();
  }

  @Post()
  async create(@Body() data: CreateAlertBody) {
    const { recipientId, content, category } = data;
    await this.prisma.alert.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
