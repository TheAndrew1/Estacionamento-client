<script lang="ts">
import { defineComponent } from 'vue';
import ModeloClient from '@/client/ModeloClient';
import { Modelo } from '@/model/modelo';

export default defineComponent({
  name: 'ListaModelo',
  data() {
    return {
      modelos: new Array<Modelo>(),
      expandir: false as boolean,
      modelo: new Modelo(),
    }
  },
  created() {
    this.findAll();
  },
  methods: {
    findAll() {
      ModeloClient.findAll()
        .then(success => {
          this.modelos = success;
        })
        .catch(error => {
          console.log(error);
        });
    },
    onClickExpandir(id: number) {
      ModeloClient.findById(id)
        .then(success => {
          this.modelo = success;
        })
        .then(() => {
          if (!this.expandir) {
            this.expandir = !this.expandir;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    onClickFechar() {
      this.expandir = !this.expandir;
      this.modelo = new Modelo();
    }
  }
});
</script>

<template>
  <main class="container-fluid d-flex justify-content-center align-items-center">
    <div class="row justify-content-center">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Listar Modelo</h2>
          </div>
          <div class="col-2">
            <router-link :to="{ name: 'formulario-modelo' }" type="button" class="btn btn-success rounded-0">Cadastrar</router-link>
          </div>
        </div>
      </div>

      <div class="container border border-black rounded-3 w-35 z-3 position-fixed bg-white py-2" v-if="expandir">
        <div class="row mb-2 px-2 align-items-center">
          <div class="col">
            <h2>{{ modelo.nome }}</h2>
          </div>
          <div class="col-1">
            <button type="button" class="btn-close d-inline" @click="onClickFechar"></button>
          </div>
        </div>
        <div class="row px-2">
          <p class="text-start">Situação: {{ modelo.ativo ? 'Ativo' : 'Inativo' }}</p>
          <p class="text-start">Data de cadastro: {{ modelo.cadastro }}</p>
          <p class="text-start">Data de edição: {{ modelo.atualizacao ? modelo.atualizacao : 'Não houve edição' }}</p>
          <p class="text-start">Nome do modelo: {{ modelo.nome }}</p>
          <p class="text-start">Nome da marca: {{ modelo.marca.nome }}</p>
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
          <tr v-for="item in modelos" :key="item.id">
            <td>
              <span v-if="item.ativo" class="badge bg-success">Ativo</span>
              <span v-else class="badge bg-danger">Inativo</span>
            </td>
            <td> {{ item.nome }} </td>
            <td> {{ item.marca.nome }} </td>
            <td><button type="button" class="btn btn-outline-info rounded-0" @click="onClickExpandir(item.id)">Expandir</button></td>
            <td><router-link :to="{ name: 'formulario-editar-modelo', query: { id: item.id, form: 'editar' } }" type="button" class="btn btn-outline-warning rounded-0">Editar</router-link></td>
            <td><router-link :to="{ name: 'formulario-excluir-modelo', query: { id: item.id, form: 'excluir' } }" type="button" class="btn btn-outline-danger rounded-0">Excluir</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
  th, td {
    vertical-align: middle;
  }

  .w-35 {
    width: 35%;
  }
</style>