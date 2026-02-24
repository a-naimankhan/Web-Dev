import { ProductService } from './services/productService';
import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category, Product } from './models/index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  allProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

  get filteredProducts(): Product[] {
    if (!this.selectedCategoryId) {
      return [];
    }
    return this.allProducts.filter(
      product => product.categoryId === this.selectedCategoryId
    );
  }

  handleProductRemoved(productId: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
  }
}

