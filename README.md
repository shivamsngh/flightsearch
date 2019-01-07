# Flight Search Engine

This project was started as an assessment part of hiring process for a place where thoughts actually Work ! :D
Use the mock json given below in this file.

## Tech Stack

Built with Angular 6 and RxJS 
Full Chunk Size is 387 KB (Tested on Firefox and Chrome)

# Road Map

* Server Side Rendering with Angular 7
* Maps based Airport selection, possibly with leaflet
* Open source Flight search API integration
* Nodejs based Express Server

## Cross Browser Compatibility

Chrome (Version 61.0.3163.100) -> Fully Functional 

Safari (Version 11.0 (12604.1.38.1.7)) -> Fully Functional 

Firefox (Version 62.0.3 (64-bit)) -> Fully Functional 

Opera (Version	48.0.2685.39) -> Fully Functional 

## Responsiveness

Mobile -> All size screens tested to be fully functional on Chrome Dev Tools

## Git
Git head not set

## Running unit tests

Unit Tests are written using Karma and Jasmine. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

End-To-End test is writen using protractor. Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## My Profile
You can find me on https//shivamsngh.github.io

# Basic Information​:
● Mock flight data
##### src/assets/data/flight-data.json
[{"arrivalTime":"6:00","date":"2020/11/01","departureTime":"5:00","destination":"Mumbai (BOM)","flightNo":"AI-101","name":"Air India","origin":"Pune (PNQ)","price":3525},{"arrivalTime":"9:50","date":"2020/11/01","departureTime":"7:20","destination":"Delhi (DEL)","flightNo":"AI-102","name":"Air India","origin":"Mumbai (BOM)","price":5635},{"arrivalTime":"7:10","date":"2020/11/01","departureTime":"6:10","destination":"Mumbai (BOM)","flightNo":"AI-103","name":"Air India","origin":"Pune (PNQ)","price":2537},{"arrivalTime":"10:20","date":"2020/11/01","departureTime":"8:10","destination":"Delhi (DEL)","flightNo":"AI-104","name":"Air India","origin":"Pune (PNQ)","price":4681},{"arrivalTime":"9:15","date":"2020/11/01","departureTime":"8:15","destination":"Bengaluru (BLR)","flightNo":"SJ-105","name":"SpiceJet","origin":"Pune (PNQ)","price":3549},{"arrivalTime":"13:00","date":"2020/11/01","departureTime":"11:00","destination":"Delhi (DEL)","flightNo":"SJ-106","name":"SpiceJet","origin":"Bengaluru (BLR)","price":5645},{"arrivalTime":"10:00","date":"2020/11/01","departureTime":"8:00","destination":"Delhi (DEL)","flightNo":"SJ-107","name":"SpiceJet","origin":"Bengaluru (BLR)","price":5000},{"arrivalTime":"10:30","date":"2020/11/01","departureTime":"8:00","destination":"Bengaluru (BLR)","flightNo":"TW-108","name":"Air Taiwan","origin":"Mumbai (BOM)","price":4004},{"arrivalTime":"15:30","date":"2020/11/01","departureTime":"12:00","destination":"Delhi (DEL)","flightNo":"TW-109","name":"Air Taiwan","origin":"Bengaluru (BLR)","price":3495},{"arrivalTime":"11:30","date":"2020/11/01","departureTime":"9:00","destination":"Delhi (DEL)","flightNo":"AI-110","name":"Air India","origin":"Mumbai (BOM)","price":4137},{"arrivalTime":"16:30","date":"2020/11/01","departureTime":"14:00","destination":"Bengaluru (BLR)","flightNo":"AI-111","name":"Air India","origin":"Delhi (DEL)","price":5217},{"arrivalTime":"16:30","date":"2020/11/01","departureTime":"14:30","destination":"Mumbai (BOM)","flightNo":"AI-112","name":"Air India","origin":"Delhi (DEL)","price":4170},{"arrivalTime":"22:30","date":"2020/11/01","departureTime":"20:00","destination":"Mumbai (BOM)","flightNo":"AI-113","name":"Air India","origin":"Bengaluru (BLR)","price":5132},{"arrivalTime":"22:45","date":"2020/11/01","departureTime":"21:30","destination":"Mumbai (BOM)","flightNo":"AI-114","name":"Air India","origin":"Pune (PNQ)","price":2001},{"arrivalTime":"22:10","date":"2020/11/01","departureTime":"20:00","destination":"Pune (PNQ)","flightNo":"AI-115","name":"Air India","origin":"Delhi (DEL)","price":5233},{"arrivalTime":"19:30","date":"2020/11/01","departureTime":"17:20","destination":"Bengaluru (BLR)","flightNo":"AI-116","name":"Air India","origin":"Pune (PNQ)","price":6348},{"arrivalTime":"14:15","date":"2020/11/01","departureTime":"13:15","destination":"Pune (PNQ)","flightNo":"AI-117","name":"Air India","origin":"Mumbai (BOM)","price":5117},{"arrivalTime":"6:00","date":"2020/11/02","departureTime":"5:00","destination":"Mumbai (BOM)","flightNo":"AI-119","name":"Air India","origin":"Delhi (DEL)","price":3525},{"arrivalTime":"9:50","date":"2020/11/02","departureTime":"7:20","destination":"Pune (PNQ)","flightNo":"AI-120","name":"Air India","origin":"Mumbai (BOM)","price":5635},{"arrivalTime":"6:58","date":"2020/11/02","departureTime":"6:10","destination":"Pune (PNQ)","flightNo":"AI-121","name":"Air India","origin":"Mumbai (BOM)","price":2537},{"arrivalTime":"10:20","date":"2020/11/02","departureTime":"8:10","destination":"Pune (PNQ)","flightNo":"AI-131","name":"Air India","origin":"Delhi (DEL)","price":4681},{"arrivalTime":"9:15","date":"2020/11/02","departureTime":"8:15","destination":"Bengaluru (BLR)","flightNo":"SJ-115","name":"SpiceJet","origin":"Delhi (DEL)","price":3549},{"arrivalTime":"13:00","date":"2020/11/02","departureTime":"11:00","destination":"Pune (PNQ)","flightNo":"SJ-116","name":"SpiceJet","origin":"Bengaluru (BLR)","price":5645},{"arrivalTime":"10:00","date":"2020/11/02","departureTime":"8:00","destination":"Bengaluru (BLR)","flightNo":"SJ-117","name":"SpiceJet","origin":"Delhi (DEL)","price":5000},{"arrivalTime":"10:30","date":"2020/11/02","departureTime":"8:00","destination":"Bengaluru (BLR)","flightNo":"TW-118","name":"Air Taiwan","origin":"Delhi (DEL)","price":4004},{"arrivalTime":"15:30","date":"2020/11/02","departureTime":"12:00","destination":"Mumbai (BOM)","flightNo":"TW-119","name":"Air Taiwan","origin":"Bengaluru (BLR)","price":3495},{"arrivalTime":"11:30","date":"2020/11/02","departureTime":"9:00","destination":"Mumbai (BOM)","flightNo":"AI-130","name":"Air India","origin":"Delhi (DEL)","price":4137},{"arrivalTime":"16:30","date":"2020/11/02","departureTime":"14:00","destination":"Delhi (DEL)","flightNo":"AI-131","name":"Air India","origin":"Bengaluru (BLR)","price":5217},{"arrivalTime":"16:30","date":"2020/11/02","departureTime":"14:30","destination":"Delhi (DEL)","flightNo":"AI-132","name":"Air India","origin":"Mumbai (BOM)","price":4170},{"arrivalTime":"22:30","date":"2020/11/02","departureTime":"20:00","destination":"Bengaluru (BLR)","flightNo":"AI-133","name":"Air India","origin":"Mumbai (BOM)","price":5132},{"arrivalTime":"22:45","date":"2020/11/02","departureTime":"21:30","destination":"Pune (PNQ)","flightNo":"AI-134","name":"Air India","origin":"Mumbai (BOM)","price":2001},{"arrivalTime":"22:10","date":"2020/11/02","departureTime":"20:00","destination":"Delhi (DEL)","flightNo":"AI-135","name":"Air India","origin":"Pune (PNQ)","price":5233},{"arrivalTime":"19:30","date":"2020/11/02","departureTime":"17:20","destination":"Pune (PNQ)","flightNo":"AI-136","name":"Air India","origin":"Bengaluru (BLR)","price":6348},{"arrivalTime":"14:15","date":"2020/11/02","departureTime":"13:15","destination":"Mumbai (BOM)","flightNo":"AI-137","name":"Air India","origin":"Pune (PNQ)","price":5117}]

##### src/components/search-box component
● Search Box
##### src/components/search-box component
● Flights List
##### src/components/flight-details-card component
● Slider Component
##### src/components/search-box component
● Framework
##### Angular 6
● Tests
##### e2e & unit
##### all components have unit test case file as COMPONENT_NAME.spec.ts



