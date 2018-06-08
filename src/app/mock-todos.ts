import { Todo } from './todo';

export const TODOS: Todo[] = [{
        starred: true,
        priority: 0,
        comment: 'Type something comment',
        todo: 'Type something here...',
        date: null,
        time: '17:06',
        file: 'foo/bar',
        completed: false
    }, {
        starred: true,
        priority: 1,
        comment: 'Another',
        todo: 'Yet another todos.',
        date: null,
        time: null,
        file: 'foo/bar/baz',
        completed: false
    }, {
        starred: false,
        priority: 2,
        comment: null,
        todo: 'Type something here',
        date: '2018-06-30',
        time: null,
        file: null,
        completed: false
    }, {
        starred: false,
        priority: 3,
        comment: null,
        todo: 'TypeScript',
        date: null,
        time: null,
        file: 'foo',
        completed: false
    }, {
        starred: false,
        priority: 3,
        comment: null,
        todo: 'Type some JScript',
        date: null,
        time: null,
        file: null,
        completed: true
    }
];
/*
completed: Boolean;
    starred: Boolean;
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
