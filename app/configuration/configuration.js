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
    var ConfigurationComponent;
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
            ConfigurationComponent = (function () {
                function ConfigurationComponent() {
                }
                ConfigurationComponent = __decorate([
                    core_1.Component({
                        selector: "ccm2-configuration",
                        templateUrl: "app/configuration/configuration.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        new router_1.AsyncRoute({ path: "/initial", name: "Initial", useAsDefault: true, loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("InitialConfigurationComponent", "app/configuration/initial/initial"); } }),
                        new router_1.AsyncRoute({ path: "/computers-and-ip-addresses", name: "ComputersAndIpAddresses", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("ComputersAndIpAddressesConfigurationComponent", "app/configuration/computers-and-ip-addresses/computers-and-ip-addresses"); } }),
                        new router_1.AsyncRoute({ path: "/prices", name: "Prices", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("PricesConfigurationComponent", "app/configuration/prices/prices"); } }),
                        new router_1.AsyncRoute({ path: "/users", name: "Users", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("UsersConfigurationComponent", "app/configuration/users/users"); } }),
                        new router_1.AsyncRoute({ path: "/language-and-font", name: "LanguageAndFont", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("LanguageAndFontConfigurationComponent", "app/configuration/language-and-font/language-and-font"); } }),
                        new router_1.AsyncRoute({ path: "/customer-cards", name: "CustomerCards", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("CustomerCardsConfigurationComponent", "app/configuration/customer-cards/customer-cards"); } }),
                        new router_1.AsyncRoute({ path: "/other", name: "Other", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("OtherConfigurationComponent", "app/configuration/other/other"); } }),
                        new router_1.AsyncRoute({ path: "/bar", name: "Bar", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("BarConfigurationComponent", "app/configuration/bar/bar"); } }),
                        new router_1.AsyncRoute({ path: "ini-files", name: "IniFiles", loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent("IniFilesConfigurationComponent", "app/configuration/ini-files/ini-files"); } })
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ConfigurationComponent);
                return ConfigurationComponent;
            })();
            exports_1("ConfigurationComponent", ConfigurationComponent);
        }
    }
});
