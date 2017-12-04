import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  providers: [
  //  DataService
  ]
})
export class HomeComponent implements OnInit {

  counter: number = 0;

  subscription : Subscription;


  constructor(private dataService: DataService) { 
    console.log("home component created");
  }

  ngOnInit() {
    this.counter = this.dataService.getCounter();
  
    this.subscription = this.dataService.counterSource
    .subscribe( (value: number) => {
      console.log("Home subs ", value);
      this.counter = value;
    });
    
  
  }

  incr() {
    //this.counter++;

    this.dataService.increment();
    //this.counter = this.dataService.getCounter();


  }

  sayHello(msg: string) {
    alert(msg);
  }


  //called when child emit 
  valueChanged(count: number) {
    this.counter = count;
  }

  ngOnDestroy() {
    
    this.subscription.unsubscribe();
  }
}
