import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { GralService } from 'src/app/demo/services/ServiceGral/colaboradorsuc.service';
// import { globalmonedaService } from 'src/app/demo/services/globalmoneda.service';
import { ChangeDetectorRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.scss'
})
export class GraficosComponent {
  chart: any;

  constructor(private grService: GralService) {}

  ngOnInit(): void {
    this.cargarGrafico();
  }

  cargarGrafico(): void {
    this.grService.grafico().subscribe(
      (data) => {
        const labels = data.map((item: any) => item.sucu_nombre || item.Nombre || 'Sin etiqueta'); // Ajusta según los datos devueltos
        const valores = data.map((item: any) => item.totalViajes || item.TotalKilometros || 0); // Ajusta según los datos devueltos

        this.renderizarGrafico(labels, valores);
        console.log(data);
      },
      (error) => {
        console.error('Error al cargar los datos del gráfico:', error);
      }
    );
  }

  renderizarGrafico(labels: string[], valores: number[]): void {
    if (this.chart) {
      this.chart.destroy(); // Destruir el gráfico anterior si ya existe
    }

    this.chart = new Chart('graficoCanvas', {
      type: 'bar', // Cambia a 'pie', 'line', etc., según prefieras
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Total de Viajes', // Cambia el texto según lo que muestre el gráfico
            data: valores,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color de las barras
            borderColor: 'rgba(75, 192, 192, 1)', // Color del borde
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
