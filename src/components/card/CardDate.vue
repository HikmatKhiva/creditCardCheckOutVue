<script setup>

</script>
<template>
    <div class="card__date mt-5">
        <h3 class="text-xl text-white mb-2">Expiration date</h3>
        <input type="text" maxlength="2" placeholder="MM" />
        <input class="ml-7 inline-block" type="text" maxlength="2" placeholder="YY" />
    </div>
</template>

<style scoped>
.card__date input {
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
.card__date input::placeholder {
    color: rgba(255, 255, 255, 0.53);
}
</style>