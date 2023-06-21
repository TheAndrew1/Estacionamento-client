<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormMovimentacao'
});
</script>

<template>
  <h2>Registrar Movimentação</h2>

  <form>
    <div class="container">
      <div class="row justify-content-center my-3">
        <label for="horario-entrada">Horário de entrada:</label>
        <input type="time" class="form-control w-25" id="horario-entrada">
      </div>
      <div class="row justify-content-center my-3">
        <label for="veiculo">Veículo:</label>
        <select class="form-select w-25" id="veiculo">
          <option selected disabled>Veículo</option>
          <option value="1">ABC-1234</option>
          <option value="2">ABC-7894</option>
          <option value="3">XYZ-1234</option>
        </select>
      </div>
      <div class="row justify-content-center my-3">
        <label for="condutor">Condutor:</label>
        <select class="form-select w-25" id="condutor">
          <option selected disabled>Condutor</option>
          <option value="1">André Velasco</option>
          <option value="2">Cleyton Silva</option>
          <option value="3">Frederico Peiter</option>
        </select>
      </div>

      <div class="row justify-content-center">
        <div class="col">
            <button type="submit" class="btn btn-success rounded-0">Cadastrar</button>
        </div>
        
        <div class="col">
            <router-link to="/"><button type="button" class="btn btn-outline-success rounded-0">Voltar</button></router-link>
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