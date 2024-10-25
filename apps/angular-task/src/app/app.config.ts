import { usersReducer } from './../state/users.reducer';
import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import {
    provideRouter,
    withComponentInputBinding,
    withInMemoryScrolling,
    withRouterConfig,
    withViewTransitions,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import  *  as appEffects from '../state/users.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { filterReducer } from '../state/filter.reducer';

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch()),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            appRoutes,
            withComponentInputBinding(),
            withRouterConfig({
                onSameUrlNavigation: 'reload',
                paramsInheritanceStrategy: 'always',
            }),
            withViewTransitions(),
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled',
            })
        ),
        provideAnimationsAsync(),
        provideStore({ users: usersReducer, filter: filterReducer }),
        provideStoreDevtools({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(), // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            // eslint-disable-next-line max-len
            trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
            connectInZone: true // If set to true, the connection is established within the Angular zone
        }),
        provideEffects(appEffects)
    ],
};
