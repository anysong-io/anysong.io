System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ExamplesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExamplesListComponent = (function () {
                function ExamplesListComponent() {
                    this.select = new core_1.EventEmitter();
                    this.examples = [
                        'taylor swift and ed sheeran',
                        'all around me are familiar faces',
                        'i tried so hard and got so far',
                        'the fox song'
                    ];
                }
                ExamplesListComponent.prototype.selectItem = function (event) {
                    console.log(event);
                    this.select.emit(event.target.innerText);
                    event.preventDefault();
                };
                __decorate([
                    core_1.Output, 
                    __metadata('design:type', Object)
                ], ExamplesListComponent.prototype, "select", void 0);
                ExamplesListComponent = __decorate([
                    core_1.Component({
                        selector: 'examples-list',
                        styleUrls: ['styles/examples-list.css'],
                        template: "\n        Not sure what to search for? Why not try&hellip;\n        <ul>\n            <li *ngFor=\"#example of examples\">\n                <a (click)=\"selectItem($event)\">{{example}}</a>\n            </li>\n        </ul>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExamplesListComponent);
                return ExamplesListComponent;
            }());
            exports_1("ExamplesListComponent", ExamplesListComponent);
        }
    }
});
//# sourceMappingURL=example-list.component.js.map