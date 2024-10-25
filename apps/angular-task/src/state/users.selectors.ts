import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../models/user.model';
import { Filter } from '../models/filter.model';

export const selectUsers = createFeatureSelector<ReadonlyArray<User>>('users');

export const selectFilter = createFeatureSelector<Filter>('filter');

export const selectUserById = (userId: number) => createSelector(
    selectUsers,
    (users: ReadonlyArray<User>) => users.find((user) => user.id === userId)
);

export const selectFilteredUsers = createSelector(
    selectUsers,
    selectFilter,
    (users: ReadonlyArray<User>, filter: Filter) => {

        // if no filter or undefined return all users
        if(!filter || filter.favorites === undefined) {

            return users;

        }

        const searchTermLower = filter.searchTerm ? filter.searchTerm.toLowerCase() : '';

        return users.filter((user) => {

            // check favorites condition
            const isFavoriteMatch = filter.favorites === 'All'
                || (filter.favorites === 'Favorites' && user.isFavorite)
                || (filter.favorites === 'Not Favorites' && !user.isFavorite);

            // check search term condition
            const isSearchMatch = !filter.searchTerm
                || user.name.toLowerCase().includes(searchTermLower);

            return isFavoriteMatch && isSearchMatch;

        });

    }
);
