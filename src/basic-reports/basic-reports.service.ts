import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrinterService } from 'src/printer/printer.service';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getCountriesReport, getEmploymentLetterReport, getEmploymentLetterReportById, getHelloWorldReport } from 'src/reports';
import { format } from 'path';
import { DateFormatter } from 'src/helpers';





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
        const docDefinition: TDocumentDefinitions = getEmploymentLetterReportById({
            employerName: "Marco Antonio",
            employerPosition: "Gerente General",
            employeeName: employeeDB.name,
            employeePosition: employeeDB.position,
            employeeStartDate:DateFormatter.formatDate(employeeDB.start_date) ,
            empoyeeHours: employeeDB.hours_per_day.toString(),
            employeeWorkSchedule: employeeDB.work_schedule,
            employerCompany: "Tucan CODE S.A. de C.V.",

        });
        const doc = this.printerService.createPdf(docDefinition, {});
        return doc;
    }

    async countries() {
        const docDefinition = getCountriesReport();        
        const doc = this.printerService.createPdf(docDefinition);    
        return doc;
    }

}
