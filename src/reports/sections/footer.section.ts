import { Content } from "pdfmake/interfaces";

export const footerSection = () => {
    return (currentPage:number,pageCount:number):Content=>{
        return {
            text: [
                { text: 'Page ', fontSize: 10 },
                { text: currentPage.toString(), fontSize: 10, bold: true },
                { text: ' of ', fontSize: 10 },
                { text: pageCount.toString(), fontSize: 10, bold: true }
            ],
            bold: true,
            alignment: 'center',
            
            color:'#000000',
            fontSize: 10,            
        }
    }    
}