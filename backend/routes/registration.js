const express = require('express');
const router = express.Router();
const path = require('path');


router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

router.post('/', (req, res) => {
    const { email, tipo, ...rest } = req.body;

    if (!email || !tipo) {
        return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    const requiredFields = tipo === 'PF' ? ['nome', 'cpf', 'dataNascimento', 'telefone', 'senha'] : ['razaoSocial', 'cnpj', 'dataAbertura', 'telefoneEmpresa', 'senha'];
    const missingFields = requiredFields.filter((field) => !rest[field]);

    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Campos obrigatórios ausentes: ${missingFields.join(', ')}` });
    }

    const registeredData = { email, tipo, ...rest };

    res.status(200).json({ message: 'Cadastro realizado com sucesso!', registeredData });
});

module.exports = router;
