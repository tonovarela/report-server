import type {  StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { headerSection } from "./sections/header.section";


const style: StyleDictionary = {
    header: {
        fontSize: 20,
        bold: true,
        margin: [0, 50, 0, 40],
        alignment: 'center',
    },
    signature: {
        fontSize: 14,
        bold: true,

    },
    body: {
        alignment: 'justify',
        margin: [0, 0, 0, 80]
    }
};



export const getEmploymentLetterReport = (): TDocumentDefinitions => {

    const docDefinition: TDocumentDefinitions = {
        styles: style,
        pageMargins: [40, 60, 40, 60],
        header: headerSection({ title: 'CONSTANCIA DE EMPLEO', showLogo: true, showDate: true }),
        content: [            
            {
                text: 'CONSTANCIA DE EMPLEO',
                style: 'header'
            },            
            {
                text: `Yo, [Nombre del Empleador], en mi calidad de [Cargo del Empleador] de [Nombre de la Empresa],
por medio de la presente certifico que [Nombre del Empleado] ha sido empleado en nuestra
empresa desde el [Fecha de Inicio del Empleado].\n\n
Durante su empleo, el Sr./Sra. [Nombre del Empleado] ha desempeñado el cargo de [Cargo del
Empleado], demostrando responsabilidad, compromiso y habilidades profesionales en sus
labores.\n\n
La jornada laboral del Sr./ Sra. [Nombre del Empleado] es de [Número de Horas] horas
semanales, con un horario de [Horario de Trabajo], cumpliendo con las políticas y
procedimientos establecidos por la empresa.\n\n
Esta constancia se expide a solicitud del interesado para los fines que considere conveniente.`,
                style: 'body'
            },
            { text: `Atentamente,`, style: 'signature' },
            { text: `[Nombre del Empleador]`, style: 'signature' },
            { text: `[Cargo del Empleador]`, style: 'signature' },
            { text: `[Nombre de la Empresa]`, style: 'signature' },
            { text: `[Fecha de Emisión]`, style: 'signature' },
        ],
        footer: {
            columns: [{
                text: `Este documento es una constancia de empleo y no representa un compromiso laboral.`,
                margin: [20, 20, 20, 20],
                alignment: 'center',
                italics: true,
                fontSize: 10,
                color: 'gray',
            }]
        }
    }
    return docDefinition;
}
