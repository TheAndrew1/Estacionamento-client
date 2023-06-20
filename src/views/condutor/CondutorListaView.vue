<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListaCondutor'
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Listar Condutores</h2>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success rounded-0">Cadastrar</button>
      </div>
    </div>
  </div>

  <table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th class="col">Nome</th>
      <th class="col">CPF</th>
      <th class="col">Telefone</th>
      <th colspan="3" class="col-3">Opções</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>André Velasco</th>
      <td>123.456.789-10</td>
      <td>(45)99973-7762</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <th>Cleyton Silva</th>
      <td>789.456.123-10</td>
      <td>(45)98451-6277</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <th>Frederico Peiter</th>
      <td>456.789.101-23</td>
      <td>(45)99998-2510</td>
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