import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  standalone: false,
  styleUrl: './footer-component.css',
  templateUrl: './footer-component.html',
})
export class FooterComponent {
  storeName: string = "ElectroShop";

  storeAddress: string = "Amman, Jordan";

  contactEmail: string = "info@electroshop.com";

  copyright: string = "© 2026 ElectroShop. All Rights Reserved.";
}
