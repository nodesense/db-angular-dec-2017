import {Component, OnInit} from '@angular/core';

@Component({
    // custom html element name
    selector: 'app-product',

    // view 
    templateUrl: 'app.component.html',

    // scopped style
    styleUrls : [
        'app.component.css'
    ]

})
export class AppComponent implements OnInit {
    title: string = 'Product App';


    currentYear: number = 2017;

     
    // view is not ready
    //step 1: constructor
    constructor() {
        
    }

    //step 2: 
    // host app.component.html into browser

    //Step 3:
    //called after view is displayed 
    ngOnInit() {

        this.title = "My app";

        // setInterval( () => {
        //     this.currentYear++;
        // }, 2000);

    }

 // TS - class
 // logics
}
