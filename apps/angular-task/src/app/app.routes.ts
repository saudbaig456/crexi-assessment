import { Route } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const appRoutes: Route[] = [
    { path: '', component: HomePageComponent },
    { path: 'user/:id', component: UserProfileComponent },
    { path: '**', redirectTo: '' },
];
