import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'expressLab';
  cartItems: any;
  formShowing: boolean = false;

  constructor(private cartService: CartService) {
    this.cartService.getAllItems().subscribe(response => {
      this.cartItems = response;
      console.log(this.cartItems);
    });
  }
  deleteItem(id) {
    this.cartService.deleteItem(id).subscribe(response => {
      this.cartItems = response;
    });
  }

  showEditForm(): void {
    this.formShowing = !this.formShowing;
  }
}

//   editItem(form, id) {
//     let newItem: {
//       id: this.cartItems.id
//       product: form.value.product,
//       price: form.value.price,
//       quantity: form.value.quantity
//     }
//     console.log(newItem);
//     this.cartService.editItem(newItem, id).subscribe(response => {
//       this.cartItems = response;
//     });
//   }
// }