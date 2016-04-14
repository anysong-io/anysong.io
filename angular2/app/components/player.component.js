System.register(['angular2/core', "../bo/yt.player"], function(exports_1, context_1) {
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
    var core_1, yt_player_1;
    var PlayerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (yt_player_1_1) {
                yt_player_1 = yt_player_1_1;
            }],
        execute: function() {
            PlayerComponent = (function () {
                function PlayerComponent(player) {
                    this.player = player;
                }
                PlayerComponent.prototype.load = function (song) {
                    this.song = song;
                    this.player.loadVideoById(song.src);
                    this.play();
                };
                PlayerComponent.prototype.play = function () {
                    this.player.playVideo();
                };
                PlayerComponent.prototype.pause = function () {
                    this.player.pauseVideo();
                };
                PlayerComponent.prototype.seek = function (event) {
                    var percentage = (event.offsetX / this.progress.nativeElement.offsetWidth);
                    this.player.seekTo(this.player.getDuration() * percentage);
                };
                PlayerComponent.prototype.formatTime = function (seconds) {
                    return moment.utc(seconds * 1000).format("mm:ss");
                };
                __decorate([
                    core_1.ViewChild('progress'), 
                    __metadata('design:type', Object)
                ], PlayerComponent.prototype, "progress", void 0);
                PlayerComponent = __decorate([
                    core_1.Component({
                        selector: 'player',
                        styleUrls: ['styles/player.css'],
                        template: "\n        <div class=\"player\" *ngIf=\"song\">\n            <a class=\"btn icon-play\" *ngIf=\"player.playing === false\" (click)=\"play()\"></a>\n            <a class=\"btn icon-pause\" *ngIf=\"player.playing === true\" (click)=\"pause()\"></a>\n            <div class=\"player-title\">{{song.title}}</div>\n            <div #progress class=\"progress\" (click)=\"seek($event)\">\n                <div class=\"progress-bar\" [style.width.%]=\"100 * player.getCurrentTime() / player.getDuration()\"></div>\n            </div>\n            <div class=\"time\">\n                {{formatTime(player.getCurrentTime())}}/{{formatTime(player.getDuration())}}\n            </div>\n        </div>\n        "
                    }),
                    __param(0, core_1.Inject(yt_player_1.YoutubePlayer)), 
                    __metadata('design:paramtypes', [Object])
                ], PlayerComponent);
                return PlayerComponent;
            }());
            exports_1("PlayerComponent", PlayerComponent);
        }
    }
});
//# sourceMappingURL=player.component.js.map