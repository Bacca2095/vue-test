<template>
    <button :type="type" class="bg-gradient-to-r from-secondary-light to-secondary rounded-3xl py-1 px-6 w-full my-4">
        {{ props.text }}
    </button>
</template>

<script setup lang="ts">
enum ButtonType {
    SUBMIT = 'submit',
    BUTTON = 'button',
    RESET = 'reset',
}
interface ButtonProps {
    text: string;
    type: ButtonType;
}

const props = defineProps<ButtonProps>();
</script>

<style>
</style>
