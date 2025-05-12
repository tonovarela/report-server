import { Module } from '@nestjs/common';
import { ExtraReportsService } from './extra-reports.service';
import { ExtraReportsController } from './extra-reports.controller';
import { PrinterModule } from 'src/printer/printer.module';

@Module({
  controllers: [ExtraReportsController],
  imports: [PrinterModule ],
  providers: [    
    ExtraReportsService],
})
export class ExtraReportsModule {}
