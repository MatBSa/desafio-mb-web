# Desafio MB Web - Backend

## Descrição

Este é o backend desenvolvido para o desafio MB Web, cuja função é prover os endpoints para o funcionamento de um formulário multi-etapas de cadastro. Este backend foi implementado utilizando Node.js com o framework Express.

O backend não armazena dados em banco de dados, apenas simula a validação e recebimento dos dados submetidos pelo cliente.

---

## Funcionalidades

### Endpoints

#### `[GET] /api/registration`

Retorna os dados necessários para inicializar o formulário, incluindo os passos do cadastro e os campos de cada passo.

#### `[POST] /api/registration`

Recebe os dados do formulário submetidos pelo cliente, valida se todos os campos obrigatórios foram preenchidos, e retorna uma mensagem de sucesso ou erro.

### Validações Implementadas

- Todos os campos obrigatórios precisam ser preenchidos.
- Campos como e-mail e CPF possuem validação de formato básico.
- A validação é diferenciada para Pessoa Física (PF) e Pessoa Jurídica (PJ).

---

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Nodemon** (para desenvolvimento)

---

## Estrutura do Projeto

```
|-- desafio-mb-web
    |-- backend
        |-- routes
            |-- registration.js
        |-- app.js
        |-- package.json
        |-- README.md
```

---

## Como Configurar o Projeto

### 1. Clonar o Repositório

```bash
git clone <url-do-repositorio>
cd desafio-mb-web/backend
```

### 2. Instalar Dependências

Certifique-se de que você tem o Node.js instalado na sua máquina. Em seguida, execute:

```bash
npm install
```

### 3. Iniciar o Servidor

Durante o desenvolvimento, use o Nodemon para iniciar o servidor:

```bash
npm run dev
```

O servidor estará rodando em: [http://localhost:3000](http://localhost:3000)

---

## Scripts Disponíveis

### `npm run dev`

Inicia o servidor em modo de desenvolvimento usando o Nodemon.

### `npm start`

Inicia o servidor em modo de produção.
