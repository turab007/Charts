import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label, Color } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngchart';


  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('These are the params', this.route.snapshot.queryParams.id);

  }


}
