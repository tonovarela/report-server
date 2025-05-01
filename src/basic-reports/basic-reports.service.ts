import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrinterService } from 'src/printer/printer.service';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getEmploymentLetterReport, getHelloWorldReport } from 'src/reports';





@Injectable()
export class BasicReportsService {

    constructor(private readonly prismaClient: PrismaService, private readonly printerService: PrinterService) { }

    async hello() {
        const docDefinition: TDocumentDefinitions = getHelloWorldReport({name:'Marco Antonio'});
        const doc = this.printerService.createPdf(docDefinition, {});
        return doc;
    }

    async employmentLetter() {
        const docDefinition: TDocumentDefinitions = getEmploymentLetterReport();
        const doc = this.printerService.createPdf(docDefinition, {});
        return doc;
    }

    async employmentLetterById(employmentId: number) {
        const employeeDB= await this.prismaClient.employees.findFirst({
            where: { id: employmentId },
        });
        
        if (!employeeDB) {
            throw new NotFoundException('Employee not found');            
        }
        console.log(employeeDB);


        const docDefinition: TDocumentDefinitions = getEmploymentLetterReport();
        const doc = this.printerService.createPdf(docDefinition, {});
        return doc;
    }

}
