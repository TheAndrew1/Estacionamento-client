<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListaVeiculo'
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Listar Veículos</h2>
      </div>
      <div class="col-2">
        <router-link to="/formulario-veiculo"><button type="button" class="btn btn-success rounded-0">Cadastrar</button></router-link>
      </div>
    </div>
  </div>

  <table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th class="col">Situação</th>
      <th class="col">Placa</th>
      <th class="col">Modelo</th>
      <th class="col">Marca</th>
      <th class="col">Tipo</th>
      <th class="col">Cor</th>
      <th colspan="3" class="col-3">Opções</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>ABC-1234</td>
      <td>Camaro</td>
      <td>Chevrolet</td>
      <td>Carro</td>
      <td>Amarelo</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-warning rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>ABC-7894</td>
      <td>HB20</td>
      <td>Hyundai</td>
      <td>Carro</td>
      <td>Branco</td>
      <td><button type="button" class="btn btn-outline-info rounded-0">Expandir</button></td>
      <td><button type="button" class="btn btn-outline-warning rounded-0">Editar</button></td>
      <td><button type="button" class="btn btn-outline-danger rounded-0">Excluir</button></td>
    </tr>
    <tr>
      <td><span class="badge bg-success">Ativo</span></td>
      <td>XYZ-1234</td>
      <td>Duster</td>
      <td>Renault</td>
      <td>Carro</td>
      <td>Preto</td>
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