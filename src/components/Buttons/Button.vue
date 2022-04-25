<template>
    <button :type="type" :class="{
        'bg-gradient-to-r': isSecondaryGradientVariant(),
        'from-secondary-light': isSecondaryGradientVariant(),
        'to-secondary': isSecondaryGradientVariant(),
        'bg-black': !isSecondaryGradientVariant(),
        'rounded-3xl': isSecondaryGradientVariant(),
    }" class="text-white py-2 px-6 w-full my-4">
        <span> {{ props.text }}</span>
    </button>
</template>

<script setup lang="ts">
enum ButtonType {
    SUBMIT = 'submit',
    BUTTON = 'button',
    RESET = 'reset',
}

enum ButtonVariants {
    SECONDARY_GRADIENT = 'secondary-gradient',
    BLACK = 'black',
}

interface ButtonProps {
    text: string;
    type: ButtonType;
    variant: string;
}

const props = defineProps<ButtonProps>();

const isSecondaryGradientVariant = () =>
    props.variant === ButtonVariants.SECONDARY_GRADIENT;
</script>

<style scoped>
</style>
