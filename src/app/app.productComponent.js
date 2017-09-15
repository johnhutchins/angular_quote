"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var PRODUCTS = [
    { product: "032", name: "School age module for ASEBA-PC", price: 395 },
    { product: "032u", name: "School age upgrade for ASEBA-PC", price: 365 }
];
var ProductComponent = (function () {
    function ProductComponent() {
        this.title = 'ASEBA Quote Generator';
        this.products = PRODUCTS;
    }
    ProductComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
        //you can access the selected products price by calling product.price
    };
    ProductComponent.prototype.onRemove = function (product) {
        this.selectedProduct = product;
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'quote-gen',
        template: "\n  <div>\n    <h1>{{title}}</h1>\n<ul>\n<li id=\"selectFromList\" *ngFor=\"let product of products\" (click)=\"onSelect(product);\">\n  <span>{{product.product}}</span> {{product.name}} {{product.price}}\n</li>\n</ul>\n  </div>\n<hr />\n\n<div id=\"product_list\" *ngIf=\"selectedProduct\" (click)=\"onRemove(product);\">\n<ul>\n<li>\n{{selectedProduct.name}} $ {{selectedProduct.price}}\n</li>\n</ul>\n\n</div>\n\n"
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=app.productComponent.js.map