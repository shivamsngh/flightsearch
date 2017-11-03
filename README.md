# Flight Search Engine

This project was built for an assessment as a part of hiring process for a place where thoughts actually Work ! :D

## Cross Browser Compatibility

Chrome (Version 61.0.3163.100) -> Fully Functional 

Safari (Version 11.0 (12604.1.38.1.7)) -> Fully Functional 

Firefox (Version 56.0.1) -> Functional except HTML5 datepicker, fallback TEXT accepting only YYYY-DD-MM pattern 

Opera (Version	48.0.2685.39) -> Fully Functional 

## Responsiveness

Mobile -> All size screens tested to be fully functional on Chrome Dev Tools


## Production Build

The production build is in the /dist folder from where the build can be used directly.
NOTE: Directly opening index.html in browser might give a "CORS" or Cross origin error because of the included flight-data.json file which is serving the dummy data for us.
**Most Flight data are from Mumbai to Kolkata on 1st of November 2017**
**Use range bar to modify range if initial request shows no flights**


## Git
Git head not set

## Running unit tests

Unit Tests are written using Karma and Jasmine. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

End-To-End test is writen using protractor. Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## My Profile
You can find me on https//shivamsngh.github.io

# Problem statement​:
● Create a flight JSON data object for your all flights available to make the search happen.
##### src/assets/data/flight-data.json
● Take the User input from the search form and perform a search on the flight JSON data
and display the valid search results in the results section.
##### src/components/search-box component
● There are two tabs for return and one way search form, the return date should be visible
on basis of the tab selected.
##### src/components/search-box component
##### src/components/flight-details-card component
##### src/components/info-box component
● Slider should refine the search results based on the selected price range.
##### src/components/search-box component
● Feel free to use any JS frameworks (like Angular or ReactJS) or Core JS to build this
application.
##### Angular 4+
● Test your code with some unit tests
##### e2e
##### all components have unit test case file as COMPONENT_NAME.spec.ts



