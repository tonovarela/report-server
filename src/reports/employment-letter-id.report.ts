import type {  StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { headerSection } from "./sections/header.section";
import { DateFormatter } from "src/helpers";


interface ReportOptions {
    employerName: string;
    employerPosition: string;
    employeeName: string;
    employeePosition: string;
    employeeStartDate: string;
    empoyeeHours: string;
    employeeWorkSchedule: string;
    employerCompany: string;    
}

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



export const getEmploymentLetterReportById = (reportOptions:ReportOptions): TDocumentDefinitions => {
    const { employerName,employeePosition,employeeName,employerPosition,employeeStartDate,employeeWorkSchedule,empoyeeHours ,employerCompany} = reportOptions;

    const docDefinition: TDocumentDefinitions = {
        styles: style,
        pageMargins: [40, 60, 40, 60],
        header: headerSection({ title: '', showLogo: true, showDate: true }),
        content: [            
            {
                text: 'CONSTANCIA DE EMPLEO',
                style: 'header'
            },            
            {
                text: `Yo, ${employerName}, en mi calidad de ${employerPosition} de ${employerCompany},
por medio de la presente certifico que ${employeeName} ha sido empleado en nuestra
empresa desde el ${employeeStartDate}.\n\n
Durante su empleo, el Sr./Sra. ${employeeName} ha desempeñado el cargo de ${employeePosition}, demostrando responsabilidad, compromiso y habilidades profesionales en sus
labores.\n\n
La jornada laboral del Sr./ Sra. ${employeeName} es de ${empoyeeHours} horas
semanales, con un horario de ${employeeWorkSchedule}, cumpliendo con las políticas y
procedimientos establecidos por la empresa.\n\n
Esta constancia se expide a solicitud del interesado para los fines que considere conveniente.`,
                style: 'body'
            },
            { text: `Atentamente,`, style: 'signature' },
            { text: `${employerName}`, style: 'signature' },
            { text: `${employerPosition}`, style: 'signature' },
            { text: `Tucan Code`, style: 'signature' },
            { text: `${DateFormatter.formatDate(new Date())}`, style: 'signature' },
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