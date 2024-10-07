// Formulario.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

function Formulario() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    paisOrigen: '',
    edad: '',
    genero: '',
    ubicacion: 'Morelia, Michoacán',
    descripcion: '',
    vicios: false,
    enfermedadesCronicas: false,
  });

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = () => {
    navigate('/analisis');
  };

  return (
    <Box
      sx={{
        maxWidth: '600px',
        width: '90%',
        mx: 'auto',
        mt: { xs: 4, md: 6 },
        p: 3,
        borderRadius: '16px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
      }}
    >
      <Typography variant="h5" mb={3} sx={{ textAlign: 'center' }}>
        Información del Paciente
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="paisOrigen-label">País de Origen</InputLabel>
        <Select
          labelId="paisOrigen-label"
          name="paisOrigen"
          value={formValues.paisOrigen}
          onChange={handleInputChange}
          label="País de Origen"
        >
          <MenuItem value="Mexico">México</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Canada">Canadá</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="subtitle1" mb={1}>
        Información
      </Typography>
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Edad"
            name="edad"
            value={formValues.edad}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Género"
            name="genero"
            value={formValues.genero}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

      <Typography variant="subtitle1" mb={1}>
        Ubicación
      </Typography>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: '4px', padding: '8px' }}
        >
          <LocationOnIcon sx={{ mr: 1 }} />
          <Typography>{formValues.ubicacion}</Typography>
        </Box>
      </FormControl>

      <Typography variant="subtitle1" mb={1}>
        Descripción
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        placeholder="Información relevante del paciente"
        name="descripcion"
        value={formValues.descripcion}
        onChange={handleInputChange}
        sx={{ mb: 3 }}
      />

      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="vicios"
                checked={formValues.vicios}
                onChange={handleInputChange}
              />
            }
            label="Vicios"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="enfermedadesCronicas"
                checked={formValues.enfermedadesCronicas}
                onChange={handleInputChange}
              />
            }
            label="Enfermedades crónicas"
          />
        </Grid>
      </Grid>

      <Box textAlign="center">
        <Button variant="contained" color="success" onClick={handleSubmit} sx={{ px: 5, py: 1.5 }}>
          Siguiente
        </Button>
      </Box>
    </Box>
  );
}

export default Formulario;
