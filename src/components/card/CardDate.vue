<template>
    <div class="card__date mt-5">
        <h3 class="text-xl text-white mb-2">Expiration date</h3>
        <input :class="{ 'error': !errorMonth }" type="text" id="month"
            @input="event => changeValueMonth(event.target.value)" maxlength="2" max="12" min="1" placeholder="MM" />
        <input class="ml-7 inline-block" type="text" maxlength="2" placeholder="YY" />
    </div>
</template>
<script setup>
import { ref } from "vue";

const errorMonth = ref(true)
const changeValueMonth = (value) => errorMonth.value = /(^0?[1-9]$)|(^1[0-2]$)/.test(value);

</script>
<style scoped>
input.error {
    border: 1px solid red;
    color: red;
}

input.error::placeholder {
    color: red;
}

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
</style>