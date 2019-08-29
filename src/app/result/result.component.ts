import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  // public fehler = 0;
  public result = { zeit: 5, fehler: 2 };
  public params;



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
              fontSize: 20,
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
              min: 0,
              max: 5,
              fontColor: '#fff',
              fontSize: 20,
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
          { x: this.result.zeit, y: this.result.fehler, r: 25 },
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

  public bubbleChart2 = {
    chartOptions: {
      responsive: true,

      scales: {
        xAxes: [
          {
            ticks: {
              min: 0,
              max: 30,
              fontColor: '#fff',
              fontSize: 20,
              stepSize: 15
            },
            scaleLabel: {
              display: true,
              labelString: 'Zeit',
              fontColor: '#fff',
              fontSize: '30',
            },
            gridLines: {
              display: true,
              color: '#ff0808'
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 5,
              fontColor: '#fff',
              fontSize: 20,
              stepSize: 2.5
            },
            scaleLabel: {
              display: true,
              labelString: 'Fehler',
              fontColor: '#fff',
              fontSize: '30',
            },
            gridLines: {
              display: true,
              color: '#ff0808'
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
          { x: this.result.zeit, y: this.result.fehler, r: 25 },
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

  private resultGraphs() {
    if (this.result.zeit <= 15) {
      if (this.result.fehler <= 2.5) {
        this.params = 1;
      } else {
        this.params = 2;
      }

    } else if (this.result.fehler <= 2.5) {
      this.params = 3;
    } else {
      this.params = 4;
    }
  }


  constructor(private router: Router) { }

  ngOnInit() {
    this.resultGraphs();
    setTimeout(() => {
      // this.router.navigate( [
        this.router.navigate(['/dashboard'], { queryParams: { id: this.params } });
        // 'dashboard', {queryParams: { id: 'this.params'}yy
      // this.router.navigate(['dashboard',  {id: this.params }]);
    }, 6000);
  }

}
