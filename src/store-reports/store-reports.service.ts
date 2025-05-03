import { Injectable, NotFoundException } from '@nestjs/common';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { PrinterService } from 'src/printer/printer.service';
import {  orderByIdReport } from 'src/reports';
import { PrismaService } from '../prisma/prisma.service';
import { products } from '../../prisma/generated/client/index';


@Injectable()
export class StoreReportsService {
    constructor(private readonly printerService:PrinterService,
                private readonly prismaService:PrismaService ){}
    async getStoreReportByOrderId(orderId: number) {
        
        const orderDB=await this.prismaService.orders.findUnique({
            where: { order_id: orderId },     
            include:{
                customers:true,
                order_details:{
                    include:{
                        products:true,
                    }
                },                
            }       
        })
        if (!orderDB) {
            throw new NotFoundException('Order not found');
        }        
        const docDefinition: TDocumentDefinitions = orderByIdReport({data:orderDB as any});
                const doc = this.printerService.createPdf(docDefinition, {});
                return doc;        
    }
}
