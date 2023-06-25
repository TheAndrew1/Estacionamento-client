<script lang="ts">
import { defineComponent } from 'vue';
import VeiculoClient from '@/client/VeiculoClient';
import ModeloClient from '@/client/ModeloClient';
import { Veiculo } from '@/model/veiculo';
import { Modelo } from '@/model/modelo';
import { Cor } from '@/model/cor';
import { Tipo } from '@/model/tipo';

export default defineComponent({
  name: 'FormVeiculo',
  data() {
    return {
      veiculo: new Veiculo(),
      id: this.$route.query.id,
      form: this.$route.query.form,
      alert: {
        active: false as boolean,
        message: '' as string,
        class: '' as string
      },
      modelos: new Array<Modelo>(),
      corEnum: Cor,
      tipoEnum: Tipo
    };
  },
  methods: {
    findById(id: number) {
      VeiculoClient.findById(id).then(response => (this.veiculo = response));
    },
    onClickCadastrar(veiculo: Veiculo) {
      ModeloClient.findByNome(veiculo.modelo.nome).then(success => { veiculo.modelo = success })
        .then(() => VeiculoClient.cadastrar(veiculo)
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
    onClickEditar(id: number, veiculo: Veiculo) {
      ModeloClient.findByNome(veiculo.modelo.nome).then(success => { veiculo.modelo = success })
        .then(() => VeiculoClient.editar(id, veiculo)
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
      VeiculoClient.excluir(id)
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
    findModelos() {
      ModeloClient.findAll()
        .then(success => {
          this.modelos = success;
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

    this.findModelos();
  }
});
</script>

<template>
  <h2>Cadastrar Veículo</h2>

  <div class="container" :class="alert.class" role="alert" v-if="alert.active">
    <div>{{ alert.message }}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="onClickFechar"></button>
  </div>

  <form>
    <div class="container">
      <div class="row justify-content-center my-3">
        <label for="placa">Placa:</label>
        <input type="text" class="form-control w-25" id="placa" placeholder="Placa do veículo" v-model="veiculo.placa" :disabled="form == 'excluir'" autocomplete="off">
      </div>
      <div class="row justify-content-center my-3">
        <label for="modelo">Modelo:</label>
        <input class="form-control w-25" list="modelos" placeholder="Nome do modelo" v-model="veiculo.modelo.nome" :disabled="form == 'excluir'" autocomplete="off">
        <datalist id="modelos">
          <option v-for="modelo in modelos" :key="modelo.id" :value="modelo.nome"></option>
        </datalist>
      </div>
      <div class="row justify-content-center my-3">
        <label for="ano">Ano:</label>
        <input type="text" class="form-control w-25" id="ano" placeholder="Ano do veículo" v-model="veiculo.ano" :disabled="form == 'excluir'" autocomplete="off">
      </div>
      <div class="row justify-content-center my-3">
        <label for="tipo">Tipo:</label>
        <select class="form-select w-25" id="tipo" v-model="veiculo.tipo" :disabled="form == 'excluir'">
          <option v-for="tipo in tipoEnum" :value=tipo.valueOf()> {{ tipo.toString() }}</option>
        </select>
      </div>
      <div class="row justify-content-center my-3">
        <label for="cor">Cor:</label>
        <select class="form-select w-25" id="cor" v-model="veiculo.cor" :disabled="form == 'excluir'">
          <option v-for="cor in corEnum" :value=cor.valueOf()> {{ cor.toString() }}</option>
        </select>
      </div>
      <div class="row justify-content-center">
        <div class="col">
          <button v-if="form === undefined" type="button" class="btn btn-outline-success rounded-0" @click="onClickCadastrar(veiculo)">Cadastrar</button>
          <button v-if="form === 'editar'" type="button" class="btn btn-outline-warning rounded-0" @click="onClickEditar(Number(id), veiculo)">Editar</button>
          <button v-if="form === 'excluir'" type="button" class="btn btn-outline-danger rounded-0" @click="onClickExcluir(Number(id))">Excluir</button>
        </div>
            
        <div class="col">
          <router-link to="/listar-veiculo" type="button" class="btn btn-outline-secondary rounded-0">Voltar</router-link>
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

<!-- </div>
 -->