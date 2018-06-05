import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [TodoService]
        });
    });

    it('should be created', inject([TodoService], (service: TodoService) => {
        expect(service).toBeTruthy();
    }));

    describe('todo', () => {
        it('should be string', inject([TodoService], (service: TodoService) => {
            expect(service).toBeTruthy();
        }));

        it('能夠紀錄每天的待辦事項', inject([TodoService], (service: TodoService) => {
            // 能夠紀錄每天的待辦事項
            expect(service).toBeTruthy();
        }));
    });

    describe('priority', () => {
        it('should be number', inject([TodoService], (service: TodoService) => {
            expect(service).toBeTruthy();
        }));

        it('should sort by this number', inject([TodoService], (service: TodoService) => {
            expect(service).toBeTruthy();
        }));

        it('should have best priority if is 1', inject([TodoService], (service: TodoService) => {
            // 可拖拉待辦事項，調整排序。
            expect(service).toBeTruthy();
        }));
    });

    describe('satrred', () => {
        it('should be boolean', inject([TodoService], (service: TodoService) => {
            expect(service).toBeTruthy();
        }));

        it('should always have greater priority than priority number', inject([TodoService], (service: TodoService) => {
            const case1 = [{ satrred: true , priority: 4 }, { satrred: false , priority: 2 }];
            const case2 = [{ satrred: true , priority: 4 }, { satrred: true , priority: 2 }];
            expect(service).toBeTruthy();
        }));

        it('should be false when created', inject([TodoService], (service: TodoService) => {
            // 可標示每個待辦優先重要級別，預設為無。
            const case1 = [{ satrred: true , priority: 4 }, { satrred: false , priority: 2 }];
            const case2 = [{ satrred: true , priority: 4 }, { satrred: true , priority: 2 }];
            expect(service).toBeTruthy();
        }));
    });

    describe('date', () => {
        it('should be date format', inject([TodoService], (service: TodoService) => {
            expect(service).toBeTruthy();
        }));

        it('每筆待辦可新增時間提醒 (yyyy/mm/dd hh:mm)', inject([TodoService], (service: TodoService) => {
            expect(service).toBeTruthy();
        }));
    });

    describe('file', () => {
        it('should be string', inject([TodoService], (service: TodoService) => {
            expect(service).toBeTruthy();
        }));

        it('每筆待辦可再附加檔案', inject([TodoService], (service: TodoService) => {
            expect(service).toBeTruthy();
        }));
    });

    describe('comment', () => {
        it('should be string', inject([TodoService], (service: TodoService) => {
            expect(service).toBeTruthy();
        }));

        it('每筆待辦可再填寫評論', inject([TodoService], (service: TodoService) => {
            expect(service).toBeTruthy();
        }));
    });

    describe('completed', () => {
        it('should be boolean', inject([TodoService], (service: TodoService) => {
            expect(service).toBeTruthy();
        }));

        it('should stand for: 待處理 已處理', inject([TodoService], (service: TodoService) => {
            expect(service).toBeTruthy();
        }));
    });
});
