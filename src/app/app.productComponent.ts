import { Component } from '@angular/core';

export class Product {
  product: number;
  name: string;
  price: number;
}

@Component({
  selector: 'quote-gen',
  template: `
  <div>
    <h1>{{title}}</h1>
  </div>
  <div>
    <table>
      <tr><td>
      {{description}}
</td></tr>
<tr><td>
  {{price}}
</td></tr>
  </table>
  </div>

`
})

export class ProductComponent {
  title = 'ASEBA Quote Generator';
  description = 'Product:';
  price = 'Price:';

}