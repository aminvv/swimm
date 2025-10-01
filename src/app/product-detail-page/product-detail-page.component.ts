import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent {
  quantity: number = 1;

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  onQuantityInput(event: any) {
    const value = parseInt(event.target.value, 10);
    this.quantity = isNaN(value) || value < 1 ? 1 : value;
  }

  scrollTo(targetId: string) {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
