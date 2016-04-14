import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'examples-list',
    styleUrls: ['styles/examples-list.css'],
    template: `
        <div *ngIf="!hide">
            Not sure what to search for? Why not try&hellip;
            <ul>
                <li *ngFor="#example of examples">
                    <a (click)="select.emit(example)">{{example}}</a>
                </li>
            </ul>
        </div>
        `
})
export class ExamplesListComponent {
    hide: boolean = false;
    examples: string[] = [
        'taylor swift and ed sheeran',
        'my life be like ooh ahh',
        'i tried so hard and got so far',
        'the fox song'
    ];
    @Output() select: EventEmitter<string> = new EventEmitter();
}