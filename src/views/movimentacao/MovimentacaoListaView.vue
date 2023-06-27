<script lang="ts">
import { defineComponent } from 'vue';
import MovimentacaoClient from '@/client/MovimentacaoClient';
import { Movimentacao } from '@/model/movimentacao';

export default defineComponent({
  name: 'ListaMovimentacao',
  data() {
    return {
      movimentacoes: new Array<Movimentacao>(),
      movimentacoesAbertas: new Array<Movimentacao>(),
      movimentacao: new Movimentacao(),
      abertas: false as boolean
    };
  },
  created() {
    this.findAll();
  },
  methods: {
    findAll() {
      MovimentacaoClient.findAll()
        .then(success => {
          this.movimentacoes = success;
        })
        .catch(error => {
          console.log(error);
        });
    },
    findAtivo() {
      MovimentacaoClient.findAtivo()
        .then(success => {
          this.movimentacoes = success;
        })
        .catch(error => {
          console.log(error);
        });
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
            <h2>Listar Movimentação</h2>
          </div>
          <div class="col-2">
            <router-link :to="{ name: 'formulario-movimentacao' }" type="button" class="btn btn-success rounded-0">Registrar entrada</router-link>
          </div>
        </div>
      </div>

      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th class="col">Situação | <input type="checkbox" v-model="abertas"></th>
            <th class="col">Placa Veíuclo</th>
            <th class="col">Nome Condutor</th>
            <th class="col">Horário Entrada</th>
            <th colspan="4" class="col-3">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in movimentacoes" :key="item.id">
            <td>
              <span v-if="item.ativo" class="badge bg-success">Aberta</span>
              <span v-else class="badge bg-danger">Finalizada</span>
            </td>
            <td> {{ item.veiculo.placa }} </td>
            <td> {{ item.condutor.nome }} </td>
            <td> {{ item.entrada }} </td>
            <td><router-link :to="{ name: 'nota-movimentacao', query: { id: item.id } }" type="button" class="btn btn-outline-info rounded-0">Expandir</router-link></td>
            <td v-if="item.ativo"><router-link :to="{ name: 'formulario-fechar-movimentacao', query: { id: item.id, form: 'fechar' } }" type="button" class="btn btn-outline-primary rounded-0">Fechar</router-link></td>
            <td v-if="item.ativo"><router-link :to="{ name: 'formulario-editar-movimentacao', query: { id: item.id, form: 'editar' } }" type="button" class="btn btn-outline-warning rounded-0">Editar</router-link></td>
            <td v-if="item.ativo"><router-link :to="{ name: 'formulario-excluir-movimentacao', query: { id: item.id, form: 'excluir' } }" type="button" class="btn btn-outline-danger rounded-0">Excluir</router-link></td>
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