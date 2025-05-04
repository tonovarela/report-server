import { Controller, Get, Param,Res } from '@nestjs/common';
import { StoreReportsService } from './store-reports.service';
import { Response } from 'express';

@Controller('store-reports')
export class StoreReportsController {
  constructor(private readonly storeReportsService: StoreReportsService) {}

  @Get("order/:orderId")
  async getStoreReportByOrderId(@Param('orderId') orderId: string, 
  @Res() response:Response
) {      
    const pdfDoc=await this.storeReportsService.getStoreReportByOrderId(+orderId);    
    pdfDoc.info.Title = 'Report Store.pdf';
    response.setHeader('Content-Type', 'application/pdf');    
    pdfDoc.pipe(response);
    pdfDoc.end();     
  }

  @Get("svg/charts")
  async getSvgChart( @Res() response:Response) {      
    const pdfDoc =await this.storeReportsService.getSvgChart();    
    pdfDoc.info.Title = 'svg-chart.pdf';
    response.setHeader('Content-Type', 'application/pdf');    
    pdfDoc.pipe(response);
    pdfDoc.end();     
  }



  @Get("stadistics")
  async stadistics( @Res() response:Response) {      
    const pdfDoc =await this.storeReportsService.getStadistics();    
    pdfDoc.info.Title = 'Stadistics.pdf';
    response.setHeader('Content-Type', 'application/pdf');    
    pdfDoc.pipe(response);
    pdfDoc.end();     
  }
  
}
