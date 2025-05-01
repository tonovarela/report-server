import { Module } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { BasicReportsController } from './basic-reports.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrinterModule } from 'src/printer/printer.module';

@Module({
  controllers: [BasicReportsController],
  providers: [BasicReportsService],
  imports:[PrismaModule,PrinterModule]
})
export class BasicReportsModule { }
