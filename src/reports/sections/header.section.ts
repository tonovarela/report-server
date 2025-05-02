
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

    const headerTitle: Content = title ? {
        stack:[ 
            {text: title, fontSize: 20, bold: true, margin: [0, 20, 0, 0], alignment: 'center'},
            {text: subtitle, fontSize: 13, alignment: 'center'},
            ],        
    } : null;    

    const headerLogo:Content = showLogo ? logo : null;

    const headerDate:Content = showDate ? 
    {
        text: DateFormatter.formatDate(new Date()),
        alignment: 'right',
        margin: [20, 30],
        width:150
    } : null;

    const headerContent: Content = {
        columns: [            
            headerLogo,
            headerTitle,
            headerDate            
        ]        
    };

    return headerContent;

}