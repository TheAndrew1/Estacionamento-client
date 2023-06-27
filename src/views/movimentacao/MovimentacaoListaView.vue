<script lang="ts">
import { defineComponent } from 'vue';
import MovimentacaoClient from '@/client/MovimentacaoClient';
import { Movimentacao } from '@/model/movimentacao';

export default defineComponent({
  name: 'ListaMovimentacao',
  data() {
    return {
      movimentacoes: new Array<Movimentacao>(),
      expandir: false as boolean,
      movimentacao: new Movimentacao()
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
    onClickExpandir(id: number) {
      MovimentacaoClient.findById(id)
        .then(success => {
          this.movimentacao = success;
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
      this.movimentacao = new Movimentacao();
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
            <router-link :to="{ name: 'formulario-movimentacao' }" type="button" class="btn btn-success rounded-0">Cadastrar</router-link>
          </div>
        </div>
      </div>

      <div class="container border border-black rounded-3 w-35 z-3 position-fixed bg-white py-2" v-if="expandir">
        <div class="row mb-2 px-2 align-items-center">
          <div class="col">
            <h2> Movimentação {{ movimentacao.id }}</h2>
          </div>
          <div class="col-1">
            <button type="button" class="btn-close d-inline" @click="onClickFechar"></button>
          </div>
        </div>

        <div class="row px-2">
          <p class="text-start">Situação: {{ movimentacao.ativo  ? 'Ativo' : 'Inativo' }}</p>
          <p class="text-start">Nome do condutor: {{ movimentacao.condutor.nome }}</p>
          <p class="text-start">Placa do veículo: {{ movimentacao.veiculo.placa }}</p>
          <p class="text-start">Horário de entrada: {{ movimentacao.entrada }}</p>
          <p class="text-start">Horário de saída: {{ movimentacao.saida ? movimentacao.saida : 'Movimentação em aberto' }}</p>
          <p class="text-start">Tempo: {{ movimentacao.tempo ? movimentacao.tempo : 'Movimentação em aberto' }} minutos</p>
          <p class="text-start">Tempo de multa: {{ movimentacao.tempoMulta ? movimentacao.tempoMulta : 'Movimentação em aberto' }} minutos</p>
          <p class="text-start">Tempo de desconto: {{ movimentacao.tempoDesconto ? movimentacao.tempoDesconto : 'Movimentação em aberto' }} minutos</p>
          <p class="text-start">Valor: R$ {{ movimentacao.valor ? movimentacao.valor : 'Movimentação em aberto' }}</p>
          <p class="text-start">Valor da multa: R$ {{ movimentacao.valorMulta ? movimentacao.valorMulta : 'Movimentação em aberto' }}</p>
          <p class="text-start">Valor do desconto: R$ {{ movimentacao.valorDesconto ? movimentacao.valorDesconto : 'Movimentação em aberto' }}</p>
          <p class="text-start">Valor total: R$ {{ movimentacao.valorTotal ? movimentacao.valorTotal : 'Movimentação em aberto' }}</p>
        </div>
      </div>

      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th class="col">Situação</th>
            <th class="col">Placa Veíuclo</th>
            <th class="col">Nome Condutor</th>
            <th class="col">Horário Entrada</th>
            <th colspan="3" class="col-3">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in movimentacoes" :key="item.id">
            <td>
              <span v-if="item.ativo" class="badge bg-success">Ativo</span>
              <span v-else class="badge bg-danger">Inativo</span>
            </td>
            <td> {{ item.veiculo.placa }} </td>
            <td> {{ item.condutor.nome }} </td>
            <td> {{ item.entrada }} </td>
            <td><button type="button" class="btn btn-outline-info rounded-0" @click="onClickExpandir(item.id)">Expandir</button></td>
            <td><router-link :to="{ name: 'formulario-editar-movimentacao', query: { id: item.id, form: 'editar' } }" type="button" class="btn btn-outline-warning rounded-0">Editar</router-link></td>
            <td><router-link :to="{ name: 'formulario-excluir-movimentacao', query: { id: item.id, form: 'excluir' } }" type="button" class="btn btn-outline-danger rounded-0">Excluir</router-link></td>
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