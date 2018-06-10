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
    putTodos( input_object ): Todo[] {
        const change_index = input_object.change_index;
        const change_data = input_object.change_data;
        // console.log( TODOS[ change_index ] );
        Object.keys( change_data ).forEach( e => {
            TODOS[ change_index ][ e ] = change_data[ e ];
        });
        return TODOS;
    }
    changeData() {
        //
    }
    servInit() {
        // console.log('Hello');
        return 'something';
    }
}
