const express = require('express');
const cors = require('cors');
const path = require('path');
const personajes = require('./data/personajes.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('Servidor de Dragon Ball Quiz corriendo. Personajes en /api/personajes');
});

// Obtener lista de sagas disponibles
app.get('/api/sagas', (req, res) => {
  const sagas = [
    { id: 'dragon-ball', nombre: 'Dragon Ball' },
    { id: 'dragon-ball-z', nombre: 'Dragon Ball Z' },
    { id: 'dragon-ball-gt', nombre: 'Dragon Ball GT' },
    { id: 'dragon-ball-super', nombre: 'Dragon Ball Super' },
  ];
  res.json(sagas);
});

// Obtener personajes (filtrados por saga o aleatorio)
app.get('/api/personajes', (req, res) => {
  const { saga, random } = req.query;
  let resultado = personajes;

  if (saga) {
    resultado = resultado.filter((p) => p.saga === saga);
  }

  if (random === 'true' && resultado.length > 0) {
    const randomIndex = Math.floor(Math.random() * resultado.length);
    return res.json(resultado[randomIndex]);
  }

  return res.json(resultado);
});

// Obtener personaje por ID
app.get('/api/personajes/:id', (req, res) => {
  const { id } = req.params;
  const personaje = personajes.find(
    (p) => p.id === Number(id) || p.nombre.toLowerCase() === id.toLowerCase(),
  );

  if (!personaje) {
    return res.status(404).json({ error: 'Personaje no encontrado' });
  }

  return res.json(personaje);
});

app.use('/data', express.static(path.join(__dirname, 'data')));

app.listen(PORT, () => {
  console.log(`Servidor de Dragon Ball escuchando en http://localhost:${PORT}`);
  console.log(`API de personajes: http://localhost:${PORT}/api/personajes`);
});
