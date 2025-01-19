<template>
  <div class="step-one">
    <h2>Etapa 1 de 4</h2>
    <h3>Seja bem vindo(a)</h3>
    <label for="email">Endereço de e-mail</label>
    <input type="email" id="email" v-model="email" placeholder="Insira seu e-mail"/>
    <div class="radio-group">
      <input type="radio" id="pf" value="PF" v-model="tipo"/>
      <label for="pf">Pessoa física</label>
      <input type="radio" id="pj" value="PJ" v-model="tipo"/>
      <label for="pj">Pessoa jurídica</label>
    </div>
    <button @click="nextStep" class="continue-button">Continuar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const tipo = ref('PF')

const nextStep = () => {
  if (validateForm()) {
    emit('next')
  }
}

const validateForm = () => {
  // Lógica de validação do formulário
}
</script>

<style scoped>
.step-one {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  color: #333;
}

h3 {
  color: #666;
}

label {
  margin-top: 15px;
  color: #333;
}

input[type="email"] {
  margin-top: 5px;
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.radio-group {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.radio-group input {
  margin: 0 10px;
}

.continue-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: orange;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.continue-button:hover {
  background-color: darkorange;
}
</style>
