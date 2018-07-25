System.register(["angular2/core", "angular2/http", "rxjs/Observable", "rxjs/add/operator/map"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var ValuesService, Version;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            ValuesService = (function () {
                function ValuesService(http) {
                    this.http = http;
                }
                ValuesService.prototype.getVersion = function () {
                    var _this = this;
                    if (this.version) {
                        return Observable_1.Observable.create(function (observer) {
                            observer.next(_this.version);
                            observer.complete();
                        });
                    }
                    else {
                        return this.http.get("app/version.json").map(function (res) {
                            _this.version = res.json();
                            return _this.version;
                        });
                    }
                };
                ValuesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ValuesService);
                return ValuesService;
            })();
            exports_1("ValuesService", ValuesService);
            Version = (function () {
                function Version() {
                }
                return Version;
            })();
            exports_1("Version", Version);
        }
    }
});
