import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';


@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {
    todos: Todo[];
    constructor( private service: TodoService ) { }
    ngOnInit() {
        this.todos = this.service.getTodos();
        // console.log( this.todos );
    }
    logIt() {
        console.log('Hello');
    }
}
