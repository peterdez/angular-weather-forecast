import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private chartDataUrl = 'https://api.weather.gov/gridpoints';  // URL to web api
  constructor(private http: HttpClient) { }
  getChartDataLWX(): Observable<any> {
    return this.http.get(`${this.chartDataUrl}/LWX/31,80/forecast`);
  }

  getChartDataTOP() {
    return this.http.get(`${this.chartDataUrl}/TOP/31,80/forecast`);
  }
}
