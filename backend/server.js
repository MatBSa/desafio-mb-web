const express = require('express');
const cors = require('cors');
const registrationRoutes = require('./routes/registration');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use(cors());

app.use(express.json());

app.use('/registration', registrationRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
