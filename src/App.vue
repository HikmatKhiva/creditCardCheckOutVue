<template>
  <main class="center font-varela overflow-hidden flex-col xl:flex-row xl:w-[1200px] flex  xl:h-[450px] relative">
    <CardLeft />
    <CardRight @change="change" />
  </main>
</template>
<script setup>
import { reactive } from 'vue';
import { CardLeft, CardRight } from './components/export';
const cardNumber = reactive({
  cardNumber: '',
  cardHolder: '', 
  card: ''
});
function change(value) {}
</script>
<style scoped>
.center {
  filter: drop-shadow(3px 5px 14px rgba(0, 0, 0, 0.25));
}
</style>
