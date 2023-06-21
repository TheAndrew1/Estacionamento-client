<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormCondutor'
});
</script>

<template>
  <h2>Cadastrar Condutor</h2>

  <form>
    <div class="container">
      <div class="row justify-content-center my-3">
        <label for="nome">Nome:</label>
        <input type="text" class="form-control w-25" id="nome" placeholder="Nome do condutor">
      </div>
      <div class="row justify-content-center my-3">
        <label for="cpf">CPF:</label>
        <input type="text" class="form-control w-25" id="cpf" placeholder="CPF">
      </div>
      <div class="row justify-content-center my-3">
        <label for="telefone">Telefone:</label>
        <input type="text" class="form-control w-25" id="telefone" placeholder="Telefone">
      </div>
      <div class="row justify-content-center">
        <div class="col">
            <button type="submit" class="btn btn-success rounded-0">Cadastrar</button>
        </div>
        
        <div class="col">
            <router-link to="/listar-condutor"><button type="button" class="btn btn-outline-success rounded-0">Voltar</button></router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
  th, td{
    vertical-align: middle;
  }
</style>