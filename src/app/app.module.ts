import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LwxWeatherComponent } from './lwx-weather/lwx-weather.component';
import { TopWeatherComponent } from './top-weather/top-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LwxWeatherComponent,
    TopWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
