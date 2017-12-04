import { Component, 
        OnInit,
        Input,
        Output,
        EventEmitter
      } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  // child to parent

  @Input()
  count : number;

  //event emitter
  //fire custom event
  //event binding
  @Output()
  countChange: EventEmitter<number>
           = new EventEmitter();

  @Output()
  event2: EventEmitter<string>
  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incr(value : number) {
    this.countChange.emit(this.count + value);
  
  }

}
