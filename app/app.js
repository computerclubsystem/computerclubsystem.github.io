System.register(["angular2/core", "angular2/router", "./async-load-service"], function(exports_1) {
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
    var AppComponent;
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
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "ccm2-site",
                        templateUrl: "app/app.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        new router_1.AsyncRoute({ path: "app/home", name: "Home", useAsDefault: true, loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("HomeComponent", "app/home/home"); } }),
                        new router_1.AsyncRoute({ path: "app/info", name: "Info", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("InfoComponent", "app/info/info"); } }),
                        new router_1.AsyncRoute({ path: "app/download", name: "Download", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("DownloadComponent", "app/download/download"); } }),
                        new router_1.AsyncRoute({ path: "app/configuration/...", name: "Configuration", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("ConfigurationComponent", "app/configuration/configuration"); } }),
                        new router_1.AsyncRoute({ path: "app/contacts", name: "Contacts", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("ContactsComponent", "app/contacts/contacts"); } }),
                        new router_1.AsyncRoute({ path: "app/how-to/...", name: "HowTo", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("HowToComponent", "app/how-to/how-to"); } })
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
