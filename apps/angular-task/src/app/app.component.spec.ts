import { AppComponent } from './app.component';
import { render } from '@testing-library/angular';

async function setup () {

    const { fixture } = await render(AppComponent);
    return fixture.componentInstance;

}

describe('AppComponent', () => {

    it('should create', async () => {

        const component = await setup();
        expect(component).toBeTruthy();

    });

});
