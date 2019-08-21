import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public counter$: Observable<number>;
  public count = 30;
  public mistakes = 0;

  constructor(private router: Router) {
  }


  ngOnInit() {
    this.counter$ = timer(0, 1000).pipe(
      take(this.count),
      map(() => {
        --this.count;
        if (this.count === 0) {
          this.router.navigate(['/result']);
        }
        return this.count;
      })
    );
  }

}
