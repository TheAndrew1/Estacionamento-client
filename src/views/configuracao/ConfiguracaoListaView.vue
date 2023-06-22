<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListaConfiguracao'
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Listar Configuração</h2>
      </div>
      <div class="col-2">
        <router-link to="/formulario-configuracao"><button type="button" class="btn btn-success rounded-0">Cadastrar</button></router-link>
      </div>
    </div>
  </div>

  <table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th class="col">Situação</th>
      <th class="col">Valor Minuto</th>
      <th class="col">Vagas Carro</th>
      <th class="col">Vagas Moto</th>
      <th class="col">Valor Van</th>
      <th class="col">Horário Fechamento</th>
      <th colspan="3" class="col-3">Opções</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>R$0,50</td>
      <td>20</td>
      <td>10</td>
      <td>5</td>
      <td>18:00</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-warning rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
  th, td{
    vertical-align: middle;
  }
</style>