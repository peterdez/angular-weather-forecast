import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-lwx-weather',
  templateUrl: './lwx-weather.component.html',
  styleUrls: ['./lwx-weather.component.css']
})
export class LwxWeatherComponent implements OnInit {

  title = "District Of Columbia Forecast (LWX)";
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
    this.service.getChartDataLWX().subscribe((res) => {
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
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2,
              pointBackgroundColor: 'rgb(255, 99, 132)',
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Period'
              }
            },
            y: {
              display: true,
              beginAtZero: true,
              title: {
                display: true,
                text: 'Value'
              }
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
