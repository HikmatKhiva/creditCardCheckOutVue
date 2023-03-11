<template>
  <h2 class="text-2xl text-center text-red-500 font-medium mb-4" v-if="storage.clicked">Function doesn't ready</h2>
  <main
    class="center font-varela overflow-hidden flex-col xl:flex-row w-[300px] lg:w-[900px] xl:w-[1200px] flex  xl:min-h-[470px] relative">
    <CardLeft />
    <CardRight />
  </main>
</template>
<script setup>
import { CardLeft, CardRight } from './components/export';
import { useStorage } from './stores/useStorage';
const storage = useStorage();
</script>
<style scoped>
.center {
  filter: drop-shadow(3px 5px 14px rgba(0, 0, 0, 0.25));
}

@media screen and (max-width:568px) {
  .center {
    margin: 10px 0;
  }
}
</style>
