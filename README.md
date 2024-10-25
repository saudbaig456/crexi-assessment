# Angular Task

## Design

### Functionality
* Displays cards from JSONplaceholder users on home page
* Has a profile page at `/users/:id` and this is accessible through an icon on the card
* Provides a filter to display favorites and a search filter for users by name
* Favorite button is implemented and functional on both card and profile view
* Passes when running `npx nx affected -t lint test build`

### Additional Packages
* NGRX Devtools
* Angular testing library
* Testing library DOM

### Architecture/Design Thinking
* Multiple components used to foster encapsulation and reusability
* The use of signals, NgRx, and RxJS allow for reactive programming and support extensibility
and extensibility
* NgRx feature state for simplifying state management
* Models for data
* Separate service for delegation
* Tests focused on key parts of some components using the arrange, act and assert pattern
* Utilized [SIFERS](https://medium.com/@kolodny/testing-with-sifers-c9d6bb5b362) in tests


## Potential Improvements
As most of the time spent in this assessment was to achieve the core functionality 
with best practices and state management the following are outlined as potential 
future areas of improvement.

* Application styling, responsive design, better UI/UX 
* Adding debounce specifically for search functionality
* Extend testing coverage to additional application parts, including state and other components, as time constraints limited the initial test scope 
* Error handling and loading states
* e2e tests
* Initially the card on the home page was a link; however, this prevented the favorite button from being pressed
