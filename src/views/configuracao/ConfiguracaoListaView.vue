<script lang="ts">
import { defineComponent } from 'vue';
import ConfiguracaoClient from '@/client/ConfiguracaoClient';
import { Configuracao } from '@/model/configuracao';

export default defineComponent({
  name: 'ListaConfiguracao',
  data() {
    return {
      expandir: false as boolean,
      configuracao: new Configuracao()
    };
  },
  created() {
    this.findById();
  },
  methods: {
    findById() {
      ConfiguracaoClient.findById(1)
        .then(success => {
          this.configuracao = success;
        })
        .catch(error => {
          console.log(error);
        });
    },
    onClickExpandir(id: number) {
      ConfiguracaoClient.findById(id)
        .then(success => {
          this.configuracao = success;
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
            <h2>Listar Configuração</h2>
          </div>
          <div class="col-2">
            <router-link :to="{ name: 'formulario-configuracao' }" type="button" class="btn btn-success rounded-0">Cadastrar</router-link>
          </div>
        </div>
      </div>

      <div class="container border border-black rounded-3 w-35 z-3 position-fixed bg-white py-2" v-if="expandir">
        <div class="row mb-2 px-2 align-items-center">
          <div class="col">
            <h2> Configuração </h2>
          </div>
          <div class="col-1">
            <button type="button" class="btn-close d-inline" @click="onClickFechar"></button>
          </div>
        </div>

        <div class="row px-2">
          <p class="text-start">Situação: {{ configuracao.ativo ? 'Ativo' : 'Inativo' }}</p>
          <p class="text-start">Data de cadastro: {{ configuracao.cadastro }}</p>
          <p class="text-start">Data de edição: {{ configuracao.atualizacao ? configuracao.atualizacao : 'Não houve edição' }}</p>
          <p class="text-start">Valor Minuto: {{ configuracao.valorMinuto }}</p>
          <p class="text-start">Vagas Carro: {{ configuracao.vagasCarro }}</p>
          <p class="text-start">Vagas Moto: {{ configuracao.vagasMoto }}</p>
          <p class="text-start">Vagas Van: {{ configuracao.vagasVan }}</p>
          <p class="text-start">Horário Fechamento: {{ configuracao.horarioFecha }}</p>
        </div>
      </div>

      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th class="col">Situação</th>
            <th class="col">Valor Minuto</th>
            <th class="col">Vagas Carro</th>
            <th class="col">Vagas Moto</th>
            <th class="col">Vagas Van</th>
            <th class="col">Horário Fechamento</th>
            <th colspan="3" class="col-3">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="configuracao" :key="configuracao.id">
            <td>
              <span v-if="configuracao.ativo" class="badge bg-success">Ativo</span>
              <span v-else class="badge bg-danger">Inativo</span>
            </td>
            <td> {{ configuracao.valorMinuto }} </td>
            <td> {{ configuracao.vagasCarro }} </td>
            <td> {{ configuracao.vagasMoto }} </td>
            <td> {{ configuracao.vagasVan }} </td>
            <td> {{ configuracao.horarioFecha }} </td>
            <td><button type="button" class="btn btn-outline-info rounded-0" @click="onClickExpandir(configuracao.id)">Expandir</button></td>
            <td><router-link :to="{ name: 'formulario-editar-configuracao', query: { id: configuracao.id, form: 'editar' } }" type="button" class="btn btn-outline-warning rounded-0">Editar</router-link></td>
            <td><router-link :to="{ name: 'formulario-excluir-configuracao', query: { id: configuracao.id, form: 'excluir' } }" type="button" class="btn btn-outline-danger rounded-0">Excluir</router-link></td>
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