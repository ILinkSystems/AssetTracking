webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 300px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_charts__ = __webpack_require__("../../../../@progress/kendo-angular-charts/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_snazzy_info_window__ = __webpack_require__("../../../../@agm/snazzy-info-window/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_apiservice__ = __webpack_require__("../../../../../src/app/utils/apiservice.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid__["a" /* GridModule */],
            __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_charts__["a" /* ChartsModule */],
            __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCpRyKFezhM8zRMABqR451RvplCKXnf4Wg'
            }),
            __WEBPACK_IMPORTED_MODULE_10__agm_snazzy_info_window__["a" /* AgmSnazzyInfoWindowModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_progressbar__["a" /* NgProgressModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__utils_apiservice__["a" /* APIService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".deviceContainer {\r\n  background: #f0f0f0;\r\n  height: 100vh;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  /* overflow: auto; */\r\n  box-shadow: -4px 0px 10px 5px rgba(0, 0, 0, 0.27);\r\n}\r\nagm-map {\r\n  height: 300px;\r\n}\r\n\r\n.pd0-LR {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.deviceHeader {\r\n  background-color: #484280;\r\n  padding: 15px;\r\n}\r\n\r\n.deviceHeader ul li {\r\n  line-height: 0;\r\n  position: relative;\r\n  top: -6px;\r\n}\r\n\r\n.deviceHeader ul li p {\r\n  margin: 0;\r\n  font-size: 10px;\r\n  line-height: 0;\r\n  font-family: 'Montserrat', sans-serif;\r\n  color: #fff;\r\n  position: absolute;\r\n  right: 3px;\r\n  bottom: -4px;\r\n}\r\n\r\n.deviceLogo {\r\n  width: 80%;\r\n}\r\n\r\n.addDeviceHead {\r\n  background-color: #f1f1f1;\r\n  padding: 5px 15px;\r\n}\r\n\r\n.addDeviceHead h4 {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #333333;\r\n  margin: 0;\r\n}\r\n\r\n.addDeviceHead a {\r\n  color: #0071AA;\r\n  font-size: 12px;\r\n}\r\n\r\n.addDeviceForm {\r\n  position: absolute;\r\n  right: -300px;\r\n  top: 0px;\r\n  padding: 15px;\r\n  background: rgba(240, 240, 240, 0.8);\r\n  width: 300px;\r\n  z-index: 99;\r\n  height: 100%;\r\n}\r\n\r\n.addDeviceForm .form-group label {\r\n  margin-bottom: 0.1rem;\r\n}\r\n\r\n.addDeviceForm p {\r\n  margin: 1.8rem 0;\r\n  line-height: 18px;\r\n  font-size: 14px;\r\n  color: #333333;\r\n}\r\n\r\n.listGroup {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.listItem {\r\n  border-bottom: 1px solid #eaeaea;\r\n  cursor: pointer;\r\n}\r\n\r\n.listItem.active>.routeIcon {\r\n  display: block;\r\n}\r\n\r\n.listItem .listSec {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  background-color: #ffffff;\r\n  width: 100%;\r\n}\r\n\r\n.list_risk.active {\r\n  border: 1px solid #FB9700;\r\n  border-left-width: 6px;\r\n  position: relative;\r\n  width: 102%;\r\n  z-index: 9999;\r\n}\r\n\r\n.list_risk.active:after,\r\n.list_risk.active:before {\r\n  left: 100%;\r\n  top: 25%;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n}\r\n\r\n.list_risk.active:after {\r\n  border-color: rgba(255, 255, 255, 0);\r\n  border-left-color: #ffffff;\r\n  border-width: 15px;\r\n  margin-top: -15px;\r\n}\r\n\r\n.list_risk.active:before {\r\n  border-color: rgba(251, 151, 0, 0);\r\n  border-left-color: #FB9700;\r\n  border-width: 16px;\r\n  margin-top: -16px;\r\n}\r\n\r\n.list_safe.active {\r\n  border: 1px solid #21804A;\r\n  border-left-width: 6px;\r\n  position: relative;\r\n  width: 102%;\r\n  z-index: 9999;\r\n}\r\n\r\n.list_safe.active:after,\r\n.list_safe.active:before {\r\n  left: 100%;\r\n  top: 25%;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n}\r\n\r\n.list_safe.active:after {\r\n  border-color: rgba(255, 255, 255, 0);\r\n  border-left-color: #ffffff;\r\n  border-width: 15px;\r\n  margin-top: -15px;\r\n}\r\n\r\n.list_safe.active:before {\r\n  border-color: rgba(251, 151, 0, 0);\r\n  border-left-color: #21804A;\r\n  border-width: 16px;\r\n  margin-top: -16px;\r\n}\r\n\r\n.list_unsafe.active {\r\n  border: 1px solid #D12C2C;\r\n  border-left-width: 6px;\r\n  position: relative;\r\n  width: 102%;\r\n  z-index: 9999;\r\n}\r\n\r\n.list_unsafe.active:after,\r\n.list_unsafe.active:before {\r\n  left: 100%;\r\n  top: 25%;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n}\r\n\r\n.list_unsafe.active:after {\r\n  border-color: rgba(255, 255, 255, 0);\r\n  border-left-color: #ffffff;\r\n  border-width: 15px;\r\n  margin-top: -15px;\r\n}\r\n\r\n.list_unsafe.active:before {\r\n  border-color: rgba(251, 151, 0, 0);\r\n  border-left-color: #D12C2C;\r\n  border-width: 16px;\r\n  margin-top: -16px;\r\n}\r\n\r\n.detailsWrap {\r\n  padding: 15px;\r\n  width: 100%;\r\n}\r\n\r\n.details {\r\n  width: 180px;\r\n  padding: 15px 0;\r\n}\r\n\r\n.detailLine {\r\n  width: 100%;\r\n}\r\n\r\n.detailLine .left {\r\n  float: left;\r\n  width: 85%;\r\n}\r\n\r\n.detailLine .right {\r\n  float: left;\r\n  width: 15%;\r\n}\r\n\r\n.detailLine.title h5 {\r\n  font-size: 15px;\r\n  margin-bottom: 5px;\r\n  font-weight: 600;\r\n  color: #333333;\r\n  width: 100%;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n\r\n.detailLine.title .right img {\r\n  margin-top: -15px;\r\n}\r\n\r\n.detailLine.desc p {\r\n  font-size: 12px;\r\n  margin-bottom: 5px;\r\n  line-height: 15px;\r\n  color: #333333;\r\n}\r\n\r\n.detailLine.precauition .left a {\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n}\r\n\r\n.detailLine.precauition a.safe {\r\n  color: #21804A;\r\n}\r\n\r\n.detailLine.precauition a.risk {\r\n  color: #FB9700;\r\n}\r\n\r\n.detailLine.precauition a.unsafe {\r\n  color: #D12C2C;\r\n}\r\n\r\n.detailLine.precauition .right .riskIcon {\r\n  position: relative;\r\n  top: -4px;\r\n}\r\n\r\n.supportIcons {\r\n  padding: 10px 0;\r\n}\r\n\r\n.supportIcons img {\r\n  display: block;\r\n}\r\n\r\n.supportIcons img.riskIcon {\r\n  margin-top: 30px;\r\n}\r\n\r\n.routeIcon {\r\n  width: 100%;\r\n  padding: 5px;\r\n  background-color: #fafafa;\r\n  text-align: center;\r\n  display: none;\r\n}\r\n\r\n.routeIcon ul {\r\n  margin: 0;\r\n  padding: 0\r\n}\r\n\r\n.routeIcon li {\r\n  list-style: none;\r\n  display: inline-block;\r\n  width: 60px;\r\n  text-align: center;\r\n}\r\n\r\n.routeIcon li a {\r\n  display: block;\r\n  font-size: 12px;\r\n  color: #0071AA;\r\n  line-height: 14px;\r\n}\r\n\r\n.splashMsg {\r\n  color: #484280;\r\n  font-family: 'Montserrat', sans-serif;\r\n  text-align: center;\r\n  margin:20px 0;\r\n}\r\n\r\n.splashMsg p {\r\n  text-align: left;\r\n  font-weight: 600;\r\n}\r\n\r\n.splashMsg img {\r\n  margin-bottom: 1rem;\r\n  display: block;\r\n  text-align: left;\r\n}\r\n\r\n.splashMsg h6 {\r\n  font-weight: 600;\r\n}\r\n\r\n.msgToSelect {\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-size: 24px;\r\n  color: #646464;\r\n  width: 35%;\r\n  text-align: center;\r\n  margin:20px auto;\r\n  line-height: 28px;\r\n}\r\n\r\n\r\n/***Device Detail****/\r\n\r\n.deviceDetail {\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.deviceDetail h5 {\r\n  padding: 5px 15px;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-weight: 600;\r\n  color: #434343;\r\n}\r\n\r\n.deviceTable {\r\n  background-color: #fff;\r\n  padding: 15px 15px;\r\n}\r\n\r\n.deviceTable table {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.deviceTable table td img {\r\n  position: absolute;\r\n  top: -2px;\r\n}\r\n\r\n.deviceTable td,\r\n.deviceTable th {\r\n  color: #4a4a4a;\r\n  font-size: 13px;\r\n  border-top: 0;\r\n  position: relative;\r\n}\r\n\r\n.deviceTable th {\r\n  color: #4f4f4f;\r\n  font-weight: 600;\r\n}\r\n\r\n.deviceMenu {\r\n  padding: 5px 15px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.deviceMenu h5 {\r\n  padding: 0\r\n}\r\n\r\n.deviceMenu ul {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.deviceMenu ul li {\r\n  list-style: none;\r\n  font-size: 14px;\r\n  padding: 5px 0;\r\n  font-weight: 600;\r\n}\r\n\r\n.deviceMenu ul li a {\r\n  color: #0071aa;\r\n}\r\n\r\n.blockchain_details {\r\n  margin-bottom: 2rem\r\n}\r\n\r\n.blockchain_details tr:last-child td,\r\n.blockchain_details tr:last-child th {\r\n  border-bottom: 1px solid #eceeef\r\n}\r\n\r\n\r\n/****Profile*****/\r\n\r\n.profile {\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.profileHead {\r\n  background-color: #3a3566;\r\n  height: 150px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding: 15px;\r\n}\r\n\r\n.profileHead img {\r\n  height: 80px;\r\n}\r\n\r\n.name {\r\n  padding: 0 10px;\r\n}\r\n\r\n.name span {\r\n  font-size: 12px;\r\n}\r\n\r\n.name,\r\n.name h5 {\r\n  color: #fff;\r\n}\r\n\r\n.profileMenu {\r\n  background-color: #fff;\r\n}\r\n\r\n.profileMenu ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.profileMenu ul li {\r\n  list-style: none;\r\n  border-bottom: 1px solid #f3f3f3;\r\n}\r\n\r\n.profileMenu ul li:last-child {\r\n  border-bottom: 0px;\r\n}\r\n\r\n.profileMenu ul li a {\r\n  display: inline-block;\r\n  width: 100%;\r\n  padding: 10px 15px;\r\n  color: #010101;\r\n  font-weight: 600;\r\n}\r\n\r\n.safe {\r\n  color: #21804A;\r\n}\r\n\r\n.risk {\r\n  color: #FB9700;\r\n}\r\n\r\n.unsafe {\r\n  color: #D12C2C;\r\n}\r\n\r\n.footer_logo {\r\n  position: absolute;\r\n  bottom: 15px;\r\n  right: 15px;\r\n}\r\n\r\n.backIcon {\r\n  position: relative;\r\n  top: 15px;\r\n}\r\n\r\npath{\r\n  background-color:#000 !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress [positionUsing]=\"'marginLeft'\" [minimum]=\"0.15\" [maximum]=\"1\" [speed]=\"200\" [showSpinner]=\"false\" [direction]=\"'leftToRightIncreased'\"\r\n[color]=\"'#FB9700'\" [trickleSpeed]=\"250\" [thick]=\"true\" [ease]=\"'linear'\"></ng-progress>\r\n<section class=\"container-fluid h-100\">\r\n<div class=\"row h-100 toggled\" id=\"wrapper\">\r\n  <div class=\"pd0-LR\" id=\"sidebar-wrapper\">\r\n    <div class=\"deviceContainer\">\r\n      <div class=\"deviceHeader clearfix\">\r\n        <a href=\"javascript:;\" class=\"float-left\" (click)=\"logoClicked()\">\r\n          <img class=\"deviceLogo\" src=\"assets/images/Logos_and_Favicons/BLOCT-Logo-White.png\">\r\n        </a>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li class=\"dropdown text-right\">\r\n            <a href=\"javascript:;\" class=\"clearfix\" (click)=\"menuClicked()\" *ngIf=\"!showProfile\">\r\n              <img src=\"assets/images/theme-light/button-hamburgermenu-white.png\">\r\n              <p>Menu</p>\r\n            </a>\r\n            <a href=\"javascript:;\" class=\"clearfix\" (click)=\"menuBackClicked()\" *ngIf=\"showProfile\">\r\n              <img src=\"assets/images/theme-light/arrow-up2.png\">\r\n              <p>Menu</p>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- Device panel starts here-->\r\n      <div class=\"deviceBody\" *ngIf=\"showDevices\">\r\n        <div class=\"addDeviceHead clearfix\">\r\n          <h4 class=\"float-left\">Devices</h4>\r\n          <a href=\"javascript:;\" class=\"float-right\" (click)=\"addDevice()\">\r\n            <img src=\"assets/images/theme-light/button-adddevice.png\"> Add Device\r\n          </a>\r\n          <!--Add Device Form-->\r\n          <div class=\"addDeviceForm\" *ngIf=\"showPopup\">\r\n            <form>\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"mt-1 mb-4 float-left\">Add Device</h5>\r\n                <a href=\"javascript:;\" class=\"float-right\" (click)=\"showPopup = false\">\r\n                  <img src=\"assets/images/theme-light/close.png\">\r\n                </a>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Asset Type</label>\r\n                <select class=\"form-control\" [(ngModel)]=\"selectedDeviceType\" [ngModelOptions]=\"{standalone: true}\">\r\n                  <option *ngFor=\"let deviceType of deviceTypes\" [ngValue]=\"deviceType\">{{deviceType.typeName}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Asset Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"deviceName\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n            \r\n              <div class=\"form-group\">\r\n                <label>Username</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n            \r\n              <div class=\"mt-4 clearfix\">\r\n                <button type=\"button\" class=\"btn btn-default float-left\" (click)=\"clearFormData()\">Reset</button>\r\n                <button type=\"submit\" class=\"btn btn-primary float-right\" (click)=\"saveNewDevice()\">Save</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!--Add Device Form Ends Here-->\r\n        </div>\r\n        <ul class=\"listGroup\">\r\n          <li class=\"listItem list_safe list_risk list_unsafe active clearfix\" [class.active]=\"selectedIdx === i\" [class.list_safe]=\"device.status === 'Active'\"\r\n            [class.list_risk]=\"device.status === 'At Risk'\" [class.list_unsafe]=\"device.status === 'Unsafe'\" *ngFor=\"let device of apiService.devices;let i = index\">\r\n            <div class=\"listSec\" (click)=\"selectDevice(i, device)\">\r\n              <div>\r\n                <img src=\"assets/images/theme-light/icon-device-nest-camera.png\">\r\n              </div>\r\n              <div class=\"detailsWrap float-left\">\r\n                <div class=\"detailLine title clearfix\">\r\n                  <div class=\"left\">\r\n                    <h5>{{device.Name}}</h5>\r\n                  </div>\r\n                  <div class=\"right\">\r\n                    <img src=\"assets/images/theme-light/button-menuellipsis.png\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"detailLine desc clearfix\">\r\n                  <div class=\"left\">\r\n                    <p>{{device.Type}}</p>\r\n                  </div>\r\n                  <div class=\"right\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"detailLine precauition clearfix\">\r\n                  <div class=\"left\">\r\n                    <a class=\"safe risk unsafe\" [class.safe]=\"device.status === 'Active'\" [class.risk]=\"device.status === 'At Risk'\"\r\n                      [class.unsafe]=\"device.status === 'Unsafe'\">{{device.status}}</a>\r\n                  </div>\r\n                  <div class=\"right\">\r\n                    <img class=\"riskIcon\" src=\"assets/images/theme-light/badge-atrisk.png\" *ngIf=\"device.status === 'At Risk'\">\r\n                    <img class=\"riskIcon\" src=\"assets/images/theme-light/badge-unsafe.png\" *ngIf=\"device.status === 'Unsafe'\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"routeIcon clearfix\">\r\n              <ul>\r\n                <li (click)=\"onLocateOnMap(device)\" >\r\n                  <img src=\"assets/images/theme-light/icon-locatedevice.png\">\r\n                  <a href=\"javascript:;\">View History</a>\r\n                </li>\r\n                <li (click)=\"onViewDetails(device)\">\r\n                  <img src=\"assets/images/theme-light/icon-deviceinfo.png\">\r\n                  <a href=\"javascript:;\">View Details</a>\r\n                </li>\r\n                <li (click)=\"onViewNavigation(device)\">\r\n                  <img src=\"assets/images/theme-light/icon-viewblockchain.png\">\r\n                  <a href=\"javascript:;\">View Navigation</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- Device panel ends here-->\r\n\r\n      <!-- Device details panel starts here-->\r\n      <div class=\"deviceBody\" *ngIf=\"showDeviceDetails\">\r\n        <div class=\"addDeviceHead clearfix\">\r\n          <a href=\"javascript:;\" (click)=\"backFromDeviceDetails()\">\r\n            <img src=\"assets/images/theme-light/arrow-left2.png\" /> Back</a>\r\n        </div>\r\n        <div class=\"deviceDetail\">\r\n          <h5>Device Details</h5>\r\n          <div class=\"deviceTable\">\r\n            <table class=\"table table-sm\">\r\n              <tr>\r\n                <th>Status</th>\r\n                <td>\r\n                  <strong class=\"safe risk unsafe\" [class.safe]=\"selectedDevice?.status === 'Active'\" [class.risk]=\"selectedDevice?.status === 'At Risk'\"\r\n                    [class.unsafe]=\"selectedDevice?.status === 'Unsafe'\">{{selectedDevice?.status}}</strong>\r\n                  <img src=\"assets/images/theme-light/badge-atrisk.png\" *ngIf=\"selectedDevice?.status === 'At Risk'\" />\r\n                  <img src=\"assets/images/theme-light/badge-unsafe.png\" *ngIf=\"selectedDevice?.status === 'Unsafe'\">\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>Asset ID</th>\r\n                <td>{{selectedDevice?.ID}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Asset Type</th>\r\n                <td>{{selectedDevice?.Type}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Asset Name</th>\r\n                <td>{{selectedDevice?.Name}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Client Name</th>\r\n                <td>{{selectedDevice?.ClientName}}</td>\r\n              </tr>\r\n              <!-- <tr>\r\n                <th>Status</th>\r\n                <td>{{selectedDevice?.Status}}</td>\r\n              </tr> -->\r\n              <!-- <tr>\r\n                <th>Battery</th>\r\n                <td>{{selectedDevice?.batteryLevel}}%</td>\r\n              </tr> -->\r\n            </table>\r\n          </div>\r\n          <div class=\"deviceMenu\">\r\n            <h5>Manage Device</h5>\r\n            <ul>\r\n              <li>\r\n                <a href=\"javascript:;\" (click)=\"onViewBlockChain(selectedDevice)\">View Blockchain</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:;\">Rename</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:;\">Change Password</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:;\">Disconnect</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Device details panel ends here-->\r\n\r\n      <!-- Profile panel starts here-->\r\n      <div class=\"deviceBody\" *ngIf=\"showProfile\">\r\n        <div class=\"profile\">\r\n          <div class=\"profileHead align-items-center\">\r\n            <img class=\"img-rounded img-fluid\" src=\"assets/images/user.png\">\r\n            <div class=\"name\">\r\n              <span>Welcome,</span>\r\n              <h5>{{currentUser.firstName}} {{currentUser.lastName}}</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"profileMenu\">\r\n            <ul>\r\n              <li>\r\n                <a href=\"javascript:;\">Manage Profile</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:;\">Settings</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:;\" (click)=\"logout()\">Logout</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Profile panel ends here-->\r\n    </div>\r\n  </div>\r\n  <div class=\"pd0-LR h-100\" id=\"page-content-wrapper\">\r\n\r\n   <div *ngIf=\"showNavigation\" style=\"width:100%;height:400px\">\r\n    <div #gmap style=\"width:100%;height:400px\" ></div>\r\n    <!-- <div id=\"map-canvas\"></div> -->\r\n  </div>\r\n\r\n\r\n    <!-- Map panel ends here-->\r\n\r\n    <!-- iFrame panel starts here-->\r\n    <iframe style=\"height: 100vh; width:100%\" *ngIf=\"showIframe\" [src]=\"arloSiteUrl\"></iframe>\r\n    <!-- iFrame panel ends here-->\r\n\r\n    <!-- Blockchain panel starts here-->\r\n    <div class=\"container-fluid h-100\" *ngIf=\"showHistory\">\r\n      <div class=\"row h-100\">\r\n        <div class=\"col-md-12\">\r\n          <!-- <a class=\"backIcon float-left\" href=\"javascript:;\" (click)=\"backFromBlockchain()\">\r\n            <img src=\"assets/images/theme-light/arrow-left3.png\">\r\n          </a> -->\r\n          <!-- <h3 class=\"mt-3 mb-3 d-inline-block ml-2 float-left\">Device Blockchain</h3>\r\n          <button class=\"btn btn-default pt-1 pb-1 mt-3 float-right\" (click)=\"navigateToProductPage(selectedDevice)\"> Manage Device</button> -->\r\n          <!-- <table class=\"table blockchain_details\">\r\n            <tr>\r\n              <th>Status</th>\r\n              <td>\r\n                <strong class=\"safe risk unsafe\" [class.safe]=\"selectedDevice?.status === 'Safe'\" [class.risk]=\"selectedDevice?.status === 'At Risk'\"\r\n                  [class.unsafe]=\"selectedDevice?.status === 'Unsafe'\">{{selectedDevice?.status}}</strong>\r\n                <img src=\"assets/images/theme-light/badge-atrisk.png\" *ngIf=\"selectedDevice?.status === 'At Risk'\" />\r\n                <img src=\"assets/images/theme-light/badge-unsafe.png\" *ngIf=\"selectedDevice?.status === 'Unsafe'\">\r\n              </td>\r\n              <th>Device ID</th>\r\n              <td>{{blockchainDevice?.deviceId}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th>Serial ID</th>\r\n              <td>{{blockchainDevice?.serialNumber}}</td>\r\n              <th>Firmware Version</th>\r\n              <td>{{blockchainDevice?.firmwareVersion}}</td>\r\n            </tr>\r\n          </table> -->\r\n          <h5>Transactions</h5>\r\n          <kendo-grid *ngIf=\"showHistory\" [data]=\"gridView\" [height]=\"350\" [pageSize]=\"pageSize\" [skip]=\"skip\" [pageable]=\"true\" (pageChange)=\"pageChange($event)\">\r\n            <kendo-grid-column field=\"Asset\" title=\"Asset\" width=\"150\" [sortable]=\"false\">\r\n            </kendo-grid-column>\r\n           \r\n            <kendo-grid-column field=\"Latitude\" title=\"Latitude\" width=\"150\" [sortable]=\"false\">\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"Longitude\" title=\"Longitude\" width=\"150\" [sortable]=\"false\">\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"City\" title=\"City\" width=\"150\" [sortable]=\"false\">\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"State\" title=\"State\" width=\"150\" [sortable]=\"false\">\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"Country\" title=\"Country\" width=\"150\" [sortable]=\"false\">\r\n            </kendo-grid-column>\r\n          </kendo-grid>\r\n\r\n\r\n         \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Blockchain panel ends here-->\r\n\r\n  </div>\r\n</div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_apiservice__ = __webpack_require__("../../../../../src/app/utils/apiservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = (function () {
    function DashboardComponent(apiService, router, domSanitizer, ngProgress) {
        this.apiService = apiService;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.ngProgress = ngProgress;
        this.apiKey = '';
        this.showPopup = false;
        this.oldIndex = -1;
        this.showWelcome = false;
        this.showMap = true;
        this.showBlockchain = false;
        this.showDevices = true;
        this.showDeviceDetails = false;
        this.showProfile = false;
        this.pageSize = 10;
        this.skip = 0;
        this.apiService.getConfiguration();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.devices = [];
        this.apiService.getConfiguration().then(function (x) {
            _this.ngProgress.start();
            _this.getDevices();
        });
        this.deviceTypes = [{ typeName: 'Tracking' }];
        //  var myLatLng = new google.maps.LatLng(34.018978, -84.194589);
        //  var mapProp = {
        //     center: myLatLng,
        //     zoom: 6,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        //   };
        //  this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        //   var marker = new google.maps.Marker({
        //     position: myLatLng,
        //     title: 'Hello World!'
        //   });
        //   marker.setMap(this.map);
        //   var infowindow = new google.maps.InfoWindow({
        //     content: "This is my place"
        //   });
        //   marker.addListener('click', function() {
        //     infowindow.open(this.map, marker);
        //   });
    };
    DashboardComponent.prototype.animateCircle = function (line) {
        var count = 0;
        window.setInterval(function () {
            count = (count + 1) % 200;
            var icons = line.get('icons');
            icons[0].offset = (count / 2) + '%';
            line.set('icons', icons);
        }, 20);
    };
    // getDeviceStatus(device) {
    //     let status = {};
    //     for (const i in this.standardMetrics) {
    //         if (device.deviceId === this.standardMetrics[i].deviceId) {
    //             if (device.firmwareVersion === this.standardMetrics[i].firmwareVersion) {
    //                 return device.batteryLevel <= 10
    //                     ? status = { status: 'Unsafe', title: ' - Critical Battery' }
    //                     : device.batteryLevel >= this.standardMetrics[i].batteryLevel
    //                         ? status = { status: 'Safe', title: '' }
    //                         : status = { status: 'At Risk', title: ' - Low Battery' };
    //             }
    //             return status = { status: 'At Risk', title: ' - Firmware Out Of Date' };
    //         }
    //     }
    // }
    DashboardComponent.prototype.getDevices = function () {
        var _this = this;
        this.apiService.devices = [];
        this.apiService.getAssets().then(function (data) {
            if (data) {
                _this.ngProgress.done();
                _this.apiService.devices.push(data);
            }
            data.forEach(function (element) {
                _this.apiService.devices.push(element);
            });
        });
        console.log(this.apiService.devices);
        //                     this.apiService.devices.push(data2.arloDevice);
        //                     this.ngProgress.done();
        //                 }
        //             }
        //             this.ngProgress.done();
        //             this.welcomeText = this.apiService.devices.length > 0
        //                 ? 'Select a device from the list on the left to get started.'
        //                 : 'Add a device on the left to get started.';
        //             this.showChart = this.apiService.devices.length > 0;
        //             this.pieData = [
        //                 { category: 'Safe', value: this.apiService.devices.filter(device => device.status === 'Safe').length },
        //                 { category: 'At Risk', value: this.apiService.devices.filter(device => device.status === 'At Risk').length },
        //                 { category: 'Unsafe', value: this.apiService.devices.filter(device => device.status === 'Unsafe').length }
        //             ];
        //         });
        //     });
        // });
    };
    DashboardComponent.prototype.addDevice = function () {
        this.clearFormData();
        this.showPopup = true;
    };
    DashboardComponent.prototype.saveNewDevice = function () {
        var _this = this;
        this.ngProgress.start();
        var curDate = new Date();
        var body = {
            Type: 'Tracking',
            Name: this.deviceName,
            ClientName: this.username,
            RegisterDate: '2018-06-01T00:00:00',
            ModifiedDate: '2018-06-01T00:00:00',
            Status: 'Active',
            Active: true,
            Firmware: '1',
            UserId: 'testuser'
        };
        this.apiService.addAssets(body).then(function (data) {
            _this.ngProgress.done();
            if (data) {
                console.log('added');
                _this.getDevices();
            }
        });
        this.showPopup = false;
        this.clearFormData();
    };
    // assignBlockchainDevice(device) {
    //     this.blockchainDevice = device;
    //     this.showWelcome = false;
    //     this.showMap = false;
    //     this.showBlockchain = true;
    //     this.ngProgress.done();
    // }
    // protected pageChange({ skip, take }: PageChangeEvent): void {
    //     this.skip = skip;
    //     this.pageSize = take;
    //     console.log(this.skip + ' ' + this.pageSize)
    //     this.loadTransactions();
    // }
    // loadTransactions() {
    //     this.ngProgress.start();
    //     const startRow = this.skip;
    //     const endRow = this.skip + this.pageSize;
    //     switch (this.deviceType) {
    //         case 1:
    //             this.apiService.getiTraqTransactions(startRow, endRow).then(res => {
    //                 this.showiTraqTrans = true;
    //                 this.ngProgress.done();
    //                 if (res.success) {
    //                     this.gridView = {
    //                         data: res.transactions,
    //                         total: res.count
    //                     };
    //                 }
    //             });
    //             break;
    //         case 2:
    //             this.apiService.getTiveTransactions(startRow, endRow).then(res => {
    //                 this.showTiveTrans = true;
    //                 this.ngProgress.done();
    //                 if (res.success) {
    //                     for (let i = 0; i < res.transactions.length; i++) {
    //                         res.transactions[i].formattedTime = new Date(res.transactions[i].formattedTime);
    //                     }
    //                     this.gridView = {
    //                         data: res.transactions,
    //                         total: res.count
    //                     };
    //                 }
    //             });
    //             break;
    //         case 3:
    //             this.apiService.getArloTransactions(startRow, endRow).then(res => {
    //                 this.showiTraqTrans = true;
    //                 this.ngProgress.done();
    //                 if (res.success) {
    //                     this.gridView = {
    //                         data: res.transactions,
    //                         total: res.count
    //                     };
    //                 }
    //             });
    //             break;
    //     }
    // }
    // getTiveBlockchain(deviceId, apiDetails) {
    //     this.apiService.getTiveBlockchain(deviceId).then(data => {
    //         if (data.success) {
    //             this.assignBlockchainDevice(data.tiveDevice);
    //             this.deviceType = 2;
    //             this.loadTransactions();
    //         }
    //     }).catch(error => {
    //         if (error.status === 500) {
    //             for (let i = 0, len = apiDetails.length; i < len; i++) {
    //                 if (apiDetails[i].selectedDeviceType.id === 2 && apiDetails[i].loginName === this.apiService.currentUser.loginName) {
    //                     const body = {
    //                         selectedDeviceType: apiDetails[i].selectedDeviceType,
    //                         deviceName: apiDetails[i].deviceName,
    //                         username: apiDetails[i].username,
    //                         password: apiDetails[i].password,
    //                         apiKey: apiDetails[i].apiKey,
    //                         loginName: apiDetails[i].loginName
    //                     };
    //                     this.apiService.addTiveDevices(false, body).then(data => {
    //                         if (data.success) {
    //                             this.apiService.getTiveBlockchain(deviceId).then(result => {
    //                                 if (result.success) {
    //                                     this.assignBlockchainDevice(result.tiveDevice);
    //                                     this.deviceType = 2;
    //                                     this.loadTransactions();
    //                                 }
    //                             });
    //                         }
    //                     });
    //                 }
    //             }
    //         }
    //     });
    // }
    // getArloBlockchain(deviceId, apiDetails) {
    //     this.apiService.getArloBlockchain(deviceId).then(data => {
    //         if (data.success) {
    //             this.assignBlockchainDevice(data.arloDevice);
    //             this.deviceType = 3;
    //             this.loadTransactions();
    //         }
    //     }).catch(error => {
    //         if (error.status === 500) {
    //             for (let i = 0, len = apiDetails.length; i < len; i++) {
    //                 if (apiDetails[i].selectedDeviceType.id === 3 && apiDetails[i].loginName === this.apiService.currentUser.loginName) {
    //                     const body = {
    //                         selectedDeviceType: apiDetails[i].selectedDeviceType,
    //                         deviceName: apiDetails[i].deviceName,
    //                         username: apiDetails[i].username,
    //                         password: apiDetails[i].password,
    //                         apiKey: apiDetails[i].apiKey,
    //                         loginName: apiDetails[i].loginName
    //                     };
    //                     this.apiService.addArloDevices(false, body).then(data => {
    //                         if (data.success) {
    //                             this.apiService.getArloBlockchain(deviceId).then(result => {
    //                                 if (result.success) {
    //                                     this.assignBlockchainDevice(result.arloDevice);
    //                                     this.deviceType = 3;
    //                                     this.loadTransactions();
    //                                 }
    //                             });
    //                         }
    //                     });
    //                 }
    //             }
    //         }
    //     });
    // }
    DashboardComponent.prototype.clearFormData = function () {
        this.deviceName = '';
        this.username = '';
        this.password = '';
        this.apiKey = '';
        //this.selectedDeviceType = this.deviceTypes[0];
    };
    DashboardComponent.prototype.selectDevice = function (index, selectedDevice) {
        console.log(index);
        console.log(selectedDevice);
        this.showWelcome = false;
        this.showMap = false;
        this.showBlockchain = false;
        this.selectedDevice = selectedDevice;
        if (this.oldIndex === index) {
            this.selectedIdx = -1;
            this.oldIndex = -1;
            this.showWelcome = true;
        }
        else {
            this.selectedIdx = index;
            this.oldIndex = index;
            if (selectedDevice.deviceTypeId !== 3) {
                this.onLocateOnMap(selectedDevice);
            }
            else {
                this.showWelcome = true;
            }
        }
    };
    // logoClicked() {
    //     this.showBlockchain = false;
    //     this.showMap = false;
    //     this.showProfile = false;
    //     this.showDeviceDetails = false;
    //     this.showDevices = true;
    //     this.showWelcome = true;
    // }
    DashboardComponent.prototype.onLocateOnMap = function (device) {
        var _this = this;
        console.log('onLocateOnMap');
        // this.markerDevices = [];
        this.showWelcome = false;
        this.showBlockchain = false;
        this.showMap = true;
        this.showNavigation = false;
        // this.markerDevices.push(device);
        this.lat = 45;
        this.lng = 35;
        this.apiService.getAssetHistory(device.ID).then(function (data) {
            if (data) {
                _this.showHistory = true;
                _this.ngProgress.done();
                _this.gridView = {
                    data: data,
                    total: 1
                };
                console.log(data);
            }
        });
    };
    DashboardComponent.prototype.onViewDetails = function (device) {
        this.showDevices = false;
        this.showDeviceDetails = true;
    };
    DashboardComponent.prototype.backFromDeviceDetails = function () {
        this.showDeviceDetails = false;
        this.showDevices = true;
    };
    DashboardComponent.prototype.initMap = function () {
        var mapProp = {
            center: new google.maps.LatLng(34.010080, -84.216176),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        var locations = [
            ['Johns Creek', 34.010080, -84.216176],
            ['Greenville', 34.870467, -82.381242],
            ['Anderson', 35.14303, -81.61516],
            ['Charlotte', 35.232818, -80.802174],
            ['Durham', 36.008967, -78.901402]
        ];
        var infowindow = new google.maps.InfoWindow();
        var marker, i, currentLng;
        for (i = 0; i < locations.length; i++) {
            var latitude = parseFloat(locations[i][1].toString());
            var longitude = parseFloat(locations[i][2].toString());
            console.log(latitude);
            console.log(longitude);
            currentLng = new google.maps.LatLng(latitude, longitude);
            marker = new google.maps.Marker({
                position: currentLng,
                map: this.map
            });
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0].toString());
                    infowindow.open(this.map, marker);
                };
            })(marker, i));
            marker.setMap(this.map);
        }
        var flightPlanCoordinates = [
            new google.maps.LatLng(34.010080, -84.216176),
            new google.maps.LatLng(34.870467, -82.381242),
            new google.maps.LatLng(35.14303, -81.61516),
            new google.maps.LatLng(35.232818, -80.802174),
            new google.maps.LatLng(36.008967, -78.901402)
        ];
        var lineSymbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            strokeColor: '#393'
        };
        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            icons: [{
                    icon: lineSymbol,
                    offset: '100%'
                }],
            strokeColor: "#ff0000",
            strokeOpacity: 1.0,
            strokeWeight: 10
        });
        this.animateCircle(flightPath);
        flightPath.setMap(this.map);
    };
    DashboardComponent.prototype.onViewNavigation = function (device) {
        var _this = this;
        this.showNavigation = true;
        this.showHistory = false;
        this.ngProgress.start();
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].interval(3000).take(1).subscribe(function () { return _this.initMap(); });
        this.ngProgress.done();
    };
    DashboardComponent.prototype.backFromBlockchain = function () {
        this.showBlockchain = false;
        this.showWelcome = true;
    };
    DashboardComponent.prototype.menuClicked = function () {
        this.showDevices = false;
        this.showDeviceDetails = false;
        this.showProfile = true;
    };
    DashboardComponent.prototype.menuBackClicked = function () {
        this.showProfile = false;
        this.showDevices = true;
    };
    // navigateToProductPage(device) {
    //     switch (device.deviceTypeId) {
    //         case 1:
    //             window.open(this.apiService.itraqProductUrl, '_blank');
    //             break;
    //         case 2:
    //             window.open(this.apiService.tiveProductUrl, '_blank');
    //             break;
    //         case 3:
    //             window.open(this.apiService.arloProductUrl, '_blank');
    //             break;
    //     }
    // }
    DashboardComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ViewChild */])('gmap'),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "gmapElement", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__utils_apiservice__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_apiservice__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["b" /* NgProgress */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginBody{\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-color: #f3cfcf;\r\n    position: relative;\r\n    \r\n}\r\n.box{ background: #F5B6A8; position: absolute;}\r\n.box1{height: 120px; width: 50px; top: 23%; left: -2%;}\r\n.box2{height: 70px; width: 70px; top: 46%; left: 4%;}\r\n.box3{height: 40px; width: 40px; top: 54%; left: 12%;}\r\n.box4{height: 120px; width: 120px; bottom: 3%; left: -3%;}\r\n.box5{height: 30px; width: 70px; bottom: 0%; left: 30%;}\r\n.box6{height: 80px; width: 120px; bottom: 0%; right: 25%;}\r\n.box7{height: 50px; width: 80px; bottom: 0%; right: 8%;}\r\n.box8{height: 30px; width: 30px; bottom: 0%; right: 0%;}\r\n.box9{height: 120px; width: 120px; bottom: 23%; right: 2%;}\r\n.box10{height: 60px; width: 60px; bottom: 20%; right: 8%;}\r\n.box11{height: 60px; width: 60px; bottom: 34%; right: 25%;}\r\n.logoContainer{\r\n    margin: 40px 20px;\r\n}\r\n.logoContainer h1{\r\n    color:#1b1a1a;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 1.6em;\r\n    font-weight: 600;\r\n    margin: 10px 50px;\r\n}\r\n.loginContainer label{\r\n    margin-bottom: 2px;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n}\r\n.help{\r\n     color: #242424;\r\n     font-family: 'Montserrat', sans-serif; \r\n     font-size: 13px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress [positionUsing]=\"'marginLeft'\" [minimum]=\"0.15\" [maximum]=\"1\" [speed]=\"200\" [showSpinner]=\"false\" [direction]=\"'leftToRightIncreased'\"\r\n  [color]=\"'#FB9700'\" [trickleSpeed]=\"250\" [thick]=\"true\" [ease]=\"'linear'\"></ng-progress>\r\n<div class=\"loginBody container\">\r\n  <div class=\"box box1\"></div>\r\n  <div class=\"box box2\"></div>\r\n  <div class=\"box box3\"></div>\r\n  <div class=\"box box4\"></div>\r\n  <div class=\"box box5\"></div>\r\n  <div class=\"box box6\"></div>\r\n  <div class=\"box box7\"></div>\r\n  <div class=\"box box8\"></div>\r\n  <div class=\"box box9\"></div>\r\n  <div class=\"box box10\"></div>\r\n  <div class=\"box box11\"></div>\r\n  <div class=\"row justify-content-md-center align-items-md-center h-100\">\r\n    <div class=\"col-xl-5 col-md-8 col-lg-6 col-sm-12 col-md-offset-3\">\r\n      <div class=\"text-center logoContainer\">\r\n        <img src=\"assets/images/Logos_and_Favicons/logo.png\" />\r\n        <h1>Securing your assets through persistent tracking.</h1>\r\n      </div>\r\n      <div class=\"loginContainer\">\r\n        <div class=\"row justify-content-md-center\">\r\n          <div class=\"col-md-7 col-md-offset-3 mt-2\">\r\n            <form>\r\n              <div class=\"form-group mb-4\">\r\n                <label for=\"userName\">Username</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"userName\" placeholder=\"Username\" [(ngModel)]=\"userName\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div class=\"form-group m-0\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div class=\"form-group text-right\">\r\n                <a href=\"javascript:\" class=\"help\">Need help logging in?</a>\r\n              </div>\r\n              <div class=\"clearfix mt-5\">\r\n                <label class=\"m-3\" style=\"color: #ff0000\">{{result}}</label>\r\n                <button type=\"button\" class=\"btn btn-default float-left\">Sign Up</button>\r\n                <button type=\"submit\" class=\"btn btn-primary float-right\" (click)=\"loginClicked()\">Login</button>\r\n              </div>\r\n            \r\n\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_apiservice__ = __webpack_require__("../../../../../src/app/utils/apiservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(apiService, router, ngProgress) {
        this.apiService = apiService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.userName = '';
        this.password = '';
        this.onSignUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
        this.apiService.getConfiguration();
    }
    LoginComponent.prototype.loginClicked = function () {
        if (this.userName !== '' && this.password !== '') {
            var body = { username: this.userName, password: this.password };
            this.ngProgress.start();
            this.router.navigate(['/dashboard']);
            // this.apiService.getAssetHistory().then(data => {
            this.ngProgress.done();
            //     if (data) {
            //         console.log('here');
            //         console.log(data[0]);
            //          this.gridView = {
            //             data: data,
            //             total: 2
            //         };
            //     }
            //     else {
            //         console.log(data);
            //                     this.result = data.message;
            //                 }
            // });
            // this.apiService.authenticate(body)
            //     .then(data => {
            //         this.ngProgress.done();
            //         if (data.success) {
            //             localStorage.setItem('currentUser', JSON.stringify({ user: data.user }));
            //             localStorage.setItem('token', data.token);
            //             this.router.navigate(['/dashboard']);
            //         } else {
            //             this.result = data.message;
            //         }
            //     });
        }
        else {
            this.result = 'Please provide Username and Password.';
        }
    };
    LoginComponent.prototype.signupClicked = function () {
        this.router.navigate(['/signup']);
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "onSignUp", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__utils_apiservice__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_apiservice__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["b" /* NgProgress */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/utils/apiservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var APIService = (function () {
    function APIService(http) {
        this.http = http;
        this.token = '';
    }
    APIService.prototype.getConfiguration = function () {
        var _this = this;
        return this.http.get('./assets/config.json')
            .toPromise()
            .then(function (res) {
            _this.baseUrl = res['API_URL'];
        });
    };
    APIService.prototype.authenticate = function (body) {
        return this.http.post(this.baseUrl + 'login/authenticate', body)
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getAssetsHistory = function () {
        return this.http.get(this.baseUrl + 'api/AssetTracking/', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().append('Authorization', 'Basic QVBJVXNlcjppTGlua1N5c3RlbXM=')
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getAssetHistory = function (deviceId) {
        return this.http.get(this.baseUrl + 'api/AssetTracking/' + deviceId, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().append('Authorization', 'Basic QVBJVXNlcjppTGlua1N5c3RlbXM=')
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getAssets = function () {
        return this.http.get(this.baseUrl + 'api/Assets', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().append('Authorization', 'Basic QVBJVXNlcjppTGlua1N5c3RlbXM=')
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    // getDeviceTypes(): Promise<any> {
    // //  var devices = ["deviceType", "Tracking"] ;
    // //   return devices.toPromise();
    // }
    APIService.prototype.getApiDetails = function () {
        return this.http.get(this.baseUrl + 'device/apiDetails', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getStandardMetrics = function () {
        return this.http.get(this.baseUrl + 'device/standardMetrics', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getiTraqDevices = function (loginName) {
        return this.http.get(this.baseUrl + 'device/itraq/' + loginName, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.addiTraqDevices = function (isNew, body) {
        return this.http.post(this.baseUrl + 'device/itraq/' + isNew, body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getiTraqBlockchain = function (deviceId) {
        return this.http.get(this.baseUrl + 'device/itraq/blockchain/' + deviceId, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getiTraqTransactions = function (startRow, endRow) {
        return this.http.get(this.baseUrl + 'device/itraq/transactions/' + startRow + '/' + endRow, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getTiveDevices = function (loginName) {
        return this.http.get(this.baseUrl + 'device/tive/' + loginName, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.addTiveDevices = function (isNew, body) {
        return this.http.post(this.baseUrl + 'device/tive/' + isNew, body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getTiveBlockchain = function (deviceId) {
        return this.http.get(this.baseUrl + 'device/tive/blockchain/' + deviceId, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getTiveTransactions = function (startRow, endRow) {
        return this.http.get(this.baseUrl + 'device/tive/transactions/' + startRow + '/' + endRow, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getArloDevices = function (loginName) {
        return this.http.get(this.baseUrl + 'device/arlo/' + loginName, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.addArloDevices = function (isNew, body) {
        return this.http.post(this.baseUrl + 'device/arlo/' + isNew, body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.addAssets = function (body) {
        console.log(this.baseUrl);
        return this.http.post(this.baseUrl + 'api/Assets/', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().append('Authorization', 'Basic QVBJVXNlcjppTGlua1N5c3RlbXM=')
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getArloBlockchain = function (deviceId) {
        return this.http.get(this.baseUrl + 'device/arlo/blockchain/' + deviceId, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    APIService.prototype.getArloTransactions = function (startRow, endRow) {
        return this.http.get(this.baseUrl + 'device/arlo/transactions/' + startRow + '/' + endRow, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('x-access-token', this.token),
        })
            .toPromise()
            .then(function (response) { return response; });
    };
    return APIService;
}());
APIService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], APIService);

var _a;
//# sourceMappingURL=apiservice.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map