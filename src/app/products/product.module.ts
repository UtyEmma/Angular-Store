import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductsListComponent } from "./products-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path : 'products', component: ProductsListComponent },
      { path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent 
      },
    ]),
    SharedModule   
  ]
})
export class ProductModule { }
