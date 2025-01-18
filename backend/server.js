const express = require('express');
const registrationRoutes = require('./routes/registration');

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rotas
app.use('/api/registration', registrationRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
