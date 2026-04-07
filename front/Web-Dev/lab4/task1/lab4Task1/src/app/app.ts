import { Validations } from './../../../../task2/online-store/node_modules/express-rate-limit/dist/index.d';
// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';









//IF

// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     @if (isServerRunning) {
//       <span>Yes, the server is running</span>
//     } @else {
//       <span>No, the server is not running</span>
//     }
//   `,
// })
// export class App {
//   isServerRunning = true;
// }








//FOR

// @Component({
//   selector: 'app-root',
//   template: `@for (user of users; track user.id) {
//     <p>{{ user.name }} </p>
//   }`,
// })
// export class App {
//   users = [
//   {id: 0, name: 'Sarah'},
//   {id: 1, name: 'Amy'},
//   {id: 2, name: 'Rachel'},
//   {id: 3, name: 'Jessica'},
//   {id: 4, name: 'Poornima'},
// ];
// }


//Property building :

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.css'],
//   template: ` <div [contentEditable]="isEditable"></div> `,
// })


// export class App {
//   isEditable = true;
// }


//Event handling


// @Component({
//   selector: 'app-root',
//   template: `
//     <section (mouseover) = "showSecretMessage()">
//       There's a secret message for you, hover to reveal:
//       {{ message }}
//     </section>
//   `,
// })
// export class App {
//   message = '';

//   showSecretMessage() {
//     this.message = 'Way to go ! '
//   }
// }



//Component input properties
// import {Component} from '@angular/core';
// import {User} from './user';

// @Component({
//   selector: 'app-user',
//   template: ` <app-user name="Simran" /> `,
//   imports: [User],
// })


// export class App {}



//Component output properties :
// import {Component} from '@angular/core';
// import {Child} from './child';

// @Component({
//   selector: 'app-root',
//   template: `
//     <app-child (addItemEvent)="addItem($event)" />
//     <p>🐢 all the way down {{ items.length }}</p>
//   `,
//   imports: [Child],
// })
// export class App {
//   items = new Array();

//   addItem(item: string) {
//     this.items.push(item);
//   }
// }



//Differable Views :

// import {Component} from '@angular/core';
// import {Comments} from './comments';

// @Component({
//   selector: 'app-root',
//   template: `
//     <div>
//       <h1>How I feel about Angular</h1>
//       <article>

//       </article>
//      @defer (onviewport) {
//       <comments />
//      } @placeholder {
//         <p> Future comments </p>
//      } @loading (minimum 2s) {
//       <p>Loading comments...</p>
//      }
//     </div>
//   `,
//   imports: [Comments],
// })
// export class App {}

// import {Component} from '@angular/core';
// import { NgOptimizedImage, CurrencyPipe } from '@angular/common';

// @Component({
//   selector: 'app-user',
//   template: `
//     <p>Username: {{ username }}</p>
//     <p>Preferred Framework:</p>
//     <ul>
//       <li>
//         Static Image:
//         <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
//       </li>
//       <li>
//         Dynamic Image:
//         <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
//       </li>
//     </ul>
//   `,
//   imports: [NgOptimizedImage],
// })
// export class User {
//   logoUrl = '/logo.svg';
//   logoAlt = 'Angular logo';
//   username = 'youngTech';
// }



//Routing :
// import {Component} from '@angular/core';
// import {RouterOutlet} from '@angular/router';

// @Component({
//   selector: 'app-root',
//   template: `
//     <nav>
//       <a href="/">Home</a>
//       |
//       <a href="/user">User</a>
//     </nav>
//     <router-outlet />
//   `,
//   imports: [RouterOutlet],
// })
// export class App {}



//Define Route :

//Reactive forms :
// import {Component} from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


// @Component({
//   selector: 'app-root',
//   template: `
//     <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
//       <label>
//         Name
//         <input type="text" formControlName="name" />
//       </label>
//       <label>
//         Email
//         <input type="email" formControlName="email" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>

//     <h2>Profile Form</h2>
//     <p>Name : {{ profileForm.value.name }}</p>
//     <p>Email : {{ profileForm.value.email }}</p>
//   `,
//   imports: [ReactiveFormsModule ],
// })
// export class App {
//   profileForm = new FormGroup({
//     name: new FormControl(''),
//     email: new FormControl(''),
//   })

//   handleSubmit() {
//     alert(
//       this.profileForm.value.name + ' | ' + this.profileForm.value.email
//     );
//   }
//}


//Validating Forms :

// import {Component} from '@angular/core';
// import {FormGroup, FormControl} from '@angular/forms';
// import {ReactiveFormsModule , Validators} from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   template: `
//     <form [formGroup]="profileForm">
//       <input type="text" formControlName="name" name="name" />
//       <input type="email" formControlName="email" name="email" />
//       <button type="submit" [disabled]="!profileForm.valid">Submit</button>
//     </form>
//   `,
//   imports: [ReactiveFormsModule],
// })
// export class App {
//   profileForm = new FormGroup({
//     name: new FormControl('' , Validators.required),
//     email: new FormControl('' , [Validators.required , Validators.email]),
//   });
// }


//Injectable service  :

// import {Injectable} from '@angular/core';
// @Injectable({providedIn: 'root'})

// export class CarService {
//   cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

//   getCars(): string[] {
//     return this.cars;
//   }

//   getCar(id: number) {
//     return this.cars[id];
//   }
// }

// import {Component, inject} from '@angular/core';
// import {CarService} from './car.service';

// @Component({
//   selector: 'app-root',
//   template: '<p> {{ carService.getCars() }} </p>',
// })
// export class App {
//   carService = inject(CarService);
// }


// import {Component, inject} from '@angular/core';
// import {CarService} from './car.service';

// @Component({
//   selector: 'app-root',
//   template: `<p>Car Listing : {{ display }} </p>`,
// })
// export class App {
//   carServie = inject(CarService)
//   display = this.carServie.getCars().join(' * ');

// }


//PIPES : (transforming data)

import {Component} from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  template: ` {{ username | lowercase}} `,
  imports: [LowerCasePipe],
})
export class App {
  username = 'yOunGTECh';
}

//Formatting data with Pipes :


// import {Component} from '@angular/core';
// import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

// @Component({
//   selector: 'app-root',
//   template: `
//     <ul>
//       <li>Number with "decimal" {{ num | number : '3.2-2'}}</li>
//       <li>Date with "date" {{ birthday | date : 'medium' }}</li>
//       <li>Currency with "currency" {{ cost | currency }}</li>
//     </ul>
//   `,
//   imports: [DecimalPipe, DatePipe, CurrencyPipe],
// })
// export class App {
//   num = 103.1234;
//   birthday = new Date(2023, 3, 2);
//   cost = 4560.34;
// }



//Create a Pipe :
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse',
})

export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let reverse = '';
    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }
    return reverse;
  }
}



import {Component} from '@angular/core';
import {ReversePipe} from './reverse.pipe';

@Component({
  selector: 'app-root',
  template: ` Reverse Machine: {{ word  | ReversePipe}} `,
  imports: [],
})
export class App {
  word = 'You are a champion';
}
