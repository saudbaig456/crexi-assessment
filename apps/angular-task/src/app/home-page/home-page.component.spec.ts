import { HomePageComponent } from './home-page.component';
import { render } from '@testing-library/angular';
import { provideMockStore } from '@ngrx/store/testing';
import { NgFor } from '@angular/common';
import { selectFilteredUsers } from '../../state/users.selectors';
import { User } from '../../models/user.model';
import { Component, input } from '@angular/core';

const USERS: User[] = [
    {
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
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        },
        isFavorite: false
    },
];

@Component({
    standalone: true,
    selector: 'crx-user-card'
})
class MockUserCardComponent {

    user = input.required<User>();

}

@Component({
    standalone: true,
    selector: 'crx-user-filter'
})
class MockUserFilterComponent {}

async function setup (users: User[]) {

    const { container } = await render(HomePageComponent, {
        componentImports: [NgFor, MockUserCardComponent, MockUserFilterComponent],
        providers: [
            provideMockStore({
                selectors: [{ selector: selectFilteredUsers, value: users }]
            })
        ]
    });

    return container;

}

describe('HomePageComponent', () => {

    it('should render', async () => {

        const container = await setup(USERS);
        expect(container.querySelectorAll('crx-user-card')).toHaveLength(2);

    });

});
