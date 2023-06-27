<script lang="ts">
import { defineComponent } from 'vue';
import MovimentacaoClient from '@/client/MovimentacaoClient';
import { Movimentacao } from '@/model/movimentacao';

export default defineComponent({
  name: 'ListaMovimentacao',
  data() {
    return {
        movimentacao: new Movimentacao(),
        id: this.$route.query.id
    };
  },
  created() {
    this.findById();
  },
  methods: {
    findById() {
      MovimentacaoClient.findById(Number(this.id)).then(success => this.movimentacao = success);
    }
  }
});
</script>

<template>
  <main class="container-fluid d-flex justify-content-center align-items-center">
    <div class="row justify-content-center">

      <div class="container w-35 z-3 position-fixed bg-white py-2">
        <div class="row mb-2 px-2 align-items-center">
            <h2> Movimentação {{ movimentacao.id }}</h2>
        </div>

        <div class="row px-2">
          <p class="text-start">Situação: {{ movimentacao.ativo  ? 'Aberta' : 'Finalizada' }}</p>
          <p class="text-start">Nome do condutor: {{ movimentacao.condutor.nome }}</p>
          <p class="text-start">CPF do condutor: {{ movimentacao.condutor.cpf }}</p>
          <p class="text-start">Placa do veículo: {{ movimentacao.veiculo.placa }}</p>
          <p class="text-start">Modelo do veículo: {{ movimentacao.veiculo.modelo.nome }}</p>
          <p class="text-start">Horário de entrada: {{ movimentacao.entrada }}</p>
          <p class="text-start">Horário de saída: {{ movimentacao.saida ? movimentacao.saida : "Movimentação em aberto" }}</p>
          <p class="text-start">Tempo: {{ movimentacao.tempo ? movimentacao.tempoMulta : '0' }} minutos</p>
          <p class="text-start">Tempo de multa: {{ movimentacao.tempoMulta ? movimentacao.tempoMulta : '0' }} minutos</p>
          <p class="text-start">Tempo de desconto: {{ movimentacao.tempoDesconto ? movimentacao.tempoDesconto : '0' }} minutos</p>
          <p class="text-start">Valor: R$ {{ movimentacao.valor ? movimentacao.valorMulta : '0' }}</p>
          <p class="text-start">Valor da multa: R$ {{ movimentacao.valorMulta ? movimentacao.valorMulta : '0' }}</p>
          <p class="text-start">Valor do desconto: R$ {{ movimentacao.valorDesconto ? movimentacao.valorDesconto : '0' }}</p>
          <p class="text-start">Valor total: R$ {{ movimentacao.valorTotal }}</p>
        </div>
      </div>
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