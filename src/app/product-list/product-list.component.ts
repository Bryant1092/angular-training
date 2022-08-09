import { Component } from '@angular/core';

import { products } from '../products';

/*
* The @Component() decorator indicates that the following class is a component.
*
* @Component() also provides metadata about the component, inlcuding its
* selector, templates, and styles.
*
* The SELECTOR, APP-PRODUCT-LIST, identifies the component. By convention, 
* Angular component SELECTOR begin with the prefix APP- followed by the component
* name.
* 
* the TEMPLATE and STYLE filenames reference the component's HTML and CSS.
*
* the @Component() definition also exports the class, 
*/
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/