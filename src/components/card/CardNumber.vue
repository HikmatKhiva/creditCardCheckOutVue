<script setup>
import { ref } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: true,
    },
    typeInput: {
        type: String,
        required: true,
    },
    getValueCardNumber: {
        type: Function,
        required: true,
    }
});

</script>
<template>
    <div class="visa__card mt-6">
        <h4 class="">{{ props.title }}</h4>
        <input :type="props.typeInput" @input="event => getValueCardNumber(event.target.value)" maxlength="19" :placeholder="props.placeholder">
    </div>
</template>

<style scoped>
h4 {
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    color: white;
}

input {
    margin-top: 5px;
    background: rgba(255, 255, 255, 0.36);
    border-radius: 11px;
    padding: 12px 10px;
    outline: none;
    font-size: 20px;
    color: white;
}

input::placeholder {
    color: rgba(255, 255, 255, 0.53);
}
</style>