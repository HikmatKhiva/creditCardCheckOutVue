<template>
  <div v-motion="contentSetting.rightInitial"
    class="content__right flex justify-between w-full -top-8 xl:top-0 xl:w-[60%] transition-all duration-300 ease-linear rounded-3xl relative p-5 ">
    <div class="cards xl:p-5">
      <CardNumber title="Card number" placeholder="0000 0000 0000 0000"
        typeInput="text" />
      <CardVisa title="Card holder" placeholder="e.g. Jabe Green" typeInput="text" />
      <CardDate />
      <div class="flex items-center gap-1 mt-5">
        <img src="/Shield-check.png" alt="shield check">
        <p class="text-lg lg:text-2xl text-white underline">HTTPS/SSL - Secure connection</p>
      </div>
    </div>
    <div class="flex flex-col justify-between items-end">
      <img v-motion="opacityElement" class="lg:w-[124px] lg:h-[68px] w-[80px] h-[50px] lg:static absolute top-1 right-5 ease-out duration-[2s]" src="/VISA.png" alt="logo">
      <img v-motion="opacityElement" class=" w-[96px] h-[78px] ease-in-out hidden lg:block duration-[6s]" src="/chip.png" alt="chip">
      <CVV />
    </div>
  </div>
</template>
<script setup>
import { defineEmits } from 'vue';
import { contentSetting, opacityElement } from '../../motionSettings.js';
import CardDate from '../card/CardDate.vue';
import CardVisa from '../card/CardVisa.vue';
import CardNumber from '../card/CardNumber.vue';
import CVV from '../card/CVV.vue';

</script>
<style scoped>
.content__right {
  background: linear-gradient(244.85deg, #FCEE21 0%, #009245 100%);
  box-shadow: -8px 0px 20px rgba(0, 0, 0, 0.25);
}
img {
  transition-property: all;
}
</style>