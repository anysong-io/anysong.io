import {Player} from "./player";

declare var YT: any;

export class YoutubePlayer implements Player {
    playing: boolean;
    private youtubePlayer: any;

    constructor() {
        this.youtubePlayer = new YT.Player("yt-player", { height: "0", width: "0", autoplay: "true" });
        this.youtubePlayer.addEventListener("onStateChange", (state: any) => {
            this.playing = (state.data === YT.PlayerState.PLAYING);
        });
    }

    loadVideoById(id:string):void {
        this.youtubePlayer.loadVideoById(id);
    }

    playVideo():void {
        this.youtubePlayer.playVideo();
    }

    pauseVideo():void {
        this.youtubePlayer.pauseVideo();
    }

    getCurrentTime():string {
        return this.youtubePlayer.getCurrentTime();
    }

    getDuration():string {
        return this.youtubePlayer.getDuration();
    }

    seekTo(time:number):void {
        this.youtubePlayer.seekTo(time);
    }

}