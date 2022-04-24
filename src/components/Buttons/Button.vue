<template>
    <button type="submit" class="bg-gradient-to-r from-secondary-light to-secondary rounded-3xl py-2 px-6 mx-auto">{{
            props.text
    }}</button>
</template>

<script setup lang="ts">

const props = defineProps({
    text: String,
    type: String
})
</script>

<style>
</style>