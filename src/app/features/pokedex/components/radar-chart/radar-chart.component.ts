import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
};


@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.css'
})
export class RadarChartComponent implements OnInit{
  @Input() pokemonDetail : any;
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: any;

  constructor() {
  }
  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name : "stat",
          data: [
            this.pokemonDetail.stats[0].base_stat,
            this.pokemonDetail.stats[1].base_stat,
            this.pokemonDetail.stats[2].base_stat,
            this.pokemonDetail.stats[3].base_stat,
            this.pokemonDetail.stats[4].base_stat,
            this.pokemonDetail.stats[5].base_stat
          ]
        }
      ],
      chart: {
        height: 160,
        width: 160,
        type: "radar",
        toolbar: {
          show: false  // Desactiva el menú de descargas
        }
      },
      xaxis: {
        categories: ["HP", "ATTACK", "DEFENSE", "SP.ATK", "SP.DEF", "SPEED"],
        labels: {
          style: {
            colors: ['#FF4560', '#00E396', '#FEB019', '#775DD0', '#546E7A', '#26a69a'], // Colores personalizados
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
          },
        },
      },
      dataLabels: {
        enabled: false,  // Puedes deshabilitar las etiquetas para simplificar
      },
      stroke: {
        width: 2,  // Controla el grosor de las líneas
      },
      markers: {
        size: 4,  // Tamaño pequeño para los puntos en la gráfica
      },
      fill: {
        opacity: 0.2,  // Transparencia del relleno
      },
      yaxis: {
        show: false,  // Oculta el eje Y para reducir el desorden
      },
      legend: {
        show: false,  // Puedes deshabilitar la leyenda si no es necesaria
      },
      grid: {
        show: false,  // Oculta las líneas de la cuadrícula
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 100,
              width: 200,
            },
          },
        },
      ],
    };
  }

}
