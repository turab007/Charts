import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public zeit = 0;
  public fehler = 0;



  public bubbleChart = {
    chartOptions: {
      responsive: true,

      scales: {
        xAxes: [
          {
            ticks: {
              min: 0,
              max: 30,
              fontColor: '#fff',
              fontSize: 20
            },
            scaleLabel: {
              display: true,
              labelString: 'Zeit',
              fontColor: '#fff',
              fontSize: '30',
            },
            gridLines: {
              display: true,
              color: '#fff'
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min:0,
              max: 5,
              fontColor: '#fff',
              fontSize: 20
            },
            scaleLabel: {
              display: true,
              labelString: 'Fehler',
              fontColor: '#fff',
              fontSize: '30',
            },
            gridLines: {
              display: true,
              color: '#fff'
            }
          }
        ]
      },
      legend: {
        labels: {
          fontColor: '#fff',
          fontSize: 18
        }
      },
    },
    chartType: 'bubble',
    chartLegend: true,

    chartData: [
      {
        data: [
          { x: 15, y: 1, r: 15 },
          { x: 15, y: 5, r: 15 },
          { x: 26, y: 2, r: 15 },
          { x: 7, y: 3, r: 15 },
          { x: 17, y: 4, r: 15 },
          { x: 26, y: 1, r: 15 },
          { x: 15, y: 23, r: 15 },
          { x: 26, y: 2, r: 15 },
          { x: 9, y: 1, r: 15 },
          { x: 15, y: 5, r: 15 },
          { x: 7, y: 2, r: 15 },
          { x: 10, y: 5, r: 15 },
          { x: 16, y: 2, r: 15 },
          { x: 15, y: 3, r: 15 },
        ],
        label: 'Previous Results',
        labelColor: '#fff',
        backgroundColor: 'yellow',
        borderColor: 'blue',
        hoverBackgroundColor: 'purple',
        hoverBorderColor: 'red',
      },
      {
        data: [
          { x: 13, y: 2, r: 25 },
        ],
        label: 'Your Result',
        backgroundColor: 'red',
        borderColor: 'blue',
        hoverBackgroundColor: 'purple',
        hoverBorderColor: 'red',
        fontColor: '#fff'
      },
    ],

  };
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      // this.router.navigate(['dashboard']);
    }, 6000);
  }

}
