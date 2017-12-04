import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contactLikes : number = 1000;
  
  city: string;



  constructor(private route: ActivatedRoute,
              private dataService: DataService
  ) { }

  ngOnInit() {
    console.log("contact component init");

    this.city = this.route.snapshot.params['city'];

    let time:string = this.route
              .snapshot.params['time'];

    console.log("time is ", time);
  }

}
