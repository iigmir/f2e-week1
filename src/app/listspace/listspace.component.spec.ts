import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListspaceComponent } from './listspace.component';

describe('ListspaceComponent', () => {
  let component: ListspaceComponent;
  let fixture: ComponentFixture<ListspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
