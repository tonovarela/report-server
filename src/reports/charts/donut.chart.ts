
import * as Utils from 'src/helpers/chart-utils'

interface DonutEntry {    
    label: string;
    value: number;
}
interface DonutOptions {    
    entries: DonutEntry[];
    position?: 'left' | 'right' | 'top' | 'bottom';
}

export const getDonutChart = async (options: DonutOptions): Promise<string> => {    
     
    const { entries,position } = options;
    const data = {
        labels: entries.map((e) => e.label),
        datasets: [
            {
                label: 'Dataset 1',
                data: entries.map((e) => e.value),               
                backgroundColor: Object.values(Utils.CHART_COLORS),
            },            
        ]        
    };
    const config ={
        type: 'doughnut',
        data: data,
        options: {
            legend:{
                position: position || 'top',
            },            
            responsive: true,
            plugins: {                
                datalabels: {
                    color: '#fff',                                      
                    font: {
                        weight: 'bold',                        
                        size:11
                    }
                },
            }
        }
    };
    return Utils.chartJsToImage(config,{ width: 400, height: 400 });    
}
