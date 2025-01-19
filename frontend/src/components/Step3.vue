<template>
  <div class="step-three">
    <label>Etapa <span class="step-number">3</span> de 4</label>
    <h2>Senha de acesso</h2>
    <label for="senha">Sua senha</label>
    <input type="password" id="senha" v-model="localFormData.senha" placeholder="Insira sua senha"/>
    <span v-if="senhaError" class="error">{{ senhaError }}</span>
    <div class="buttons">
      <button @click="prevStep" class="back-button">Voltar</button>
      <button @click="nextStep" class="continue-button">Continuar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['formData'])
const emit = defineEmits(['next', 'prev', 'update'])
const localFormData = ref({ ...props.formData })

const senhaError = ref('')

const nextStep = () => {
  if (validateForm()) {
    emit('update', localFormData.value)
    emit('next')
  }
}

const prevStep = () => {
  emit('update', localFormData.value)
  emit('prev')
}

const validateForm = () => {
  if (!localFormData.value.senha) {
    senhaError.value = 'Por favor, insira sua senha.'
    return false
  } else if (localFormData.value.senha.length < 8) {
    senhaError.value = 'A senha deve ter pelo menos 8 caracteres.'
    return false
  } else {
    senhaError.value = ''
    return true
  }
}
</script>

<style scoped>
.step-three {
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

input[type="password"] {
  width: 248px;
  max-width: 400px;
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #242424;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: black;
}

input[type="password"]:focus {
  border-color: lightorange;
  outline: none;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.back-button,
.continue-button {
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

.back-button:hover,
.continue-button:hover {
  background-color: darkorange;
  border-color: darkorange;
}

.back-button:hover {
  background-color: white;
  color: darkorange;
  border-color: darkorange;
}

.error {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
}

@media (max-width: 600px) {
  .step-three {
    padding: 10px;
  }

  input[type="password"]
  .back-button,
  .continue-button {
    width: 100%;
    max-width: 100%;
  }
}
</style>
