import { Component } from "@angular/core";
import { CartService } from "./cart.service";
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  cartItems: any;
  updateShowing: boolean = false;
  addItemShowing = false;
  mainBlur = false;

  itemImages: any;

  constructor(private cartService: CartService) {
    this.cartService.getAllItems().subscribe(response => {
      this.cartItems = response;
      this.itemImages = this.cartService.getImages();
      this.cartItems.productImage = null;
      console.log(this.cartItems);
    });
  }

  toggleAddItem() {
    this.addItemShowing = !this.addItemShowing;
    this.mainBlur = !this.mainBlur;
  }

  toggleForm(index) {
    this.cartItems[index].beingUpdated = !this.cartItems[index].beingUpdated;
  }
  deleteItem(id) {
    this.cartService.deleteItem(id).subscribe(response => {
      this.cartItems = response;
    });
  }
  addItem(form) {
    console.log(...form.value);
    this.cartService.addItem({ ...form.value }).subscribe(response => {
      this.cartItems = response;
      this.addItemShowing = !this.addItemShowing;
      this.mainBlur = !this.mainBlur;
    });
    form.resetForm();
  }

  updateItem(item) {
    console.log(item);
    this.cartService.updateItem(item).subscribe(response => {
      this.cartItems = response;
    });
  }
}