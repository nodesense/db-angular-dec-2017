import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

// contains brower/web dependencies
import {BrowserModule} from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LikeComponent } from './components/like/like.component';

import {FormsModule} from 
    '@angular/forms';

// route configuration

import {RouterModule, Routes} 
        from "@angular/router";
import { DataService } from './services/data.service';
import { ProductModule } from './product/product.module';

import { HttpClientModule } from '@angular/common/http';


import { TodoComponent } from './components/todo/todo.component';

import { StoreModule } from '@ngrx/store';
import {counterReducer} 
                  from "./counter-reducer"

import { ProductEffects } from './product/services/product-effects';
import { EffectsModule } from '@ngrx/effects';
                  

import { todoReducer } from './components/todo/reducer';
import { CounterComponent } from './components/counter/counter.component';
import { cartReducer } from './product/state/cart-reducer';
import { CartComponent } from './components/cart/cart.component';
 
 

const routeConfig: Routes = [
    {
        path: '', //localhost:4200
        component: HomeComponent
    },
    {
        path: 'about', //localhost:4200/about
        component: AboutComponent
    },
    {
        path: 'contact/:city',
        component: ContactComponent
    },

    {
        path: 'goto-products',
        redirectTo: '/products'
    },
    {
        path: 'cart',
        component: CartComponent
    },

    {
        path: 'todo',
        component: TodoComponent
    }
];



@NgModule({

    // angular module dependencies
    imports : [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        // apply config to angular
        RouterModule.forRoot(routeConfig),
        ProductModule,
        
        // register a reducer with store 
        StoreModule.forRoot({
            //stateName: reducer function
            counter: counterReducer,
            cartItems: cartReducer
            //cart: cartReducer
        }),
        
        EffectsModule.forRoot([ProductEffects])



        //StoreModule.forRoot({ todoReducer, cartReducer }),
       
        
        // CartModule
    ],

    // declare all components here
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        LikeComponent,
        TodoComponent,
        CounterComponent,
        CartComponent,
        // HomeComponent,
        // FooterComponent
    ],

    // main/root component
    bootstrap: [
        AppComponent
    ],

    providers: [
        DataService
    ]
})
export class AppModule {

}
