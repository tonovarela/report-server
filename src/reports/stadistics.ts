
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getDonutChart } from './charts/donut.chart';
import { headerSection } from './sections/header.section';
import { footerSection } from './sections/footer.section';
import { getLineChart } from './charts/line.char';

interface TopCountry {
    country: string;
    customers: number;
}
interface ReportOptions {
    topCountries: TopCountry[];
}


export const statisticsReport = async (option: ReportOptions): Promise<TDocumentDefinitions> => {
    const { topCountries } = option;

    const promiseDonutChart = getDonutChart({
        position: 'left',
        entries: topCountries.map((country) => ({
            label: country.country,
            value: country.customers,
        }))
    });
    const promiseLineChart = await getLineChart()

    const [donutChart,lineChart] =  await Promise.all([promiseDonutChart, promiseLineChart]);
    const docDefinition: TDocumentDefinitions = {
        header:headerSection({ title:'Estadisticas', subtitle:'Gráficos y estadísticas de la tienda', showLogo:true, showDate:true }),
        footer:footerSection(),
        pageMargins: [40, 80, 40, 60],
        content: [
            {
                columns: [
                    {
                        stack: [
                            {
                                text: 'Top 10 countries with most customers',   
                                alignment: 'center',                                  
                                bold: true,
                            },
                            {
                                image: donutChart,
                                width:250,     
                                alignment: 'center',                           
                            },
                        ]
                    },
                    {
                        width: 'auto',
                        layout: 'lightHorizontalLines',                        
                        table: {
                            headerRows: 1,
                            widths: [100, 'auto'],
                            body: [
                                [
                                    { text: 'Paises', style: 'header' },
                                    { text: 'Clientes', style: 'header' },
                                ],
                                ...topCountries.map((country) => [
                                    { text: country.country, },
                                    { text: country.customers.toString() },
                                ]),
                            ]
                        }
                    },                    
                ],                
                                                          
            },
            {
                image: lineChart,
                 width:500,
                 height:200,
                 alignment: 'center',
                

                
                //width: 300,
                //height:300,
                
            },
            
            
        ],
        styles: {
            header: {
                fontSize: 14,
                bold: true,
            },
        },
    };
    return docDefinition;

}




