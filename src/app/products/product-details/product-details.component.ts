import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/entities';
import { ProductService } from 'src/app/core/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public interestingProducts: Observable<Product[]>;
  public product: Observable<Product>;
  private routeSubscr: any;

  constructor(private productService: ProductService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.interestingProducts = this.productService.getInterestedInProducts();
    this.routeSubscr = this.activeRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.product = this.productService.getProductDetails(id);
      // console.log(this.product)
    });
  }
}
