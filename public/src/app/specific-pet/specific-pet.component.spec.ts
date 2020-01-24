import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificPetComponent } from './specific-pet.component';

describe('SpecificPetComponent', () => {
  let component: SpecificPetComponent;
  let fixture: ComponentFixture<SpecificPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
