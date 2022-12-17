import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create() {
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        recipientId: randomUUID(),
        content: 'Você está sendo notificado!',
        category: 'social',
      },
    });
  }
}
