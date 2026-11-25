import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  protected readonly title = signal('ElectroShop1');

   productName=signal ("Laptop");

  productDescription =signal  ("High-performance laptop");

  productPrice= signal(750);

  isAvailable=signal( true);
  
 receivedProduct: string = "";
 receivedQuantity: number = 0;
receiveData(name: string): void {
    this.receivedProduct = name;
}
receiveQuantity(quantity: number): void {
    this.receivedQuantity = quantity;
}

changeProduct(): void {
    this.productName.set("Wireless Headphones");

    this.productDescription.set("Bluetooth Headphones");

    this.productPrice.set(120);

    this.isAvailable.set(true);
}
}
