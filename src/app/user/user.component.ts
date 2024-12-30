import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // placing required: true allows us to tell Angular that we will provide a value
  // Compared to using the bang operator (!), we are telling Angular that there will be a value
  // but that is not a guarantee
  @Input({ required: true }) avatar!: string; // using the required will show an error on our IDE compared to not showing anything at all with the bang operator
  @Input({ required: true }) name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
}
