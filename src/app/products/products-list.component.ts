import { Component, OnInit } from "@angular/core";
import { IProduct } from './products';
import { ProductService } from './products.service';


@Component({
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
    pageTitle: string = "My Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage :  string;

    _listFilter: string;
    get listFilter() : string {
        return this._listFilter;
    }

    set listFilter(value : string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products : IProduct[] = [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2019",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2019",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        }
      ];


      constructor (private productService: ProductService){
      }

      onRatingClicked(message: string): void {
          this.pageTitle = 'Product List '+ message;
      }

      performFilter(filterBy : string ): IProduct[] {
            filterBy = filterBy.toLocaleLowerCase();
            return this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

      toggleImage(): void{
          this.showImage = !this.showImage
      }

      ngOnInit(): void{
          this.productService.getProducts().subscribe({
              next: products => {
                  this.products = products;
                  this.filteredProducts = this.products;
                },
              error: err => this.errorMessage = err
          });
      }
}
