<template>
  <div class="step-two">
    <label>Etapa <span class="step-number">2</span> de 4</label>
    <h2>{{ localFormData.tipo === 'PF' ? 'Pessoa Física' : 'Pessoa Jurídica' }}</h2>

    <div v-if="localFormData.tipo === 'PF'">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" id="nome" v-model="localFormData.nome" placeholder="Insira seu nome"/>
        <span v-if="nomeError" class="error">{{ nomeError }}</span>
      </div>
      <div class="form-group">
        <label for="cpf">CPF</label>
        <input type="text" id="cpf" v-model="localFormData.cpf" placeholder="Insira seu CPF"/>
        <span v-if="cpfError" class="error">{{ cpfError }}</span>
      </div>
      <div class="form-group">
        <label for="dataNascimento">Data de nascimento</label>
        <input type="date" id="dataNascimento" v-model="localFormData.dataNascimento"/>
        <span v-if="dataNascimentoError" class="error">{{ dataNascimentoError }}</span>
      </div>
      <div class="form-group">
        <label for="telefone">Número de telefone</label>
        <input type="tel" id="telefone" v-model="localFormData.telefone" placeholder="Insira seu telefone"/>
        <span v-if="telefoneError" class="error">{{ telefoneError }}</span>
      </div>
    </div>

    <div v-if="localFormData.tipo === 'PJ'">
      <div class="form-group">
        <label for="razaoSocial">Razão social</label>
        <input type="text" id="razaoSocial" v-model="localFormData.razaoSocial" placeholder="Insira a razão social"/>
        <span v-if="razaoSocialError" class="error">{{ razaoSocialError }}</span>
      </div>
      <div class="form-group">
        <label for="cnpj">CNPJ</label>
        <input type="text" id="cnpj" v-model="localFormData.cnpj" placeholder="Insira o CNPJ"/>
        <span v-if="cnpjError" class="error">{{ cnpjError }}</span>
      </div>
      <div class="form-group">
        <label for="dataAbertura">Data de abertura da empresa</label>
        <input type="date" id="dataAbertura" v-model="localFormData.dataAbertura"/>
        <span v-if="dataAberturaError" class="error">{{ dataAberturaError }}</span>
      </div>
      <div class="form-group">
        <label for="telefoneEmpresa">Telefone</label>
        <input type="tel" id="telefoneEmpresa" v-model="localFormData.telefoneEmpresa" placeholder="Insira o telefone"/>
        <span v-if="telefoneEmpresaError" class="error">{{ telefoneEmpresaError }}</span>
      </div>
    </div>

    <div class="buttons">
      <button @click="prevStep" class="back-button">Voltar</button>
      <button @click="nextStep" class="continue-button">Continuar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps(['formData'])
const emit = defineEmits(['next', 'prev', 'update'])
const localFormData = ref({ ...props.formData })

const nomeError = ref('')
const cpfError = ref('')
const dataNascimentoError = ref('')
const telefoneError = ref('')
const razaoSocialError = ref('')
const cnpjError = ref('')
const dataAberturaError = ref('')
const telefoneEmpresaError = ref('')

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
  let valid = true

  if (localFormData.value.tipo === 'PF') {
    if (!localFormData.value.nome) {
      nomeError.value = 'Por favor, insira seu nome.'
      valid = false
    } else {
      nomeError.value = ''
    }
    
    if (!localFormData.value.cpf) {
      cpfError.value = 'Por favor, insira seu CPF.'
      valid = false
    } else {
      cpfError.value = ''
    }

    if (!localFormData.value.dataNascimento) {
      dataNascimentoError.value = 'Por favor, insira sua data de nascimento.'
      valid = false
    } else {
      dataNascimentoError.value = ''
    }
    
    if (!localFormData.value.telefone) {
      telefoneError.value = 'Por favor, insira seu telefone.'
      valid = false
    } else {
      telefoneError.value = ''
    }
  } else if (localFormData.value.tipo === 'PJ') {
    if (!localFormData.value.razaoSocial) {
      razaoSocialError.value = 'Por favor, insira a razão social.'
      valid = false
    } else {
      razaoSocialError.value = ''
    }
    
    if (!localFormData.value.cnpj) {
      cnpjError.value = 'Por favor, insira o CNPJ.'
      valid = false
    } else {
      cnpjError.value = ''
    }

    if (!localFormData.value.dataAbertura) {
      dataAberturaError.value = 'Por favor, insira a data de abertura da empresa.'
      valid = false
    } else {
      dataAberturaError.value = ''
    }

    if (!localFormData.value.telefoneEmpresa) {
      telefoneEmpresaError.value = 'Por favor, insira o telefone da empresa.'
      valid = false
    } else {
      telefoneEmpresaError.value = ''
    }
  }

  return valid
}

watchEffect(() => {
  localFormData.value = { ...props.formData }
})
</script>

<style scoped>
.step-two {
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

input[type="text"],
input[type="date"],
input[type="tel"] {
  width: 248px;
  max-width: 400px;
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #242424;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: black;
}

input[type="text"]:focus,
input[type="date"]:focus,
input[type="tel"]:focus {
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

.continue-button:hover,
.back-button:hover {
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
  .step-two {
    padding: 10px;
  }

  input[type="text"],
  input[type="date"],
  input[type="tel"],
  .back-button,
  .continue-button {
    width: 100%;
    max-width: 100%;
  }
}
</style>
