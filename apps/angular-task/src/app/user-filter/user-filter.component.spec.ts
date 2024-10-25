import { UserFilterComponent } from './user-filter.component';
import { render } from '@testing-library/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { selectFilter } from '../../state/users.selectors';

async function setup () {

    await render(UserFilterComponent, {
        providers: [provideMockStore({ selectors: [{ selector: selectFilter, value: {
            favorites: 'All',
            searchTerm: ''
        } }] })]
    });

}

describe('UserFilterComponent', () => {

    it('should create', async () => {

        await setup();

    });

});
