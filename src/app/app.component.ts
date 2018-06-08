import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'app';
    todos: Todo[];
    constructor( private service: TodoService ) {}
    ngInit() {
        console.log( this.service.servInit() );
        console.log( 'this.serv.servInit' );
    }
    switchStar() { console.warn('Fuckyou'); }
}
