import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataService {

  private counter: number = 0;

  counterSource:Subject<number> = new Subject();

  constructor() {
    console.log("data service created");
  }

  getCounter(): number {
    return this.counter;
  }

  increment(): void {
    this.counter++;
    
    // publish 
    this.counterSource.next(this.counter);
  }




}
