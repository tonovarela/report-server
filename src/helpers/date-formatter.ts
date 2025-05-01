export class DateFormatter {
    static readonly options :Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        
    };
    static formatDate(date: Date): string {        
        return date.toLocaleString('es-Es', this.options);
    }

}