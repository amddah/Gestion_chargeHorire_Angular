import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantComponent } from './enseignant.component';

describe('EnseignantComponent', () => {
  let component: EnseignantComponent;
  let fixture: ComponentFixture<EnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnseignantComponent]
    });
    fixture = TestBed.createComponent(EnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
