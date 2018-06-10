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
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
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
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.title = 'app';
    }
    AppComponent.prototype.ngInit = function () {
        console.log(this.service.servInit());
        console.log('this.serv.servInit');
    };
    AppComponent.prototype.switchStar = function () { console.warn('Fuckyou'); };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress.component.ts");
/* harmony import */ var _listspace_listspace_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listspace/listspace.component */ "./src/app/listspace/listspace.component.ts");
/* harmony import */ var _completed_completed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./completed/completed.component */ "./src/app/completed/completed.component.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo.service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _listspace_listspace_component__WEBPACK_IMPORTED_MODULE_7__["ListspaceComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_6__["ProgressComponent"],
                _completed_completed_component__WEBPACK_IMPORTED_MODULE_8__["CompletedComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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

/***/ "./src/app/mock-todos.ts":
/*!*******************************!*\
  !*** ./src/app/mock-todos.ts ***!
  \*******************************/
/*! exports provided: TODOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODOS", function() { return TODOS; });
var TODOS = [{
        starred: true,
        priority: 0,
        comment: 'Type something comment',
        todo: 'Type something here...',
        date: null,
        time: '17:06',
        file: 'foo/bar',
        completed: false
    }, {
        starred: true,
        priority: 1,
        comment: 'Another',
        todo: 'Yet another todos.',
        date: null,
        time: null,
        file: 'foo/bar/baz',
        completed: false
    }, {
        starred: false,
        priority: 2,
        comment: null,
        todo: 'Type something here',
        date: '2018-06-30',
        time: null,
        file: null,
        completed: false
    }, {
        starred: false,
        priority: 3,
        comment: null,
        todo: 'TypeScript',
        date: null,
        time: null,
        file: 'foo',
        completed: false
    }, {
        starred: false,
        priority: 3,
        comment: null,
        todo: 'Type some JScript',
        date: null,
        time: null,
        file: null,
        completed: true
    }
];
/*
completed: Boolean;
    starred: Boolean;
    priority: Number;
    comment: String;
    todo: String;
    date: String;
    file: String;
    { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
*/


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

module.exports = "<div\n    *ngFor=\"let t of todos; let idx = index\"\n    [ngClass]=\"{\n        'starred': t.starred ,\n        'todo' : true,\n        'editing' : idx === current_editing\n    }\" >\n    <div class=\"checkcard\">\n        <input type=\"checkbox\" (click)=\"switchCompleted(idx)\" >\n    </div>\n    <div class=\"maincard\">\n        <p [ngClass]=\"{ 'del_panding' : t.completed }\" > {{ t.todo }} </p>\n        <span *ngIf=\"t.date !== null\">\n            <i class=\"fas fa-calendar-alt\"></i>\n            {{ t.date }}\n        </span>\n        <span *ngIf=\"t.file !== null\">\n            <i class=\"far fa-file\"></i>\n            {{ t.file }}\n        </span>\n        <span *ngIf=\"t.comment !== null\">\n            <i class=\"fas fa-comment\"></i>\n        </span>\n    </div>\n    <div class=\"editcard\">\n        <i [ngClass]=\"{\n            'fas': t.starred , 'far': !t.starred,\n            'fa-star' : true , 'fa-2x' : true\n        }\" (click)=\"switchStar(idx)\">\n            <!-- Star -->\n        </i>\n        <i class=\"fas fa-pencil-alt fa-2x\" (click)=\"enableEdit(idx)\">\n            <!-- Edit pencil -->\n        </i>\n    </div>\n    <div class=\"editarea\">\n        <div class=\"bdy\">\n            <div class=\"deadline\">\n                <p> <i class=\"fas fa-calendar-alt\"></i> Deadline </p>\n                <input type=\"date\" />\n                <input type=\"time\" />\n            </div>\n            <div class=\"file\">\n                <p> <i class=\"far fa-file\"></i> File </p>\n                <button> <i class=\"fas fa-plus\"></i> </button>\n            </div>\n            <div class=\"comment\">\n                <p> <i class=\"fas fa-comment\"></i> Comment </p>\n                <textarea name=\"\" id=\"\" placeholder=\"Type your memo here…\"></textarea>\n            </div>\n        </div>\n        <div class=\"btn\"></div>\n    </div>\n    <div class=\"actionarea\">\n        <button class=\"cancel\"> X Cancel </button>\n        <button class=\"save\"> + Add Task </button>\n    </div>\n</div>\n\n<div hidden>\n\n\n    <div class=\"editing todo\">\n        <div class=\"checkcard\">\n            <input type=\"checkbox\">\n        </div>\n        <div class=\"maincard\">\n            <p> Type something here </p>\n            <span>\n                <i class=\"fas fa-calendar-alt\"></i>\n            </span>\n            <span>\n                <i class=\"far fa-file\"></i>\n            </span>\n            <span>\n                <i class=\"fas fa-comment\"></i>\n            </span>\n        </div>\n        <div class=\"editcard\">\n            <i class=\"fas fa-star fa-2x\"></i>\n            <i class=\"far fa-star fa-2x\"></i>\n            <i class=\"fas fa-pencil-alt fa-2x\"></i>\n        </div>\n        <div class=\"editarea\">\n            <div class=\"bdy\">\n                <div class=\"deadline\">\n                    <p> <i class=\"fas fa-calendar-alt\"></i> Deadline </p>\n                    <input type=\"date\" />\n                    <input type=\"time\" />\n                </div>\n                <div class=\"file\">\n                    <p> <i class=\"far fa-file\"></i> File </p>\n                    <button> <i class=\"fas fa-plus\"></i> </button>\n                </div>\n                <div class=\"comment\">\n                    <p> <i class=\"fas fa-comment\"></i> Comment </p>\n                    <textarea name=\"\" id=\"\" placeholder=\"Type your memo here…\"></textarea>\n                </div>\n            </div>\n            <div class=\"btn\"></div>\n        </div>\n        <div class=\"actionarea\">\n            <button class=\"cancel\"> X Cancel </button>\n            <button class=\"save\"> + Add Task </button>\n        </div>\n    </div>\n\n    <div class=\"starred todo\">\n        <div class=\"checkcard\">\n            <input type=\"checkbox\">\n        </div>\n        <div class=\"maincard\">\n            <p> Type something here... </p>\n            <span>\n                <i class=\"fas fa-calendar-alt\"></i>\n                5 / 14\n            </span>\n            <span>\n                <i class=\"far fa-file\"></i>\n            </span>\n            <span>\n                <i class=\"fas fa-comment\"></i>\n            </span>\n        </div>\n        <div class=\"editcard\">\n            <i class=\"fas fa-star fa-2x\"></i>\n            <i class=\"far fa-star fa-2x\"></i>\n            <i class=\"fas fa-pencil-alt fa-2x\"></i>\n        </div>\n    </div>\n\n    <div class=\"starred todo\">\n        <div class=\"checkcard\">\n            <input type=\"checkbox\">\n        </div>\n        <div class=\"maincard\">\n            <p> Type something here... </p>\n            <span hidden>\n                <i class=\"fas fa-calendar-alt\"></i>\n            </span>\n            <span>\n                <i class=\"far fa-file\"></i>\n            </span>\n            <span>\n                <i class=\"fas fa-comment\"></i>\n            </span>\n        </div>\n        <div class=\"editcard\">\n            <i class=\"fas fa-star fa-2x\"></i>\n            <i class=\"far fa-star fa-2x\"></i>\n            <i class=\"fas fa-pencil-alt fa-2x\"></i>\n        </div>\n    </div>\n\n    <div class=\"todo\">\n        <div class=\"checkcard\">\n            <input type=\"checkbox\">\n        </div>\n        <div class=\"maincard\">\n            <p> Type something here... </p>\n            <span>\n                <i class=\"fas fa-calendar-alt\"></i>\n                2019/6/18\n            </span>\n            <span hidden>\n                <i class=\"far fa-file\"></i>\n            </span>\n            <span hidden>\n                <i class=\"fas fa-comment\"></i>\n            </span>\n        </div>\n        <div class=\"editcard\">\n            <i class=\"fas fa-star fa-2x\"></i>\n            <i class=\"far fa-star fa-2x\"></i>\n            <i class=\"fas fa-pencil-alt fa-2x\"></i>\n        </div>\n    </div>\n\n    <div class=\"todo\">\n        <div class=\"checkcard\">\n            <input type=\"checkbox\">\n        </div>\n        <div class=\"maincard\">\n            <p> Type something here... </p>\n            <span hidden>\n                <i class=\"fas fa-calendar-alt\"></i>\n            </span>\n            <span>\n                <i class=\"far fa-file\"></i>\n            </span>\n            <span hidden>\n                <i class=\"fas fa-comment\"></i>\n            </span>\n        </div>\n        <div class=\"editcard\">\n            <i class=\"fas fa-star fa-2x\"></i>\n            <i class=\"far fa-star fa-2x\"></i>\n            <i class=\"fas fa-pencil-alt fa-2x\"></i>\n        </div>\n    </div>\n\n    <div class=\"todo\">\n        <div class=\"checkcard\">\n            <input type=\"checkbox\" checked>\n        </div>\n        <div class=\"maincard\">\n            <p class=\"del_panding\"> Type something here... </p>\n            <span hidden>\n                <i class=\"fas fa-calendar-alt\"></i>\n            </span>\n            <span hidden>\n                <i class=\"far fa-file\"></i>\n            </span>\n            <span hidden>\n                <i class=\"fas fa-comment\"></i>\n            </span>\n        </div>\n        <div class=\"editcard\">\n            <i class=\"fas fa-star fa-2x\"></i>\n            <i class=\"far fa-star fa-2x\"></i>\n            <i class=\"fas fa-pencil-alt fa-2x\"></i>\n        </div>\n    </div>\n\n    <div class=\"todo\">\n        <div class=\"checkcard\">\n            <input type=\"checkbox\">\n        </div>\n        <div class=\"maincard\">\n            <p> Type something here... </p>\n            <span>\n                <i class=\"fas fa-calendar-alt\"></i>\n            </span>\n            <span>\n                <i class=\"far fa-file\"></i>\n            </span>\n            <span>\n                <i class=\"fas fa-comment\"></i>\n            </span>\n        </div>\n        <div class=\"editcard\">\n            <i class=\"fas fa-star fa-2x\"></i>\n            <i class=\"far fa-star fa-2x\"></i>\n            <i class=\"fas fa-pencil-alt fa-2x\"></i>\n        </div>\n    </div>\n\n    <div class=\"todo\">\n        <div class=\"checkcard\">\n            <input type=\"checkbox\">\n        </div>\n        <div class=\"maincard\">\n            <p> Type something here... </p>\n            <span>\n                <i class=\"fas fa-calendar-alt\"></i>\n            </span>\n            <span>\n                <i class=\"far fa-file\"></i>\n            </span>\n            <span>\n                <i class=\"fas fa-comment\"></i>\n            </span>\n        </div>\n        <div class=\"editcard\">\n            <i class=\"fas fa-star fa-2x\"></i>\n            <i class=\"far fa-star fa-2x\"></i>\n            <i class=\"fas fa-pencil-alt fa-2x\"></i>\n        </div>\n    </div>\n\n</div>\n\n<p class=\"info\"> <i> {{ todos.length }} tasks left </i> </p>\n"

/***/ }),

/***/ "./src/app/tasks/tasks.component.scss":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
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
    function TasksComponent(service) {
        this.service = service;
        this.current_editing = 0;
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.todos = this.service.getTodos();
    };
    TasksComponent.prototype.switchStar = function (input_index) {
        this.service.putTodos({
            change_index: input_index,
            change_data: {
                starred: !this.todos[input_index].starred
            }
        });
        this.todos = this.service.getTodos();
    };
    TasksComponent.prototype.switchCompleted = function (input_index) {
        this.service.putTodos({
            change_index: input_index,
            change_data: {
                completed: !this.todos[input_index].completed
            }
        });
        this.todos = this.service.getTodos();
    };
    TasksComponent.prototype.enableEdit = function (input_index) {
        var same_number_chosed = this.current_editing === input_index;
        this.current_editing = same_number_chosed ? null : input_index;
    };
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.scss */ "./src/app/tasks/tasks.component.scss")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/todo.service.ts":
/*!*********************************!*\
  !*** ./src/app/todo.service.ts ***!
  \*********************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mock_todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-todos */ "./src/app/mock-todos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.getTodos = function () {
        return _mock_todos__WEBPACK_IMPORTED_MODULE_2__["TODOS"];
    };
    TodoService.prototype.putTodos = function (input_object) {
        var change_index = input_object.change_index;
        var change_data = input_object.change_data;
        // console.log( TODOS[ change_index ] );
        Object.keys(change_data).forEach(function (e) {
            _mock_todos__WEBPACK_IMPORTED_MODULE_2__["TODOS"][change_index][e] = change_data[e];
        });
        return _mock_todos__WEBPACK_IMPORTED_MODULE_2__["TODOS"];
    };
    TodoService.prototype.changeData = function () {
        //
    };
    TodoService.prototype.servInit = function () {
        // console.log('Hello');
        return 'something';
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoService);
    return TodoService;
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