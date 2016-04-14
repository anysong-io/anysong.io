import {Song} from "../../bo/song";
import {Observable} from "rxjs/Observable";

export interface SearchService {
    search(query: String): Observable<Song>
}