import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Analiticas from './analiticas';
import MapaMexico from './mapamexico';

function Bienvenida() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/formulario');
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        animation: 'fadeIn 2s ease-in-out',
        '@keyframes fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        maxWidth: '600px',
        width: '90%',
        mx: 'auto',
        p: 4,
        mt: { xs: 8, md: 12 },
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h3" mb={4} sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
        Bienvenido
      </Typography>
      <Analiticas />
      <MapaMexico />
      <Button variant="contained" color="primary" onClick={handleStart} sx={{ px: 4, py: 1.5 }}>
        Iniciar analisis
      </Button>
    </Box>
  );
}

export default Bienvenida;
