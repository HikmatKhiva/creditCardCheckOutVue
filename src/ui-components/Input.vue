<template>
  <input type="text">
</template>
<script>
export default {
    name:'Input'
}
</script>
<style>
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