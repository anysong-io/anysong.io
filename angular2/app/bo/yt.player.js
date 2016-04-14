System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var YoutubePlayer;
    return {
        setters:[],
        execute: function() {
            YoutubePlayer = (function () {
                function YoutubePlayer() {
                    var _this = this;
                    this.youtubePlayer = new YT.Player("yt-player", { height: "0", width: "0", autoplay: "true" });
                    this.youtubePlayer.addEventListener("onStateChange", function (state) {
                        _this.playing = (state.data === YT.PlayerState.PLAYING);
                    });
                }
                YoutubePlayer.prototype.loadVideoById = function (id) {
                    this.youtubePlayer.loadVideoById(id);
                };
                YoutubePlayer.prototype.playVideo = function () {
                    this.youtubePlayer.playVideo();
                };
                YoutubePlayer.prototype.pauseVideo = function () {
                    this.youtubePlayer.pauseVideo();
                };
                YoutubePlayer.prototype.getCurrentTime = function () {
                    return this.youtubePlayer.getCurrentTime();
                };
                YoutubePlayer.prototype.getDuration = function () {
                    return this.youtubePlayer.getDuration();
                };
                YoutubePlayer.prototype.seekTo = function (time) {
                    this.youtubePlayer.seekTo(time);
                };
                return YoutubePlayer;
            }());
            exports_1("YoutubePlayer", YoutubePlayer);
        }
    }
});
//# sourceMappingURL=yt.player.js.map