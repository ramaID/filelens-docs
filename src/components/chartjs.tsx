'use client'

import { Bar } from 'react-chartjs-2'
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

export function ChartRPS() {
  Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

  return (
    <div className="h-[400px] w-full">
      <Bar
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Requests per Second (req/s)',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Setup Environment',
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: true,
              text: 'Perbandingan Requests per Second (req/s)',
            },
          },
        }}
        data={{
          labels: [
            'Laravel Herd',
            'ramaid/image:php8.3-fullstack-http',
            'ramaid/image:php8.3-franken',
            'jaygaha/laravel-11-frankenphp-docker',
            'ramaid/image:php8.3-franken with Laravel Octane',
          ],
          datasets: [
            {
              label: 'Requests per Second (req/s), higher is better',
              data: [194.39, 528.84, 471.79, 118.91, 1659.9],
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  )
}

export function ChartMS() {
  Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

  return (
    <div className="h-[400px] w-full">
      <Bar
        options={{
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Request Duration (ms)',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Setup Environment',
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: true,
              text: 'Perbandingan Response Time (Request Duration)',
            },
          },
        }}
        data={{
          labels: [
            'Laravel Herd',
            'ramaid/image:php8.3-fullstack-http',
            'ramaid/image:php8.3-franken',
            'jaygaha/laravel-11-frankenphp-docker',
            'ramaid/image:php8.3-franken with Laravel Octane',
          ],
          datasets: [
            {
              label: 'Request Duration (ms), lower is better',
              data: [14.58, 4.7, 5.28, 12.74, 1.49],
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  )
}
