<script lang="ts">
import { defineComponent } from 'vue';
import ModeloClient from '@/client/ModeloClient';
import MarcaClient from '@/client/MarcaClient';
import { Modelo } from '@/model/modelo';
import { Marca } from '@/model/marca';

export default defineComponent({
  name: 'FormModelo',
  data() {
    return {
      modelo: new Modelo(),
      id: this.$route.query.id,
      form: this.$route.query.form,
      alert: {
        active: false as boolean,
        message: '' as string,
        class: '' as string
      },
      marcas: new Array<Marca>()
    };
  },
  methods: {
    findById(id: number) {
      ModeloClient.findById(id).then(response => (this.modelo = response));
    },
    onClickCadastrar(modelo: Modelo) {
      MarcaClient.findByNome(modelo.marca.nome).then(success => { modelo.marca = success })
        .then(() => ModeloClient.cadastrar(modelo)
          .then(success => {
            this.alert.message = success;
            this.alert.class = 'alert alert-dismissible alert-success';
          }))
        .catch(error => {
          this.alert.message = error.data;
          this.alert.class = 'alert alert-dismissible alert-danger';
        });

      if (!this.alert.active){
        this.alert.active = !this.alert.active;
      }
    },
    onClickEditar(id: number, modelo: Modelo) {
      MarcaClient.findByNome(modelo.marca.nome).then(success => { modelo.marca = success })
        .then(() => ModeloClient.editar(id, modelo)
          .then(success => {
            this.alert.message = success;
            this.alert.class = 'alert alert-dismissible alert-success';
          }))
        .catch(error => {
          this.alert.message = error.data;
          this.alert.class = 'alert alert-dismissible alert-danger';
        });

      if (!this.alert.active) {
        this.alert.active = !this.alert.active;
      }
    },
    onClickExcluir(id: number) {
      ModeloClient.excluir(id)
        .then(success => {
          this.alert.message = success;
          this.alert.class = 'alert alert-dismissible alert-success';
        })
        .catch(error => {
          this.alert.message = error.data;
          this.alert.class = 'alert alert-dismissible alert-danger';
        });

      if (!this.alert.active) {
        this.alert.active = !this.alert.active;
      }
    },
    onClickFechar() {
      this.alert.active = !this.alert.active;
      this.alert.message = '';
      this.alert.class = '';
    },
    findMarcas(){
      MarcaClient.findAll()
        .then(success => {
          this.marcas = success;
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

    this.findMarcas();
  }
});
</script>

<template>
  <h2>Cadastrar Modelo</h2>

  <div class="container" :class="alert.class" role="alert" v-if="alert.active">
    <div>{{ alert.message }}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="onClickFechar"></button>
  </div>

  <form>
    <div class="container">
      <div class="row justify-content-center my-3">
        <label for="nome">Nome:</label>
        <input type="text" class="form-control w-25" id="nome" placeholder="Nome do modelo" v-model="modelo.nome" :disabled="form == 'excluir'" autocomplete="off">
      </div>
      <div class="row justify-content-center my-3">
        <label for="marca">Marca:</label>
        <input class="form-control w-25" list="marcas" placeholder="Nome da marca" v-model="modelo.marca.nome" :disabled="form == 'excluir'" autocomplete="off">
        <datalist id="marcas">
          <option v-for="marca in marcas" :key="marca.id" :value="marca.nome"></option>
        </datalist>
      </div>
      <div class="row justify-content-center">
        <div class="col">
          <button v-if="form === undefined" type="button" class="btn btn-outline-success rounded-0" @click="onClickCadastrar(modelo)">Cadastrar</button>
          <button v-if="form === 'editar'" type="button" class="btn btn-outline-warning rounded-0" @click="onClickEditar(Number(id), modelo)">Editar</button>
          <button v-if="form === 'excluir'" type="button" class="btn btn-outline-danger rounded-0" @click="onClickExcluir(Number(id))">Excluir</button>
        </div>
            
        <div class="col">
          <router-link to="/listar-modelo" type="button" class="btn btn-outline-secondary rounded-0">Voltar</router-link>
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