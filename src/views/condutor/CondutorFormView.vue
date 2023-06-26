<script lang="ts">
import { defineComponent } from 'vue';
import CondutorClient from '@/client/CondutorClient';
import { Condutor } from '@/model/condutor';

export default defineComponent({
  name: 'FormCondutor',
  data() {
    return {
      condutor: new Condutor(),
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
      CondutorClient.findById(id).then(response => (this.condutor = response));
    },
    onClickCadastrar(condutor: Condutor) {
      CondutorClient.cadastrar(condutor)
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
    onClickEditar(id: number, condutor: Condutor) {
      CondutorClient.editar(id, condutor)
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
    onClickExcluir(id: number) {
      CondutorClient.excluir(id)
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
  <h2>Cadastrar Condutor</h2>

  <div class="container" :class="alert.class" role="alert" v-if="alert.active">
    <div>{{ alert.message }}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="onClickFechar"></button>
  </div>

  <form>
    <div class="container">
      <div class="row justify-content-center my-3">
        <label for="nome">Nome:</label>
        <input type="text" class="form-control w-25" id="nome" placeholder="Nome do condutor" v-model="condutor.nome" :disabled="form == 'excluir'" autocomplete="off">
      </div>
      <div class="row justify-content-center my-3">
        <label for="cpf">CPF:</label>
        <input type="text" class="form-control w-25" id="cpf" placeholder="XXX.XXX.XXX-XX" v-model="condutor.cpf" :disabled="form == 'excluir'" autocomplete="off">
      </div>
      <div class="row justify-content-center my-3">
        <label for="telefone">Telefone:</label>
        <input type="text" class="form-control w-25" id="telefone" placeholder="(XX)XXXXX-XXXX" v-model="condutor.telefone" :disabled="form == 'excluir'" autocomplete="off">
      </div>
      <div class="row justify-content-center">
        <div class="col">
          <button v-if="form === undefined" type="button" class="btn btn-outline-success rounded-0" @click="onClickCadastrar(condutor)">Cadastrar</button>
          <button v-if="form === 'editar'" type="button" class="btn btn-outline-warning rounded-0" @click="onClickEditar(Number(id), condutor)">Editar</button>
          <button v-if="form === 'excluir'" type="button" class="btn btn-outline-danger rounded-0" @click="onClickExcluir(Number(id))">Excluir</button>
        </div>
            
        <div class="col">
          <router-link to="/listar-condutor" type="button" class="btn btn-outline-secondary rounded-0">Voltar</router-link>
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