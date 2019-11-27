import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FavouriteProduct } from './../../../shared/services/product.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service';
@Component({
	selector: 'app-favourite-products',
	templateUrl: './favourite-products.component.html',
	styleUrls: [ './favourite-products.component.scss' ]
})
export class FavouriteProductsComponent implements OnInit {
	favoruiteProducts: Product[];
	showDataNotFound = true;
	favouriteUserProducts$: AngularFireList<FavouriteProduct>;
	user = this.authService.getLoggedInUser();
	// Not Found Message
	messageTitle = 'No Favourite Products Found';
	messageDescription = 'Please, choose your favourite products';

	constructor(private productService: ProductService,private authService :AuthService) {}

	ngOnInit() {
		this.getFavouriteProduct();
	}
	removeFavourite(product: Product) {
		this.productService.removeLocalFavourite(product);

		this.getFavouriteProduct();
	}

	getFavouriteProduct() {
		
		this.favoruiteProducts = this.productService.getLocalFavouriteProducts();
	}
}
