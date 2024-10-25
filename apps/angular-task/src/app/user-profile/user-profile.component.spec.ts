import { selectUserById } from './../../state/users.selectors';
import { provideMockStore } from '@ngrx/store/testing';
import { UserProfileComponent } from './user-profile.component';
import { render } from '@testing-library/angular';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';

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

async function setup () {

    const mockActivatedRoute = {
        paramMap: of(convertToParamMap({ id: 1 }))
    };

    const { container } = await render(UserProfileComponent, {
        componentImports: [NgIf, AsyncPipe, UserCardComponent],
        providers: [
            provideMockStore({ selectors: [{ selector: selectUserById(1), value: USER }] }),
            { provide: ActivatedRoute, useValue: mockActivatedRoute }
        ]
    });
    return {
        container
    };

}

describe('UserProfileComponent', () => {

    it('should create' , async () => {

        await setup();

    });

});
