
import { Content } from "pdfmake/interfaces";
import { DateFormatter } from "src/helpers";


export  interface HeaderOptions {
    title?:string;
    subtitle?:string;
    showLogo?:boolean;  
    showDate?:boolean;

}

const logo: Content = {
    image: 'src/assets/tucan-code-logo.png',
    width: 100,
    height: 100,
    alignment: 'center',
    margin: [0, 0, 0, 20]
};

export const headerSection =(options:HeaderOptions):Content=>{
    
    const { title, subtitle, showLogo, showDate } = options;
    const headerTitle:Content = title ? {
        text: title,
        style:{
            bold: true,            
            
        }
    } : null;

    // const headerSubtitle:Content = subtitle ? {
    //     text: subtitle,
    //     style: 'header',
    //     alignment: 'center',
    // } : null;

    const headerLogo:Content = showLogo ? logo : null;
    const headerDate:Content = showDate ? {
        text: DateFormatter.formatDate(new Date()),
        alignment: 'right',
        margin: [20, 20],
    } : null;

    const headerContent: Content = {
        columns: [            
            headerLogo,
            //headerTitle,
            headerDate            
        ],
        
    }

    return headerContent;

}