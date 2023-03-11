<template>
  <input class="form-control" type="text">
</template>
<script>
export default {
    name:'Input'
}
</script>
<style>
input.form-control {
    margin-top: 5px;
    background: rgba(255, 255, 255, 0.36);
    border-radius: 11px;
    padding: 12px 10px;
    outline: none;
    font-size: 20px;
    color: white;
}
input.form-control::placeholder {
    color: rgba(255, 255, 255, 0.53);
}
@media screen and (max-width:568px) {
    input {
        font-size: 16px;
    }
}
</style>