import { Component, inject, input } from '@angular/core';
import { User } from '../../models/user.model';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserActions } from '../../state/users.actions';

@Component({
    selector: 'crx-user-card',
    standalone: true,
    imports: [MatCardModule, MatIconModule, MatButtonModule, RouterLink],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
})
export class UserCardComponent {

    private readonly store = inject(Store);

    user = input.required<User>();
    showProfileButton = input(true);

    toggleFavorite (userId: number): void {

        this.store.dispatch(UserActions.toggleFavoriteUser({ userId }));

    }

}
