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
    current_editing = 0;
    constructor( private service: TodoService ) { }
    ngOnInit() {
        this.todos = this.service.getTodos();
    }
    switchStar( input_index ) {
        this.service.putTodos({
            change_index : input_index,
            change_data : {
                starred : !this.todos[ input_index ].starred
            }
        });
        this.todos = this.service.getTodos();
    }
    switchCompleted( input_index ) {
        this.service.putTodos({
            change_index : input_index,
            change_data : {
                completed : !this.todos[ input_index ].completed
            }
        });
        this.todos = this.service.getTodos();
    }
    enableEdit( input_index ) {
        const same_number_chosed = this.current_editing === input_index;
        this.current_editing = same_number_chosed ? null : input_index;
    }
}
