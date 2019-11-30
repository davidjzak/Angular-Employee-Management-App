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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _positions_positions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./positions/positions.component */ "./src/app/positions/positions.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");









var routes = [
    {
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "employees",
        component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesComponent"]
    },
    {
        path: "positions",
        component: _positions_positions_component__WEBPACK_IMPORTED_MODULE_5__["PositionsComponent"]
    },
    { path: "employee/:_id", component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"] },
    { path: "position/:_id", component: _position_position_component__WEBPACK_IMPORTED_MODULE_8__["PositionComponent"] },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/home"
    },
    {
        path: "**",
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "<app-nav></app-nav>\n<app-content>\n  <app-home></app-home>\n  <app-employees></app-employees>\n  <app-positions></app-positions>\n</app-content>\n<app-footer></app-footer>\n\n<!--/header-->\n\n<!--/#main-slider-->\n\n<!--/#footer-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*********************************************************************************
* WEB422 – Assignment 05 * I declare that this assignment is my own work in
accordance with Seneca Academic Policy. No part of this * assignment has been
copied manually or electronically from any other source (including web sites) or
* distributed to other students. * * Name: ____David Zak______ Student ID:
__158458174___ Date: __November 15th, 2019__ *
********************************************************************************/


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "app5";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _positions_positions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./positions/positions.component */ "./src/app/positions/positions.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesComponent"],
                _positions_positions_component__WEBPACK_IMPORTED_MODULE_11__["PositionsComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeComponent"],
                _position_position_component__WEBPACK_IMPORTED_MODULE_15__["PositionComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--/#main-slider-->\n<div class=\"color-border\"></div>\n<div>\n  <router-outlet></router-outlet>\n</div>\n<div class=\"color-border\"></div>\n"

/***/ }),

/***/ "./src/app/content/content.component.scss":
/*!************************************************!*\
  !*** ./src/app/content/content.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/data/employee.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/employee.service.ts ***!
  \******************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get("http://pure-citadel-90161.herokuapp.com" + "/employees");
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        return this.http.put("http://pure-citadel-90161.herokuapp.com" + employee._id, employee);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get("http://pure-citadel-90161.herokuapp.com/employee-raw/" + id);
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/data/position.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/position.service.ts ***!
  \******************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PositionService = /** @class */ (function () {
    function PositionService(http) {
        this.http = http;
    }
    PositionService.prototype.getPositions = function () {
        return this.http.get("http://pure-citadel-90161.herokuapp.com" + "/positions");
    };
    PositionService.prototype.savePosition = function (position) {
        return this.http.put("ttp://pure-citadel-90161.herokuapp.com/position/" + position._id, position);
    };
    PositionService.prototype.getPosition = function (id) {
        return this.http.get("ttp://pure-citadel-90161.herokuapp.com/position/" + id);
    };
    PositionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\" *ngIf=\"employee\">\n  <h2>Employee: {{ employee.FirstName }}&nbsp;{{ employee.LastName }}</h2>\n  <p class=\"lead\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed\n    eros tristique bibendum.\n  </p>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div\n              class=\"form-group\"\n              [ngClass]=\"{ 'form-group has-error': FirstName.errors }\"\n            >\n              <label class=\"control-label\" for=\"FirstName\">First Name:</label>\n              <input\n                #FirstName=\"ngModel\"\n                class=\"form-control\"\n                id=\"FirstName\"\n                type=\"text\"\n                name=\"FirstName\"\n                [(ngModel)]=\"employee.FirstName\"\n                required\n                autofocus\n              />\n              <span class=\"help-block\" *ngIf=\"FirstName.errors\"\n                >First Name is Required</span\n              >\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div\n              class=\"form-group\"\n              [ngClass]=\"{ 'form-group has-error': LastName.errors }\"\n            >\n              <label class=\"control-label\" for=\"LastName\">Last Name:</label>\n              <input\n                #LastName=\"ngModel\"\n                class=\"form-control\"\n                id=\"LastName\"\n                type=\"text\"\n                name=\"LastName\"\n                [(ngModel)]=\"employee.LastName\"\n                required\n              />\n              <span class=\"help-block\" *ngIf=\"LastName.errors\"\n                >Last Name is Required</span\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"Position\">Position:</label>\n              <select\n                class=\"form-control\"\n                id=\"Position\"\n                name=\"Position\"\n                [(ngModel)]=\"employee.Position\"\n              >\n                <option *ngFor=\"let p of positions\" [value]=\"p._id\">{{\n                  p.PositionName\n                }}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"SalaryBonus\"\n                >Salary Bonus</label\n              >\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">$</span>\n                <input\n                  #SalaryBonus=\"ngModel\"\n                  class=\"form-control\"\n                  id=\"SalaryBonus\"\n                  type=\"Number\"\n                  name=\"SalaryBonus\"\n                  [(ngModel)]=\"employee.SalaryBonus\"\n                  required\n                />\n                <span class=\"help-block\" *ngIf=\"SalaryBonus.errors\"\n                  >Salary bonus is Required</span\n                >\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div\n              class=\"form-group\"\n              [ngClass]=\"{ 'form-group has-error': AddressStreet.errors }\"\n            >\n              <label class=\"control-label\" for=\"AddressStreet\"\n                >Address (Street):</label\n              >\n              <input\n                #AddressStreet=\"ngModel\"\n                class=\"form-control\"\n                id=\"AddressStreet\"\n                type=\"text\"\n                name=\"AddressStreet\"\n                [(ngModel)]=\"employee.AddressStreet\"\n                required\n              />\n              <span class=\"help-block\" *ngIf=\"AddressStreet.errors\"\n                >Address street is Required</span\n              >\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div\n              class=\"form-group\"\n              [ngClass]=\"{ 'form-group has-error': AddressCity.errors }\"\n            >\n              <label class=\"control-label\" for=\"AddressCity\"\n                >Address (City):</label\n              >\n              <input\n                #AddressCity=\"ngModel\"\n                class=\"form-control\"\n                id=\"AddressCity\"\n                type=\"text\"\n                name=\"AddressCity\"\n                [(ngModel)]=\"employee.AddressCity\"\n                required\n              />\n              <span class=\"help-block\" *ngIf=\"AddressCity.errors\"\n                >Address city is Required</span\n              >\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div\n              class=\"form-group\"\n              [ngClass]=\"{ 'form-group has-error': AddressState.errors }\"\n            >\n              <label class=\"control-label\" for=\"AddressState\"\n                >Address (State):</label\n              >\n              <input\n                #AddressState=\"ngModel\"\n                class=\"form-control\"\n                id=\"AddressState\"\n                type=\"text\"\n                name=\"AddressState\"\n                [(ngModel)]=\"employee.AddressState\"\n                required\n              />\n              <span class=\"help-block\" *ngIf=\"AddressState.errors\"\n                >Address state is Required</span\n              >\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div\n              class=\"form-group\"\n              [ngClass]=\"{ 'form-group has-error': AddressZip.errors }\"\n            >\n              <label class=\"control-label\" for=\"AddressZip\"\n                >Address (Zip Code):</label\n              >\n              <input\n                #AddressZip=\"ngModel\"\n                class=\"form-control\"\n                id=\"AddressZip\"\n                type=\"text\"\n                name=\"AddressZip\"\n                [(ngModel)]=\"employee.AddressZip\"\n                required\n              />\n              <span class=\"help-block\" *ngIf=\"AddressZip.errors\"\n                >Address zip is Required</span\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div\n              class=\"form-group\"\n              [ngClass]=\"{ 'form-group has-error': PhoneNum.errors }\"\n            >\n              <label class=\"control-label\" for=\"PhoneNum\">Phone Number:</label>\n              <input\n                #PhoneNum=\"ngModel\"\n                class=\"form-control\"\n                id=\"PhoneNum\"\n                type=\"text\"\n                name=\"PhoneNum\"\n                [(ngModel)]=\"employee.PhoneNum\"\n                pattern=\"\\+?[ ]*[1-9]?[ ]*\\-?[ ]*\\(?[ ]*[1-9][ ]*(\\d[ ]*){2}\\)?[ ]*\\-?[ ]*(\\d[ ]*){3}-[ ]*(\\d[ ]*){4}\"\n              />\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div\n              class=\"form-group\"\n              [ngClass]=\"{ 'form-group has-error': Extension.errors }\"\n            >\n              <label class=\"control-label\" for=\"Extension\">Extension:</label>\n              <input\n                #Extension=\"ngModel\"\n                class=\"form-control\"\n                id=\"Extension\"\n                type=\"Number\"\n                name=\"Extension\"\n                [(ngModel)]=\"employee.Extension\"\n                required\n              />\n              <span class=\"help-block\" *ngIf=\"Extension.errors\"\n                >Extension is Required</span\n              >\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"HireDate\">Hire Date:</label>\n              <input\n                class=\"form-control\"\n                id=\"HireDate\"\n                name=\"HireDate\"\n                type=\"text\"\n                value=\"HireDate\"\n                [ngModel]=\"employee.HireDate | date: 'longDate'\"\n                readonly\n              />\n            </div>\n          </div>\n        </div>\n        <hr />\n        <a [routerLink]=\"['/employees']\" class=\"btn btn-warning pull-left\"\n          >Return to Employee List</a\n        >\n        <input\n          type=\"submit\"\n          class=\"btn btn-primary pull-right\"\n          value=\"Update Employee\"\n          [disabled]=\"!f.valid\"\n        />\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n  <br />\n  <div class=\"alert alert-success\" *ngIf=\"successMessage == true && employee\">\n    <strong>Success!</strong> {{ employee.FirstName }}&nbsp;{{\n      employee.LastName\n    }}'s information was successfully saved.\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"failMessage == true && employee\">\n    <strong>Error!</strong> {{ employee.FirstName }}&nbsp;{{\n      employee.LastName\n    }}'s information could not be saved.\n  </div>\n</div>\n<br /><br />\n"

/***/ }),

/***/ "./src/app/employee/employee.component.scss":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvQzpcXFVzZXJzXFxBZGFtXFxEZXNrdG9wXFxzY2hvb2xcXHNlbWVzdGVyIDRcXHdlYjQyMlxcYXNzaWdubWVudDZEYXZpZFpha1xcYXBwNi9zcmNcXGFwcFxcZW1wbG95ZWVcXGVtcGxveWVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");





var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(route, employeeService, positionService, router) {
        this.route = route;
        this.employeeService = employeeService;
        this.positionService = positionService;
        this.router = router;
        this.successMessage = false;
        this.failMessage = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubScription = this.route.params.subscribe(function (params) {
            _this.employeeSubscription = _this.employeeService
                .getEmployee(params["_id"])
                .subscribe(function (emp) {
                _this.employee = emp[0];
                _this.getPositionsSub = _this.positionService
                    .getPositions()
                    .subscribe(function (data) {
                    _this.positions = data;
                });
            });
        });
    };
    EmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.saveEmployeeSubscription = this.employeeService
            .saveEmployee(this.employee)
            .subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function () {
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        if (this.employeeSubscription) {
            this.employeeSubscription.unsubscribe();
        }
        if (this.getPositionsSub) {
            this.getPositionsSub.unsubscribe();
        }
        if (this.paramSubScription) {
            this.paramSubScription.unsubscribe();
        }
        if (this.saveEmployeeSubscription) {
            this.saveEmployeeSubscription.unsubscribe();
        }
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-employee",
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/employee/employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _data_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            _data_position_service__WEBPACK_IMPORTED_MODULE_4__["PositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Employees</h2>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <input\n        class=\"form-control\"\n        id=\"EmployeeSearch\"\n        name=\"EmployeeSearch\"\n        type=\"text\"\n        placeholder=\"Search\n        Employees by Full Name or Position\"\n        (keyup)=\"onEmployeeSearchKeyUP($event)\"\n      /><br />\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-condensed table-hover\">\n          <thead>\n            <td>Full Name</td>\n            <td>Address</td>\n            <td>Phone Number</td>\n            <td>Hire Date</td>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let employee of filteredEmployees\"\n              (click)=\"routeEmployee(employee.__id)\"\n            >\n              <td>{{ employee.FirstName }} {{ employee.LastName }}</td>\n              <td>\n                {{ employee.AddressStreet }}. {{ employee.AddressState }},\n                {{ employee.AddressCity }}. {{ employee.AddressZip }}\n              </td>\n              <td>{{ employee.PhoneNum }} ext: {{ employee.Extension }}</td>\n              <td>{{ employee.HireDate | date: \"longDate\" }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/employees/employees.component.scss":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  margin-top: 40px; }\n\n.table-responsive {\n  margin-bottom: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2Nob29sXFxzZW1lc3RlciA0XFx3ZWI0MjJcXGFzc2lnbm1lbnQ2RGF2aWRaYWtcXGFwcDYvc3JjXFxhcHBcXGVtcGxveWVlc1xcZW1wbG95ZWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZXMvZW1wbG95ZWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(emp, router) {
        this.emp = emp;
        this.router = router;
        this.loadingError = false;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmployeesSub = this.emp.getEmployees().subscribe(function (employees) {
            _this.employees = employees;
            _this.filteredEmployees = employees;
        }, //by default display all employee if they type filter
        function (err) {
            this.loadingError = true;
        });
    };
    EmployeesComponent.prototype.onEmployeeSearchKeyUP = function (event) {
        var substring = event.target.value.toLowerCase();
        this.filteredEmployees = this.employees.filter(function (em) {
            return em.Position["PositionName"].toLowerCase().indexOf(substring) != -1 ||
                em.FirstName.toLowerCase().indexOf(substring) != -1 ||
                em.LastName.toLowerCase().indexOf(substring) != -1;
        });
    };
    EmployeesComponent.prototype.routeEmployee = function (id) {
        this.router.navigate(["/employee/", id]);
    };
    EmployeesComponent.prototype.ngOnDestroy = function () {
        if (this.getEmployeesSub != "undefined") {
            this.getEmployeesSub.unsubscribe();
        }
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-employees",
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.scss */ "./src/app/employees/employees.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        Copyright &copy; 2019 David Zak WEB422. Design by\n        <a href=\"http://www.templategarden.com\" rel=\"nofollow\"\n          >TemplateGarden</a\n        >\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"follow-us\">\n          <a class=\"fa fa-facebook social-icon\" href=\"#\"></a>\n          <a class=\"fa fa-twitter social-icon\" href=\"#\"></a>\n          <a class=\"fa fa-linkedin social-icon\" href=\"#\"></a>\n          <a class=\"fa fa-google-plus social-icon\" href=\"#\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main-slider\" class=\"no-margin\">\n  <div class=\"carousel slide\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div\n        class=\"item active\"\n        style=\"background-image: url(/assets/images/slider/bg1.jpg)\"\n      >\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>\n                  Welcome to\n                  <span class=\"logo\"><i class=\"fa fa-bolt\"></i>API Demo</span>\n                </h1>\n                <h2>\n                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed\n                  diam nonummy nibh euismod tincidunt laoreet\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n\n      <div\n        class=\"item\"\n        style=\"background-image: url(/assets/images/slider/bg2.jpg)\"\n      >\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Typi non habent claritatem insitam</h1>\n                <h2>\n                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed\n                  diam nonummy nibh euismod tincidunt laoreet\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n\n      <div\n        class=\"item\"\n        style=\"background-image: url(/assets/images/slider/bg3.jpg)\"\n      >\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Mirum est notare quam littera gothica</h1>\n                <h2>\n                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed\n                  diam nonummy nibh euismod tincidunt laoreet\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n    </div>\n    <!--/.carousel-inner-->\n  </div>\n  <!--/.carousel-->\n  <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\">\n    <i class=\"fa fa-chevron-left\"></i>\n  </a>\n  <a class=\"next hidden-xs\" href=\"#main-slider\" data-slide=\"next\">\n    <i class=\"fa fa-chevron-right\"></i>\n  </a>\n</section>\n<!--/#main-slider-->\n<div class=\"color-border\"></div>\n<section id=\"feature\">\n  <div class=\"container\">\n    <div class=\"center\">\n      <h2>Featured Services</h2>\n      <p class=\"lead\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio\n        sed eros tristique bibendum. Nunc quis semper sem.<br />\n        Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.\n      </p>\n    </div>\n    <div class=\"row\">\n      <div class=\"features\">\n        <div class=\"col-md-6 col-sm-6\">\n          <div class=\"feature-wrap\">\n            <i class=\"fa fa-desktop\"></i>\n            <h2>Employees</h2>\n            <h3>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non\n              odio sed eros tristique.\n            </h3>\n          </div>\n        </div>\n        <!--/.col-md-4-->\n\n        <div class=\"col-md-6 col-sm-6\">\n          <div class=\"feature-wrap\">\n            <i class=\"fa fa-cogs\"></i>\n            <h2>Positions</h2>\n            <h3>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non\n              odio sed eros tristique.\n            </h3>\n          </div>\n        </div>\n      </div>\n      <!--/.services-->\n    </div>\n    <!--/.row-->\n  </div>\n  <!--/.container-->\n</section>\n<!--/#feature-->\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  padding: 70px 0; }\n\n.no-margin {\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEFkYW1cXERlc2t0b3BcXHNjaG9vbFxcc2VtZXN0ZXIgNFxcd2ViNDIyXFxhc3NpZ25tZW50NkRhdmlkWmFrXFxhcHA2L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBwYWRkaW5nOiA3MHB4IDA7XHJcbn1cclxuXHJcbi5uby1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <nav class=\"navbar navbar-inverse\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button\n          type=\"button\"\n          class=\"navbar-toggle\"\n          data-toggle=\"collapse\"\n          data-target=\".navbar-collapse\"\n        >\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"index.html\"\n          ><i class=\"fa fa-anchor\"></i> David Zak API Demo</a\n        >\n      </div>\n      <div class=\"collapse navbar-collapse navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/employees\">Employees</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/positions\">Positions</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!--/.container-->\n  </nav>\n  <!--/nav-->\n</header>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      Page Not Found\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/position/position.component.html":
/*!**************************************************!*\
  !*** ./src/app/position/position.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Position: Position Name</h2>\n  <p class=\"lead\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed\n    eros tristique bibendum.\n  </p>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div\n              class=\"form-group\"\n              [ngClass]=\"{ 'form-group has-error': PositionName.errors }\"\n            >\n              <label class=\"control-label\" for=\"PositionName\"\n                >Position Name:</label\n              >\n              <input\n                #PositionName=\"ngModel\"\n                class=\"form-control\"\n                id=\"PositionName\"\n                type=\"text\"\n                name=\"PositionName\"\n                [(ngModel)]=\"position.PositionName\"\n                required\n              />\n              <span class=\"help-block\" *ngIf=\"PositionName.errors\"\n                >Position name is Required</span\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div\n              class=\"form-group\"\n              [ngClass]=\"{ 'form-group has-error': PositionDescription.errors }\"\n            >\n              <label class=\"control-label\" for=\"PositionDescription\"\n                >Description:</label\n              >\n              <textarea\n                #PositionDescription=\"ngModel\"\n                class=\"form-control\"\n                id=\"PositionDescription\"\n                rows=\"5\"\n                name=\"PositionDescription\"\n                [(ngModel)]=\"position.PositionDescription\"\n                required\n              ></textarea>\n              <span class=\"help-block\" *ngIf=\"PositionDescription.errors\"\n                >Position Description is Required</span\n              >\n            </div>\n          </div>\n        </div>\n        <hr />\n        <a [routerLink]=\"['/positions']\" class=\"btn btn-warning pull-left\"\n          >Return to Position List</a\n        >\n        <input\n          type=\"submit\"\n          class=\"btn btn-primary pull-right\"\n          value=\"Update Position\"\n          [disabled]=\"!f.valid\"\n        />\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n  <br />\n  <div class=\"alert alert-success\" *ngIf=\"successMessage == true && position\">\n    <strong>Success!</strong> Position: {{ position.PositionName }} was\n    successfully saved.\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"failMessage == true && position\">\n    <strong>Error!</strong> Position: {{ position.PositionName }} could not be\n    saved.\n  </div>\n</div>\n<br />\n"

/***/ }),

/***/ "./src/app/position/position.component.scss":
/*!**************************************************!*\
  !*** ./src/app/position/position.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb24vQzpcXFVzZXJzXFxBZGFtXFxEZXNrdG9wXFxzY2hvb2xcXHNlbWVzdGVyIDRcXHdlYjQyMlxcYXNzaWdubWVudDZEYXZpZFpha1xcYXBwNi9zcmNcXGFwcFxccG9zaXRpb25cXHBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3NpdGlvbi9wb3NpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/position/position.component.ts":
/*!************************************************!*\
  !*** ./src/app/position/position.component.ts ***!
  \************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PositionComponent = /** @class */ (function () {
    function PositionComponent(positionService, route) {
        this.positionService = positionService;
        this.route = route;
        this.successMessage = false;
        this.failMessage = false;
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubscription = this.route.params.subscribe(function (params) {
            _this.positionSubscription = _this.positionService
                .getPosition(params["_id"])
                .subscribe(function (pos) {
                _this.position = pos[0];
            });
        });
    };
    PositionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.savePositionSubscription = this.positionService
            .savePosition(this.position)
            .subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function () {
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    PositionComponent.prototype.ngOnDestroy = function () {
        if (this.positionSubscription) {
            this.positionSubscription.unsubscribe();
        }
        if (this.savePositionSubscription) {
            this.savePositionSubscription.unsubscribe();
        }
        if (this.paramSubscription) {
            this.paramSubscription.unsubscribe();
        }
    };
    PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-position",
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/position/position.component.html"),
            styles: [__webpack_require__(/*! ./position.component.scss */ "./src/app/position/position.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/positions/positions.component.html":
/*!****************************************************!*\
  !*** ./src/app/positions/positions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Positions</h2>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-condensed table-hover\">\n          <thead>\n            <td>Position Title</td>\n            <td>Position Description</td>\n            <td>Salary</td>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let pos of positions\" (click)=\"routePosition(pos._id)\">\n              <td>{{ pos.PositionName }}</td>\n              <td>{{ pos.PositionDescription }}</td>\n              <td>${{ pos.PositionBaseSalary | number: \".2\" }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/positions/positions.component.scss":
/*!****************************************************!*\
  !*** ./src/app/positions/positions.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  margin-top: 40px; }\n\n.table-responsive {\n  margin-bottom: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb25zL0M6XFxVc2Vyc1xcQWRhbVxcRGVza3RvcFxcc2Nob29sXFxzZW1lc3RlciA0XFx3ZWI0MjJcXGFzc2lnbm1lbnQ2RGF2aWRaYWtcXGFwcDYvc3JjXFxhcHBcXHBvc2l0aW9uc1xccG9zaXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3NpdGlvbnMvcG9zaXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/positions/positions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/positions/positions.component.ts ***!
  \**************************************************/
/*! exports provided: PositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsComponent", function() { return PositionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PositionsComponent = /** @class */ (function () {
    function PositionsComponent(p, router) {
        this.p = p;
        this.router = router;
        this.loadingError = false;
    }
    PositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPositionSub = this.p.getPositions().subscribe(function (positions) { return (_this.positions = positions); }, function (err) {
            this.loadingError = true;
        });
    };
    PositionsComponent.prototype.routePosition = function (id) {
        this.router.navigate(["/position/", id]);
    };
    PositionsComponent.prototype.ngOnDestroy = function () {
        console.log(this.getPositionSub);
        if (this.getPositionSub != "undefined") {
            this.getPositionSub.unsubscribe();
        }
    };
    PositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-positions",
            template: __webpack_require__(/*! ./positions.component.html */ "./src/app/positions/positions.component.html"),
            styles: [__webpack_require__(/*! ./positions.component.scss */ "./src/app/positions/positions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PositionsComponent);
    return PositionsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Adam\Desktop\school\semester 4\web422\assignment6DavidZak\app6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map