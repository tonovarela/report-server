import { Controller, Get, Param, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get()
  async hello(@Res() response:Response){
    const pdfDoc = await this.basicReportsService.hello();
    pdfDoc.info.Title = 'Hola-mundo.pdf';
    response.setHeader('Content-Type', 'application/pdf');    
    pdfDoc.pipe(response);
    pdfDoc.end();     
  }


  @Get("employment-letter")
  async employmentLetter(@Res() response:Response){
    const pdfDoc = await this.basicReportsService.employmentLetter();
    pdfDoc.info.Title = 'Employment-Letter.pdf';
    response.setHeader('Content-Type', 'application/pdf');    
    pdfDoc.pipe(response);
    pdfDoc.end();     
  }


  @Get("employment-letter/:employmentId")
  async employmentLetterById(@Res() response:Response,
                             @Param("employmentId") employmentId:string){
    const pdfDoc = await this.basicReportsService.employmentLetterById(+employmentId);
    pdfDoc.info.Title = 'Employment-Letter.pdf';
    response.setHeader('Content-Type', 'application/pdf');    
    pdfDoc.pipe(response);
    pdfDoc.end();     
  }

  @Get("countries")
  async countries(@Res() response:Response){
    const pdfDoc = await this.basicReportsService.countries();
    pdfDoc.info.Title = 'Countries.pdf';
    response.setHeader('Content-Type', 'application/pdf');    
    pdfDoc.pipe(response);
    pdfDoc.end();     
  }

}
