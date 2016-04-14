import {Component, Inject, Input, Output, EventEmitter} from 'angular2/core';
import {Song} from "../bo/song";
import {SearchService} from "../services/search/search";
import {YoutubeSearchService} from "../services/search/impl/yt.search";

@Component({
    selector: 'search-form',
    styleUrls: ['styles/search-form.css'],
    template: `
        <form class="form" (submit)="search()">
            <input class="query" type="text" placeholder="{{placeholder}}" [(ngModel)]="query" />
            <div class="message" *ngIf="message">{{message}}</div>
        </form>
        `
})
export class SearchFormComponent {
    placeholder: string = "Enter a song name, lyrics, artists.. anything!";
    message: string;

    @Input() query: string;
    @Output() result: EventEmitter<Song> = new EventEmitter();

    constructor(@Inject(YoutubeSearchService) private searchService: SearchService) { }

    search() {
        this.message = undefined;
        this.searchService.search(this.query)
            .subscribe(
                song => this.result.emit(song),
                error => this.message = error.message || "Unknown error"
            );
    }
}