<script lang="ts">
import { defineComponent } from 'vue';
import MarcaClient from '@/client/MarcaClient'
import { Marca } from '@/model/marca';

export default defineComponent({
  name: 'ListaMarca',
  data(){
    return{
      marcas: new Array<Marca>()
    }
  },
  created(){
    this.findAll();
  },
  methods: {
    findAll() {
      MarcaClient.findAll()
        .then(sucess => {
          this.marcas = sucess
        })
        .catch(error => {
          console.log(error);
        });
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
        <router-link :to="{name: 'formulario-marca'}" type="button" class="btn btn-success rounded-0">Cadastrar</router-link>
      </div>
    </div>
  </div>

  <table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th class="col">Situação</th>
      <th class="col">Nome</th>
      <th colspan="3" class="col-3">Opções</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="marca in marcas" :key="marca.id">
      <td>
        <span v-if="marca.ativo" class="badge bg-success">Ativo</span>
        <span v-else class="badge bg-danger">Inativo</span>
      </td>
      <td> {{ marca.marca }} </td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><router-link :to="{name: 'formulario-editar-marca', query: {id: marca.id, form: 'editar'}}" type="button" class="btn btn-outline-warning rounded-0">Editar</router-link></td>
      <td><router-link :to="{name: 'formulario-excluir-marca', query: {id: marca.id, form: 'excluir'}}" type="button" class="btn btn-outline-danger rounded-0">Excluir</router-link></td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
  th, td{
    vertical-align: middle;
  }
</style>