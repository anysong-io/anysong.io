System.register(["../../../bo/song", 'angular2/http', 'angular2/core', 'rxjs/operator/map'], function(exports_1, context_1) {
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
    var song_1, http_1, core_1;
    var YoutubeSearchService;
    return {
        setters:[
            function (song_1_1) {
                song_1 = song_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            YoutubeSearchService = (function () {
                function YoutubeSearchService(http) {
                    this.http = http;
                    this.youtubeParams = new http_1.URLSearchParams();
                    this.youtubeParams.append("key", "AIzaSyBjzVQUGILS-G1jVxAXb4fTFXjbcM6MIyE");
                    this.youtubeParams.append("type", "video");
                    this.youtubeParams.append("part", "id,snippet");
                    this.youtubeParams.append("fields", "items/id/videoId,items/snippet/title");
                    this.youtubeParams.append("maxResults", "1");
                    this.youtubeParams.append("q", undefined);
                }
                YoutubeSearchService.prototype.search = function (query) {
                    this.youtubeParams.set("q", query);
                    return this.http.get("https://www.googleapis.com/youtube/v3/search", { search: this.youtubeParams })
                        .map(function (response) {
                        var item = response.json().items[0];
                        if (typeof item === "undefined")
                            throw new Error("Couldn't find anything for that query.");
                        var song = new song_1.Song();
                        song.title = item.snippet.title;
                        song.src = item.id.videoId;
                        return song;
                    });
                };
                YoutubeSearchService = __decorate([
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], YoutubeSearchService);
                return YoutubeSearchService;
            }());
            exports_1("YoutubeSearchService", YoutubeSearchService);
        }
    }
});
//# sourceMappingURL=yt.search.js.map