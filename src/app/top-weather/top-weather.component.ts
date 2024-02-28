import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-top-weather',
  templateUrl: './top-weather.component.html',
  styleUrls: ['./top-weather.component.css']
})
export class TopWeatherComponent implements OnInit {

  title = "Kansas Forecast (TOP)";
  chart: any = [];
  result: any;
  periodTemperature: any;
  periodName: any;

  constructor(private service: ChartService) { }
  loading = true;
  ngOnInit(): void {
   this.createLWXChart();
  }

  createLWXChart(): void {
    this.service.getChartDataTOP().subscribe((res) => {
      this.result = res;
      this.periodTemperature = this.result.properties.periods.map((periods: any) => periods.temperature);
      this.periodName = this.result.properties.periods.map((periods: any) => periods.name);
      console.log(this.periodTemperature);
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.periodName,
          datasets: [
            {
              label: 'Temperature (°F)',
              data: this.periodTemperature,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            bodyFont: {
              size: 14,
            },
            titleFont: {
              size: 16,
              weight: 'bold',
            }
          },
          legend: {
            labels: {
              font: {
                size: 14,
              }
            }
          },
        }
        },
      });
      this.loading = false;
    });
  }

}
