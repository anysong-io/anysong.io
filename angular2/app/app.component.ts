import {Component} from 'angular2/core';
import {Song} from "./bo/song";
import {SearchFormComponent} from "./components/search-form.component";
import {PlayerComponent} from "./components/player.component";
import {ExamplesListComponent} from "./components/examples-list.component";
import {YoutubeSearchService} from "./services/search/impl/yt.search";
import {YoutubePlayer} from "./bo/yt.player";
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'anysong-app',
    directives: [SearchFormComponent, PlayerComponent, ExamplesListComponent],
    providers: [YoutubeSearchService, YoutubePlayer, HTTP_PROVIDERS],
    templateUrl: 'app/app.html'
})
export class AppComponent {
    title: string = 'anysong.io';
    subtitle: string = 'Instantly play any song on the web, without even knowing its name!';
}