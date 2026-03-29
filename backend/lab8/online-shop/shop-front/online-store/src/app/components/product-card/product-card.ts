import { Component , EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model'
import { DecimalPipe } from '@angular/common';
import { StarsPipe } from '../../pipes/index';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  standalone: true,
  imports: [DecimalPipe, StarsPipe]
})
export class ProductCard {
  @Input() product!: Product;
  @Input() isFavorite!: boolean;
  @Output() toggleFavoriteEvent = new EventEmitter<void>();
  @Output() onRemove = new EventEmitter<number>();

  like() {
    if (this.product) {
      this.product.likes++;
    }
  }

  remove() {
    if (this.product) {
      this.onRemove.emit(this.product.id);
    }
  }

  shareOnWhatsApp() {
    const message = `Check out this product: ${this.product.link}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(shareUrl, '_blank');
  }

  shareOnTelegram() {
    const message = `Check out this product: ${this.product.link}`;
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`;
    window.open(shareUrl, '_blank');
  }
}
