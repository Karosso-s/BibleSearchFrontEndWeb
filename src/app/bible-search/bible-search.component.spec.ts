import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleSearchComponent } from './bible-search.component';

describe('BibleSearchComponent', () => {
  let component: BibleSearchComponent;
  let fixture: ComponentFixture<BibleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
