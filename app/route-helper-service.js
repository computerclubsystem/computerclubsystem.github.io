System.register(["angular2/router", "./async-load-service"], function(exports_1) {
    var router_1, async_load_service_1;
    var RouteHelperService;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (async_load_service_1_1) {
                async_load_service_1 = async_load_service_1_1;
            }],
        execute: function() {
            RouteHelperService = (function () {
                function RouteHelperService(relativePath) {
                    if (relativePath) {
                        this.rootPath = "app/" + relativePath + "/";
                    }
                    else {
                        this.rootPath = "app/";
                    }
                }
                RouteHelperService.prototype.getFilePath = function (relative) {
                    return "" + this.rootPath + relative;
                };
                RouteHelperService.prototype.getRootPath = function () {
                    return this.rootPath;
                };
                RouteHelperService.prototype.getPath = function (relative) {
                    return "" + this.rootPath + relative + "/";
                };
                RouteHelperService.prototype.createRoute = function (name, routePath, componentPath, componentName, useAsDefault) {
                    if (useAsDefault === void 0) { useAsDefault = false; }
                    var lowered = this.getLoweredOrSnakeCased(name);
                    var root = this.rootPath;
                    routePath = routePath || "" + root + lowered;
                    componentPath = componentPath || "" + root + lowered + "/" + lowered;
                    componentName = componentName || name + "Component";
                    var result = new router_1.AsyncRoute({ path: routePath, name: name, loader: function () { return async_load_service_1.AsyncLoadService.LoadComponent(componentName, componentPath); }, useAsDefault: useAsDefault });
                    console.log(name, lowered, routePath, result);
                    return result;
                };
                RouteHelperService.prototype.createParentRoute = function (name) {
                    return this.createRoute(name, this.rootPath + this.getLoweredOrSnakeCased(name + "/.."));
                };
                RouteHelperService.prototype.createDefaultRoute = function (name, routePath, componentPath, componentName) {
                    return this.createRoute(name, routePath, componentPath, componentName, true);
                };
                RouteHelperService.prototype.getLoweredOrSnakeCased = function (value) {
                    var snakeCased = this.toSnakeCase(value);
                    var lowered = value.toLowerCase();
                    var result = (snakeCased.length > lowered.length) ? snakeCased : lowered;
                    return result;
                };
                RouteHelperService.prototype.toSnakeCase = function (value) {
                    var result = value.replace(/([A-Z])/g, function ($1) {
                        return "-" + $1.toLowerCase();
                    });
                    if (result.substring(0, 1) === "-") {
                        result = result.substring(1);
                    }
                    return result;
                };
                return RouteHelperService;
            })();
            exports_1("RouteHelperService", RouteHelperService);
        }
    }
});
//# sourceMappingURL=route-helper-service.js.map