System.register(['angular2/core', 'angular2/router', 'angular2/http', "ng2-material/all", './controllers/home', './controllers/nps.view'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, all_1, home_1, nps_view_1;
    var Angular2SampleApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (nps_view_1_1) {
                nps_view_1 = nps_view_1_1;
            }],
        execute: function() {
            Angular2SampleApp = (function () {
                function Angular2SampleApp() {
                }
                Angular2SampleApp.prototype.ngOnInit = function () {
                };
                Angular2SampleApp = __decorate([
                    core_1.Component({
                        selector: 'angular-2-sample-app',
                        template: '<router-outlet></router-outlet>',
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            all_1.MATERIAL_DIRECTIVES
                        ],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            all_1.MATERIAL_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/nps-view',
                            name: 'NPS',
                            component: nps_view_1.NPSViewComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Angular2SampleApp);
                return Angular2SampleApp;
            }());
            exports_1("Angular2SampleApp", Angular2SampleApp);
        }
    }
});
//# sourceMappingURL=app.component.js.map