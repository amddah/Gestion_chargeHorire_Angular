import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliereDetailComponent } from './filiere-detail.component';

describe('FiliereDetailComponent', () => {
  let component: FiliereDetailComponent;
  let fixture: ComponentFixture<FiliereDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiliereDetailComponent]
    });
    fixture = TestBed.createComponent(FiliereDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
