<template>
  <div id="reg_form">
    <StepOne v-if="step === 1" @next="nextStep"/>
    <StepTwo v-if="step === 2" @next="nextStep" @prev="prevStep"/>
    <StepThree v-if="step === 3" @next="nextStep" @prev="prevStep"/>
    <StepFour v-if="step === 4" @prev="prevStep" @submit="submitForm"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StepOne from './Step1.vue'
import StepTwo from './Step2.vue'
import StepThree from './Step3.vue'
import StepFour from './Step4.vue'

const step = ref(1)

const nextStep = () => {
  step.value++
}

const prevStep = () => {
  step.value--
}

const submitForm = () => {
  // Lógica de submissão do formulário
}
</script>

<style scoped>
/* Estilos globais */
</style>
