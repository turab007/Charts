import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  counter$: Observable<number>;
  count = 6;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.counter$ = timer(0, 1000).pipe(
      take(this.count),
      map(() => {
        this.count--;
        if (this.count === 0) {
          this.router.navigate(['game']);
        }
        return this.count;
      })
    );
  }
}


