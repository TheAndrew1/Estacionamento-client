<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormModelo'
});
</script>

<template>
  <h2>Cadastrar Modelo</h2>

  <form>
    <div class="container">
      <div class="row justify-content-center my-3">
        <label for="nome">Nome:</label>
        <input type="text" class="form-control w-25" id="nome" placeholder="Nome do modelo">
      </div>
      <div class="row justify-content-center my-3">
        <label for="marca">Marca:</label>
        <select class="form-select w-25" id="marca">
          <option selected disabled>Marca</option>
          <option value="1">Hyundai</option>
          <option value="2">Chevrolet</option>
          <option value="3">Renault</option>
        </select>
      </div>
      <div class="row justify-content-center">
        <div class="col">
            <button type="submit" class="btn btn-success rounded-0">Cadastrar</button>
        </div>
        
        <div class="col">
            <router-link to="/listar-modelo"><button type="button" class="btn btn-outline-success rounded-0">Voltar</button></router-link>
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