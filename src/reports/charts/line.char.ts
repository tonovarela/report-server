import * as Utils from 'src/helpers/chart-utils';

export const getLineChart = async(label:string="Movimientos de inventario") => {
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        datasets: [
          {
            label,
            data: Utils.numbers({count: 6, min: -100, max: 100}),
            borderColor: 'blue',
            backgroundColor: Utils.transparentize("blue", 0.5),
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
          }
        ]
      };

    const config = {
        type: 'line',
        data: data,        
      };

       return Utils.chartJsToImage(config,{ width: 500, height: 200 });    

}