import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixabayApiComponent } from './pixabay-images.component';

describe('PixabayApiComponent', () => {
  let component: PixabayApiComponent;
  let fixture: ComponentFixture<PixabayApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixabayApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixabayApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
