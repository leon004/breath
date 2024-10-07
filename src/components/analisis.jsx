// Analisis.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Grid,
} from '@mui/material';

function Analisis() {
  const [isLoading, setIsLoading] = useState(false);
  const [analyzedImages, setAnalyzedImages] = useState([]);

  const analyzeImage = (file) => {
    setIsLoading(true);
    setTimeout(() => {
      setAnalyzedImages([
        '/assets/images/result1.jpeg',
        '/assets/images/result2.jpeg',
        '/assets/images/result3.jpeg',
      ]);
      setIsLoading(false);
    }, 10000);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length) {
      analyzeImage(files[0]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileSelect = (event) => {
    const files = event.target.files;
    if (files.length) {
      analyzeImage(files[0]);
    }
  };

  return (
    <Box sx={{ maxWidth: '600px', width: '90%', mx: 'auto', textAlign: 'center', mt: { xs: 4, md: 6 } }}>
      <Typography variant="h5" mb={3}>
        Análisis de Imagen
      </Typography>
      <Box
        sx={{
          border: '2px dashed #3f51b5',
          padding: 3,
          cursor: 'pointer',
          backgroundColor: 'transparent',
          mt: 2,
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById('fileInput').click()}
      >
        <Typography variant="body1">
          Arrastra y suelta una imagen aquí o haz clic para cargar
        </Typography>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileSelect}
        />
      </Box>
      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => document.getElementById('fileInput').click()}
          sx={{ px: 4, py: 1.5 }}
        >
          Seleccionar Imagen
        </Button>
      </Box>
      {isLoading && (
        <Box mt={3}>
          <Typography variant="body1">Analizando la imagen...</Typography>
          <CircularProgress color="primary" />
        </Box>
      )}
      {!isLoading && analyzedImages.length > 0 && (
        <Box mt={3}>
          <Typography variant="h5">Imágenes Analizadas</Typography>
          <Grid container spacing={2} mt={1}>
            {analyzedImages.map((img, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box>
                  <img
                    src={img}
                    alt={`Resultado ${index + 1}`}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default Analisis;