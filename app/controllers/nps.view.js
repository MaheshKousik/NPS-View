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
    var NPSViewComponent;
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
            NPSViewComponent = (function () {
                function NPSViewComponent(_router) {
                    this._router = _router;
                    this.chartObj = null;
                    this.chartType = "line";
                }
                NPSViewComponent.prototype.ngOnInit = function () {
                    this.chartObj = {
                        data: {
                            x: 'x',
                            columns: [
                                ['x', 'All Locations', 'Boston', 'Paris', 'MicroCherry'],
                                ['Detractors', 75, 0, 0, 0],
                                ['Passive', 14, 67, 100, 0],
                                ['Promotors', 12, 33, 0, 0],
                                ['NPS', -63, 33, 0, 0],
                            ],
                            colors: {
                                Detractors: '#FE2E2E',
                                Promotors: '#00FF40',
                                Passive: '#F7FE2E',
                                NPS: '#4000FF'
                            } //, labels: true,
                            ,
                            groups: [
                                ['Detractors', 'Promotors', 'Passive', 'NPS']
                            ],
                            order: null,
                            type: 'bar'
                        },
                        axis: {
                            rotated: true,
                            x: {
                                type: 'category' // this needed to load string x value
                            },
                        }
                    };
                    var that = this;
                    that.chartType = "bar";
                    //setInterval(function(){
                    //  that.chartType = ["line","bar","area","spline","area-spline"][Math.ceil(Math.random() * 5)];
                    //}, 3000);
                };
                NPSViewComponent = __decorate([
                    core_1.Component({
                        selector: 'nps-view',
                        templateUrl: 'partials/pages/nps-view.html',
                        directives: [router_1.ROUTER_DIRECTIVES, all_1.MATERIAL_DIRECTIVES, cloudcherry_chart_1.CloudcherryChart]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], NPSViewComponent);
                return NPSViewComponent;
            }());
            exports_1("NPSViewComponent", NPSViewComponent);
        }
    }
});
//# sourceMappingURL=nps.view.js.map