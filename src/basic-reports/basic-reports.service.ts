import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrinterService } from 'src/printer/printer.service';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getCountriesReport, getEmploymentLetterReport, getEmploymentLetterReportById, getHelloWorldReport } from 'src/reports';

import { DateFormatter } from 'src/helpers';







@Injectable()
export class BasicReportsService {

    constructor(private readonly prismaService: PrismaService, private readonly printerService: PrinterService) { }

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
        const employeeDB= await this.prismaService.employees.findFirst({
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
        const countries = await this.prismaService.countries.findMany({
            where:{
                local_name:{
                    not: null
                }
            }
        });
        if (!countries) {
            throw new NotFoundException('Countries not found');
        }
        //console.log(countries);
        const docDefinition = getCountriesReport({title:'Countries Report', countries});        
        const doc = this.printerService.createPdf(docDefinition);    
        return doc;
    }

}
