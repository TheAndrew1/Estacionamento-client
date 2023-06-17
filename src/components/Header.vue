<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Header"
});
</script>

<template>
    <nav>
        <router-link to="/">Movimentação</router-link> |
        <router-link to="/listar-condutor">Condutores</router-link> |
        <router-link to="/listar-marca">Marcas</router-link> |
        <router-link to="/listar-modelo">Modelos</router-link> |
        <router-link to="/listar-veiculo">Veículos</router-link> |
        <router-link to="/configuracao">Configuração</router-link>
    </nav>
</template>

<style scoped>

</style>