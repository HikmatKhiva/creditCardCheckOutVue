<script setup>
import {CardLeft,CardRight} from './components/export';
</script>
<template>
  <main class="center font-varela overflow-hidden flex-col xl:flex-row xl:w-[1200px] flex  xl:h-[450px] relative">
    <CardLeft />
    <CardRight />
  </main>
</template>
<style scoped>
.center {
  filter: drop-shadow(3px 5px 14px rgba(0, 0, 0, 0.25));
}
</style>
