System.register(['angular2/core', "./components/search-form.component", "./components/player.component", "./components/examples-list.component", "./services/search/impl/yt.search", "./bo/yt.player", 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, search_form_component_1, player_component_1, examples_list_component_1, yt_search_1, yt_player_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (search_form_component_1_1) {
                search_form_component_1 = search_form_component_1_1;
            },
            function (player_component_1_1) {
                player_component_1 = player_component_1_1;
            },
            function (examples_list_component_1_1) {
                examples_list_component_1 = examples_list_component_1_1;
            },
            function (yt_search_1_1) {
                yt_search_1 = yt_search_1_1;
            },
            function (yt_player_1_1) {
                yt_player_1 = yt_player_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'anysong.io';
                    this.subtitle = 'Instantly play any song on the web, without even knowing its name!';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'anysong-app',
                        directives: [search_form_component_1.SearchFormComponent, player_component_1.PlayerComponent, examples_list_component_1.ExamplesListComponent],
                        providers: [yt_search_1.YoutubeSearchService, yt_player_1.YoutubePlayer, http_1.HTTP_PROVIDERS],
                        templateUrl: 'app/app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map