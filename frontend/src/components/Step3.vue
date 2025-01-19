<template>
  <div>
    <h2>Etapa 3 de 4</h2>
    <label for="senha">Senha de acesso:</label>
    <input type="password" id="senha" v-model="senha"/>
    <button @click="prevStep">Voltar</button>
    <button @click="nextStep">Continuar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const senha = ref('')

const nextStep = () => {
  if (validateForm()) {
    emit('next')
  }
}

const prevStep = () => {
  emit('prev')
}

const validateForm = () => {
  // Lógica de validação do formulário
}
</script>

<style scoped>
/* Estilos do componente */
</style>
