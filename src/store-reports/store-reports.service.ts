import { Injectable, NotFoundException } from '@nestjs/common';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { PrinterService } from 'src/printer/printer.service';
import { getBasicSvgReport, orderByIdReport, statisticsReport } from 'src/reports';
import { PrismaService } from '../prisma/prisma.service';



@Injectable()
export class StoreReportsService {
    constructor(private readonly printerService: PrinterService,
        private readonly prismaService: PrismaService) { }
    async getStoreReportByOrderId(orderId: number) {

        const orderDB = await this.prismaService.orders.findUnique({
            where: { order_id: orderId },
            include: {
                customers: true,
                order_details: {
                    include: {
                        products: true,
                    }
                },
            }
        })
        if (!orderDB) {
            throw new NotFoundException('Order not found');
        }
        const docDefinition: TDocumentDefinitions = orderByIdReport({ data: orderDB as any });
        const doc = this.printerService.createPdf(docDefinition, {});
        return doc;
    }

    async getSvgChart() {
        const docDefinition = await getBasicSvgReport();
        const doc = this.printerService.createPdf(docDefinition, {});
        return doc;
    }


    async getStadistics() {
        const topCountries = await this.prismaService.customers.groupBy({
            by: ['country'],
            _count: true,
            orderBy: {
                _count: { country: 'desc', },
            },
            take: 10,            
        });
        const topCountriesData = topCountries.map(({country,_count}) => ({country: country,customers: _count}));        
         const docDefinition = await statisticsReport({ topCountries: topCountriesData });
        const doc = this.printerService.createPdf(docDefinition, {});
        return doc;
    }


}
