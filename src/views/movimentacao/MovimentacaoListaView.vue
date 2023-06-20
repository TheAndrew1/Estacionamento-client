<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListaMovimentacao'
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Movimentações Abertas</h2>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success rounded-0">Registrar Entrada</button>
      </div>
    </div>
  </div>

  <table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th class="col">Placa Veíuclo</th>
      <th class="col">Nome Condutor</th>
      <th class="col">Horário Entrada</th>
      <th colspan="3" class="col-3">Opções</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>ABC-1234</th>
      <td>André Velasco</td>
      <td>12:45</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <th>XYZ-1234</th>
      <td>Cleyton Silva</td>
      <td>14:10</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <th>ABC-7894</th>
      <td>Frederico Peiter</td>
      <td>11:00</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
  th, td{
    vertical-align: middle;
  }
</style>