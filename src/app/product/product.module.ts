import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductService } from './services/product.service';

import {HttpModule} from "@angular/http";

import {RouterModule, Routes} 
    from '@angular/router';

// products/list, products/edit/10

const routeConfig: Routes = [
  {
    path: 'products',
    component: ProductHomeComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'search',
        component: ProductSearchComponent
      },

      {
        path: 'create',
        component: ProductEditComponent
      },

      {
        path: 'edit/:id',
        component: ProductEditComponent
      }

    ]

  }
];

 

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routeConfig)
  ],
  declarations: [ProductHomeComponent, 
                ProductListComponent, 
                ProductEditComponent, 
                ProductSearchComponent],

  
  providers: [
    ProductService
  ]
})
export class ProductModule { }
