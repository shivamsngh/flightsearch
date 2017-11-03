webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\r\n    grid-area: header;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 10;\r\n    padding: 20px 0px 20px 20px;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);\r\n    min-height: 20px;\r\n    background: #1976d2;\r\n    color:white;\r\n    text-transform: uppercase;\r\n}\r\n.header h1{\r\ndisplay: inline;\r\nfont-size: 25px;\r\n}\r\n\r\n.footer{\r\n  grid-area: footer;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n  padding: 20px 0px 20px 20px;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);\r\n  min-height: 20px;\r\n  background: #1976d2;\r\n  color:white;\r\n  text-transform: uppercase;\r\n  /* position: absolute; */\r\n}\r\n\r\ndiv.search-box{\r\n  background:#1D1F20;\r\n  height: 100%\r\n}\r\n\r\ndiv.flight-card{\r\n  /* margin:30px; */\r\n  grid-area: flight-card;\r\n  width:100%;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  background-image:url(" + __webpack_require__("../../../../../src/assets/img/flightcover.jpg") + ");\r\n  background-size:contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  transition: background-image 0.5s linear;\r\n  -webkit-transition: background-image 0.5s linear;\r\n  \r\n}\r\n/* WHILE SEARCHING FOR COMPONENTS */\r\n.loading{\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/Blocks.svg") + ");\r\n  background-size:contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\ndiv.info-box{\r\n  /* margin:30px; */\r\n  width:100%;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n}\r\n.wrapper{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template-areas: \"header header\"\r\n                         \"search-box flight-card\"\r\n                         \"footer footer\";\r\n  \r\n    -ms-grid-columns: 25% 1fr;\r\n  \r\n        grid-template-columns: 25% 1fr;\r\n  \r\n    -ms-grid-rows: 60px \r\n              1fr \r\n              0px;\r\n  \r\n        grid-template-rows: 60px \r\n              1fr \r\n              0px;\r\n  \r\n    min-height: 100vh;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n\t.wrapper {\r\n\t\tgrid-template-areas: \"header\"\r\n\t\t                     \"search-box\"\r\n\t\t                     \"info-box\"\r\n\t\t                     \"flight-card\"\r\n\t\t                     \"footer\";\r\n\r\n\t\t-ms-grid-columns: 100%;\r\n\r\n\t\t    grid-template-columns: 100%;\r\n\t\t-ms-grid-rows: 70px \r\n\t\t\t\t\t\t\t400px \r\n\t\t\t\t\t\t\t0.1fr\r\n\t\t\t\t\t\t\t0.5fr \r\n              30px;\r\n\t\t    grid-template-rows: 70px \r\n\t\t\t\t\t\t\t400px \r\n\t\t\t\t\t\t\t0.1fr\r\n\t\t\t\t\t\t\t0.5fr \r\n              30px;\r\n    overflow: scroll;\r\n  }\r\n}\r\n\r\n/* FLying Animation */\r\n\r\ndiv.toony-flight{\r\n  position: fixed;\r\n  font-size: 300px;\r\n  top:30%;\r\n  left: -1100px;\r\n  visibility: hidden;\r\n  display: none;\r\n  color:#1976D2;\r\n}\r\n.fly{\r\n  visibility: visible !important;\r\n  display: block !important;\r\n  animation-name: flyHigh;\r\n  -webkit-animation-duration: 4s;\r\n          animation-duration: 4s;\r\n  -webkit-animation-name: flyHigh; /* Safari 4.0 - 8.0 */\r\n  -webkit-animation-duration: 3s;\r\n}\r\n@-webkit-keyframes flyHigh {\r\n  0%   {left: 0px;}\r\n  \r\n  100% {left: 1500px;}\r\n}\r\n@keyframes flyHigh {\r\n  0%   {left: 0px;}\r\n  \r\n  100% {left: 1500px;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"header\"><h1>{{title}}</h1></div>\n  <div class=\"search-box\">\n    <search-box (onSearchResults)=\"updateInputParams($event)\" (loadingComponent)=\"swapLoading($event)\"></search-box>\n  </div>\n \n  <div class=\"flight-card\" [ngClass]=\"{'loading':loading}\">\n    <flight-details-card [searchResults]=\"searchResults\" (fly)=\"updateFlying($event)\"></flight-details-card>\n  </div>\n</div>\n<footer>\n  <div class=\"footer\">\n    <sub>&copy; All rights open.</sub>\n  </div>\n</footer>\n<div class=\"toony-flight\" [ngClass]=\"{'fly':fly}\" (animationend)=\"fly=false\"><span>&#9992;</span></div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Flight Search Engine';
        this.loading = false;
        this.fly = false;
        this.bookingInfo = {
            originCity: '',
            destinationCity: '',
            departureDate: '',
            returnDate: '',
            passengers: 1,
            oneway: true,
            refine: 1000
        };
        this.searchResults = {
            oneWayFlights: [],
            returningFlights: [],
            oneway: true,
            bookingInfo: this.bookingInfo
        };
    }
    /**
     * Listener for EventEmitter on child pages.
     * @param searchResults
     */
    AppComponent.prototype.updateInputParams = function (searchResults) {
        console.log('Ok got that emitted value mate');
        this.bookingInfo = searchResults.bookingInfo;
        this.searchResults = searchResults;
    };
    AppComponent.prototype.swapLoading = function (loading) {
        console.log("Swapping", loading);
        this.loading = loading;
    };
    /**
     * The easter egg animation for
     * adding fly class to element
     * @param fly
     */
    AppComponent.prototype.updateFlying = function (fly) {
        this.fly = fly;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export providers */
/* unused harmony export imports */
/* unused harmony export declarations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_search_box_search_box_component__ = __webpack_require__("../../../../../src/components/search-box/search-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_info_box_info_box_component__ = __webpack_require__("../../../../../src/components/info-box/info-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_flight_details_card_flight_details_card_component__ = __webpack_require__("../../../../../src/components/flight-details-card/flight-details-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_search_service__ = __webpack_require__("../../../../../src/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//bas Application

//components



//services

function providers() {
    return [__WEBPACK_IMPORTED_MODULE_8__services_search_service__["a" /* SearchService */]];
}
function imports() {
    return [
        __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
    ];
}
function declarations() {
    return [
        __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        __WEBPACK_IMPORTED_MODULE_5__components_search_box_search_box_component__["a" /* SearchBoxComponent */],
        __WEBPACK_IMPORTED_MODULE_6__components_info_box_info_box_component__["a" /* InfoBoxComponent */],
        __WEBPACK_IMPORTED_MODULE_7__components_flight_details_card_flight_details_card_component__["a" /* FlightDetailsCardComponent */]
    ];
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: declarations(),
        imports: imports(),
        providers: providers(),
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/assets/img/Blocks.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Blocks.531cd461b4910c3f68f8.svg";

/***/ }),

/***/ "../../../../../src/assets/img/aero.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aero.e064aaba129e9dd505fa.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/flightcover.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "flightcover.2fb05eef39429c26cc33.jpg";

/***/ }),

/***/ "../../../../../src/components/flight-details-card/flight-details-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.onwardDetails, .returnDetails, .booking{\r\n    padding:5px;\r\n    display: inline-block;\r\n    \r\n}\r\n.onwardDetails h1, .returnDetails h1{\r\n    color:rgb(241, 87, 87);\r\n    margin:0px !important;\r\n}\r\n\r\ndiv.booking{\r\n    display: -ms-inline-grid;\r\n    display: inline-block;\r\n    float: right;\r\n}\r\n@media screen and (max-width: 600px){\r\n    div.booking{\r\n        float: none;\r\n    }\r\n}\r\ndiv.bookingImage{\r\n    height: 80px;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/aero.jpg") + ");\r\n    background-size:cover;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n    .booking{\r\n        display: -ms-inline-grid;\r\n        display: inline-grid;\r\n        float: none;\r\n    }   \r\n}\r\n.booking button{\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    width: 180px;\r\n    margin-top: 15px;\r\n    background: #1976D2;\r\n    color: #fff;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.onwardDetails h1,onwardDetails h2{\r\nmargin:0.5em;\r\n}\r\n.flightCards {\r\n    /* Add shadows to create the \"card\" effect */\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    width:80%;\r\n    padding:20px;\r\n    margin:auto;\r\n    margin-top:10px;\r\n    background:lavender;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* On mouse-over, add a deeper shadow */\r\n.flightCards:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n/* No flights case */\r\ndiv.noflights{\r\nfont-size: 16px;\r\npadding: 10px;\r\nwidth: 180px;\r\nmargin: auto;\r\nbackground: #1D1F20;\r\ncolor:#fff;\r\nposition: relative;\r\ntop:100px;\r\n}\r\n\r\ndiv.idle{\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    margin: auto;\r\n    background: lightblue;\r\n    color:grey;\r\n    position: relative;\r\n    /* top:100px; */\r\n    box-shadow: border;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/flight-details-card/flight-details-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"info-box\" *ngIf=\"searchResults.bookingInfo.destinationCity && searchResults!==undefined\">\n  <info-box [queriedData]=\"searchResults.bookingInfo\"></info-box>\n</div>\n\n<div *ngFor=\"let flight of searchResults.oneWayFlights;let i=index\">\n  <div class=\"flightCards\" *ngIf=\"searchResults.bookingInfo.oneway\">\n    <div class=\"onwardDetails\">\n      <h1>Rs. {{flight.amount}}</h1>\n      <sub>{{flight.flightNo}}</sub>\n      <h4>{{flight.origin.toUpperCase()}}&nbsp;>>&nbsp;{{flight.destination.toUpperCase()}}</h4>\n      <h4>Depart:{{flight.time.depart|date:'jm'}}</h4>\n      <h4>Arrives:{{flight.time.arrive|date:'jm'}}</h4>\n    </div>\n    <div class=\"booking\">\n      <div class=\"bookingImage\"></div>\n      <button (click)=\"bookThisFlight($event, i)\">Book this Flight</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"flightCards\" *ngFor=\"let flight of searchResults.returningFlights;let i=index\">\n  <div *ngIf=\"!searchResults.bookingInfo.oneway && searchResults.returningFlights[i] !== undefined && searchResults.oneWayFlights[i]!==undefined\">\n    <div class=\"onwardDetails\">\n      <h1>Rs. {{searchResults.oneWayFlights[i].amount}}</h1>\n      <sub>{{searchResults.oneWayFlights[i].flightNo}}</sub>\n      <h4>{{searchResults.oneWayFlights[i].origin.toUpperCase()}}&nbsp;>>&nbsp;{{searchResults.oneWayFlights[i].destination.toUpperCase()}}</h4>\n      <h4>Depart:{{searchResults.oneWayFlights[i].time.depart|date:'jm'}}</h4>\n      <h4>Arrives:{{searchResults.oneWayFlights[i].time.arrive|date:'jm'}}</h4>\n    </div>\n    <div class=\"returnDetails\">\n      <div *ngIf=\"searchResults.returningFlights.length>0 && searchResults.returningFlights[i] !== undefined && searchResults.oneWayFlights[i]!==undefined\">\n        <h1>Rs. {{flight.amount}}</h1>\n        <sub>{{flight.flightNo}}</sub>\n        <h4>{{flight.origin.toUpperCase()}}&nbsp;>>&nbsp;{{flight.destination.toUpperCase()}}</h4>\n        <h4>Depart:{{flight.time.depart|date:'jm' }}</h4>\n        <h4>Arrives:{{flight.time.arrive |date:'jm'}}</h4>\n      </div>\n    </div>\n    <div class=\"booking\">\n      <div class=\"bookingImage\"></div>\n      <button (click)=\"bookThisFlight($event, i)\">Book this Flight</button>\n    </div>\n  </div>\n</div>\n\n<!-- No Results detected -->\n<div class=\"noflights\" *ngIf=\"searchResults.oneWayFlights.length==0 && searchResults.bookingInfo.destinationCity\">\n  <p>Oops seems there is no flight in this range or this date available. Why don't you try for another combination.</p>\n</div>\n\n<!-- Starting search -->\n<div class=\"idle\" *ngIf=\"!searchResults.bookingInfo.destinationCity\">\n  <p>Go on Search Something. It's not that hard to fly.</p>\n</div>"

/***/ }),

/***/ "../../../../../src/components/flight-details-card/flight-details-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightDetailsCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_search_response__ = __webpack_require__("../../../../../src/models/search-response.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_search_response___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_search_response__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightDetailsCardComponent = (function () {
    function FlightDetailsCardComponent() {
        this.fly = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.bookingIcons = "./assets/img/aero.jpg";
    }
    FlightDetailsCardComponent.prototype.ngOnInit = function () {
    };
    FlightDetailsCardComponent.prototype.ngOnChanges = function () {
        console.log(this.searchResults);
    };
    /**
     * Click handler for book button
     * @param e
     * @param index
     */
    FlightDetailsCardComponent.prototype.bookThisFlight = function (e, index) {
        console.log(e, index);
        this.fly.emit(true);
    };
    return FlightDetailsCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_search_response__["SearchResponse"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_search_response__["SearchResponse"]) === "function" && _a || Object)
], FlightDetailsCardComponent.prototype, "searchResults", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], FlightDetailsCardComponent.prototype, "fly", void 0);
FlightDetailsCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'flight-details-card',
        template: __webpack_require__("../../../../../src/components/flight-details-card/flight-details-card.component.html"),
        styles: [__webpack_require__("../../../../../src/components/flight-details-card/flight-details-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FlightDetailsCardComponent);

var _a;
//# sourceMappingURL=flight-details-card.component.js.map

/***/ }),

/***/ "../../../../../src/components/info-box/info-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".breadcrumbs{\r\n    width:100%;\r\n    background: #1D1F20;\r\n    color:white;\r\n}\r\n.breadcrumbs h3{\r\n    display: inline-block;\r\n    padding: 12px;\r\n}\r\n.breadcrumbs p{\r\n    padding: 2px;\r\n}\r\n.flightTimingInfo{\r\n    float: right;\r\n    display: inline;\r\n    margin-right: 3px;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n   .flightTimingInfo{\r\n    float:none;\r\n   }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/info-box/info-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\n    <h3 *ngIf=\"queriedData.oneway\">{{queriedData.originCity.toUpperCase()}}&nbsp;<span>&#9992;</span>&nbsp;{{queriedData.destinationCity.toUpperCase()}}</h3>\n    <h3 *ngIf=\"!queriedData.oneway\">{{queriedData.originCity.toUpperCase()}}&nbsp;<span>&#9992;</span> &nbsp;{{queriedData.destinationCity.toUpperCase()}}&nbsp;<span>&#9992;</span>&nbsp;{{queriedData.originCity.toUpperCase()}}</h3>\n    <div class=\"flightTimingInfo\">\n        <p>Departs:{{queriedData.departureDate|date}}</p>\n        <p *ngIf=\"!queriedData.oneway\">Returns:{{queriedData.returnDate |date}}</p>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/components/info-box/info-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_booking_info__ = __webpack_require__("../../../../../src/models/booking-info.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_booking_info___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_booking_info__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoBoxComponent = (function () {
    function InfoBoxComponent() {
    }
    InfoBoxComponent.prototype.ngOnInit = function () {
    };
    return InfoBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_booking_info__["BookingInformation"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_booking_info__["BookingInformation"]) === "function" && _a || Object)
], InfoBoxComponent.prototype, "queriedData", void 0);
InfoBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'info-box',
        template: __webpack_require__("../../../../../src/components/info-box/info-box.component.html"),
        styles: [__webpack_require__("../../../../../src/components/info-box/info-box.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InfoBoxComponent);

var _a;
//# sourceMappingURL=info-box.component.js.map

/***/ }),

/***/ "../../../../../src/components/search-box/search-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div ul{\r\n    color:white;\r\n    list-style: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n\r\n}\r\n\r\ndiv ul li{\r\npadding:10px;\r\n}\r\n\r\ndiv.suggestion ul:after{\r\n    text-align: center;\r\n    width:200px;\r\n    position: absolute;\r\n    margin-left:0.3em;\r\n    background:gray;\r\n}\r\nli:hover{\r\n    background: lightgray;\r\n    color:black;\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.suggestion{\r\n    text-align: center;\r\n    width:200px;\r\n    position: absolute;\r\n    margin-left:0.3em;\r\n    background:gray;\r\n}\r\ninput{\r\n    display:block;\r\n    margin:5px;\r\n    width:75%;\r\n    text-transform: capitalize;\r\n}\r\ninput[type='submit']{\r\n    width:40%;\r\n    background: #1976D2;\r\n}\r\ninput[type='range']{\r\n    width:75%;\r\n}\r\n    ::-webkit-datetime-edit-year-field:not([aria-valuenow]),\r\n    ::-webkit-datetime-edit-month-field:not([aria-valuenow]),\r\n    ::-webkit-datetime-edit-day-field:not([aria-valuenow]), {\r\n        color: transparent;\r\n}\r\ninput[type=\"date\"]::before { \r\n\tcontent: attr(data-placeholder);\r\n    width: 100%;\r\n    color:grey;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\ninput[type=\"date\"]:focus::before,\r\ninput[type=\"date\"]:valid::before { display: none }\r\n#refine{\r\nmargin:5px;\r\ncolor:white;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n    #refine{\r\n    margin:5px;\r\n    color:grey;\r\n    }\r\n}\r\ndiv.tab{\r\n    overflow: hidden;\r\n    background-color: #f1f1f1;\r\n}\r\ndiv.tab button {\r\n    background-color: inherit;\r\n    float: left;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 14px 16px;\r\n    transition: 0.3s;\r\n}\r\n/* Change background color of buttons on hover */\r\ndiv.tab button:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n/* Create an active/current tablink class */\r\ndiv.tab button.active {\r\n    background-color: #1D1F20;\r\n    color:white;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/search-box/search-box.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Oneway/Twoway selectror tab -->\n<div class=\"tab\">\n  <button id=\"oneway\" [ngClass]=\"{'active':search.oneway}\" (click)=\"updateBookingType(true)\">One Way</button>\n  <button id=\"twoway\" [ngClass]=\"{'active':!search.oneway}\" (click)=\"updateBookingType(false)\">Return</button>\n</div>\n\n<!-- User Inputs -->\n<div class=\"userinputs\">\n  <form #searchForm=\"ngForm\" (ngSubmit)=\"onSubmit(searchForm)\">\n    <!-- Error Screen -->\n    <div *ngIf=\"origincity.invalid && (origincity.dirty || origincity.touched)\" class=\"alert alert-danger\">\n      <sub style=\"color:#F74A4A\">Please provide a valid input.</sub>\n    </div>\n\n    <!-- Well Datalist does the search and  select trick but unsupported in safari.-->\n    <input type=\"text\" class=\"form-control\" required #origincity=\"ngModel\" name=\"origincity\" placeholder=\"Enter Origin City\"\n      id=\"origincity\" [(ngModel)]=\"search.originCity\" autocomplete=\"off\" (focus)=\"search.originCity=''\" (input)=\"filterCity(search.originCity, true)\"\n    />\n\n    <div class=\"suggestion\" *ngIf=\"filteredOriginCities.length>0\">\n      <ul>\n        <li (click)=\"valueSelected(city, true)\" *ngFor=\"let city of filteredOriginCities\">{{city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}}</li>\n      </ul>\n    </div>\n\n    <!-- Destination Input -->\n    <div *ngIf=\"destcity.invalid && (destcity.dirty || destcity.touched)\" class=\"alert alert-danger\">\n      <sub style=\"color:#F74A4A\">Please provide a valid input.</sub>\n    </div>\n\n    <input type=\"text\" class=\"form-control\" required #destcity=\"ngModel\" placeholder=\"Enter Destination City\" id=\"destinationcity\"\n      [(ngModel)]=\"search.destinationCity\" autocomplete=\"off\" (focus)=\"search.destinationCity=''\" (input)=\"filterCity(search.destinationCity, false)\"\n      name=\"destcity\" />\n\n    <div class=\"suggestion\" *ngIf=\"filteredDestinationCities.length>0\">\n      <ul>\n        <li (click)=\"valueSelected(city, false)\" *ngFor=\"let city of filteredDestinationCities\">{{city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}}</li>\n      </ul>\n    </div>\n\n    <!-- Departure Date -->\n    <div *ngIf=\"depdate.invalid && (depdate.dirty || depdate.touched)\" class=\"alert alert-danger\">\n      <sub style=\"color:#F74A4A\">Please provide a valid input.</sub>\n    </div>\n    <input type=\"date\" class=\"form-control\" required #depdate=\"ngModel\" data-placeholder=\"Departure Date\" id=\"departdate\" [(ngModel)]=\"search.departureDate\"\n      placeholder=\"YYYY-MM-DD\" pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\" name=\"depdate\" min=\"2017-01-01\" max=\"2019-01-01\" required\n      aria-required=\"true\" />\n\n\n    <!-- Return Date -->\n\n    <div *ngIf=\"!search.oneway\">\n      <div *ngIf=\"retdate.invalid && (retdate.dirty || retdate.touched)\" class=\"alert alert-danger\">\n        <sub style=\"color:#F74A4A\">Please provide a valid input.</sub>\n      </div>\n      <input type=\"date\" class=\"form-control\" required #retdate=\"ngModel\" data-placeholder=\"Return Date\" id=\"returndate\" [(ngModel)]=\"search.returnDate\"\n        laceholder=\"YYYY-MM-DD\" pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\" name=\"retdate\" min=\"2017-01-01\" max=\"2019-01-01\" aria-required=\"true\"\n      />\n\n    </div>\n\n    <!-- Number of passengers -->\n    <div *ngIf=\"passengers.invalid && (passengers.dirty || passengers.touched)\" class=\"alert alert-danger\">\n      <sub style=\"color:#F74A4A\">Please provide a valid input.</sub>\n    </div>\n    <input type=\"number\" class=\"form-control\" required #passengers=\"ngModel\" min=1 placeholder=\"Passengers\" id=\"passengers\" [(ngModel)]=\"search.passengers\"\n      name=\"passengers\" />\n\n    <!-- Submit -->\n    <input type=\"submit\" id=\"search\" name=\"searchbtn\" (click)=\"clickSearchButton(search)\" />\n    <div *ngIf=\"invalidForm\" class=\"alert alert-danger\">\n      <sub style=\"color:#F74A4A\">Invalid Form Data</sub>\n    </div>\n  </form>\n</div>\n\n<!-- Refine search -->\n<div id=\"refine\">\n  <h4>Refine Flight Search</h4>\n  <p>Rs.{{search.refine}}</p>\n  <input type=\"range\" id=\"refine\" [(ngModel)]=\"search.refine\" steps=\"100\" name=\"points\" min=\"1000\" max=\"10000\" (change)=\"sliderChangeEvent($event)\"\n  />\n</div>"

/***/ }),

/***/ "../../../../../src/components/search-box/search-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchBoxComponent = (function () {
    function SearchBoxComponent(find, elementRef) {
        this.find = find;
        this.elementRef = elementRef;
        this.onSearchResults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.loadingComponent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isFormValid = false;
        this.filteredOriginCities = [];
        this.filteredDestinationCities = [];
        this.totalCitiesListedOnServer = [];
        this.invalidForm = false;
        this.search = {
            destinationCity: '', originCity: '', departureDate: '', returnDate: '', oneway: true, passengers: 1,
            refine: 1000
        };
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get all the cities available on initialization of component.
        this.find.getCitiesListedOnServer().then(function (cities) {
            _this.totalCitiesListedOnServer = cities;
        })
            .catch(function (e) { return window.alert("It seems you are directly serving from file. The app would not be able to perform perfectly due to Cross origin restriction."); });
    };
    /**
     * Selected value from list
     * @param city
     */
    SearchBoxComponent.prototype.valueSelected = function (city, isOrigin) {
        console.log("selected", city);
        isOrigin ? this.search.originCity = city : this.search.destinationCity = city;
        isOrigin ? this.filteredOriginCities = [] : this.filteredDestinationCities = [];
    };
    /**
     * Filter cities based on user input
     */
    SearchBoxComponent.prototype.filterCity = function (city, isOrigin) {
        var _this = this;
        city = city.toLowerCase(); // convert to lowercase
        isOrigin ? this.filteredOriginCities = [] : this.filteredDestinationCities = [];
        console.log("city entered", city);
        if (city) {
            this.totalCitiesListedOnServer.filter(function (x) {
                if (x.includes(city))
                    isOrigin ? _this.filteredOriginCities.push(x) : _this.filteredDestinationCities.push(x);
            });
        }
    };
    /**
     * Check validation of form and proceed for search
     * @param formInputs
     */
    SearchBoxComponent.prototype.onSubmit = function (formInputs) {
        console.log(formInputs);
        if (formInputs.form.valid) {
            this.invalidForm = false;
            // convert to lowercase
            this.search.destinationCity = this.search.destinationCity.toLowerCase();
            this.search.originCity = this.search.originCity.toLowerCase();
            this.clickSearchButton(this.search);
        }
        else
            this.invalidForm = true;
    };
    /**
     * Event handler for clicks outside of the
     * suggestions component.
     * @param event
     */
    SearchBoxComponent.prototype.handleClickEvent = function (event) {
        var clickedTarget = event.target;
        var inComponent = false;
        do {
            if (clickedTarget === this.elementRef.nativeElement) {
                inComponent = true;
            }
            clickedTarget = clickedTarget.parentNode;
        } while (clickedTarget);
        if (!inComponent) {
            this.filteredDestinationCities = [];
            this.filteredOriginCities = [];
        }
    };
    /**
     *
     * Updates the booking type i.e one way/ two way flight.
     * @param oneway
     */
    SearchBoxComponent.prototype.updateBookingType = function (oneway) {
        this.search.oneway = oneway;
    };
    /**
     * Search for flights based on parameters provided.
     * The magic happens here :)
     * @param searchParams
     */
    SearchBoxComponent.prototype.clickSearchButton = function (searchParams) {
        var _this = this;
        this.loadingComponent.emit(true);
        if (searchParams.oneway) {
            this.performSearch(searchParams).then(function (flights) {
                var searhResults = { oneWayFlights: flights, oneway: true, returningFlights: [], bookingInfo: searchParams };
                _this.onSearchResults.emit(searhResults);
                _this.loadingComponent.emit(false);
            })
                .catch(function (e) { return console.log("Error in performing search", e); });
        }
        else {
            //first check for one way then for the other
            this.performSearch(searchParams).then(function (oneWayFlights) {
                var returnSearchParams = {
                    originCity: searchParams.destinationCity,
                    destinationCity: searchParams.originCity,
                    departureDate: searchParams.returnDate,
                    refine: searchParams.refine,
                    passengers: searchParams.passengers,
                    oneway: true
                };
                _this.performSearch(returnSearchParams).then(function (returningFlights) {
                    var searchResults = {
                        oneWayFlights: oneWayFlights,
                        oneway: false,
                        returningFlights: returningFlights,
                        bookingInfo: searchParams
                    };
                    _this.onSearchResults.emit(searchResults);
                    _this.loadingComponent.emit(false);
                })
                    .catch(function (e) { return console.log("Error in performing search", e); });
            })
                .catch(function (e) { return console.log("Error in performing search", e); });
        }
    };
    /**
     * Perform the search from service based on params
     * @param searchParams
     */
    SearchBoxComponent.prototype.performSearch = function (searchParams) {
        return this.find.searchFlightAvailability(searchParams)
            .then(function (flights) {
            return flights;
        })
            .catch(function (e) {
            console.log("Error in fetching flights.", e);
            return Promise.reject(new Array());
        });
    };
    /**
     * On change of slider event
     * autmatically detect flights in range
     * @param e
     */
    SearchBoxComponent.prototype.sliderChangeEvent = function (e) {
        console.log("Slider changed");
        this.clickSearchButton(this.search);
    };
    return SearchBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], SearchBoxComponent.prototype, "onSearchResults", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], SearchBoxComponent.prototype, "loadingComponent", void 0);
SearchBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'search-box',
        host: { '(document:click)': 'handleClickEvent($event)' },
        template: __webpack_require__("../../../../../src/components/search-box/search-box.component.html"),
        styles: [__webpack_require__("../../../../../src/components/search-box/search-box.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object])
], SearchBoxComponent);

var _a, _b;
//# sourceMappingURL=search-box.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/models/booking-info.ts":
/***/ (function(module, exports) {

;
//# sourceMappingURL=booking-info.js.map

/***/ }),

/***/ "../../../../../src/models/search-response.ts":
/***/ (function(module, exports) {

;
//# sourceMappingURL=search-response.js.map

/***/ }),

/***/ "../../../../../src/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = "./assets/data/flight-data.json";
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    /**
     * Search for availablity of flight from server(JSON data in this case)
     * @param searchParams
     */
    SearchService.prototype.searchFlightAvailability = function (searchParams) {
        var _this = this;
        //bring the data
        //sort the data
        //search the data
        return this.http.get(apiUrl)
            .toPromise()
            .then(function (data) { return _this.searchAndSort(data.json(), searchParams); })
            .catch(function (e) { return Promise.reject(e); });
    };
    /**
     * Gets the cities available for search from server.
     * NOTE: Usually server side code provides a REST api
     * to get teh cities availablr for search thereby reducing
     * client side dependency. Thin client approach :)
     */
    SearchService.prototype.getCitiesListedOnServer = function () {
        var _this = this;
        return this.http.get(apiUrl)
            .toPromise()
            .then(function (data) { return _this.extractCities(data.json()); })
            .catch(function (e) { return Promise.reject(e); });
    };
    /**
     * Extracts and returns filtered array of cities
     * available on server.
     * @param flightData
     */
    SearchService.prototype.extractCities = function (flightData) {
        var allCities = [];
        flightData.flights.map(function (x) {
            allCities.push(x.origin);
            allCities.push(x.destination);
        });
        var distinctCities = allCities.filter(function (x, index, originalArr) {
            return index == originalArr.indexOf(x);
        });
        return Promise.resolve(distinctCities);
    };
    /**
     * Sorts the incoming data and sends for searching
     * @param data
     */
    SearchService.prototype.searchAndSort = function (data, searchParams) {
        console.log("raw data", data);
        data.flights.map(function (x) { return x.amount = parseInt(x.amount); });
        var allFlights = data.flights;
        return this.getMatchingItemsFromArray(this.sortFlightArray(allFlights), searchParams);
    };
    /**
     * Sort the flight data w.r.t amount
     * @param flightData
     */
    SearchService.prototype.sortFlightArray = function (flightData) {
        flightData.sort(function (x, y) {
            return x.amount - y.amount;
        });
        console.log("sorted", flightData);
        return flightData;
    };
    /**
     * Returns a new array of matching items based on search.
     * @param sortedFlightData
     * @param searchParams
     */
    SearchService.prototype.getMatchingItemsFromArray = function (sortedFlightData, searchParams) {
        var filteredItmes = [];
        //create a new array which contains the items that are 
        //in our range to make. Makes sense , eases pain :P
        var dataInRange = [];
        sortedFlightData.map(function (x) {
            x.amount <= searchParams.refine ? dataInRange.push(x) : console.log("Not in range");
        });
        console.log("data", dataInRange);
        dataInRange.map(function (x) {
            if (Date.parse(x.date.split(' ')[0]) === Date.parse(searchParams.departureDate) && x.origin === searchParams.originCity
                && x.destination === searchParams.destinationCity) {
                console.log("true getmatch");
                filteredItmes.push(x);
            }
        });
        console.log("filter", filteredItmes);
        return filteredItmes;
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map