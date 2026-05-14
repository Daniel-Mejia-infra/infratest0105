const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
  res.json({
    estado: 'ok',
    entorno: ENV,
    mensaje: 'Infra Agent FLIT - Servicio activo',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({
    estado: 'saludable',
    entorno: ENV,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(\[FLIT] Servidor iniciado en puerto \ - Entorno: \\);
});
