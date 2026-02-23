import { Component , signal , computed } from '@angular/core'
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model'
import { ProductCard } from "../product-card/product-card";

@Component({
  selector : 'app-product-list' ,
  templateUrl : './product-list.component.html',
  styleUrl : './product-list.component.css',
  standalone: true,
  imports: [CommonModule, ProductCard , ]
})

export class ProductListComponent {
  // products : Product[] = [];
  favoriteIds = signal<number[]>([]);
favoritesCount = computed(() => this.favoriteIds().length);

  toggleFavorite(id : number) {
    this.favoriteIds.update((ids) => {
      if (ids.includes(id)) {
        return ids.filter((i) => i !== id);
      }
      return [...ids, id];
    })
  }

  isFavorite(id : number) {
    return this.favoriteIds().includes(id);
  }

  products : Product[] = [
    {
      id  : 1 ,
      name : "Монитор 27 Xiaomi Redmi G27Q 240Hz P27QDA-RG черный" ,
      description :  "Игровой монитор Xiaomi Redmi G27Q с диагональю 27 дюймов — отличное решение для динамичных игр и повседневной работы. Монитор сочетает высокую частоту обновления, чёткое QHD-разрешение и комфортную эргономику, обеспечивая плавное и детализированное изображение." ,
      price : 132_134 ,
      rating : 4.8 ,
      image : "https://resources.cdn-kaspi.kz/img/m/p/pf4/pc3/42930761.jpeg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/pf4/pc3/42930761.jpeg?format=gallery-medium" ,
        "https://resources.cdn-kaspi.kz/img/m/p/pf4/pc3/42930761.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pf4/pc3/42930761.jpeg?format=gallery-medium"
      ] ,
      link : "https://kaspi.kz/shop/p/27-xiaomi-redmi-g27q-240hz-p27qda-rg-chernyi-139856428/?c=750000000"
    } ,
    {
      id : 2,
      name : "Монитор 27 Samsung LS27FG602SIXCI серебристый" ,
      description : "Характеристики Монитор 27 Samsung LS27FG602SIXCI серебристый",
      price : 598_313,
      rating : 5.0,
      image : "https://resources.cdn-kaspi.kz/img/m/p/p48/p15/65263368.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/p48/p15/65263368.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p2e/p6d/42930762.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p48/p15/65263368.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/27-samsung-ls27fg602sixci-serebristyi-145799153/?c=750000000"
    } ,
    {
      id : 3 ,
      name : "Стилус Active Stylus Pen K-2260 белый",
      description : "Характеристики Стилус Active Stylus Pen K-2260 белый",
      price : 1_598,
      rating : 4.5 ,
      image : "https://resources.cdn-kaspi.kz/img/m/p/h45/h69/68930990243870.jpg?format=gallery-lower",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/h45/h69/68930990243870.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h45/h69/68930990243870.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h45/h69/68930990243870.jpg?format=gallery-large"
      ],
      link : "https://kaspi.kz/shop/p/stilus-active-stylus-pen-k-2260-belyi-108865258/?c=750000000"

    } ,
    {
      id : 4 ,
      name : "Сумка SERGIO BUONO 90234 до 15.6 серый",
      description : "Характеристики Сумка SERGIO BUONO 90234 до 15.6 серый",
      price : 3_239 ,
      rating : 4.7,
      image : "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/sumka-sergio-buono-90234-do-15-6-seryi-109254899/?c=750000000"
    },
    {
      id : 5 ,
      name : "Сумка SERGIO BUONO 90234 до 15.6 серый",
      description : "Характеристики Сумка SERGIO BUONO 90234 до 15.6 серый",
      price : 3_239 ,
      rating : 4.7,
      image : "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/sumka-sergio-buono-90234-do-15-6-seryi-109254899/?c=750000000"
    },
    {
      id : 6 ,
      name : "Сумка SERGIO BUONO 90234 до 15.6 серый",
      description : "Характеристики Сумка SERGIO BUONO 90234 до 15.6 серый",
      price : 3_239 ,
      rating : 4.7,
      image : "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/sumka-sergio-buono-90234-do-15-6-seryi-109254899/?c=750000000"
    },
    {
      id : 7 ,
      name : "Сумка SERGIO BUONO 90234 до 15.6 серый",
      description : "Характеристики Сумка SERGIO BUONO 90234 до 15.6 серый",
      price : 3_239 ,
      rating : 4.7,
      image : "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/sumka-sergio-buono-90234-do-15-6-seryi-109254899/?c=750000000"
    },
    {
      id : 8 ,
      name : "Сумка SERGIO BUONO 90234 до 15.6 серый",
      description : "Характеристики Сумка SERGIO BUONO 90234 до 15.6 серый",
      price : 3_239 ,
      rating : 4.7,
      image : "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
      images : [
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2c/hf2/86371735994398.jpg?format=gallery-medium"
      ],
      link : "https://kaspi.kz/shop/p/sumka-sergio-buono-90234-do-15-6-seryi-109254899/?c=750000000"
    },
    {
      id : 9,
      name : "Смартфон Apple iPhone 14 128Gb черный",
      description : "Apple iPhone 14 – компактная модель с безрамочным дисплеем OLED 6.1 дюйма. Стеклянный корпус мобильного устройства соответствует стандарту защищенности IP68 – он устойчив к воздействию влаги и пыли. Передняя панель обладает покрытием Ceramic Shield для защиты экрана от появления царапин и различных дефектов.Основная сдвоенная камера 12+12 Мп со вспышкой True Tone и целым рядом режимов позволяет создавать снимки профессионального качества в любых условиях освещенности. Камера 12 Мп на передней стороне предназначена для селфи и качественной видеосвязи. Среди особенностей Apple iPhone 14 – чип Apple A15 Bionic с 5-ядерным GPU, широкий набор интерфейсов (NFC, 5G, GPS, Wi-Fi и Bluetooth), длительное время автономности, поддержка аксессуаров и устройств MagSafe с магнитной беспроводной зарядкой.",
      price : 350_586,
      rating : 4.9,
      image : "https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium",
      images : [
      "https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h9f/h4b/86042949681182.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hd4/h92/86042949746718.png?format=gallery-medium"
    ],
    link : "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000"
  },

  // {
    //To do add 9 more items :
    // }
  ];


}
