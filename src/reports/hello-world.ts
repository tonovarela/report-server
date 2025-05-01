interface ReportOptions {
    name:string

}

export const getHelloWorldReport = ({name}:ReportOptions) => {    
    return {
        content: `Hola ${name}`,
        defaultStyle: { font: 'Roboto' }
    };

}  