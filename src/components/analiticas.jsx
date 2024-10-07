import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

function Analiticas() {
  // Datos para casos de cáncer por municipio
  const municipiosData = {
    labels: ['Morelia', 'Quiroga', 'Patzcuaro', 'Tzintzuntzan'],
    datasets: [
      {
        label: 'Casos de Cáncer',
        data: [120, 45, 78, 30], // Valores ficticios por municipio
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const municipiosOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Casos de Cáncer por Municipio',
      },
    },
  };

  // Datos para casos positivos y negativos
  const casosData = {
    labels: ['Positivos', 'Negativos'],
    datasets: [
      {
        label: 'Resultados de Análisis',
        data: [60, 40], // Valores ficticios para casos positivos y negativos
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const casosOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Resultados de Análisis Positivos vs Negativos',
      },
    },
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        p: 4,
        mt: 4,
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" mb={4}>
        Analíticas de Cáncer
      </Typography>

      {/* Tarjeta para el gráfico de municipios */}
      <Card sx={{ maxWidth: 800, margin: 'auto', mb: 4, borderRadius: '16px', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Casos de Cáncer por Municipio
          </Typography>
          <Bar data={municipiosData} options={municipiosOptions} />
        </CardContent>
      </Card>

      {/* Tarjeta para el gráfico de casos positivos vs negativos */}
      <Card sx={{ maxWidth: 800, margin: 'auto', mb: 4, borderRadius: '16px', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Resultados de Análisis Positivos vs Negativos
          </Typography>
          <Pie data={casosData} options={casosOptions} />
        </CardContent>
      </Card>
    </Box>
  );
}

export default Analiticas;
