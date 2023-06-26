<script lang="ts">
import { defineComponent } from 'vue';
import ConfiguracaoClient from '@/client/ConfiguracaoClient';
import { Configuracao } from '@/model/configuracao';

export default defineComponent({
  name: 'FormConfiguracao',
  data() {
    return {
      configuracao: new Configuracao(),
      id: this.$route.query.id,
      form: this.$route.query.form,
      alert: {
        active: false as boolean,
        message: '' as string,
        class: '' as string
      }
    };
  },
  methods: {
    findById(id: number) {
      ConfiguracaoClient.findById(id).then(response => (this.configuracao = response));
    },
    onClickCadastrar(configuracao: Configuracao) {
      ConfiguracaoClient.cadastrar(configuracao)
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
    onClickEditar(id: number, configuracao: Configuracao) {
      ConfiguracaoClient.editar(id, configuracao)
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
    }
  },
  mounted() {
    if (this.id != undefined) {
      this.findById(Number(this.id));
    }
  }
});
</script>

<template>
  <h2>Configuração</h2>

  <div class="container" :class="alert.class" role="alert" v-if="alert.active">
    <div>{{ alert.message }}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="onClickFechar"></button>
  </div>

  <form>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row justify-content-center my-3">
            <label for="vagas-carro">Número de vagas carro:</label>
            <input type="number" class="form-control w-50" id="vagas-carro" placeholder="Vagas carro" v-model="configuracao.vagasCarro">
          </div>
          <div class="row justify-content-center my-3">
            <label for="vagas-moto">Número de vagas moto:</label>
            <input type="number" class="form-control w-50" id="vagas-moto" placeholder="Vagas moto" v-model="configuracao.vagasMoto">
          </div>
          <div class="row justify-content-center my-3">
            <label for="vagas-van">Número de vagas van:</label>
            <input type="number" class="form-control w-50" id="vagas-van" placeholder="Vagas van" v-model="configuracao.vagasVan">
          </div>
          <div class="row justify-content-center my-3">
            <label for="horario-fecha">Horário de fechamento:</label>
            <input type="time" class="form-control w-50" id="horario-fecha" placeholder="Horário fecha" v-model="configuracao.horarioFecha">
          </div>
        </div>

        <div class="col">
          <div class="row justify-content-center my-3">
            <label for="valor-minuto">Valor do minuto:</label>
            <input type="number" class="form-control w-50" id="valor-minuto" placeholder="Valor por minuto" v-model="configuracao.valorMinuto">
          </div>
          <div class="row justify-content-center my-3">
            <label for="valor-multa">Valor da multa:</label>
            <input type="number" class="form-control w-50" id="valor-multa" placeholder="Valor da multa por minuto" v-model="configuracao.valorMultaMinuto">
          </div>
          <div class="row justify-content-center my-3">
            <label for="tempo-para-desconto">Tempo para gerar desconto:</label>
            <input type="number" class="form-control w-50" id="tempo-para-desconto" placeholder="Tempo para desconto" v-model="configuracao.tempoParaDesconto">
          </div>
          <div class="row justify-content-center my-3">
            <label for="tempo-desconto">Tempo de desconto:</label>
            <input type="number" class="form-control w-50" id="tempo-desconto" placeholder="Tempo de desconto" v-model="configuracao.tempoDesconto">
          </div>
          <div class="row justify-content-center my-3">
            <label for="gerar-desconto">Gerar desconto:</label>
            <input type="checkbox" class="form-check-input" id="gerar-desconto" v-model="configuracao.gerarDesconto">
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col">
          <button v-if="form === undefined" type="button" class="btn btn-outline-success rounded-0" @click="onClickCadastrar(configuracao)">Cadastrar</button>
          <button v-if="form === 'editar'" type="button" class="btn btn-outline-warning rounded-0" @click="onClickEditar(Number(id), configuracao)">Editar</button>
        </div>
            
        <div class="col">
          <router-link to="/configuracao" type="button" class="btn btn-outline-secondary rounded-0">Voltar</router-link>
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