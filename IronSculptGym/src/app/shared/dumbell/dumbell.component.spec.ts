import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbellComponent } from './dumbell.component';

describe('DumbellComponent', () => {
  let component: DumbellComponent;
  let fixture: ComponentFixture<DumbellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DumbellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumbellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
