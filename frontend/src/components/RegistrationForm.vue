<template>
  <div id="registration-form">
    <StepOne v-if="step === 1" :formData="formData" @next="nextStep" @update="updateFormData"/>
    <StepTwo v-if="step === 2" :formData="formData" @next="nextStep" @prev="prevStep" @update="updateFormData"/>
    <StepThree v-if="step === 3" :formData="formData" @next="nextStep" @prev="prevStep" @update="updateFormData"/>
    <StepFour v-if="step === 4" :formData="formData" @prev="prevStep" @submit="submitForm"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StepOne from './Step1.vue'
import StepTwo from './Step2.vue'
import StepThree from './Step3.vue'
import StepFour from './Step4.vue'

const step = ref(1)
const formData = ref({
  email: '',
  tipo: 'PF',
  nome: '',
  cpf: '',
  dataNascimento: '',
  telefone: '',
  razaoSocial: '',
  cnpj: '',
  dataAbertura: '',
  telefoneEmpresa: '',
  senha: ''
})

const nextStep = () => {
  step.value++
}

const prevStep = () => {
  step.value--
}

const updateFormData = (data) => {
  formData.value = { ...formData.value, ...data }
}

const submitForm = () => {
  fetch(import.meta.env.VITE_API_URL, {
    method: 'POST',
    body: JSON.stringify(formData.value),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert('Cadastro Realizado', 'Seus dados foram cadastrados com sucesso.')
    } else {
      alert('Erro de Cadastro', 'Houve um problema ao cadastrar seus dados.')
    }
  }).catch(error => {
    alert('Erro de Cadastro', 'Houve um problema ao cadastrar seus dados.')
  })
}
</script>

<style scoped>

</style>
