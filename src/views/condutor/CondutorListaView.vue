<script lang="ts">
import { defineComponent } from 'vue';
import CondutorClient from '@/client/CondutorClient';
import { Condutor } from '@/model/condutor';

export default defineComponent({
  name: 'ListaCondutor',
  data() {
    return {
      condutores: new Array<Condutor>(),
      expandir: false as boolean,
      condutor: new Condutor()
    };
  },
  created() {
    this.findAll();
  },
  methods: {
    findAll() {
      CondutorClient.findAll()
        .then(success => {
          this.condutores = success;
        })
        .catch(error => {
          console.log(error);
        });
    },
    onClickExpandir(id: number) {
      CondutorClient.findById(id)
        .then(success => {
          this.condutor = success;
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
      this.condutor = new Condutor();
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
            <h2>Listar Condutor</h2>
          </div>
          <div class="col-2">
            <router-link :to="{ name: 'formulario-condutor' }" type="button" class="btn btn-success rounded-0">Cadastrar</router-link>
          </div>
        </div>
      </div>

      <div class="container border border-black rounded-3 w-35 z-3 position-fixed bg-white py-2" v-if="expandir">
        <div class="row mb-2 px-2 align-items-center">
          <div class="col">
            <h2>{{ condutor.nome }}</h2>
          </div>
          <div class="col-1">
            <button type="button" class="btn-close d-inline" @click="onClickFechar"></button>
          </div>
        </div>

        <div class="row px-2">
          <p class="text-start">Situação: {{ condutor.ativo ? 'Ativo' : 'Inativo' }}</p>
          <p class="text-start">Data de cadastro: {{ condutor.cadastro }}</p>
          <p class="text-start">Data de edição: {{ condutor.atualizacao ? condutor.atualizacao : 'Não houve edição' }}</p>
          <p class="text-start">Nome: {{ condutor.nome }}</p>
          <p class="text-start">CPF: {{ condutor.cpf }}</p>
          <p class="text-start">Telefone: {{ condutor.telefone }}</p>
          <p class="text-start">Tempo pago: {{ condutor.tempoPago }}</p>
          <p class="text-start">Tempo de desconto: {{ condutor.tempoDesconto }}</p>
        </div>
      </div>

      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th class="col">Situação</th>
            <th class="col">Nome</th>
            <th class="col">CPF</th>
            <th class="col">Telefone</th>
            <th class="col">Tempo pago</th>
            <th class="col">Tempo de desconto</th>
            <th colspan="3" class="col-3">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in condutores" :key="item.id">
            <td>
              <span v-if="item.ativo" class="badge bg-success">Ativo</span>
              <span v-else class="badge bg-danger">Inativo</span>
            </td>
            <td> {{ item.nome }} </td>
            <td> {{ item.cpf }} </td>
            <td> {{ item.telefone }} </td>
            <td> {{ item.tempoPago }} </td>
            <td> {{ item.tempoDesconto }} </td>
            <td><button type="button" class="btn btn-outline-info rounded-0" @click="onClickExpandir(item.id)">Expandir</button></td>
            <td><router-link :to="{ name: 'formulario-editar-condutor', query: { id: item.id, form: 'editar' } }" type="button" class="btn btn-outline-warning rounded-0">Editar</router-link></td>
            <td><router-link :to="{ name: 'formulario-excluir-condutor', query: { id: item.id, form: 'excluir' } }" type="button" class="btn btn-outline-danger rounded-0">Excluir</router-link></td>
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