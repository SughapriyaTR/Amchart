import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTestComponent } from './sample-test.component';

describe('SampleTestComponent', () => {
  let component: SampleTestComponent;
  let fixture: ComponentFixture<SampleTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
