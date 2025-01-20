# Desafio MB Web - Instruções para Rodar e Testar a Aplicação

Este projeto é composto por um backend (Node.js/Express) e um frontend (VueJS 3 + Vite). O objetivo é integrar ambos para que o backend sirva os arquivos do frontend, permitindo o funcionamento completo da aplicação a partir de um único servidor.

## Estrutura do Projeto

- **backend/**: Contém o código do servidor Node.js.
- **frontend/**: Contém o código do frontend desenvolvido em VueJS 3 + Vite.

---

## Passo a Passo para Executar o Projeto

### 1. Instalar as Dependências

#### Backend

1. Navegue até a pasta do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

#### Frontend

1. Navegue até a pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

---

### 2. Construir o Frontend

1. Navegue até a pasta do frontend:

   ```bash
   cd frontend
   ```

2. Execute o comando para instalar as dependências:

   ```bash
   npm install
   ```

3. Ainda na pasta do frontend, execute o comando para gerar a build de produção:
   ```bash
   npm run build
   ```
4. Certifique-se de que a pasta `build` foi criada dentro de `frontend/`.

---

### 3. Rodar o Servidor

1. Navegue até a pasta do backend:
   ```bash
   cd backend
   ```
2. Execute o comando para instalar as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm run start
   ```
4. O servidor estará rodando em: [http://localhost:3000](http://localhost:3000).

---

## Como Testar a Aplicação

1. Abra um navegador e acesse [http://localhost:3000/registration](http://localhost:3000/registration).
2. Certifique-se de que o frontend é exibido corretamente.
3. Utilize as funcionalidades do frontend para validar a interação com o backend.
4. Caso encontre erros, verifique os logs do console (tanto no navegador quanto no terminal onde o servidor está rodando).

---

## Observações

- Certifique-se de que as portas utilizadas (default: 3000) não estejam em uso por outros processos.
- Caso precise alterar a porta do backend, ajuste a variável `PORT` no arquivo principal do backend.
