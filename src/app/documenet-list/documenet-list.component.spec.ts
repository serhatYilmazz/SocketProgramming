import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumenetListComponent } from './documenet-list.component';

describe('DocumenetListComponent', () => {
  let component: DocumenetListComponent;
  let fixture: ComponentFixture<DocumenetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumenetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumenetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
