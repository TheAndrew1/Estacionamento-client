<script lang="ts">
import { defineComponent } from 'vue';
import { Marca } from '@/model/marca';
import { MarcaClient } from '@/client/MarcaClient'

export default defineComponent({
  name: 'ListaMarca',
  data(){
    return{
      marcaClient: MarcaClient,
      marca: Marca
    }
  }
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Listar Marca</h2>
      </div>
      <div class="col-2">
        <router-link to="/formulario-marca"><button type="button" class="btn btn-success rounded-0">Cadastrar</button></router-link>
      </div>
    </div>
  </div>

  <table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th class="col">Nome</th>
      <th colspan="3" class="col-3">Opções</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Hyundai</th>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <th>Chevrolet</th>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <th>Renault</th>
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