import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3compComponent } from './d3comp.component';

describe('D3compComponent', () => {
  let component: D3compComponent;
  let fixture: ComponentFixture<D3compComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3compComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
