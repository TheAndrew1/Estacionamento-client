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
        <router-link to="/formulario-movimentacao"><button type="button" class="btn btn-success rounded-0">Registrar Entrada</button></router-link>
      </div>
    </div>
  </div>

  <table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th class="col">Situação</th>
      <th class="col">Placa Veíuclo</th>
      <th class="col">Nome Condutor</th>
      <th class="col">Horário Entrada</th>
      <th colspan="3" class="col-3">Opções</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>ABC-1234</td>
      <td>André Velasco</td>
      <td>12:45</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-warning rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>XYZ-1234</td>
      <td>Cleyton Silva</td>
      <td>14:10</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-warning rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>ABC-7894</td>
      <td>Frederico Peiter</td>
      <td>11:00</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-warning rounded-0">Editar</button></td>
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