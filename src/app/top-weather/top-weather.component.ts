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
   this.createTOPChart();
  }

  createTOPChart(): void {
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
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderWidth: 2,
              pointBackgroundColor: 'rgb(54, 162, 235)',
            },
          ],
        },
        options: {
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
