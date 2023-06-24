<script lang="ts">
import { defineComponent } from 'vue';
import MarcaClient from '@/client/MarcaClient'
import { Marca } from '@/model/marca';

export default defineComponent({
  name: 'ListaMarca',
  data(){
    return{
      marcas: new Array<Marca>(),
      expandir: false as boolean,
      marca: new Marca()
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
    },
    onClickExpandir(id : number){
      if(!this.expandir){
        this.expandir = !this.expandir
      }
      MarcaClient.findById(id)
        .then(sucess => {
          this.marca = sucess
        })
        .catch(error => {
          console.log(error);
        });
    },
    onClickFechar(){
      this.expandir = !this.expandir;
      
      this.marca = new Marca();
    }
  }
});
</script>

<template>
  <main class="container-fluid">
    <div class="row justify-content-center">
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

      <div class="container border border-black rounded-3 w-35 z-3 position-fixed bg-white py-2" v-if="expandir">
        <div class="row mb-2 px-2 align-items-center">
          <div class="col">
            <h2>{{ marca.nome }}</h2>
          </div>
          <div class="col-1">
            <button type="button" class="btn-close d-inline" @click="onClickFechar"></button>
          </div>
        </div>
        <div class="row px-2">
          <p class="text-start">Situação: {{ marca.ativo ? "Ativo" : "Inativo" }}</p>
          <p class="text-start">Data de cadastro: {{ marca.cadastro }}</p>
          <p class="text-start">Data de edição: {{ marca.atualizacao ? marca.atualizacao : "Não houve edição" }}</p>
          <p class="text-start">Nome da marca: {{ marca.nome }}</p>
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
        <tr v-for="item in marcas" :key="item.id">
          <td>
            <span v-if="item.ativo" class="badge bg-success">Ativo</span>
            <span v-else class="badge bg-danger">Inativo</span>
          </td>
          <td> {{ item.nome }} </td>
          <td><button type="button" class="btn btn-outline-info rounded-0" @click="onClickExpandir(item.id)">Expandir</button></td>
          <td><router-link :to="{name: 'formulario-editar-marca', query: {id: item.id, form: 'editar'}}" type="button" class="btn btn-outline-warning rounded-0">Editar</router-link></td>
          <td><router-link :to="{name: 'formulario-excluir-marca', query: {id: item.id, form: 'excluir'}}" type="button" class="btn btn-outline-danger rounded-0">Excluir</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
</template>

<style scoped>
  th, td{
    vertical-align: middle;
  }

  .w-35{
    width: 35%;
  }
</style>