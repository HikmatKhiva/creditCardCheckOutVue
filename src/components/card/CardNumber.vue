<template>
    <div class="visa__card ">
        <h4 class="text-xl lg:text-2xl xl:text-3xl">{{ props.title }}</h4>
        <Input :type="props.typeInput" v-cardformat:formatCardNumber
            @input="event => storage.cardNumber = event.target.value" maxlength="19" :placeholder="props.placeholder" />
    </div>
</template>
<script setup>
import { useStorage } from '../../stores/useStorage';
const storage = useStorage()
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
 
});
</script>
<style scoped>
h4 {
    font-weight: 400;
    color: white;
}
</style>