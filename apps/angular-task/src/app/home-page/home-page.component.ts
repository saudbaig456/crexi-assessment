import { Component, inject, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { Store } from '@ngrx/store';
import { UserApiActions } from '../../state/users.actions';
import { selectFilteredUsers } from '../../state/users.selectors';
import { UserFilterComponent } from '../user-filter/user-filter.component';

@Component({
    selector: 'crx-home-page',
    standalone: true,
    imports: [NgFor, UserCardComponent, UserFilterComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {

    private readonly store = inject(Store);
    protected readonly users = this.store.selectSignal(selectFilteredUsers);

    ngOnInit (): void {

        this.store.dispatch(UserApiActions.fetchUsers());

    }

}
