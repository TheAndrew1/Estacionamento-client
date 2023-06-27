<script lang="ts">
import { defineComponent } from 'vue';
import MovimentacaoClient from '@/client/MovimentacaoClient';
import VeiculoClient from '@/client/VeiculoClient';
import CondutorClient from '@/client/CondutorClient';
import { Movimentacao } from '@/model/movimentacao';
import { Veiculo } from '@/model/veiculo';
import { Condutor } from '@/model/condutor';

export default defineComponent({
  name: 'FormMovimentacao',
  data() {
    return {
      movimentacao: new Movimentacao(),
      id: this.$route.query.id,
      form: this.$route.query.form,
      alert: {
        active: false as boolean,
        message: '' as string,
        class: '' as string
      },
      veiculos: new Array<Veiculo>(),
      condutores: new Array<Condutor>()
    };
  },
  methods: {
    findById(id: number) {
      MovimentacaoClient.findById(id).then(response => (this.movimentacao = response));
    },
    onClickCadastrar(movimentacao: Movimentacao) {
      VeiculoClient.findByPlaca(movimentacao.veiculo.placa).then(success => { movimentacao.veiculo = success })
        .then(() => CondutorClient.findByCpf(movimentacao.condutor.cpf).then(success => { movimentacao.condutor = success }))
          .then(() => MovimentacaoClient.cadastrar(movimentacao)
            .then(success => {
              this.alert.message = success;
              this.alert.class = 'alert alert-dismissible alert-success';
            }))
        .catch(error => {
          this.alert.message = error.data;
          this.alert.class = 'alert alert-dismissible alert-danger';
        })
        .finally(() => {
          if (!this.alert.active){
            this.alert.active = !this.alert.active;
          }
        });
    },
    onClickEditar(id: number, movimentacao: Movimentacao) {
      VeiculoClient.findByPlaca(movimentacao.veiculo.placa).then(success => { movimentacao.veiculo = success })
        .then(() => CondutorClient.findByCpf(movimentacao.condutor.cpf).then(success => { movimentacao.condutor = success }))
          .then(() => MovimentacaoClient.editar(id, movimentacao)
            .then(success => {
              this.alert.message = success;
              this.alert.class = 'alert alert-dismissible alert-success';
            }))
        .catch(error => {
          this.alert.message = error.data;
          this.alert.class = 'alert alert-dismissible alert-danger';
        })
        .finally(() => {
          if (!this.alert.active){
            this.alert.active = !this.alert.active;
          }
        });
    },
    onClickExcluir(id: number) {
      MovimentacaoClient.excluir(id)
        .then(success => {
          this.alert.message = success;
          this.alert.class = 'alert alert-dismissible alert-success';
        })
        .catch(error => {
          this.alert.message = error.data;
          this.alert.class = 'alert alert-dismissible alert-danger';
        })
        .finally(() => {
          if (!this.alert.active){
            this.alert.active = !this.alert.active;
          }
        });
    },
    onClickFechar() {
      this.alert.active = !this.alert.active;
      this.alert.message = '';
      this.alert.class = '';
    },
    findVeiculos() {
      VeiculoClient.findAll()
        .then(success => {
          this.veiculos = success;
        })
        .catch(error => {
          console.log(error);
        });
    },
    findCondutores() {
      CondutorClient.findAll()
        .then(success => {
          this.condutores = success;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    if (this.id != undefined) {
      this.findById(Number(this.id));
    }

    this.findVeiculos();
    this.findCondutores();
  }
});
</script>

<template>
  <h2>Cadastrar Movimentação</h2>

  <div class="container" :class="alert.class" role="alert" v-if="alert.active">
    <div>{{ alert.message }}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="onClickFechar"></button>
  </div>

  <form>
    <div class="container">
      <div v-if="form != 'fechar'">
        <div class="row justify-content-center my-3">
          <label for="horario-entrada">Horário de entrada:</label>
          <input type="datetime-local" class="form-control w-25" id="horario-entrada" v-model="movimentacao.entrada" :disabled="form != undefined">
        </div>
        <div class="row justify-content-center my-3">
          <label for="veiculo">Veículo:</label>
          <input class="form-control w-25" id="veiculo" list="veiculos" placeholder="Placa do veículo" v-model="movimentacao.veiculo.placa" :disabled="form == 'excluir'" autocomplete="off">
          <datalist id="veiculos">
            <option v-for="veiculo in veiculos" :key="veiculo.id" :value="veiculo.placa"></option>
          </datalist>
        </div>
        <div class="row justify-content-center my-3">
          <label for="condutor">Condutor:</label>
          <input class="form-control w-25" id="condutor" list="condutores" placeholder="CPF do condutor" v-model="movimentacao.condutor.cpf" :disabled="form == 'excluir'" autocomplete="off">
          <datalist id="condutores">
            <option v-for="condutor in condutores" :key="condutor.id" :value="condutor.cpf"></option>
          </datalist>
        </div>
      </div>
      <div v-else>
        <div class="row justify-content-center my-3">
          <label for="horario-saida">Horário de saída:</label>
          <input type="datetime-local" class="form-control w-25" id="horario-saida" v-model="movimentacao.saida">
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col">
          <button v-if="form === undefined" type="button" class="btn btn-outline-success rounded-0" @click="onClickCadastrar(movimentacao)">Cadastrar</button>
          <button v-if="form === 'fechar'" type="button" class="btn btn-outline-primary rounded-0" @click="onClickEditar(Number(id), movimentacao)">Fechar</button>
          <button v-if="form === 'editar'" type="button" class="btn btn-outline-warning rounded-0" @click="onClickEditar(Number(id), movimentacao)">Editar</button>
          <button v-if="form === 'excluir'" type="button" class="btn btn-outline-danger rounded-0" @click="onClickExcluir(Number(id))">Excluir</button>
        </div>
            
        <div class="col">
          <router-link to="/" type="button" class="btn btn-outline-secondary rounded-0">Voltar</router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
  th, td {
    vertical-align: middle;
  }
</style>