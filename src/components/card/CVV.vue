<template>
    <div class="cvv__cvc lg:static flex flex-col items-center absolute bottom-[77px] right-2">
        <h4 class="text-xl lg:text-2xl xl:text-3xl text-white">CVV/CVC</h4>
        <input @input="event => storage.cardCVV = event.target.value" v-cardformat:formatCardCVC class="form-control"
            type="text" maxlength="4" placeholder="***_*">
        <p class="">3 or 4 digits</p>
    </div>
</template>    
<script setup>
import { useStorage } from '../../stores/useStorage';
const storage = useStorage()
</script>
<style scoped>
input {
    text-align: center;
    width: 84px;
    height: 60px;
    padding: 13px 14px;
    outline: none;
    background: rgba(255, 255, 255, 0.36);
    border-radius: 15px;
    font-size: 21px;
    color: white;
}

input::placeholder {
    color: rgba(255, 255, 255, 0.53);
}

p {
    color: rgba(255, 255, 255, 0.46);
    font-size: 13px;
}
@media screen and (max-width:568px) {
    input {
        width: 65px;
        font-size: 14px;
    }
}
</style>