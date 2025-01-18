const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const registrationData = {
        steps: [
            {
                step: 1,
                fields: [
                    { name: 'email', type: 'email', required: true },
                    { name: 'type', type: 'select', options: ['PF', 'PJ'], required: true },
                ],
                actions: ['Continuar'],
            },
            {
                step: 2,
                fields: {
                    PF: [
                        { name: 'name', type: 'text', required: true },
                        { name: 'cpf', type: 'text', required: true },
                        { name: 'birthdate', type: 'date', required: true },
                        { name: 'phone', type: 'text', required: true },
                    ],
                    PJ: [
                        { name: 'businessName', type: 'text', required: true },
                        { name: 'cnpj', type: 'text', required: true },
                        { name: 'openingDate', type: 'date', required: true },
                        { name: 'phone', type: 'text', required: true },
                    ],
                },
                actions: ['Voltar', 'Continuar'],
            },
            {
                step: 3,
                fields: [
                    { name: 'password', type: 'password', required: true },
                ],
                actions: ['Voltar', 'Continuar'],
            },
            {
                step: 4,
                fields: [],
                actions: ['Voltar', 'Cadastrar'],
            },
        ],
    };

    res.status(200).json(registrationData);
});

router.post('/', (req, res) => {
    const { email, type, ...rest } = req.body;

    if (!email || !type) {
        return res.status(400).json({ error: 'Campos obrigatórios ausentes no passo 1.' });
    }

    const requiredFields = type === 'PF' ? ['name', 'cpf', 'birthdate', 'phone'] : ['businessName', 'cnpj', 'openingDate', 'phone'];
    const missingFields = requiredFields.filter((field) => !rest[field]);

    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Campos obrigatórios ausentes: ${missingFields.join(', ')}` });
    }

    res.status(200).json({ message: 'Cadastro realizado com sucesso!' });
});

module.exports = router;
