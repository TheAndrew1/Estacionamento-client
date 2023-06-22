<script lang="ts">
import { defineComponent } from 'vue';
import MarcaClient from '@/client/MarcaClient'
import { Marca } from '@/model/marca';

export default defineComponent({
  name: 'FormMarca',
  data(){
    return{
      marca: new Marca()
    }
  },
  methods: {
    salvarMarca(marca : Marca){
      MarcaClient.cadastrar(marca);
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
            <input type="text" class="form-control w-25" id="nome" placeholder="Nome da marca" v-model="marca.marca">
        </div>
        <div class="row justify-content-center">
            <div class="col">
              <router-link to="/listar-marca" type="submit" class="btn btn-outline-success rounded-0" @click="salvarMarca(marca)">Cadastrar</router-link>
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