webpackJsonp([0],{

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsPageModule", function() { return ChartsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts__ = __webpack_require__(772);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChartsPageModule = /** @class */ (function () {
    function ChartsPageModule() {
    }
    ChartsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__charts__["a" /* ChartsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__charts__["a" /* ChartsPage */]),
            ],
        })
    ], ChartsPageModule);
    return ChartsPageModule;
}());

//# sourceMappingURL=charts.module.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_ng2_service__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChartsPage = /** @class */ (function () {
    function ChartsPage(navCtrl, d3Service, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.d3 = d3Service.getD3();
    }
    ChartsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChartsPage');
    };
    ChartsPage.prototype.GeneratePieChart = function () {
        var svg = this.d3.select('svg'), width = svg.attr('width'), height = svg.attr('height'), radius = Math.min(width, height) / 2, g = svg.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    };
    ChartsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-charts',template:/*ion-inline-start:"/Users/andreasellerbrock/Documents/PROJECTS/IonicD3Example_01/src/pages/charts/charts.html"*/'<!--\n  Generated template for the ChartsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Charts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button cmdGenerateChart (click)="GeneratePieChart()">CLICK</button>\n  <ion-list no-lines>\n    <ion-item>\n        <svg width="250" height="250"></svg>\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/andreasellerbrock/Documents/PROJECTS/IonicD3Example_01/src/pages/charts/charts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_d3_ng2_service__["a" /* D3Service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChartsPage);
    return ChartsPage;
}());

//# sourceMappingURL=charts.js.map

/***/ })

});
//# sourceMappingURL=0.js.map