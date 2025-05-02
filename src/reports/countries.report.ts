import { TDocumentDefinitions } from "pdfmake/interfaces";
import { headerSection } from "./sections/header.section";
import { countries  as Country} from "@prisma/client";
import { footerSection } from "./sections/footer.section";

interface ReportOptions {
    title?:string;
    subTitle?:string;
    countries?:Country[]
}

export const getCountriesReport = (options:ReportOptions):TDocumentDefinitions=>{
    const { title ,subTitle,countries} = options;
    const docDefinition: TDocumentDefinitions = {
        pageOrientation: 'landscape',
        header:headerSection({
            title: title ?? 'Countries Report',
            subtitle: subTitle ?? 'List of countries',            
            showLogo:true,
            showDate:true
        }),
        footer:footerSection(),
        pageMargins: [ 40, 110, 40, 50 ],
        content: [
            {
                layout: 'customLayout01', // optional
                table: {                  
                  headerRows: 1,
                  widths: [ 50, 50, 50, "*","auto","*" ],          
                  body: [
                    [ 'ID', 'ISO2', 'ISO3', 'Name','Continent','Local Name' ],                    
                    ...countries.map((country) => {
                        return [
                            { text: country.id.toString(), alignment: 'center' },
                            { text: country.iso2, alignment: 'center' },
                            { text: country.iso3, alignment: 'center' },
                            { text: country.name, alignment: 'left' ,bold:true},
                            { text: country.continent, alignment: 'left' },
                            { text: country.local_name, alignment: 'left' }
                        ]                         
                    },
                                        
                    ),                    
                    [ '', '', '', '','Total',{text:`${countries.length} paises`,bold:true} ],                    
                  ]
                }
            } ,
        {
            text:"Totales",
            style:{
                fontSize:18,
                bold:true,
                margin:[0,40,0,0]
            }
        },{
            layout: 'customLayout01', // optional
            table: {                  
              headerRows: 1,              
                widths: [ 50, 50,70, "*",'auto',"*" ],              
              body: [
                [  
                    {colSpan:2,text:'Total de paises',bold:true},
                    {},
                    {text:`${countries.length} paises`,bold:true},
                    {},                                                           
                   {},
                   {}
                
                 ],                    

              ] 
        }
    }      
        
        ],
        
    };
    return docDefinition

}