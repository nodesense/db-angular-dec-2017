import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  memberName: string = "Your name";

  members: string[] = ['Member 1', 
                       'Member 2'];

  show: boolean = true;

  message : string = "No members displayed";

  //address: Object = {city: 'Pune'};

  //undefined
  address: Object = null;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.members.push(this.memberName);
    this.memberName = '';
  }

  remove() {
    this.members.splice(0, 1);
  }

}
