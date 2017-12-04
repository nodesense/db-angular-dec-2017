import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// returns an action
function incrementActionCreator() {
  return {
    type: 'INCREMENT'
  };
}


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter$: Observable<number>;

  count: number;

  constructor(private store: Store<any>) {
     this.counter$ = this.store.select("counter");
  }

  ngOnInit() {
     this.counter$
     .subscribe ( (n : number) => {
       console.log("Value is ", n);
       this.count = n;
     });
  }

  add() {
    // const action: any = {
    //   type: 'INCREMENT'
    //   };

    const action = incrementActionCreator();

     this.store.dispatch(action);

      // this.store.dispatch({
      //   type: 'INCREMENT'
      //   });

  }

}
