import { switchMap } from 'rxjs';
import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserById } from '../../state/users.selectors';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
    selector: 'crx-user-profile',
    standalone: true,
    imports: [NgIf, AsyncPipe, UserCardComponent],
    templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {

    private route = inject(ActivatedRoute);
    private store = inject(Store);
    protected user$ = this.route.paramMap.pipe(switchMap((paramMap) => {

        const userId = Number(paramMap.get('id'));
        return this.store.select(selectUserById(userId));

    }));

}
