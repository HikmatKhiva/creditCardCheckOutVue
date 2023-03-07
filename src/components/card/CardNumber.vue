<template>
    <div class="visa__card mt-6">
        <h4 class="">{{ props.title }}</h4>
        <Input :type="props.typeInput" v-cardformat:formatCardNumber
            @input="event => getValueCardNumber(event.target.value)" maxlength="19" :placeholder="props.placeholder" />
    </div>
</template>
<script setup>
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
<style scoped>
h4 {
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    color: white;
}
</style>