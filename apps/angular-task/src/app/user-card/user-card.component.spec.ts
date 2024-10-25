import { render } from '@testing-library/angular';
import { UserCardComponent } from './user-card.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { fireEvent, screen } from '@testing-library/dom';
import { UserActions } from '../../state/users.actions';

const USER = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496'
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    },
    isFavorite: false
};

async function setup (showProfile?: boolean) {

    await render(UserCardComponent, {
        providers: [
            provideMockStore()
        ],
        componentInputs: {
            user: USER,
            showProfileButton: showProfile === undefined ? true : showProfile,
        }
    });

    const store = TestBed.inject(MockStore);
    store.dispatch = jest.fn();
    return {
        dispatchSpy: store.dispatch
    };

}

describe('UserCardComponent', () => {

    it('renders the card correctly', async () => {

        await setup();
        const title = screen.getByText(/leanne/i);
        expect(title).toBeTruthy();

    });
    it('dispatches action on favorite toggle', async () => {

        const { dispatchSpy } = await setup();
        const favButton = screen.getByRole('button', { name: /favorite this profile/ });
        fireEvent.click(favButton);
        expect(dispatchSpy).toHaveBeenCalledWith(UserActions.toggleFavoriteUser({ userId: USER.id }));

    });
    describe('profile button', () => {

        it('is visible when showProfile true', async () => {

            await setup();
            const showProfileButton = screen.queryByRole('link', { name: /view profile/i });
            expect(showProfileButton).toBeTruthy();

        });
        it('is not visible when showProfile true', async () => {

            await setup(false);
            const showProfileButton = screen.queryByRole('link', { name: /view profile/i });
            expect(showProfileButton).toBeFalsy();

        });

    });

});
