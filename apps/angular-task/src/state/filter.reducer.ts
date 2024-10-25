import { createReducer, on } from '@ngrx/store';
import { Filter } from '../models/filter.model';
import { UserActions } from './users.actions';

export const initialState: Filter = { favorites: 'All', searchTerm: '' };

export const filterReducer = createReducer(
    initialState,
    on(UserActions.filterUsers, (state, { filter }) => filter)
);
