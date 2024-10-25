import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../services/users.service';
import { UserApiActions } from './users.actions';
import { exhaustMap, map } from 'rxjs';

export const loadUsers = createEffect(
    (actions$ = inject(Actions), usersService = inject(UsersService)) =>
        actions$.pipe(
            ofType(UserApiActions.fetchUsers),
            exhaustMap(() =>
                usersService.getUsers()
                .pipe(map((users) => UserApiActions.fetchUsersSuccess({ users })),),),
        ),
    { functional: true }
);
