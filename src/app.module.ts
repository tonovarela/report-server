import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrinterModule } from './printer/printer.module';
import { StoreReportsModule } from './store-reports/store-reports.module';


@Module({
  imports: [    
    ConfigModule.forRoot({isGlobal: true}),
    PrismaModule,
    BasicReportsModule,
    PrinterModule,
    StoreReportsModule,    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
