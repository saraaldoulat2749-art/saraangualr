import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details-component',
  standalone: false,
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {
  productName: string = "Laptop";

  productDescription: string = "High-performance laptop";

  productPrice: number = 750;

  productImage: string = "https://tse3.mm.bing.net/th/id/OIP.OuwKSW985AQI4Ik5HZtLBAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";

  quantity: number = 1;

  isAvailable: boolean = true;

  discountPercentage: number = 10;
}
