import { Injectable } from '@angular/core';
import { Category , Product } from '../models/index';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  category : Category[] = [
      { id : 1 , name : "Мониторы" } ,
      { id : 2 , name : "Ноутбуки" } ,
      { id : 3 , name : "Телефоны" } ,
      { id : 4 , name : "Планшеты" } ,
    ];

    products : Product[] = [
      //Monitors :
      {
        id  : 101 ,
        name : "Монитор 27 Xiaomi Redmi G27Q 240Hz P27QDA-RG черный" ,
        description :  "Игровой монитор Xiaomi Redmi G27Q с диагональю 27 дюймов — отличное решение для динамичных игр и повседневной работы. Монитор сочетает высокую частоту обновления, чёткое QHD-разрешение и комфортную эргономику, обеспечивая плавное и детализированное изображение." ,
        price : 132_134 ,
        rating : 4.8 ,
        image : "https://resources.cdn-kaspi.kz/img/m/p/pf4/pc3/42930761.jpeg?format=gallery-medium",
        link : "https://kaspi.kz/shop/p/27-xiaomi-redmi-g27q-240hz-p27qda-rg-chernyi-139856428/?c=750000000",
        likes : 0,
        categoryId : 1
      } ,
      {
        id : 102,
        name : "Монитор 27 Samsung LS27FG602SIXCI серебристый" ,
        description : "Характеристики Монитор 27 Samsung LS27FG602SIXCI серебристый",
        price : 598_313,
        rating : 5.0,
        image : "https://resources.cdn-kaspi.kz/img/m/p/p48/p15/65263368.jpg?format=gallery-medium",
        link : "https://kaspi.kz/shop/p/27-samsung-ls27fg602sixci-serebristyi-145799153/?c=750000000",
        likes : 0,
        categoryId : 1
      } ,
      {
        id : 103 ,
        name : "Монитор 21.45 XTREON XT2253DE черный",
        description : "Монитор XTREON XT2253DE — отличное решение для работы и развлечений. Диагональ 21.45″, разрешение Full HD (1920×1080), частота обновления 100 Гц и поддержка AMD FreeSync обеспечивают плавное изображение. VA-матрица с матовым покрытием, время отклика 5 мс. Подключение через HDMI и VGA. Настенное крепление 75×75 мм.",
        price : 34_990,
        rating : 4.7,
        image : "https://resources.cdn-kaspi.kz/img/m/p/p93/p79/57949681.jpg?format=gallery-medium",
        link : "https://kaspi.kz/shop/p/21-45-xtreon-xt2253de-chernyi-113769024/?c=750000000",
        likes : 0,
        categoryId : 1
       },
       {
        id : 104 ,
        name : "Монитор 27 XTREON XT27N1 черный",
        description:  "XTREON XT27N1 — 27-дюймовый игровой монитор с разрешением 2560x1440 и частотой обновления 180 Гц для невероятно плавного и детализированного изображения.",
        price : 79_990,
        rating : 4.9,
        image : "https://resources.cdn-kaspi.kz/img/m/p/pd1/pe5/56721926.png?format=gallery-medium",
        link : "https://kaspi.kz/shop/p/27-xtreon-xt27n1-chernyi-140680986/?c=750000000",
        likes : 0,
        categoryId : 1
       } ,
       {
        id : 105 ,
        name : "Монитор 27\" Samsung LS27DG612SIXCI серебристый",
        description : "Монитор Samsung LS27DG612SIXCI с диагональю 27 дюймов и разрешением 2560x1440 обеспечивает высокую четкость изображения. Частота обновления 165 Гц и поддержка AMD FreeSync гарантируют плавное отображение динамичных сцен. VA-матрица с временем отклика 1 мс обеспечивает минимальное размытие. Подключение через HDMI и DisplayPort, а также возможность настенного крепления 100x100 мм.",
        price : 420_838,
        rating : 5.0,
        image : "https://resources.cdn-kaspi.kz/img/m/p/p49/p0d/58982252.jpg?format=gallery-medium",
        link : "https://kaspi.kz/shop/p/27-samsung-ls27dg612sixci-serebristyi-131159462/?c=750000000",
        likes : 0,
        categoryId : 1
       },

      //Laptops :
        {
          id : 201 ,
          name : "Ноутбук Apple MacBook Air 13 2020 13.3 / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A" ,
          description : "Ноутбук Apple MacBook Air 13 2020 оснащён 13.3-дюймовым дисплеем Retina с разрешением 2560x1600 пикселей, обеспечивающим яркое и чёткое изображение. Устройство работает на процессоре Apple M1, который обеспечивает высокую производительность и энергоэффективность. В комплекте 8 Гб оперативной памяти и SSD-накопитель на 256 Гб для быстрого доступа к данным. Ноутбук поддерживает macOS и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 439_951,
          rating : 5.0,
          image : "https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000",
          likes : 0,
          categoryId : 2
        },
        {
          id : 202,
          name : "Ноутбук Oyan Lite X14 14.1\" / 8 Гб / SSD 512 Гб / Win 11 Home / R1526",
          description : "Ноутбук Oyan Lite X14 оснащён 14.1-дюймовым дисплеем с разрешением 1920x1080 пикселей, обеспечивающим чёткое изображение. Устройство работает на процессоре Intel Core i5-1235U, который обеспечивает высокую производительность и энергоэффективность. В комплекте 8 Гб оперативной памяти и SSD-накопитель на 512 Гб для быстрого доступа к данным. Ноутбук поддерживает Windows 11 Home и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 134_500,
          rating : 4.8,
          image : "https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/oyan-lite-x14-14-1-8-gb-ssd-512-gb-win-11-home-r1526-115724796/?c=750000000",
          likes : 0,
          categoryId : 2
        },
        {
          id : 203 ,
          name : "Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123",
          description : "Ноутбук Apple MacBook Air 13 2025 оснащён 13.3-дюймовым дисплеем Retina с разрешением 2560x1600 пикселей, обеспечивающим яркое и чёткое изображение. Устройство работает на процессоре Apple M2, который обеспечивает высокую производительность и энергоэффективность. В комплекте 16 Гб оперативной памяти и SSD-накопитель на 256 Гб для быстрого доступа к данным. Ноутбук поддерживает macOS и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 523_993,
          rating : 5.0,
          image : "https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000",
          likes : 0,
          categoryId : 2
        } ,
        {
          id : 204 ,
          name : "Ноутбук Lenovo IdeaPad Gaming 3 16 / 16 Гб / SSD 512 Гб / DOS / 16IAH7 / 82SA00FQRK",
          description : "Ноутбук Lenovo IdeaPad Gaming 3 16 оснащён 16-дюймовым дисплеем с разрешением 1920x1200 пикселей, обеспечивающим чёткое изображение. Устройство работает на процессоре Intel Core i7-12700H, который обеспечивает высокую производительность и энергоэффективность. В комплекте 16 Гб оперативной памяти и SSD-накопитель на 512 Гб для быстрого доступа к данным. Ноутбук поддерживает DOS и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 549_990,
          rating: 4.9,
          image : "https://resources.cdn-kaspi.kz/img/m/p/h7b/h8b/69049525239838.jpg?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/lenovo-ideapad-gaming-3-16-16-gb-ssd-512-gb-dos-16iah7-82sa00fqrk-108910285/?c=750000000",
          likes : 0,
          categoryId : 2
        },
        {
          id : 205 ,
          name : "Ноутбук HP Laptop 15-fd0324ci 15.6 / 16 Гб / SSD 512 Гб / Без ОС / D18P7EA" ,
          description : "Ноутбук HP Laptop 15-fd0324ci оснащён 15.6-дюймовым дисплеем с разрешением 1920x1080 пикселей, обеспечивающим чёткое изображение. Устройство работает на процессоре Intel Core i7-1255U, который обеспечивает высокую производительность и энергоэффективность. В комплекте 16 Гб оперативной памяти и SSD-накопитель на 512 Гб для быстрого доступа к данным. Ноутбук не поддерживает операционную систему, что позволяет пользователю установить предпочитаемую ОС и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 299_990,
          rating : 4.7,
          image : "https://resources.cdn-kaspi.kz/img/m/p/p80/pae/95714977.png?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/hp-laptop-15-fd0324ci-15-6-16-gb-ssd-512-gb-bez-os-d18p7ea-154678941/?c=750000000",
          likes : 0,
          categoryId : 2
        },

        //Phones :
        {
          id : 301 ,
          name : "Смартфон Apple iPhone 14 512Gb сиреневый" ,
          description : "Телефон Apple iPhone 14 Pro оснащён 6.1-дюймовым дисплеем Super Retina XDR с разрешением 2532x1170 пикселей, обеспечивающим яркое и чёткое изображение. Устройство работает на процессоре Apple A16 Bionic, который обеспечивает высокую производительность и энергоэффективность. В комплекте 128 Гб встроенной памяти для хранения данных. Телефон поддерживает iOS и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 599_990,
          rating : 5.0,
          image : "https://resources.cdn-kaspi.kz/img/m/p/h7d/hf1/86597089067038.png?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/apple-iphone-14-512gb-sirenevyi-106363142/?c=750000000",
          likes : 0,
          categoryId : 3
        } ,
        {
          id : 302 ,
          name : "Смартфон Apple iPhone 15 Plus 512Gb черный",
          description : "Смартфон Apple iPhone 15 Plus оснащён 6.7-дюймовым дисплеем Super Retina XDR с разрешением 2778x1284 пикселей, обеспечивающим яркое и чёткое изображение. Устройство работает на процессоре Apple A16 Bionic, который обеспечивает высокую производительность и энергоэффективность. В комплекте 512 Гб встроенной памяти для хранения данных. Смартфон поддерживает iOS и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 596_957,
          rating : 4.9,
          image : "https://resources.cdn-kaspi.kz/img/m/p/hce/hb7/86320812556318.jpg?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/apple-iphone-15-plus-512gb-chernyi-113138038/?c=750000000",
          likes : 0,
          categoryId : 3
        } ,
        {
          id : 303 ,
          name : "Смартфон Samsung Galaxy S25 Ultra 12 ГБ/256 ГБ черный + подарок",
          description : "Смартфон Samsung Galaxy S25 Ultra оснащён 6.8-дюймовым дисплеем Dynamic AMOLED 2X с разрешением 3200x1440 пикселей, обеспечивающим яркое и чёткое изображение. Устройство работает на процессоре Exynos 2200, который обеспечивает высокую производительность и энергоэффективность. В комплекте 12 Гб оперативной памяти и 256 Гб встроенной памяти для хранения данных. Смартфон поддерживает Android и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 626_850,
          rating : 4.8,
          image : "https://resources.cdn-kaspi.kz/img/m/p/p89/pde/30636942.jpg?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-12-gb-256-gb-chernyi-podarok-136457947/?c=750000000",
          likes : 0,
          categoryId : 3

        },

        {
          id : 304 ,
          name : "Смартфон Samsung Galaxy Z Flip7 5G 12 ГБ/512 ГБ синий + подарок",
          description : "Смартфон Samsung Galaxy Z Flip7 5G оснащён 6.7-дюймовым дисплеем Dynamic AMOLED 2X с разрешением 2640x1080 пикселей, обеспечивающим яркое и чёткое изображение. Устройство работает на процессоре Snapdragon 8 Gen 2, который обеспечивает высокую производительность и энергоэффективность. В комплекте 12 Гб оперативной памяти и 512 Гб встроенной памяти для хранения данных. Смартфон поддерживает Android и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 750_000 ,
          rating : 4.9,
          image : "https://resources.cdn-kaspi.kz/img/m/p/p9f/pca/60002999.jpg?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/samsung-galaxy-z-flip7-5g-12-gb-512-gb-sinii-podarok-144485229/?c=750000000",
          likes : 0,
          categoryId : 3
        },

        {
          id : 305 ,
          name : "Смартфон Apple iPhone 17 Pro 256Gb оранжевый",
          description : "Смартфон Apple iPhone 17 Pro оснащён 6.1-дюймовым дисплеем Super Retina XDR с разрешением 2532x1170 пикселей, обеспечивающим яркое и чёткое изображение. Устройство работает на процессоре Apple A17 Pro, который обеспечивает высокую производительность и энергоэффективность. В комплекте 256 Гб встроенной памяти для хранения данных. Смартфон поддерживает iOS и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 825_651,
          rating : 5.0,
          image : "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000",
          likes : 0,
          categoryId : 3
        } ,
        //Tablets :
        {
          id : 401 ,
          name : "Планшет Apple iPad Pro 11 2024 Wi-Fi 11 дюйм 8 Гб/256 Гб черный",
          description : "Планшет Apple iPad Pro 11 2024 оснащён 11-дюймовым дисплеем Liquid Retina с разрешением 2388x1668 пикселей, обеспечивающим яркое и чёткое изображение. Устройство работает на процессоре Apple M2, который обеспечивает высокую производительность и энергоэффективность. В комплекте 8 Гб оперативной памяти и 256 Гб встроенной памяти для хранения данных. Планшет поддерживает iPadOS и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 512_973,
          rating : 4.9,
          image : "https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000",
          likes : 0,
          categoryId : 4
        } ,

        {
          id : 402 ,
          name : "Планшет SmartTech SmartTech Pad2 32 дюйм 8 Гб/128 Гб белый",
          description : "Планшет SmartTech Pad2 оснащён 32-дюймовым дисплеем с разрешением 1920x1080 пикселей, обеспечивающим яркое и чёткое изображение. Устройство работает на процессоре MediaTek Helio G80, который обеспечивает высокую производительность и энергоэффективность. В комплекте 8 Гб оперативной памяти и 128 Гб встроенной памяти для хранения данных. Планшет поддерживает Android и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 590_000,
          rating : 4.8,
          image : "https://resources.cdn-kaspi.kz/img/m/p/pbe/pd1/39017268.jpeg?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/smarttech-smarttech-pad2-32-djuim-8-gb-128-gb-belyi-138766320/?c=750000000",
          likes : 0,
          categoryId : 4
        } ,

        {
          id : 403 ,
          name : "Планшет Apple iPad Pro 12.9 2022 Wi-Fi 12.9 дюйм 8 Гб/128 Гб серый",
          description : "Планшет Apple iPad Pro 12.9 2022 оснащён 12.9-дюймовым дисплеем Liquid Retina XDR с разрешением 2732x2048 пикселей, обеспечивающим яркое и чёткое изображение. Устройство работает на процессоре Apple M1, который обеспечивает высокую производительность и энергоэффективность. В комплекте 8 Гб оперативной памяти и 128 Гб встроенной памяти для хранения данных. Планшет поддерживает iPadOS и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 650_000,
          rating : 4.9,
          image : "https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-128-gb-seryi-107277956/?c=750000000",
          likes : 0,
          categoryId : 4
        } ,


        {
          id : 404 ,
          name : "Планшет Samsung Galaxy Tab S10 Ultra 14.6 дюйм 12 Гб/256 Гб серый",
          description : "Планшет Samsung Galaxy Tab S10 Ultra оснащён 14.6-дюймовым дисплеем Dynamic AMOLED 2X с разрешением 2960x1848 пикселей, обеспечивающим яркое и чёткое изображение. Устройство работает на процессоре Snapdragon 8 Gen 1, который обеспечивает высокую производительность и энергоэффективность. В комплекте 12 Гб оперативной памяти и 256 Гб встроенной памяти для хранения данных. Планшет поддерживает Android и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 580_000,
          rating : 4.8,
          image  : "https://resources.cdn-kaspi.kz/img/m/p/pe5/p5f/1647298.png?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/samsung-galaxy-tab-s10-ultra-14-6-djuim-12-gb-256-gb-seryi-128152132/?c=750000000",
          likes : 0,
          categoryId : 4
        } ,

        {
          id : 405 ,
          name : "Планшет Apple iPad Air 13 2025 Wi-Fi 13 дюйм 8 Гб/256 Гб голубой",
          description : "Планшет Apple iPad Air 13 2025 оснащён 13-дюймовым дисплеем Liquid Retina с разрешением 2560x1600 пикселей, обеспечивающим яркое и чёткое изображение. Устройство работает на процессоре Apple M2, который обеспечивает высокую производительность и энергоэффективность. В комплекте 8 Гб оперативной памяти и 256 Гб встроенной памяти для хранения данных. Планшет поддерживает iPadOS и имеет длительное время автономной работы, что делает его идеальным выбором для работы и развлечений.",
          price : 583_331,
          rating : 4.9,
          image : "https://resources.cdn-kaspi.kz/img/m/p/pec/p90/37105706.JPG?format=gallery-medium",
          link : "https://kaspi.kz/shop/p/apple-ipad-air-13-2025-wi-fi-13-djuim-8-gb-256-gb-goluboi-138227973/?c=750000000",
          likes : 0,
          categoryId : 4
        }


    // {
      //To do add 9 more items :
      // }
    ];

    constructor() {}

    getCategories() : Category[] {
      return this.category;
    }

    getProducts() : Product[] {
      return this.products;
    }
}
