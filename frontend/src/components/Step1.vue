<template>
  <div class="step-one">
    <label>Etapa <span class="step-number">1</span> de 4</label>
    <h2>Seja bem vindo(a)</h2>
    <label for="email">Endereço de e-mail</label>
    <input type="email" id="email" v-model="localFormData.email" placeholder="Insira seu e-mail"/>
    <span v-if="emailError" class="error">{{ emailError }}</span>
    <div class="radio-group">
      <input type="radio" id="pf" value="PF" v-model="localFormData.tipo"/>
      <label for="pf">Pessoa física</label>
      <input type="radio" id="pj" value="PJ" v-model="localFormData.tipo"/>
      <label for="pj">Pessoa jurídica</label>
    </div>
    <span v-if="tipoError" class="error">{{ tipoError }}</span>
    <button @click="nextStep" class="continue-button">Continuar</button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps(['formData'])
const emit = defineEmits(['next', 'update'])
const localFormData = ref({ ...props.formData })

const emailError = ref('')
const tipoError = ref('')

const nextStep = () => {
  if (validateForm()) {
    emit('update', localFormData.value)
    emit('next')
  }
}

const validateForm = () => {
  let valid = true
  
  if (!localFormData.value.email) {
    emailError.value = 'Por favor, insira seu e-mail.'
    valid = false
  } else if (!validateEmail(localFormData.value.email)) {
    emailError.value = 'Por favor, insira um e-mail válido.'
    valid = false
  } else {
    emailError.value = ''
  }
  
  if (!localFormData.value.tipo) {
    tipoError.value = 'Por favor, selecione o tipo de cadastro.'
    valid = false
  } else {
    tipoError.value = ''
  }
  
  return valid
}

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/
  
  return re.test(String(email).toLowerCase())
}

watchEffect(() => {
  localFormData.value = { ...props.formData }
})
</script>

<style scoped>
.step-one {
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
}

input[type="email"] {
  width: 248px;
  max-width: 400px;
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #242424;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.continue-button {
  width: 270px;
  max-width: 400px;
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #242424;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.radio-group {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.radio-group input {
  margin: 0 10px 0 0;
}

.radio-group label {
  margin: 0 20px 0 5px;
}

.error {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
}

.continue-button {
  margin-top: 20px;
  background-color: orange;
  border: none;
  color: white;
  cursor: pointer;
}

.continue-button:hover {
  background-color: darkorange;
}

@media (max-width: 600px) {
  .step-one {
    padding: 10px;
  }

  input[type="email"] {
    width: 90%;
    max-width: 100%;
  }
  
  .continue-button {
    width: 100%;
    max-width: 100%;
  }
}
</style>
