import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LwxWeatherComponent } from './lwx-weather/lwx-weather.component';
import { TopWeatherComponent } from './top-weather/top-weather.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather/lwx', component: LwxWeatherComponent },
  { path: 'weather/top', component: TopWeatherComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
