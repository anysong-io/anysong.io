import {Component, ViewChild, Inject} from 'angular2/core';
import {Song} from "../bo/song";
import {Player} from "../bo/Player";
import {YoutubePlayer} from "../bo/yt.player";

declare var moment: any;

@Component({
    selector: 'player',
    styleUrls: ['styles/player.css'],
    template: `
        <div class="player" *ngIf="song">
            <a class="btn icon-play" *ngIf="player.playing === false" (click)="play()"></a>
            <a class="btn icon-pause" *ngIf="player.playing === true" (click)="pause()"></a>
            <div class="player-title">{{song.title}}</div>
            <div #progress class="progress" (click)="seek($event)">
                <div class="progress-bar" [style.width.%]="100 * player.getCurrentTime() / player.getDuration()"></div>
            </div>
            <div class="time">
                {{formatTime(player.getCurrentTime())}}/{{formatTime(player.getDuration())}}
            </div>
        </div>
        `
})
export class PlayerComponent {
    player: Player;
    song: Song;

    @ViewChild('progress') progress;

    constructor(@Inject(YoutubePlayer) private player: Player) { }

    load(song: Song): void {
        this.song = song;
        this.player.loadVideoById(song.src);
        this.play();
    }

    play(): void {
        this.player.playVideo();
    }

    pause(): void {
        this.player.pauseVideo();
    }

    seek(event): void {
        let percentage = (event.offsetX / this.progress.nativeElement.offsetWidth);
        this.player.seekTo(this.player.getDuration() * percentage);
    }

    private formatTime(seconds: number): string {
        return moment.utc(seconds * 1000).format("mm:ss");
    }
}