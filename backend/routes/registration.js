const express = require('express');
const router = express.Router();


// [POST] /api/registration - Recebe os dados do formulário
router.post('/', (req, res) => {
    const { email, type, ...rest } = req.body;

    if (!email || !type) {
        return res.status(400).json({ error: 'Campos obrigatórios ausentes no passo 1.' });
    }

    // Validar dados de acordo com o tipo (PF/PJ)
    const requiredFields = type === 'PF' ? ['name', 'cpf', 'birthdate', 'phone'] : ['businessName', 'cnpj', 'openingDate', 'phone'];
    const missingFields = requiredFields.filter((field) => !rest[field]);

    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Campos obrigatórios ausentes: ${missingFields.join(', ')}` });
    }

    res.status(200).json({ message: 'Cadastro realizado com sucesso!' });
});

module.exports = router;
