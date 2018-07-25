System.register(["angular2/core", "angular2/router", "../values-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, values_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (values_service_1_1) {
                values_service_1 = values_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(valSvc) {
                    this.valSvc = valSvc;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.valSvc.getVersion().subscribe(function (res) {
                        _this.version = res;
                    });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: "ccm2-home",
                        templateUrl: "./app/home/home.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [values_service_1.ValuesService])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
