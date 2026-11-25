import { Component , Input, signal , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-details-component',
  standalone: false,
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {
  @Input() productName="";
  @Input() productDescription="";
  @Input() productPrice :number=0;
  @Input() isAvailable=false;
  @Output() productEvent = new EventEmitter <string>;
  @Output() quantityEvent = new EventEmitter<number>();
  senddata():void{
    this.productEvent.emit(this.productName);
     this.quantityEvent.emit(this.quantity());
  }
  productImage: string = "https://tse3.mm.bing.net/th/id/OIP.OuwKSW985AQI4Ik5HZtLBAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";

  quantity = signal(0) ;

  discountPercentage: number = 10;

  Increase(){
    this.quantity.update(quantity=>quantity+1)
  } 

  Decrease(){
    if (this.quantity() > 0) {
    this.quantity.update(quantity=>quantity-1)
  } 
}}
