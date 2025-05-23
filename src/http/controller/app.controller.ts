import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from '../../service/prisma/prisma.service';
import { CreateAlertBody } from '../dtos/create-alert-body';

@Controller('alert')
export class AlertsController {
  constructor(private readonly prisma: PrismaService) {}
  @Post()
  create(@Body() data: CreateAlertBody) {
    const { recipientId, content, category } = data;
  }
}
