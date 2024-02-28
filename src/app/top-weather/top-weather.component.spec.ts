import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWeatherComponent } from './top-weather.component';

describe('TopWeatherComponent', () => {
  let component: TopWeatherComponent;
  let fixture: ComponentFixture<TopWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
