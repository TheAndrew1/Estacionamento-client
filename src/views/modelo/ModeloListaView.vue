<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListaModelo'
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Listar Modelos</h2>
      </div>
      <div class="col-2">
        <router-link to="/formulario-modelo"><button type="button" class="btn btn-success rounded-0">Cadastrar</button></router-link>
      </div>
    </div>
  </div>

  <table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th class="col">Situação</th>
      <th class="col">Nome</th>
      <th class="col">Marca</th>
      <th colspan="3" class="col-3">Opções</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>HB20</td>
      <td>Hyundai</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-warning rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>Camaro</td>
      <td>Chevrolet</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-warning rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>Duster</td>
      <td>Renault</td>
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