const express = require('express');
const registrationRoutes = require('./routes/registration');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/registration', registrationRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
