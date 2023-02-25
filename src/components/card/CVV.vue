<script setup>
</script>
<template>
    <div class="cvv__cvc">
        <h4 class="text-xl text-white">CVV/CVC</h4>
        <input class="my-2" type="text" maxlength="4" placeholder="***_*">
        <p class="">3 or 4 digits</p>
    </div>
</template>    

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
</style>