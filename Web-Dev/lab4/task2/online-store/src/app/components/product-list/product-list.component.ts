import { Component, signal, computed, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model'
import { ProductCard } from "../product-card/product-card";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: true,
  imports: [CommonModule, ProductCard]
})

export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() onRemove = new EventEmitter<number>();

  favoriteIds = signal<number[]>([]);
  favoritesCount = computed(() => this.favoriteIds().length);

  toggleFavorite(id: number) {
    this.favoriteIds.update((ids) => {
      if (ids.includes(id)) {
        return ids.filter((i) => i !== id);
      }
      return [...ids, id];
    })
  }

  isFavorite(id: number) {
    return this.favoriteIds().includes(id);
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    this.onRemove.emit(id);
  }
}
