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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _completed_completed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completed/completed.component */ "./src/app/completed/completed.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"] },
    { path: 'progress', component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_4__["ProgressComponent"] },
    { path: 'completed', component: _completed_completed_component__WEBPACK_IMPORTED_MODULE_3__["CompletedComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header class=\"router\">\n    <a routerLink=\"/tasks\" routerLinkActive=\"chosed\">My Tasks</a>\n    <a routerLink=\"/progress\" routerLinkActive=\"chosed\">In Progress</a>\n    <a routerLink=\"/completed\" routerLinkActive=\"chosed\">Compeleted</a>\n</header>\n\n<main>\n    <div class=\"panel\">\n        <div class=\"add\">\n            <span class=\"plus\"> + </span>\n            <input type=\"text\" placeholder=\"Add Task\" />\n        </div>\n    </div>\n    <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background-color: #4A90E2;\n  text-align: center; }\n  header a {\n    color: #00408B;\n    padding: 25px;\n    font-size: 24px;\n    width: 220px;\n    display: inline-block;\n    margin: 0 auto;\n    text-decoration: none; }\n  header .chosed {\n    color: #FFFFFF;\n    border-bottom: #00408B solid 4px; }\n  main {\n  max-width: 620px;\n  margin: 0 auto;\n  padding-top: 1rem; }\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _listspace_listspace_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listspace/listspace.component */ "./src/app/listspace/listspace.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress.component.ts");
/* harmony import */ var _completed_completed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./completed/completed.component */ "./src/app/completed/completed.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _listspace_listspace_component__WEBPACK_IMPORTED_MODULE_3__["ListspaceComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_5__["ProgressComponent"],
                _completed_completed_component__WEBPACK_IMPORTED_MODULE_6__["CompletedComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/completed/completed.component.html":
/*!****************************************************!*\
  !*** ./src/app/completed/completed.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\" checked>\n    </div>\n    <div class=\"maincard\">\n        <p class=\"del_panding\"> Type something here... </p>\n        <span hidden>\n            <i class=\"fas fa-calendar-alt\"></i>\n        </span>\n        <span hidden>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span hidden>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<p class=\"info\"> <i> 1 task completed </i> </p>\n\n"

/***/ }),

/***/ "./src/app/completed/completed.component.scss":
/*!****************************************************!*\
  !*** ./src/app/completed/completed.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/completed/completed.component.ts":
/*!**************************************************!*\
  !*** ./src/app/completed/completed.component.ts ***!
  \**************************************************/
/*! exports provided: CompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedComponent", function() { return CompletedComponent; });
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

var CompletedComponent = /** @class */ (function () {
    function CompletedComponent() {
    }
    CompletedComponent.prototype.ngOnInit = function () {
    };
    CompletedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-completed',
            template: __webpack_require__(/*! ./completed.component.html */ "./src/app/completed/completed.component.html"),
            styles: [__webpack_require__(/*! ./completed.component.scss */ "./src/app/completed/completed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompletedComponent);
    return CompletedComponent;
}());



/***/ }),

/***/ "./src/app/listspace/listspace.component.html":
/*!****************************************************!*\
  !*** ./src/app/listspace/listspace.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  listspace works!\n</p>\n"

/***/ }),

/***/ "./src/app/listspace/listspace.component.scss":
/*!****************************************************!*\
  !*** ./src/app/listspace/listspace.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listspace/listspace.component.ts":
/*!**************************************************!*\
  !*** ./src/app/listspace/listspace.component.ts ***!
  \**************************************************/
/*! exports provided: ListspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListspaceComponent", function() { return ListspaceComponent; });
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

var ListspaceComponent = /** @class */ (function () {
    function ListspaceComponent() {
    }
    ListspaceComponent.prototype.ngOnInit = function () {
    };
    ListspaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listspace',
            template: __webpack_require__(/*! ./listspace.component.html */ "./src/app/listspace/listspace.component.html"),
            styles: [__webpack_require__(/*! ./listspace.component.scss */ "./src/app/listspace/listspace.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListspaceComponent);
    return ListspaceComponent;
}());



/***/ }),

/***/ "./src/app/progress/progress.component.html":
/*!**************************************************!*\
  !*** ./src/app/progress/progress.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"starred todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here... </p>\n        <span>\n            <i class=\"fas fa-calendar-alt\"></i>\n            5 / 14\n        </span>\n        <span>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<div class=\"starred todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here... </p>\n        <span hidden>\n            <i class=\"fas fa-calendar-alt\"></i>\n        </span>\n        <span>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<div class=\"todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here... </p>\n        <span>\n            <i class=\"fas fa-calendar-alt\"></i>\n            2019/6/18\n        </span>\n        <span hidden>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span hidden>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<div class=\"todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here... </p>\n        <span hidden>\n            <i class=\"fas fa-calendar-alt\"></i>\n        </span>\n        <span>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span hidden>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<div class=\"todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here... </p>\n        <span>\n            <i class=\"fas fa-calendar-alt\"></i>\n        </span>\n        <span>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<div class=\"todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here... </p>\n        <span>\n            <i class=\"fas fa-calendar-alt\"></i>\n        </span>\n        <span>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<p class=\"info\"> <i> 6 tasks left </i> </p>\n"

/***/ }),

/***/ "./src/app/progress/progress.component.scss":
/*!**************************************************!*\
  !*** ./src/app/progress/progress.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/progress/progress.component.ts":
/*!************************************************!*\
  !*** ./src/app/progress/progress.component.ts ***!
  \************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
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

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
    }
    ProgressComponent.prototype.ngOnInit = function () {
    };
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.scss */ "./src/app/progress/progress.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editing todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here </p>\n        <span>\n            <i class=\"fas fa-calendar-alt\"></i>\n        </span>\n        <span>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n    <div class=\"editarea\">\n        <div class=\"bdy\">\n            <div class=\"deadline\">\n                <p> <i class=\"fas fa-calendar-alt\"></i> Deadline </p>\n                <input type=\"date\" />\n                <input type=\"time\" />\n            </div>\n            <div class=\"file\">\n                <p> <i class=\"far fa-file\"></i> File </p>\n                <button> <i class=\"fas fa-plus\"></i> </button>\n            </div>\n            <div class=\"comment\">\n                <p> <i class=\"fas fa-comment\"></i> Comment </p>\n                <textarea name=\"\" id=\"\" placeholder=\"Type your memo here…\"></textarea>\n            </div>\n        </div>\n        <div class=\"btn\"></div>\n    </div>\n    <div class=\"actionarea\">\n        <button class=\"cancel\"> X Cancel </button>\n        <button class=\"save\"> + Add Task </button>\n    </div>\n</div>\n\n<div class=\"starred todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here... </p>\n        <span>\n            <i class=\"fas fa-calendar-alt\"></i>\n            5 / 14\n        </span>\n        <span>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<div class=\"starred todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here... </p>\n        <span hidden>\n            <i class=\"fas fa-calendar-alt\"></i>\n        </span>\n        <span>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<div class=\"todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here... </p>\n        <span>\n            <i class=\"fas fa-calendar-alt\"></i>\n            2019/6/18\n        </span>\n        <span hidden>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span hidden>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<div class=\"todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here... </p>\n        <span hidden>\n            <i class=\"fas fa-calendar-alt\"></i>\n        </span>\n        <span>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span hidden>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<div class=\"todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\" checked>\n    </div>\n    <div class=\"maincard\">\n        <p class=\"del_panding\"> Type something here... </p>\n        <span hidden>\n            <i class=\"fas fa-calendar-alt\"></i>\n        </span>\n        <span hidden>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span hidden>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<div class=\"todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here... </p>\n        <span>\n            <i class=\"fas fa-calendar-alt\"></i>\n        </span>\n        <span>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<div class=\"todo\">\n    <div class=\"checkcard\">\n        <input type=\"checkbox\">\n    </div>\n    <div class=\"maincard\">\n        <p> Type something here... </p>\n        <span>\n            <i class=\"fas fa-calendar-alt\"></i>\n        </span>\n        <span>\n            <i class=\"far fa-file\"></i>\n        </span>\n        <span>\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i class=\"fas fa-star fa-2x\"></i>\n        <i class=\"far fa-star fa-2x\"></i>\n        <i class=\"fas fa-pencil-alt fa-2x\"></i>\n    </div>\n</div>\n\n<p class=\"info\"> <i> 6 tasks left </i> </p>\n"

/***/ }),

/***/ "./src/app/tasks/tasks.component.scss":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n.todo\r\n{\r\n    width: 100%;\r\n    padding-top: 16px;\r\n    padding-bottom: 16px;\r\n    margin: 4px 0 4px 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    color: #000000;\r\n    border-radius: 5px;\r\n\r\n    .checkcard\r\n    {\r\n        padding-left: 1rem;\r\n        padding-right: 1rem;\r\n        input\r\n        {\r\n            border: 0;\r\n            border-radius: 2px;\r\n            width:25px;\r\n            height:25px;\r\n        }\r\n    }\r\n    .maincard\r\n    {\r\n        flex-grow:4;\r\n        p\r\n        {\r\n            padding-bottom: 1rem;\r\n            padding-top: 5px;\r\n            font-size: 1.5rem;\r\n            &.del_panding\r\n            {\r\n                text-decoration: line-through;\r\n                font-family: Roboto-Medium;\r\n                color: #9B9B9B;\r\n            }\r\n        }\r\n        span\r\n        {\r\n            padding-right: 1rem;\r\n            color: #757575;\r\n        }\r\n    }\r\n    .editcard\r\n    {\r\n        flex-grow:1;\r\n        i{ margin-right: 1rem; }\r\n        .fas.fa-star{ display: none; }\r\n    }\r\n\r\n    .editarea\r\n    {\r\n        border-top: 2px solid #C8C8C8;\r\n        margin-top: 1rem;\r\n        padding: 1rem 0 0 4rem;\r\n        flex: 0 0 100%;\r\n\r\n        input,\r\n        textarea\r\n        {\r\n            margin: 1rem;\r\n        }\r\n\r\n        button { margin: 1rem; }\r\n\r\n        input\r\n        {\r\n            height: 2rem;\r\n            width: 10rem;\r\n            border: 0;\r\n            padding-left: 1rem;\r\n        }\r\n\r\n        textarea\r\n        {\r\n            width: 22rem;\r\n            height: 10rem;\r\n            padding: 1rem;\r\n        }\r\n\r\n        .file button\r\n        {\r\n            background: #C8C8C8;\r\n            border-radius: 2px;\r\n            color: #FFFFFF;\r\n            border: 0;\r\n            width:2rem;\r\n            height:2rem;\r\n            &:hover{ background-color: #4A90E2; }\r\n        }\r\n    }\r\n    .actionarea\r\n    {\r\n        display: flex;\r\n        width: 100%;\r\n        border-radius: 5px;\r\n        justify-content: space-around;\r\n        button\r\n        {\r\n            font-family: \"Roboto-Regular\", sans-serif;\r\n            width:100%;\r\n            padding-top: 1rem;\r\n            padding-bottom: 1rem;\r\n            text-align: center;\r\n            font-size: 24px;\r\n            border:0;\r\n            &.cancel\r\n            {\r\n                background: #FFFFFF;\r\n                color: #D0021B;\r\n            }\r\n            &.save\r\n            {\r\n                background: #4A90E2;\r\n                color: #FFFFFF;\r\n            }\r\n        }\r\n    }\r\n\r\n    &.editing\r\n    {\r\n        background-color: #F2F2F2;\r\n        padding-bottom: 0;\r\n        margin-bottom: 1rem;\r\n        .maincard\r\n        {\r\n            span{ display: none; }\r\n        }\r\n        .editcard\r\n        {\r\n            .fa-pencil-alt{ color: #4A90E2; }\r\n        }\r\n        .actionarea\r\n        {\r\n            //border-radius: 0 0 5px 5px;\r\n            .cancel{ border-radius:0 0 0 5px; }\r\n            .save{ border-radius:0 0 5px 0; }\r\n        }\r\n    }\r\n    &.starred\r\n    {\r\n        background-color: #FFF2DC;\r\n        .editcard\r\n        {\r\n            .fas.fa-star{ display: inline; color: #F5A623; }\r\n            .far.fa-star{ display: none; }\r\n        }\r\n        .editarea { background-color: #F2F2F2; }\r\n    }\r\n}\r\n\r\np.info\r\n{\r\n    margin-left: 1rem;\r\n    font-family: \"Roboto-Italic\", sans-serif;\r\n    font-size: 24px;\r\n    color: #C8C8C8;\r\n}\r\n*/\n"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
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

var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.scss */ "./src/app/tasks/tasks.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
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

module.exports = __webpack_require__(/*! /Users/iigmir/Desktop/todolist/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map