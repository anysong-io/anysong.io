import {Song} from "../../../bo/song";
import {SearchService} from "../search";
import {Http, URLSearchParams} from 'angular2/http';
import {Inject} from 'angular2/core';
import 'rxjs/operator/map';
import {Observable} from "rxjs/Observable";

export class YoutubeSearchService implements SearchService {
    private youtubeParams: URLSearchParams = new URLSearchParams();

    constructor(@Inject(Http) private http: Http) {
        this.youtubeParams.append("key", "AIzaSyAFM3tgJfva411_4Iln8KOyCDR1teL3W38");
        this.youtubeParams.append("type", "video");
        this.youtubeParams.append("part", "id,snippet");
        this.youtubeParams.append("fields", "items/id/videoId,items/snippet/title");
        this.youtubeParams.append("maxResults", "1");
        this.youtubeParams.append("q", undefined);
    }

    search(query: string): Observable<Song> {
        this.youtubeParams.set("q", query);
        return this.http.get("https://www.googleapis.com/youtube/v3/search",
            { search: this.youtubeParams })
            .map(response => {
                let item = response.json().items[0];
                if(typeof item === "undefined")
                    throw new Error("Couldn't find anything for that query.");

                let song = new Song();
                song.title = item.snippet.title;
                song.src = item.id.videoId;
                return song;
            });
    }
}