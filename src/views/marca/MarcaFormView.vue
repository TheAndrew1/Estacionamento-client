<script lang="ts">
import { defineComponent } from 'vue';
import { Marca } from '@/model/marca';
import { MarcaClient } from '@/client/MarcaClient'

export default defineComponent({
  name: 'FormMarca',
  data(){
    return{
      marcaClient: MarcaClient,
      marca: Marca
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
            <input type="text" class="form-control w-25" id="nome" placeholder="Nome da marca">
        </div>
        <div class="row justify-content-center">
            <div class="col">
                <button type="submit" class="btn btn-success rounded-0">Cadastrar</button>
            </div>
            
            <div class="col">
                <router-link to="/listar-marca"><button type="button" class="btn btn-outline-success rounded-0">Voltar</button></router-link>
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