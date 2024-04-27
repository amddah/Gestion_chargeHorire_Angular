import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleComponent } from './module.component';

describe('ModuleComponent', () => {
  let component: ModuleComponent;
  let fixture: ComponentFixture<ModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleComponent]
    });
    fixture = TestBed.createComponent(ModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
