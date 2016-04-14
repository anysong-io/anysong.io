System.register(['angular2/core', "../services/search/impl/yt.search"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, yt_search_1;
    var SearchFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (yt_search_1_1) {
                yt_search_1 = yt_search_1_1;
            }],
        execute: function() {
            SearchFormComponent = (function () {
                function SearchFormComponent(searchService) {
                    this.searchService = searchService;
                    this.placeholder = "Enter a song name, lyrics, artists.. anything!";
                    this.result = new core_1.EventEmitter();
                }
                SearchFormComponent.prototype.search = function () {
                    var _this = this;
                    this.message = undefined;
                    this.searchService.search(this.query)
                        .subscribe(function (song) { return _this.result.emit(song); }, function (error) { return _this.message = error.message || "Unknown error"; });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SearchFormComponent.prototype, "query", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SearchFormComponent.prototype, "result", void 0);
                SearchFormComponent = __decorate([
                    core_1.Component({
                        selector: 'search-form',
                        styleUrls: ['styles/search-form.css'],
                        template: "\n        <form class=\"form\" (submit)=\"search()\">\n            <input class=\"query\" type=\"text\" placeholder=\"{{placeholder}}\" [(ngModel)]=\"query\" />\n            <div class=\"message\" *ngIf=\"message\">{{message}}</div>\n        </form>\n        "
                    }),
                    __param(0, core_1.Inject(yt_search_1.YoutubeSearchService)), 
                    __metadata('design:paramtypes', [Object])
                ], SearchFormComponent);
                return SearchFormComponent;
            }());
            exports_1("SearchFormComponent", SearchFormComponent);
        }
    }
});
//# sourceMappingURL=search-form.component.js.map