import { Component } from '@angular/core';

export class Product {
  product: string;
  name: string;
  price: number;
}

const PRODUCTS: Product[] = [
  { product: "032", name: "School age module for ASEBA-PC", price: 395 },
  { product: "032u", name: "School age upgrade for ASEBA-PC", price: 365 }
];

@Component({
  selector: 'quote-gen',
  template: `
  <div>
    <h1>{{title}}</h1>
<ul>
<li id="selectFromList" *ngFor="let product of products" (click)="onSelect(product);">
  <span>{{product.product}}</span> {{product.name}} {{product.price}}
</li>
</ul>
  </div>
<hr />

<div id="product_list" *ngIf="selectedProduct" (click)="onRemove(product);">
<ul>
<li>
{{selectedProduct.name}} $ {{selectedProduct.price}}
</li>
</ul>

</div>

`
})
export class ProductComponent {
  title = 'ASEBA Quote Generator';
  products = PRODUCTS;
  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
    //you can access the selected products price by calling product.price
  }

  onRemove(product: Product): void {
    this.selectedProduct = product;
  }

}