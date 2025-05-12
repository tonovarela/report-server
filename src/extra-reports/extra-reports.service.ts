
import fs from 'fs';
import { Injectable } from '@nestjs/common';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { PrinterService } from 'src/printer/printer.service';
import {  footerSection, getComunityReport, headerSection } from 'src/reports';
import { getHtmlContent } from 'src/helpers';


@Injectable()
export class ExtraReportsService {
    

    
    constructor(private printerService:PrinterService){}

    getHtmlReport() {
        const htmlReport = fs .readFileSync('src/reports/html/basic2.html', 'utf8');       
        const content = getHtmlContent(htmlReport ,{
            title:"varela",
            client:"tucan code",

        });    
        
        const docDefinition: TDocumentDefinitions = {                    
        pageSize: 'A4',
        pageMargins: [40, 110, 40, 60],
        footer:footerSection(),
        header: headerSection({ title: 'HTML to converted', subtitle:"Convetir HTML a PdfMake" ,showDate:true,showLogo:true}),       
        content:[ content],
       }
       const doc = this.printerService.createPdf(docDefinition);
       return doc;       
    }

    personalizado() {   
        const docDefinition = getComunityReport();  
       const doc = this.printerService.createPdf(docDefinition);
       return doc;       
    }

}
