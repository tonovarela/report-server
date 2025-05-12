import { Controller, Res,Get } from '@nestjs/common';
import { ExtraReportsService } from './extra-reports.service';
import { Response } from 'express';

@Controller('extra-reports')
export class ExtraReportsController {
  constructor(private readonly extraReportsService: ExtraReportsService) {}

  @Get("html-report")
  async getHtmlReport(@Res() response:Response) {
    const pdfDoc = await this.extraReportsService.getHtmlReport();
    pdfDoc.info.Title = 'Hola-mundo.pdf';
    response.setHeader('Content-Type', 'application/pdf');    
    pdfDoc.pipe(response);
    pdfDoc.end();    
  }


  @Get("personalizado")
  async personalizado(@Res() response:Response) {
    const pdfDoc = await this.extraReportsService.personalizado();
    pdfDoc.info.Title = 'Personalizado.pdf';
    response.setHeader('Content-Type', 'application/pdf');    
    pdfDoc.pipe(response);
    pdfDoc.end();    
  }


}
