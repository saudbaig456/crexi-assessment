import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../models/user.model';
import { Filter } from '../models/filter.model';

export const UserActions = createActionGroup({
    source: 'Users',
    events: {
        'Toggle Favorite User': props<{ userId: number }>(),
        'Filter Users': props<{ filter: Filter }>(),
    }
});

export const UserApiActions = createActionGroup({
    source: 'Users API',
    events: {
        'Fetch Users': emptyProps(),
        'Fetch Users Success': props<{ users: User[] }>(),
    }
});
