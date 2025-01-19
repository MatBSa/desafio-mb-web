<template>
  <div class="step-four">
    <label>Etapa <span class="step-number">4</span> de 4</label>
    <h2>Revisão dos dados</h2>
    <div class="form-group">
      <label for="email">Endereço de e-mail</label>
      <input type="text" id="email" v-model="formData.email" disabled />
    </div>
    <div class="form-group" v-if="formData.tipo === 'PF'">
      <label for="nome">Nome</label>
      <input type="text" id="nome" v-model="formData.nome" disabled />
      <label for="cpf">CPF</label>
      <input type="text" id="cpf" v-model="formData.cpf" disabled />
      <label for="dataNascimento">Data de Nascimento</label>
      <input type="date" id="dataNascimento" v-model="formData.dataNascimento" disabled />
      <label for="telefone">Telefone</label>
      <input type="tel" id="telefone" v-model="formData.telefone" disabled />
    </div>
    <div class="form-group" v-if="formData.tipo === 'PJ'">
      <label for="razaoSocial">Razão Social</label>
      <input type="text" id="razaoSocial" v-model="formData.razaoSocial" disabled />
      <label for="cnpj">CNPJ</label>
      <input type="text" id="cnpj" v-model="formData.cnpj" disabled />
      <label for="dataAbertura">Data de Abertura</label>
      <input type="date" id="dataAbertura" v-model="formData.dataAbertura" disabled />
      <label for="telefoneEmpresa">Telefone</label>
      <input type="tel" id="telefoneEmpresa" v-model="formData.telefoneEmpresa" disabled />
    </div>
    <div class="form-group">
      <label for="senha">Senha</label>
      <input type="password" id="senha" v-model="formData.senha" disabled />
    </div>
    <div class="buttons">
      <button @click="prevStep" class="back-button">Voltar</button>
      <button @click="submitForm" class="continue-button">Cadastrar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps(['formData'])
const emit = defineEmits(['prev', 'submit'])
const prevStep = () => {
  emit('prev')
}
const submitForm = () => {
  emit('submit')
  fetch('url_da_api', {
    method: 'POST',
    body: JSON.stringify(props.formData),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // Exibir mensagem de sucesso
    } else {
      // Exibir mensagem de erro
    }
  }).catch(error => {
    // Exibir mensagem de erro
  })
}
</script>

<style scoped>
.step-four {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
}
h2 {
  text-align: left;
  color: #333;
  margin-top: 0rem;
}
.step-number {
  color: orange;
}
label {
  margin-top: 15px;
  color: #333;
  text-align: left;
  display: block;
}
.form-group {
  margin-bottom: 15px;
  width: 100%;
}
input[type="text"], input[type="date"], input[type="tel"], input[type="password"] {
  width: 248px;
  max-width: 400px;
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #242424;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: black;
}
input[type="text"]:focus, input[type="date"]:focus, input[type="tel"]:focus, input[type="password"]:focus {
  border-color: lightorange;
  outline: none;
}
.buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.back-button, .continue-button {
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  padding: 10px;
  border: 2px solid orange;
  border-radius: 5px;
  background-color: orange;
  color: white;
  cursor: pointer;
  text-align: center;
}
.back-button {
  background-color: white;
  color: orange;
  margin-right: 0.5rem;
}
.continue-button {
  margin-left: 0.5rem;
}
.back-button:hover, .continue-button:hover {
  background-color: darkorange;
  border-color: darkorange;
}
.back-button:hover {
  background-color: white;
  color: darkorange;
  border-color: darkorange;
}
@media (max-width: 600px) {
  .step-four {
    padding: 10px;
  }
  input[type="text"], input[type="date"], input[type="tel"], input[type="password"], .back-button, .continue-button {
    width: 100%;
    max-width: 100%;
  }
}
</style>
