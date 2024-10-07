import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import { Box, Typography } from '@mui/material';
import mexicoStates from '../data/states.geojson'; // Importa el archivo GeoJSON localmente

// Datos ficticios de casos de cáncer por estado
const cancerData = [
  { state: 'Jalisco', cases: 300 },
  { state: 'Durango', cases: 500 },
  { state: 'Nuevo León', cases: 200 },
  { state: 'Yucatán', cases: 50 },
  { state: 'Michoacán de Ocampo', cases: 1200 },
  // Agregar más estados con sus respectivos datos aquí...
];

// Escala de colores para los casos
const colorScale = scaleLinear()
  .domain([0, 500]) // El dominio va del número mínimo al máximo de casos
  .range(['#ffedea', '#ff5233']); // Colores del gradiente

function MapaMexico() {
  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h5" mb={2}>
        Casos de Cáncer por Estado en México
      </Typography>

      <ComposableMap
        projection="geoMercator"
        width={1000}
        height={700}
        projectionConfig={{
          scale: 1300, // Ajustar la escala
          center: [-102, 23.5], // Centrar el mapa en México (coordenadas geográficas)
        }}
      >
        <Geographies geography={mexicoStates}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cur = cancerData.find((s) => s.state === geo.properties.state_name); // Usar state_name del archivo GeoJSON
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { state_name } = geo.properties;
                    setTooltipContent(`${state_name} — ${cur ? cur.cases : 'No hay datos'} casos`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    default: {
                      fill: cur ? colorScale(cur.cases) : '#EEE',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#F53',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltipContent && (
        <Box sx={{ mt: 2, backgroundColor: '#fff', p: 2, borderRadius: '8px', boxShadow: 1 }}>
          <Typography>{tooltipContent}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default MapaMexico;
