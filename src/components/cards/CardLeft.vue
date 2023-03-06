<script setup>
import {contentSetting} from '../../motionSettings.js'
</script>
<template>
 <div v-motion="contentSetting.leftInitial" class="content__left transition-all duration-1000 w-full  xl:w-[40%] bg-white rounded-l-3xl relative">
      <div class="left__top">
        <h2 class="text-4xl text-black-two">Total payment:</h2>
        <p class="text-2xl xl:text-[40px] text-black-one">248.68$</p>
      </div>
      <div class="left__center my-5 xl:my-[40px] flex gap-5 justify-between">
        <div class="center__card">
          <h2 class="text-xl xl:text-2xl text-black-two">Product price:</h2>
          <p class="text- xl:text-[28px] text-black-one ">200$</p>
        </div>
        <div class="center__card">
          <h2 class="text-2xl text-black-two">Shipping:</h2>
          <p class="text-[28px] text-black-one ">48.68$</p>
        </div>
      </div>
      <div class="left__bottom text-center">
        <button class="btn-proceed text-black-one">Proceed</button>
      </div>
    </div>
</template>
<style scoped>
.content__left {
  padding: 54px 42px;
}
.btn-proceed {
  margin-top: 15px;
  padding: 17px;
  font-size: 30px;
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
</style>