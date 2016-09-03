System.register(['angular2/core', 'angular2/router', "ng2-material/all", "../components/cloudcherry.chart"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, all_1, cloudcherry_chart_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (cloudcherry_chart_1_1) {
                cloudcherry_chart_1 = cloudcherry_chart_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_router) {
                    this._router = _router;
                    this.chartObj = null;
                    this.chartType = "line";
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.chartObj = {
                        data: {
                            columns: [
                                ['Data 1', 30, 200, 100, 400, 150, 250],
                                ['Data 2', 50, 20, 10, 40, 15, 25]
                            ]
                        }
                    };
                    var that = this;
                    setInterval(function () {
                        that.chartType = ["line", "bar", "area", "spline", "area-spline"][Math.ceil(Math.random() * 5)];
                    }, 3000);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'partials/pages/home.html',
                        directives: [router_1.ROUTER_DIRECTIVES, all_1.MATERIAL_DIRECTIVES, cloudcherry_chart_1.CloudcherryChart]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.js.map