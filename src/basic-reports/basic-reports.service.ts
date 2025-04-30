import { Injectable} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';



@Injectable()
export class BasicReportsService {    
    constructor(private prismaClient:PrismaService) {                    
    }

    async hello() {        
        const data = await this.prismaClient.employees.findMany({});        
        return data;
    }

}
