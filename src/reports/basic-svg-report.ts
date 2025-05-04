import fs from 'fs';
import { TDocumentDefinitions } from "pdfmake/interfaces";

let svgContent = fs.readFileSync('src/assets/ford.svg', 'utf8');

import * as Utils from '../helpers/chart-utils';

const generateChartImage = async () => {
  const chartConfig = {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 2,
          fill: false,
          data: [-33, 26, 29, 89, -41, 70, -84],
        },
        {
          label: 'Dataset 2',
          backgroundColor: 'rgb(255, 99, 132)',
          data: [-42, 73, -69, -94, -81, 18, 87],
          borderColor: 'white',
          borderWidth: 2,
        },
        {
          label: 'Dataset 3',
          backgroundColor: 'rgb(75, 192, 192)',
          data: [93, 60, -15, 77, -59, 82, -44],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'My chart',
      },
    },
  }
  return Utils.chartJsToImage(chartConfig, { height: 300, width: 400 });
}

const generateDonutChartImage = async () => {
  const data = {
    labels: ['Red','Blue','Yellow'],
    datasets: [{      
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(252, 99, 255)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  const config = {    
    type: 'doughnut',
    data: data,
    options:{
      title:{
        display: true,
        text: 'My chart',
      },          
    }
  };
  return Utils.chartJsToImage(config, { height: 300, width: 400 });
}

export const getBasicSvgReport = async (): Promise<TDocumentDefinitions> => {
  const [chart,chartDonut] = await Promise.all([generateChartImage(),generateDonutChartImage()]);  
  const docDefinition: TDocumentDefinitions = {
    content: [
      {
        svg: svgContent,
        width: 100,
        fit: [100, 100]

      }, {
        image: chart,
        width: 400
      },
      {
        image: chartDonut,
        width: 400
      }
    ],
  };
  return docDefinition;
}
