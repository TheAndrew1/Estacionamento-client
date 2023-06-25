<script lang="ts">
import { defineComponent } from 'vue';
import VeiculoClient from '@/client/VeiculoClient';
import { Veiculo } from '@/model/veiculo';

export default defineComponent({
  name: 'ListaVeiculo',
  data() {
    return {
      veiculos: new Array<Veiculo>(),
      expandir: false as boolean,
      veiculo: new Veiculo()
    }
  },
  created() {
    this.findAll();
  },
  methods: {
    findAll() {
      VeiculoClient.findAll()
        .then(success => {
          this.veiculos = success;
        })
        .catch(error => {
          console.log(error);
        });
    },
    onClickExpandir(id: number) {
      VeiculoClient.findById(id)
        .then(success => {
          this.veiculo = success;
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
      this.veiculo = new Veiculo();
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
            <h2>Listar Veículo</h2>
          </div>
          <div class="col-2">
            <router-link :to="{ name: 'formulario-veiculo' }" type="button" class="btn btn-success rounded-0">Cadastrar</router-link>
          </div>
        </div>
      </div>

      <div class="container border border-black rounded-3 w-35 z-3 position-fixed bg-white py-2" v-if="expandir">
        <div class="row mb-2 px-2 align-items-center">
          <div class="col">
            <h2>{{ veiculo.placa }}</h2>
          </div>
          <div class="col-1">
            <button type="button" class="btn-close d-inline" @click="onClickFechar"></button>
          </div>
        </div>
        
        <div class="row px-2">
          <p class="text-start">Situação: {{ veiculo.ativo ? 'Ativo' : 'Inativo' }}</p>
          <p class="text-start">Data de cadastro: {{ veiculo.cadastro }}</p>
          <p class="text-start">Data de edição: {{ veiculo.atualizacao ? veiculo.atualizacao : 'Não houve edição' }}</p>
          <p class="text-start">Placa: {{ veiculo.placa }}</p>
          <p class="text-start">Modelo: {{ veiculo.modelo.nome }}</p>
          <p class="text-start">Marca: {{ veiculo.modelo.marca.nome }}</p>
          <p class="text-start">Ano do veículo: {{ veiculo.ano }}</p>
          <p class="text-start">Tipo: {{ veiculo.tipo == undefined ? "Não registrado" : veiculo.tipo }}</p>
          <p class="text-start">Cor do veículo: {{ veiculo.cor }}</p>
        </div>
      </div>

      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th class="col">Situação</th>
            <th class="col">Placa</th>
            <th class="col">Modelo</th>
            <th class="col">Marca</th>
            <th class="col">Ano</th>
            <th class="col">Tipo</th>
            <th class="col">Cor</th>
            <th colspan="3" class="col-3">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in veiculos" :key="item.id">
            <td>
              <span v-if="item.ativo" class="badge bg-success">Ativo</span>
              <span v-else class="badge bg-danger">Inativo</span>
            </td>
            <td> {{ item.placa }} </td>
            <td> {{ item.modelo.nome }} </td>
            <td> {{ item.modelo.marca.nome }} </td>
            <td> {{ item.ano }} </td>
            <td> {{ item.tipo == undefined ? "Não registrado" : item.tipo }} </td>
            <td> {{ item.cor }} </td>
            <td><button type="button" class="btn btn-outline-info rounded-0" @click="onClickExpandir(item.id)">Expandir</button></td>
            <td><router-link :to="{ name: 'formulario-editar-veiculo', query: { id: item.id, form: 'editar' } }" type="button" class="btn btn-outline-warning rounded-0">Editar</router-link></td>
            <td><router-link :to="{ name: 'formulario-excluir-veiculo', query: { id: item.id, form: 'excluir' } }" type="button" class="btn btn-outline-danger rounded-0">Excluir</router-link></td>
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