<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormVeiculo'
});
</script>

<template>
  <h2>Cadastrar Veículo</h2>

  <form>
    <div class="container">
      <div class="row justify-content-center my-3">
        <label for="placa">Placa:</label>
        <input type="text" class="form-control w-25" id="placa" placeholder="Nome do modelo">
      </div>
      <div class="row justify-content-center my-3">
        <label for="modelo">Modelo:</label>
        <select class="form-select w-25" id="modelo">
          <option selected disabled>Modelo</option>
          <option value="1">HB20</option>
          <option value="2">Camaro</option>
          <option value="3">Duster</option>
        </select>
      </div>
      <div class="row justify-content-center my-3">
        <label for="ano">Ano:</label>
        <input type="number" class="form-control w-25" id="ano" placeholder="Ano do veículo">
      </div>
      <div class="row justify-content-center my-3">
        <label for="cor">Cor:</label>
        <select class="form-select w-25" id="cor">
          <option selected disabled>Cor</option>
          <option value="1">Vermelho</option>
          <option value="2">Branco</option>
          <option value="3">Preto</option>
        </select>
      </div>
      <div class="row justify-content-center my-3">
        <label for="tipo">Tipo:</label>
        <select class="form-select w-25" id="tipo">
          <option selected disabled>Tipo</option>
          <option value="1">Carro</option>
          <option value="2">Moto</option>
          <option value="3">Van</option>
        </select>
      </div>
      <div class="row justify-content-center">
        <div class="col">
            <button type="submit" class="btn btn-success rounded-0">Cadastrar</button>
        </div>
        
        <div class="col">
            <router-link to="/listar-veiculo"><button type="button" class="btn btn-outline-success rounded-0">Voltar</button></router-link>
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