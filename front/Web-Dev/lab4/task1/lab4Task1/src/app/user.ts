// import {Component} from '@angular/core';
// import {FormsModule} from '@angular/forms';

// @Component({
//   selector: 'app-user',
//   template: `
//     <p>Username: {{ username }}</p>
//     <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
//     <label for="framework">Favorite Framework:
//       <input id ="framework" type="text" [(ngModel)]="favoriteFramework">
//     </label>
//   `,
//   imports: [FormsModule],
// })
// export class User {
//   username = 'youngTech';
//   favoriteFramework = '';
// }


//Getting form control values :
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{ favoriteFramework }} </p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class User {
  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
