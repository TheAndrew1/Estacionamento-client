<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormConfiguracao'
});
</script>

<template>
  <h2>Cadastrar Configuração</h2>

  <form>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row justify-content-center my-3">
            <label for="vagas-carro">Número de vagas carro:</label>
            <input type="number" class="form-control w-50" id="vagas-carro" placeholder="Vagas carro">
          </div>
          <div class="row justify-content-center my-3">
            <label for="vagas-moto">Número de vagas moto:</label>
            <input type="number" class="form-control w-50" id="vagas-moto" placeholder="Vagas moto">
          </div>
          <div class="row justify-content-center my-3">
            <label for="vagas-van">Número de vagas van:</label>
            <input type="number" class="form-control w-50" id="vagas-van" placeholder="Vagas van">
          </div>
          <div class="row justify-content-center my-3">
            <label for="horario-fecha">Horário de fechamento:</label>
            <input type="time" class="form-control w-50" id="horario-fecha" placeholder="Horário fecha">
          </div>
        </div>

        <div class="col">
          <div class="row justify-content-center my-3">
            <label for="valor-minuto">Valor do minuto:</label>
            <input type="number" class="form-control w-50" id="valor-minuto" placeholder="Valor por minuto">
          </div>
          <div class="row justify-content-center my-3">
            <label for="valor-multa">Valor da multa:</label>
            <input type="number" class="form-control w-50" id="valor-multa" placeholder="Valor da multa por minuto">
          </div>
          <div class="row justify-content-center my-3">
            <label for="tempo-para-desconto">Tempo para gerar desconto:</label>
            <input type="number" class="form-control w-50" id="tempo-para-desconto" placeholder="Tempo para desconto">
          </div>
          <div class="row justify-content-center my-3">
            <label for="tempo-desconto">Tempo de desconto:</label>
            <input type="number" class="form-control w-50" id="tempo-desconto" placeholder="Tempo de desconto">
          </div>
          <div class="row justify-content-center my-3">
            <label for="gerar-desconto">Gerar desconto:</label>
            <input type="checkbox" class="form-check-input" id="gerar-desconto">
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col">
            <button type="submit" class="btn btn-success rounded-0">Cadastrar</button>
        </div>
        
        <div class="col">
            <router-link to="/configuracao"><button type="button" class="btn btn-outline-success rounded-0">Voltar</button></router-link>
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