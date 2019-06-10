import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleGtmComponent } from './simple-gtm.component';

describe('SimpleGtmComponent', () => {
  let component: SimpleGtmComponent;
  let fixture: ComponentFixture<SimpleGtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleGtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleGtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
