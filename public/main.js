(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_robot_list_robot_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/robot-list/robot-list.component */ "./src/app/components/robot-list/robot-list.component.ts");
/* harmony import */ var _components_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/part-list/part-list.component */ "./src/app/components/part-list/part-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/robots', pathMatch: 'full' },
    { path: 'robots', component: _components_robot_list_robot_list_component__WEBPACK_IMPORTED_MODULE_2__["RobotListComponent"] },
    { path: 'parts', component: _components_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_3__["PartListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-image: url('bg.jpg'); }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n    <h5>Todo list</h5>\n    <ol>\n      <li>Add components: header, robot-list, part-list</li>\n      <li>Set routing for robots and parts </li>\n      <li>Add model (classes) for Robot, Part, according to mock data</li>\n      <li>Update mock with Robot and Part models</li>\n      <li>Add parts and robots data services</li>\n      <li>Connect data services to mock data and lists components</li>\n      <li>Add styles to scss files</li>\n      <li>Install angular-in-memory-web-api (so we can simulate http requests)</li>\n      <li>Add HttpClient and subscribe to get data</li>\n      <li>Use async pipe for parts and robots services</li>\n    </ol>\n  ",
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/part-list/part-list.component */ "./src/app/components/part-list/part-list.component.ts");
/* harmony import */ var _components_robot_list_robot_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/robot-list/robot-list.component */ "./src/app/components/robot-list/robot-list.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_4__["PartListComponent"],
                _components_robot_list_robot_list_component__WEBPACK_IMPORTED_MODULE_5__["RobotListComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  text-align: center;\n  height: 250px; }\n  :host h1 {\n    color: black;\n    font-weight: 800;\n    font-size: 50px;\n    margin: 10px; }\n  :host .logo {\n    height: 50px; }\n  :host nav {\n    max-width: 80%;\n    margin: 10px auto;\n    display: flex; }\n  :host nav button {\n      transition: all 0.5s;\n      font-size: 70px;\n      font-weight: 600;\n      flex-grow: 1;\n      flex-basis: 100px;\n      outline: none;\n      cursor: pointer;\n      border-radius: 3px;\n      height: 80px;\n      border-color: transparent;\n      background: transparent;\n      color: coral; }\n  :host nav button:hover {\n        color: white;\n        -webkit-animation: neon 1.5s ease-in-out infinite alternate;\n                animation: neon 1.5s ease-in-out infinite alternate; }\n  :host nav .selected {\n      border: none;\n      outline: none;\n      box-shadow: 3px 1px 10px 5px coral; }\n  @-webkit-keyframes neon {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px coral, 0 0 70px coral, 0 0 80px coral, 0 0 100px coral, 0 0 150px coral; }\n  to {\n    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px coral, 0 0 35px coral, 0 0 40px coral, 0 0 50px coral, 0 0 75px coral; } }\n  @keyframes neon {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px coral, 0 0 70px coral, 0 0 80px coral, 0 0 100px coral, 0 0 150px coral; }\n  to {\n    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px coral, 0 0 35px coral, 0 0 40px coral, 0 0 50px coral, 0 0 75px coral; } }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: "\n    <h1>\n      ROBOT LAB\n    </h1>\n    <nav>\n      <button routerLink=\"/robots\" routerLinkActive=\"selected\">\n        Robots\n      </button>\n      <button routerLink=\"/parts\" routerLinkActive=\"selected\">\n        Parts\n      </button>\n    </nav>\n  ",
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/part-list/part-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/part-list/part-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card, .parts-container .part-card {\n  padding: 5px;\n  min-width: 55px;\n  color: black;\n  border: 1px solid coral;\n  background-color: rgba(249, 249, 249, 0.55);\n  border-radius: 5px;\n  height: 120px;\n  width: 150px;\n  display: inline-block;\n  text-align: left;\n  position: relative;\n  margin-left: 50px; }\n\nlabel {\n  font-weight: bold; }\n\n.parts-container {\n  display: flex;\n  justify-content: center; }\n\n.parts-container img {\n    width: 30px;\n    height: 30px;\n    display: inline; }\n\n.parts-container .part-card img {\n    margin: 5px; }\n\n.parts-container .part-card div {\n    display: flex; }\n\n.parts-container .part-card div:first-child label {\n      padding-top: 15px; }\n"

/***/ }),

/***/ "./src/app/components/part-list/part-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/part-list/part-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartListComponent", function() { return PartListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_parts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/parts.service */ "./src/app/services/parts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartListComponent = /** @class */ (function () {
    function PartListComponent(partsService) {
        this.partsService = partsService;
    }
    PartListComponent.prototype.ngOnInit = function () {
        this.parts$ = this.partsService.getParts();
    };
    PartListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-part-list',
            template: "\n    <ul class=\"parts-container\">\n      <li *ngFor=\"let part of parts$ | async\" class=\"part-card\">\n        <div>\n          <img src=\"/assets/images/cpu.png\"/>\n          <label>\n            <b>{{part.name}}</b>\n          </label>\n        </div>\n        <div>\n          <label>CPU: </label>{{part.cpu}}\n        </div>\n        <div>\n          <label>Engine: </label>{{part.engine}}\n        </div>\n        <div>\n          <label>Type: </label>{{part.type}}\n        </div>\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./part-list.component.scss */ "./src/app/components/part-list/part-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_parts_service__WEBPACK_IMPORTED_MODULE_1__["PartsService"]])
    ], PartListComponent);
    return PartListComponent;
}());



/***/ }),

/***/ "./src/app/components/robot-list/robot-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/robot-list/robot-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card, .robots-container .robot-card {\n  padding: 5px;\n  min-width: 55px;\n  color: black;\n  border: 1px solid coral;\n  background-color: rgba(249, 249, 249, 0.55);\n  border-radius: 5px;\n  height: 120px;\n  width: 150px;\n  display: inline-block;\n  text-align: left;\n  position: relative;\n  margin-left: 50px; }\n\nlabel {\n  font-weight: bold; }\n\n.robots-container {\n  display: flex;\n  justify-content: center; }\n\n.robots-container img {\n    width: 40px;\n    height: 40px;\n    display: inline; }\n\n.robots-container .robot-card img {\n    margin: 5px 10px 5px 5px; }\n\n.robots-container .robot-card div {\n    display: flex; }\n\n.robots-container .robot-card div:first-child label {\n      padding-top: 10px; }\n"

/***/ }),

/***/ "./src/app/components/robot-list/robot-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/robot-list/robot-list.component.ts ***!
  \***************************************************************/
/*! exports provided: RobotListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RobotListComponent", function() { return RobotListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_robots_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/robots.service */ "./src/app/services/robots.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RobotListComponent = /** @class */ (function () {
    function RobotListComponent(robotsService) {
        this.robotsService = robotsService;
    }
    RobotListComponent.prototype.ngOnInit = function () {
        this.robots$ = this.robotsService.getRobots();
    };
    RobotListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-robot-list',
            template: "\n    <ul class=\"robots-container\">\n      <li *ngFor=\"let robot of robots$ | async\" class=\"robot-card\">\n        <div>\n          <img src=\"/assets/images/robotic-arm.png\"/>\n          <label>\n            <b>{{robot.name}}</b>\n          </label>\n        </div>\n        <div>\n          <label>Age: </label> {{robot.age}}\n        </div>\n        <div>\n          <label>Type: </label>{{robot.type}}\n        </div>\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./robot-list.component.scss */ "./src/app/components/robot-list/robot-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_robots_service__WEBPACK_IMPORTED_MODULE_1__["RobotsService"]])
    ], RobotListComponent);
    return RobotListComponent;
}());



/***/ }),

/***/ "./src/app/services/parts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/parts.service.ts ***!
  \*******************************************/
/*! exports provided: PartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsService", function() { return PartsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartsService = /** @class */ (function () {
    function PartsService(http) {
        this.http = http;
        this.partsUrl = 'api/parts'; // URL to web api
    }
    PartsService.prototype.getParts = function () {
        return this.http.get(this.partsUrl);
    };
    PartsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PartsService);
    return PartsService;
}());



/***/ }),

/***/ "./src/app/services/robots.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/robots.service.ts ***!
  \********************************************/
/*! exports provided: RobotsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RobotsService", function() { return RobotsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RobotsService = /** @class */ (function () {
    function RobotsService(http) {
        this.http = http;
        this.robotsUrl = 'api/robots'; // URL to web api
    }
    RobotsService.prototype.getRobots = function () {
        return this.http.get(this.robotsUrl);
    };
    RobotsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RobotsService);
    return RobotsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\repos\WEBbeast2018\robot-lab\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map