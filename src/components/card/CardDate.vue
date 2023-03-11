<template>
    <div class="card__date mt-5">
        <h3 class="text-xl lg:text-2xl xl:text-3xl text-white mb-2">Expiration date</h3>
        <input type="text" id="month" @input="event => storage.cardDate.month = event.target.value" maxlength="2" max="12"
            min="1" placeholder="MM" />
        <input @input="event => storage.cardDate.year = event.target.value" class="ml-5 lg:ml-7 inline-block" type="text"
            maxlength="2" placeholder="YY" />
    </div>
</template>
<script setup>
import { useStorage } from '../../stores/useStorage';
const storage = useStorage()

</script>
<style scoped>
input {
    text-align: center;
    width: 70px;
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
@media screen and (max-width:568px) {
    input {
        font-size: 16px;
    }
}
</style>