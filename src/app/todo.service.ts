import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from './todo';
import { TODOS } from './mock-todos';

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    constructor( private http: HttpClient ) {
    }
    getTodos(): Todo[] {
        return TODOS;
    }
    putTodos(): Todo[] {
        return TODOS;
        // nevsbds
    }
    servInit() {
        // console.log('Hello');
        return 'something';
    }
}
