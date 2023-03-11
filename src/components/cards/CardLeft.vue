<template>
  <div v-motion="contentSetting.leftInitial"
    class="content__left transition-all duration-1000 w-full  xl:w-[40%] bg-white rounded-t-3xl lg:rounded-l-3xl relative">
    <div class="left__top lg:block flex items-center justify-between">
      <h2 class="text-lg lg:text-4xl text-black-two mb-1">Total payment:</h2>
      <p class="text-lg lg:text-2xl xl:text-[40px] text-black-one">248.68$</p>
    </div>
    <div class="left__center my-5 xl:my-[40px] flex-wrap flex gap-5 justify-between">
      <div class="center__card flex items-center justify-between w-full lg:w-fit lg:block ">
        <h2 class="text-xl xl:text-2xl text-black-two">Product price:</h2>
        <p class="text-lg lg:text-[28px] text-black-one ">200$</p>
      </div>
      <div class="center__card flex items-center justify-between w-full lg:w-fit lg:block ">
        <h2 class="text-2xl text-black-two">Shipping:</h2>
        <p class="text-lg lg:text-[28px] text-black-one ">48.68$</p>
      </div>
    </div>
    <div class="left__bottom text-center">
      <button @click="storage.proceed" class="btn-proceed text-black-one">Proceed</button>
    </div>
  </div>
</template>
<script setup>
import { contentSetting } from '../../motionSettings.js';
import { useStorage } from '../../stores/useStorage';
const storage = useStorage();
</script>
<style scoped>
.content__left {
  padding: 54px 42px;
}

.btn-proceed {
  margin-top: 15px;
  padding: 17px;
  font-size: 1.6rem;
  border: 3px solid rgba(0, 146, 69, 0.5);
  border-radius: 25px;
  transition: all 500ms;
  /* border-image: linear-gradient(45deg, rgba(252, 238, 33, 0.5), rgba(0, 146, 69, 0.5)) 1; */
}

.btn-proceed:hover {
  background-image: linear-gradient(45deg, rgba(252, 238, 33, 0.5), rgba(0, 146, 69, 0.5));
}

@media (max-width:1200px) {
  .content__left {
    left: 0 !important;
  }
  .btn-proceed {
    padding: 10px;
    font-size: 1.5rem;
  }
}
@media (max-width:576px) {

  .btn-proceed {
    padding: 10px 15px;
    font-size: 1.2rem;
  }
}
</style>