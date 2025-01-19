<template>
  <div>
    <h2>Etapa 2 de 4</h2>
    <div v-if="tipo === 'PF'">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="nome"/>
      
      <label for="cpf">CPF:</label>
      <input type="text" id="cpf" v-model="cpf"/>

      <label for="dataNascimento">Data de nascimento:</label>
      <input type="date" id="dataNascimento" v-model="dataNascimento"/>
      
      <label for="telefone">Número de telefone:</label>
      <input type="tel" id="telefone" v-model="telefone"/>
    </div>
    <div v-if="tipo === 'PJ'">
      <label for="razaoSocial">Razão social:</label>
      <input type="text" id="razaoSocial" v-model="razaoSocial"/>
      
      <label for="cnpj">CNPJ:</label>
      <input type="text" id="cnpj" v-model="cnpj"/>

      <label for="dataAbertura">Data de abertura da empresa:</label>
      <input type="date" id="dataAbertura" v-model="dataAbertura"/>

      <label for="telefoneEmpresa">Telefone:</label>
      <input type="tel" id="telefoneEmpresa" v-model="telefoneEmpresa"/>
    </div>
    <button @click="prevStep">Voltar</button>
    <button @click="nextStep">Continuar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['tipo'])
const nome = ref('')
const cpf = ref('')
const dataNascimento = ref('')
const telefone = ref('')
const razaoSocial = ref('')
const cnpj = ref('')
const dataAbertura = ref('')
const telefoneEmpresa = ref('')

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
