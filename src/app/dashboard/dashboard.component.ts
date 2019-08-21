import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label, Color } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
  }

  public chartData = [];

  public iterations = 30;

  private lineChartOptions: any = {
    legend: {
      labels: {
        fontColor: '#ffffff'
      }
    }
  };

  public makeDataObject() {

    this.chartData = [
      {
        title: 'LINE CHART',
        datasets: [
          { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
          { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
          { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
        ],
        chartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        chartOptions: {
          responsive: true,
          scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{}],
            yAxes: [
              {
                id: 'y-axis-0',
                position: 'left',
              },
              {
                id: 'y-axis-1',
                position: 'right',
                gridLines: {
                  color: 'rgba(255,0,0,0.3)',
                },
                ticks: {
                  fontColor: 'red',
                }
              }
            ]
          },
          annotation: {
            annotations: [
              {
                type: 'line',
                mode: 'vertical',
                scaleID: 'x-axis-0',
                value: 'March',
                borderColor: 'orange',
                borderWidth: 2,
                label: {
                  enabled: true,
                  fontColor: 'orange',
                  content: 'LineAnno'
                }
              },
            ],
          },
          legend: {
            labels: {
              fontColor: 'white'
            }
          }
        },
        chartColors: [
          { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
          },
          { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
          },
          { // red
            backgroundColor: 'rgba(255,0,0,0.3)',
            borderColor: 'red',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
          }
        ],
        chartType: 'line',
        chartLegend: true
      },
      {
        title: 'BAR CHART',
        chartLabels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        chartType: 'bar',
        chartLegend: true,
        chartOptions: {
          legend: {
            labels: {
              fontColor: '#ffffff'
            }
          }
        },
        datasets: [
          { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
          { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ]

      },
      {
        title: 'DOUGHNUT CHART',
        chartLabels: ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'],
        chartOptions: {
          legend: {
            labels: {
              fontColor: '#ffffff'
            }
          }
        },
        data: [
          [350, 450, 100],
          [50, 150, 120],
          [250, 130, 70],
          [127, 33, 54]
        ],
        chartType: 'doughnut'
      },
      {
        title: 'RADAR CHART',
        chartLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
        chartOptions: {
          legend: {
            labels: {
              fontColor: '#ffffff'
            }
          }
        },
        data: [
          { data: [120, 130, 180, 70], label: '2017' },
          { data: [90, 150, 200, 45], label: '2018' }
        ],
        chartType: 'radar'

      },
      {
        title: 'POLAR CHART',
        chartLabels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
        data: [300, 400, 100, 40, 180],
        chartLegend: true,
        chartOptions: {
          legend: {
            labels: {
              fontColor: '#ffffff'
            }
          }
        },
        chartType: 'polarArea'
      },
      {
        title: 'PIE CHART',
        chartLabels: ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'],
        data: [120, 150, 180, 90],
        chartType: 'pie',chartOptions: {
          legend: {
            labels: {
              fontColor: '#ffffff'
            }
          }
        },
      },
    ];


  }



  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
      backgroundColor: 'green',
      borderColor: 'blue',
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'red',
    },
  ];

  public bubbleChartColors: Color[] = [
    {
      backgroundColor: [
        'red',
        'green',
        'blue',
        'purple',
        'yellow',
        'brown',
        'magenta',
        'cyan',
        'orange',
        'pink'
      ]
    }
  ];

  public scatterChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  public scatterChartOptions: ChartOptions = {
    responsive: true,

  };


  ngOnInit() {
    const isNumber = isNaN(this.route.snapshot.queryParams.id);
    console.log('These are the params', typeof isNumber);
    if (this.route.snapshot.queryParams.id && isNumber === false) {
      this.iterations = this.route.snapshot.queryParams.id;
    }
    this.makeDataObject();

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
