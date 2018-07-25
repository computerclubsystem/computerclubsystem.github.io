System.register(["angular2/core", "angular2/router", "../async-load-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, async_load_service_1;
    var HowToComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (async_load_service_1_1) {
                async_load_service_1 = async_load_service_1_1;
            }],
        execute: function() {
            HowToComponent = (function () {
                function HowToComponent() {
                }
                HowToComponent = __decorate([
                    core_1.Component({
                        selector: "ccm2-howto",
                        templateUrl: "app/how-to/how-to.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        new router_1.AsyncRoute({ path: "/start-and-stop", name: "StartAndStop", useAsDefault: true, loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("StartAndStopHowToComponent", "app/how-to/start-and-stop/start-and-stop"); } }),
                        new router_1.AsyncRoute({ path: "/shift-completion", name: "ShiftCompletion", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("ShiftCompletionHowToComponent", "app/how-to/shift-completion/shift-completion"); } }),
                        new router_1.AsyncRoute({ path: "/selling-items", name: "SellingItems", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("SellingItemsHowToComponent", "app/how-to/selling-items/selling-items"); } })
                    ]), 
                    __metadata('design:paramtypes', [])
                ], HowToComponent);
                return HowToComponent;
            })();
            exports_1("HowToComponent", HowToComponent);
        }
    }
});
