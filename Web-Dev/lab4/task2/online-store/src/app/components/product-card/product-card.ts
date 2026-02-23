import { Component , EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model'
import { DecimalPipe } from '@angular/common';
import { StarsPipe } from '../../pipes/index';
import {ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-product-card',
  // imports: [Product],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  standalone: true,
  imports: [DecimalPipe , StarsPipe]
})
export class ProductCard {
  @Input() product!: Product;
  @Input() isFavorite!: boolean;
  @Output() toggleFavorite = new EventEmitter<void>();
  // get whatsappLink() {
  //    const message = `Check out this product: ${this.product.link}`;
  //   return 'https://api.whatsapp.com/send?text=' + encodeURIComponent(message);
  // }

  // get telegramLink() {
  //   return 'https://t.me/share/url?url=' + encodeURIComponent(this.product.link);
  // }

  constructor(private router : Router , private route : ActivatedRoute) {}

  shareOnWhatsApp() {
    const kaspiLink = this.router.url;
    const shareUrl = `https://wa.me/?text=Check out this product: ${kaspiLink}`;
    window.open(shareUrl, '_blank');
  }

  shareOnTelegram() {
    const kaspiLink = this.route.url;
    const shareUrl = `https://t.me/share/url?url=${kaspiLink}`;
    window.open(shareUrl, '_blank');
  }
}
