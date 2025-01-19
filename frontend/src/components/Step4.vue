<template>
  <div>
    <h2>Etapa 4 de 4</h2>
    <h3>Revisão dos dados</h3>
    <!-- Exibir dados para revisão -->
    <button @click="prevStep">Voltar</button>
    <button @click="submitForm">Cadastrar</button>
  </div>
</template>

<script setup>
const prevStep = () => {
  emit('prev')
}

const submitForm = () => {
  // Lógica de submissão do formulário
  fetch('url_da_api', {
    method: 'POST',
    body: JSON.stringify({ /* dados do formulário */ }),
    headers: { 'Content-Type': 'application/json' }
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
/* Estilos do componente */
</style>
