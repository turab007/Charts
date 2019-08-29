import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { ActivatedRoute, Router } from '@angular/router';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
// import * as am4core from '@amcharts/amcharts4/core';
// import * as am4charts from '@amcharts/amcharts4/charts';
// import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(public route: ActivatedRoute, private AmCharts: AmChartsService, public router: Router) {
    // this.progress(0);
  }

  public chartData = [];
  private chart: AmChart;
  public iterations = 989;

  counter$: Observable<number>;
  routingCounter$: Observable<number>;
  count = 6;
  count2 = 6;

  public dashboardTopCards = [
    {
      name: 'Besucher',
      value: '2,358',
      percent: '33.51'
    },
    {
      name: 'Bestellungen',
      value: '398',
      percent: '68.10'
    },
    {
      name: 'CPO',
      value: '63.25€',
      percent: '20.87'
    },
    {
      name: 'Conversion',
      value: '6301',
      percent: '40.36'
    }
  ];

  private lineChartOptions: any = {
    legend: {
      labels: {
        fontColor: '#ffffff'
      }
    }
  };

  value = 75;
  radius = 54;
  circumference = 2 * Math.PI * this.radius;
  dashoffset: number;


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

  redirect() {
    this.routingCounter$ = timer(0, 1000).pipe(
      take(this.count2),
      map(() => {
        --this.count2;
        if (this.count2 === 0) {
          this.router.navigate(['home']);
        }
        return this.count2;
      })
    );

  }


  ngOnInit() {
    const notNumber = isNaN(this.route.snapshot.queryParams.id);
    console.log('These are the params', typeof notNumber);
    if (this.route.snapshot.queryParams.id && notNumber === false) {
      this.iterations = this.route.snapshot.queryParams.id;
    }
    this.makeDataObject();

    this.counter$ = timer(0, 1000).pipe(
      take(this.count),
      map(() => {
        --this.count;
        if (this.count === 0) {
          this.iterations = 989;
          this.redirect();
        }
        return this.count;
      })
    );

  }

  // ngAfterViewInit() {
  //   this.chart = this.AmCharts.makeChart("chartdiv", {
  //     "type": "serial",
  //     "theme": "light",
  //     "dataProvider": []
  //   });
  // }

  public makeDataObject() {

    this.chartData = [
      {
        title: 'Visitors and Bestellungen pro Monat',
        datasets: [
          { data: [32456, 34522, 23443, 25623, 54632, 63461, 6653, 23445], label: 'Visitors' },
          { data: [9435, 3455, 234, 236, 3242, 787, 67, 5675], label: 'Bestellungen' },
          // { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
        ],
        chartLabels: ['Januar', 'Febuar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August'],
        chartOptions: {
          responsive: true,
          scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{
              ticks: {
                fontColor: 'white',
                fontSize: 20
              }
            }],
            yAxes: [
              {
                id: 'y-axis-0',
                position: 'left',
                ticks: {
                  fontColor: 'white',
                  fontSize: 20
                }
              },

              // {
              //   id: 'y-axis-1',
              //   position: 'right',
              //   gridLines: {
              //     color: 'rgba(255,0,0,0.3)',
              //   },
              //   ticks: {
              //     fontColor: 'red',
              //   }
              // }
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
        title: 'Bestellunfen je Kanal pro Monat',
        chartLabels: ['Januar', 'Febuar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August'],
        chartType: 'bar',
        chartLegend: true,
        chartOptions: {
          scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{
              ticks: {
                fontColor: 'white',
                fontSize: 20
              }
            }],
            yAxes: [
              {
                id: 'y-axis-0',
                position: 'left',
                ticks: {
                  fontColor: 'white',
                  fontSize: 20
                }
              },
            ],

          },
          legend: {
            labels: {
              fontColor: '#ffffff'
            }
          }
        },
        datasets: [
          { data: [367965.00, 134745.00, 5475.60, 7363.20, 101150.40, 18415.80, 2351.70, 53118.00], label: 'Facebook', stack: 'a' },
          { data: [183982.50, 67372.50, 5475.60, 9204.00, 25287.60, 613860.00, 1567.80, 190339.50], label: 'Instagram', stack: 'a' },
          { data: [183982.50, 67372.50, 5475.60, 1840.80, 126438.00, 14118.78, 52.26, 141648.00], label: 'Twitter', stack: 'a' }
        ]

      },
      {
        title: 'Umsatz pro Monat',
        datasets: [
          { data: [735930.00, 269490.00, 18252.00, 18408.00, 252876.00, 61386.00, 5226.00, 442650.00], label: 'Umsatz' },
        ],
        chartLabels: ['Januar', 'Febuar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August'],
        chartOptions: {
          responsive: true,
          scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{
              ticks: {
                fontColor: 'white',
                fontSize: 20
              }
            }],
            yAxes: [
              {
                id: 'y-axis-0',
                position: 'left',
                ticks: {
                  fontColor: 'white',
                  fontSize: 20
                }
              },
            ],

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
      // {
      //   title: 'DOUGHNUT CHART',
      //   chartLabels: ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'],
      //   chartOptions: {
      //     legend: {
      //       labels: {
      //         fontColor: '#ffffff'
      //       }
      //     }
      //   },
      //   data: [
      //     [350, 450, 100],
      //     [50, 150, 120],
      //     [250, 130, 70],
      //     [127, 33, 54]
      //   ],
      //   chartType: 'doughnut'
      // },
      // {
      //   title: 'RADAR CHART',
      //   chartLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
      //   chartOptions: {
      //     legend: {
      //       labels: {
      //         fontColor: '#ffffff'
      //       }
      //     }
      //   },
      //   data: [
      //     { data: [120, 130, 180, 70], label: '2017' },
      //     { data: [90, 150, 200, 45], label: '2018' }
      //   ],
      //   chartType: 'radar'

      // },
      // {
      //   title: 'POLAR CHART',
      //   chartLabels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
      //   data: [300, 400, 100, 40, 180],
      //   chartLegend: true,
      //   chartOptions: {
      //     legend: {
      //       labels: {
      //         fontColor: '#ffffff'
      //       }
      //     }
      //   },
      //   chartType: 'polarArea'
      // },
      {
        title: 'Top 3 Produkte - Bestellungen',
        chartLabels: ['P1', 'P2', 'P3'],
        data: [10000.00, 346346.00, 3461.00],
        chartType: 'pie',
        chartOptions: {
          legend: {
            labels: {
              fontColor: '#ffffff'
            }
          }
        },
      },
      {
        title: 'Klicks CTA im Newsletter pro Monat',
        chartLabels: ['Januar', 'Febuar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August'],
        chartType: 'bar',
        chartLegend: true,
        chartOptions: {
          scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{
              ticks: {
                fontColor: 'white',
                fontSize: 20
              }
            }],
            yAxes: [
              {
                id: 'y-axis-0',
                position: 'left',
                ticks: {
                  fontColor: 'white',
                  fontSize: 20
                }
              },
            ],

          },
          legend: {
            labels: {
              fontColor: '#ffffff'
            }
          }
        },
        datasets: [
          { data: [4535, 3455, 4654, 345, 3454, 253, 456, 674], label: 'Klicks' }
          //   { data: [183982.50, 67372.50, 5475.60, 9204.00, 25287.60, 613860.00, 1567.80, 190339.50], label: 'Instagram', stack: 'a' },
          //   { data: [183982.50, 67372.50, 5475.60, 1840.80, 126438.00, 14118.78, 52.26, 141648.00], label: 'Twitter', stack: 'a' }
        ]

      }
    ];


  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  private progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
