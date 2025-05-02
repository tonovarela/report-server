import { TDocumentDefinitions } from "pdfmake/interfaces";

export const getCountriesReport = ():TDocumentDefinitions=>{

    const docDefinition: TDocumentDefinitions = {
        content: [
            {
                text: 'Countries',
                style: 'header'
            },
            {
                table: {
                    body: [
                        ['Country', 'Capital'],
                        ['Mexico', 'Mexico City'],
                        ['USA', 'Washington D.C.'],
                        ['Canada', 'Ottawa'],
                    ]
                }
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            }
        }
    };
    return docDefinition

}