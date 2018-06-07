import { Todo } from './todo';

export const TODOS: Todo[] = [{
        satrred: true,
        priority: 0,
        comment: 'Type something comment',
        todo: 'Type something here...',
        date: null,
        time: '17:06',
        file: 'foo/bar',
        completed: false
    }, {
        satrred: true,
        priority: 1,
        comment: 'Another',
        todo: 'Yet another todos.',
        date: null,
        time: null,
        file: 'foo/bar/baz',
        completed: false
    }, {
        satrred: false,
        priority: 2,
        comment: 'Type something here',
        todo: null,
        date: '2018-06-30',
        time: null,
        file: null,
        completed: false
    }, {
        satrred: false,
        priority: 3,
        comment: 'TypeScript',
        todo: null,
        date: null,
        time: null,
        file: 'foo',
        completed: false
    }, {
        satrred: false,
        priority: 3,
        comment: 'Type some JScript',
        todo: null,
        date: null,
        time: null,
        file: null,
        completed: true
    }
];
/*
completed: Boolean;
    satrred: Boolean;
    priority: Number;
    comment: String;
    todo: String;
    date: String;
    file: String;
    { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
*/
