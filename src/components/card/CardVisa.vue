<template>
    <div class="visa__card mt-6">
        <h4 class="text-xl lg:text-2xl xl:text-3xl">{{ props.title }}</h4>
        <Input @input="event => storage.cardHolder = event.target.value" :type="props.typeInput" maxlength="19"
            :placeholder="props.placeholder" />
    </div>
</template>
<script setup>
import { useStorage } from '../../stores/useStorage';
const storage = useStorage();
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