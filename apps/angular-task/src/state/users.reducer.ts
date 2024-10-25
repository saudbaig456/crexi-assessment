import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import { UserActions, UserApiActions } from './users.actions';

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
    initialState,
    on(UserApiActions.fetchUsersSuccess, (state, { users }) => {

        const userMap = new Map<number, User>(state.map((user) => [user.id, user]));

        // returns a new array while preserving any set isFavorite values
        return users.map((user) => {

            const existingUser = userMap.get(user.id);

            return {
                ...user,
                isFavorite: existingUser ? existingUser.isFavorite : false
            };

        });

    }),
    on(UserActions.toggleFavoriteUser, (state, { userId }) =>
        state.map((user) => {

            if(user.id === userId) {

                return {
                    ...user,
                    isFavorite: !user.isFavorite
                };

            }
            return user;

        }),),
);
