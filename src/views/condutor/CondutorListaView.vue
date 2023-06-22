<script lang="ts">
import { defineComponent } from 'vue';
import { Condutor } from '@/model/condutor'

export default defineComponent({
  name: 'ListaCondutor',
  data(){
    return{

    }
  }
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Listar Condutores</h2>
      </div>
      <div class="col-2">
        <router-link to="/formulario-condutor"><button type="button" class="btn btn-success rounded-0">Cadastrar</button></router-link>
      </div>
    </div>
  </div>

  <table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th class="col">Situação</th>
      <th class="col">Nome</th>
      <th class="col">CPF</th>
      <th class="col">Telefone</th>
      <th colspan="3" class="col-3">Opções</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>André Velasco</td>
      <td>123.456.789-10</td>
      <td>(45)99973-7762</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-warning rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>Cleyton Silva</td>
      <td>789.456.123-10</td>
      <td>(45)98451-6277</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-warning rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>Frederico Peiter</td>
      <td>456.789.101-23</td>
      <td>(45)99998-2510</td>
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