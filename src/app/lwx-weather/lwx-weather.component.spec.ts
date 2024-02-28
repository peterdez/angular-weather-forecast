import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LwxWeatherComponent } from './lwx-weather.component';

describe('LwxWeatherComponent', () => {
  let component: LwxWeatherComponent;
  let fixture: ComponentFixture<LwxWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LwxWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LwxWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
