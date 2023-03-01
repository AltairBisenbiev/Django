import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedCategory = "All"
  products = [...products];
  productList = this.products;

  share(url: string) {
    var message = window.prompt()
    var link = "https://t.me/share/url?url="+url+"&text="+message;
    window.open(link);
  }
  changeFilter(filter: string) {
    this.selectedCategory = filter;    
    this.filterItems();
  }
  filterItems() {
    if(this.selectedCategory === "All") {
      this.products = this.productList;
    } else {
      this.products = this.productList.filter(p => p.category == this.selectedCategory);
    }
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  inc(id: number){
    products.filter(p => p.id === id).map(p => p.likes++)
  }
  del(id: number){
    products.filter(p => p.id === id).map(p => p.deleted = 'True')
    this.products = this.products.filter(p => p.deleted == 'False');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/