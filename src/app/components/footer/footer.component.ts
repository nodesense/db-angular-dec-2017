import { Component, 
          OnInit, 
          Input, 
          SimpleChanges,
          OnChanges
          } from '@angular/core';
import { DataService } from '../../services/data.service';

//bad
import "rxjs/Rx";
//good option
//import "rxjs/add/operator/filter";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {

  highlight: boolean = true;

  // Property binding
  @Input()
  year: number;

  @Input('x-company')
  company: string;


  @Input()
  address: Object;

  counter: number;
  
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.counter = this.dataService.getCounter();

    this.dataService.counterSource
    .filter ( (value: number) => value % 2 == 0)
    .map ( (value: number) => value * 1000)
    .subscribe( (value: number) => {
      console.log("footer subs ", value);
      this.counter = value;
    });

  }

  //called when parent property changes
  ngOnChanges(changes: SimpleChanges) {
     console.log("changed values ", changes);


    

     if (changes.year && changes.year.previousValue != changes.year.currentValue) {
       console.log("year changed ");
     }
  }


  incr() {
    this.dataService.increment();
  }

}
