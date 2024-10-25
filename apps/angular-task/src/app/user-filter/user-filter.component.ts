import { NgFor } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { UserActions } from '../../state/users.actions';
import { Filter } from '../../models/filter.model';
import { Subject, takeUntil } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { selectFilter } from '../../state/users.selectors';

@Component({
    selector: 'crx-user-filter',
    standalone: true,
    imports: [ReactiveFormsModule, MatRadioModule, NgFor, MatButtonModule,
        MatInputModule, MatFormFieldModule, MatCardModule],
    templateUrl: './user-filter.component.html',
    styleUrl: './user-filter.component.scss',
})
export class UserFilterComponent implements OnInit, OnDestroy {

    private readonly store = inject(Store);
    private readonly currentFilter = this.store.selectSignal(selectFilter);

    private destroyed$ = new Subject<void>();
    favoritesOptions = ['All', 'Favorites', 'Not Favorites'];
    filterForm = new FormGroup({

        searchTerm: new FormControl(this.currentFilter().searchTerm, { nonNullable: true }),
        favorites: new FormControl<Filter['favorites']>(this.currentFilter().favorites, { nonNullable: true }),

    });

    ngOnInit (): void {

        this.filterForm.valueChanges
        .pipe(takeUntil(this.destroyed$))
        .subscribe((filter: Filter) => {

            this.store.dispatch(UserActions.filterUsers({ filter }));

        });

    }

    ngOnDestroy (): void {

        this.destroyed$.next();
        this.destroyed$.complete();

    }

}
