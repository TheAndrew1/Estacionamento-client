<script lang="ts">
import { defineComponent } from 'vue';
import MarcaClient from '@/client/MarcaClient'
import { Marca } from '@/model/marca';

export default defineComponent({
  name: 'FormMarca',
  data(){
    return{
      marca: new Marca(),
      id: this.$route.query.id,
      form: this.$route.query.form
    }
  },
  methods: {
    findById(id : number){
      MarcaClient.findById(id).then(response => this.marca = response)
    },
    onClickCadastrar(marca : Marca){
      MarcaClient.cadastrar(marca);
    },
    onClickEditar(id: number, marca : Marca){
      MarcaClient.editar(id, marca);
    },
    onClickExcluir(id : number){
      MarcaClient.excluir(id);
    }
  },
  mounted(){
    if(this.id != undefined){
      this.findById(Number(this.id));
    }
  }
});
</script>

<template>
  <h2>Cadastrar Marca</h2>

  <form>
    <div class="container">
        <div class="row justify-content-center my-3">
            <label for="nome">Nome:</label>
            <input type="text" class="form-control w-25" id="nome" placeholder="Nome da marca" v-model="marca.marca" :disabled="form == 'excluir'" autocomplete="off">
        </div>
        <div class="row justify-content-center">
            <div class="col">
              <button v-if="form === undefined" type="button" class="btn btn-outline-success rounded-0" @click="onClickCadastrar(marca)">Cadastrar</button>
              <button v-if="form === 'editar'" type="button" class="btn btn-outline-warning rounded-0" @click="onClickEditar(Number(id) , marca)">Editar</button>
              <button v-if="form === 'excluir'" type="button" class="btn btn-outline-danger rounded-0" @click="onClickExcluir(Number(id))">Excluir</button>
            </div>
            
            <div class="col">
                <router-link to="/listar-marca" type="button" class="btn btn-outline-secondary rounded-0">Voltar</router-link>
            </div>
        </div>
    </div>
  </form>
</template>

<style scoped>
  th, td{
    vertical-align: middle;
  }
</style>