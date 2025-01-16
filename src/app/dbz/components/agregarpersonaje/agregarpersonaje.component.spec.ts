import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarpersonajeComponent } from './agregarpersonaje.component';

describe('AgregarpersonajeComponent', () => {
  let component: AgregarpersonajeComponent;
  let fixture: ComponentFixture<AgregarpersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarpersonajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarpersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
