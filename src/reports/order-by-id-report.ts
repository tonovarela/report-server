import { Content, StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { DateFormatter } from "src/helpers";
import { footerSection } from "./sections/footer.section";
import { CurrencyFormatter } from '../helpers/currency-formatter';


interface OrderByIdReportProps {
    data: CompleteOrder;    
}


export interface CompleteOrder {
    order_id:      number;
    customer_id:   number;
    order_date:    Date;
    customers:     Customers;
    order_details: OrderDetail[];
}

export interface Customers {
    customer_id:   number;
    customer_name: string;
    contact_name:  string;
    address:       string;
    city:          string;
    postal_code:   string;
    country:       string;
}

export interface OrderDetail {
    order_detail_id: number;
    order_id:        number;
    product_id:      number;
    quantity:        number;
    products:        Products;
}

export interface Products {
    product_id:   number;
    product_name: string;
    category_id:  number;
    unit:         string;
    price:        string;
}


const logo: Content = {
    image: 'src/assets/tucan-banner.png',
    width: 100,
    height: 30,
    margin:[10,30]        
}

const styles: StyleDictionary ={
    header: {
        fontSize:20,
        bold:true,
        margin: [0, 30, 0, 0],
    },
    subHeader:{
        fontSize: 15,
        bold: true,
        margin: [0, 20, 0, 0],
    }

}

export const orderByIdReport = (dataOrder:OrderByIdReportProps):TDocumentDefinitions=> {

    const {data} = dataOrder;

    const total = data.order_details.reduce((acc, item) => {
        const price = Number(item.products.price);
        const quantity = Number(item.quantity);
        return acc + (price * quantity);
    }, 0);
    const iva = total * 0.16;
    const totalWithIva = total + iva;
    const totalWithIvaFormatted = CurrencyFormatter.formatCurrency(totalWithIva);

    

    return {
        styles: styles,
        header: logo,
        pageMargins: [40, 60, 40, 60],
        content: [
            {
                text:"Tucan Code",
                style: 'header',
            },
            {
                columns:[
                    {
                        text: 'Direction: Av. 9 de Julio 1234 - Estado de Mexico - México',                                             
                    },
                    {
                        text: [
                                {text:'Recibo No 123456789\n', bold:true},
                               `Fecha de recibo: ${ DateFormatter.formatDate(new Date())} \nPagar antes de: ${ DateFormatter.formatDate(new Date())} \n\n`],                     
                        alignment: 'right',
                    },                    
                ]
            },{
                qr: 'https://tucancode.com',
                fit: 100,
                margin: [0, 20, 0, 0],
                alignment: 'right',
            },
            {
                text: [
                    {text:'Cobrar a:\n', 
                        bold:true,
                        style: 'subHeader',
                    },
                    `                    
                    Razón social: ${data.customers.customer_name} 
                    RFC: ${data.customers.customer_id} 
                    Calle: ${data.customers.address} 
                    Colonia: ${data.customers.city}
                    Código postal: ${data.customers.postal_code}
                    País: ${data.customers.country}
                    
                    `,                    
                ]         
            },
            {
                layout:'headerLineOnly',
                margin:[0,20],
                table:{                                       
                    widths: [100 ,'*', 'auto', 'auto','auto'],
                    body:[
                        [
                            {text:'ID',bold:true},
                            {text:'Descripción', bold:true},
                            {text:'Cantidad', bold:true},
                            {text:'Precio Unitario', bold:true},
                            {text:'Total', bold:true},
                        ],
                        ...data.order_details.map((item) => {
                            return [
                                {text:item.products.product_id},
                                {text:item.products.product_name},
                                {text:item.quantity},
                                {text:CurrencyFormatter.formatCurrency(Number(item.products.price))},
                                {text:CurrencyFormatter.formatCurrency(Number(item.products.price) * item.quantity)},
                            ]
                        }),                                                             
                    ]
                }

            },
            {
                layout:'noBorders',
                margin:[0,20],
                table:{
                    widths: ['*','auto'],
                    body:[
                        [
                            {text:'Total', bold:true},
                            {text:CurrencyFormatter.formatCurrency(total),alignment:'right'},
                        ],
                        [
                            {text:'IVA', bold:true},
                            {text:CurrencyFormatter.formatCurrency(iva),alignment:'right'},
                        ],
                        [
                            {text:'Total a pagar', bold:true},
                            {text:totalWithIvaFormatted,alignment:'right'},
                        ],
                    ]
                }

            }
            

            
        
        
        ]        ,
        footer:footerSection(),
    };
    
}