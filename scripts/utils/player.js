define(function(require) {
    var $ = require("jquery");
    var log = require("loglevel");
    var moment = require("moment");
    log.setLevel("info");

    var selector = {
        playBtn: "#play",
        pauseBtn: "#pause",
        currentTime: "#current-time",
        duration: "#duration",
        progress: "#progress",
        progressBar: "#progress-bar"
    };

    var timeDisplayFormat = "mm:ss";

    // Create youtube player
    var ytPlayer = new YT.Player("yt-player", { height: "0", width: "0", autoplay: "true" });

    // Youtube player event listeners
    var interval = null;
    var videoEndedCallbacks = [];
    ytPlayer.addEventListener("onStateChange", function(state) {
        log.trace("ytPlayer.onStateChange", arguments);
        if(state.data === YT.PlayerState.PLAYING) {
            $(selector.playBtn).hide();
            $(selector.pauseBtn).show();
            updateTime();
            if(!interval) {
                interval = setInterval(updateTime, 1000);
            }
        } else {
            $(selector.pauseBtn).hide();
            $(selector.playBtn).show();
            clearInterval(interval);
            interval = null;
            if(state.data === YT.PlayerState.ENDED) {
                for(var i = 0; i < videoEndedCallbacks.length; i++) {
                    videoEndedCallbacks[i].call(ytPlayer, ytPlayer.getVideoData()["video_id"]);
                }
            }
        }
    });

    ytPlayer.onFinished = function(callback) {
        log.trace("onFinished", arguments);

        if(typeof callback === "function") {
            videoEndedCallbacks.push(callback);
        } else {
            log.error("invalid arguments passed to 'onFinished' method")
        }
    };

    function updateTime() {
        log.trace("updateTime", arguments);

        var currentTime = ytPlayer.getCurrentTime();
        var duration = ytPlayer.getDuration();

        $(selector.currentTime).html(formatTime(currentTime));
        $(selector.duration).html(formatTime(duration));
        $(selector.progressBar).width(100 * currentTime / duration + "%");
    }

    function formatTime(timeInS) {
        log.trace("formatTime", arguments);
        return moment.utc(timeInS*1000).format(timeDisplayFormat);
    }

    // Custom player event listeners
    $(selector.playBtn).on("click", function(){
        log.trace("play", arguments);
        ytPlayer.playVideo()
    });
    $(selector.pauseBtn).on("click", function(){
        log.trace("pause", arguments);
        ytPlayer.pauseVideo()
    });
    $(selector.progress).on("mouseup", function(e) {
        log.trace("seek", arguments);
        var $progress = $(selector.progress),
            percentage = (e.clientX - $progress.offset().left) / $progress.width();

        log.debug("seeking to "+(percentage*100)+"%");
        ytPlayer.seekTo(ytPlayer.getDuration() * percentage);
        updateTime();
    });

    return ytPlayer;
});