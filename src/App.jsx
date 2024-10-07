// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bienvenida from './components/bienvenida';
import Formulario from './components/formulario';
import Analisis from './components/analisis';
import { Box } from '@mui/material';
import Analiticas from './components/analiticas';

function App() {
  return (
    <Router>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #C4E8E8, #FAFAFA)',
          padding: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/analisis" element={<Analisis />} />
          <Route path="/analiticas" element={<Analiticas/>} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
