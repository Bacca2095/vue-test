<template>
    <div @click="updateValue" class="flex items-center justify-center cursor-pointer">
        <div class="relative">
            <input type="checkbox" :value="modelValue" class="sr-only" @input="updateValue" />
            <div class="absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
                :class="{ 'active-dot': modelValue }"></div>
            <div class="w-8 h-3 bg-gray-200 rounded-full shadow-inner"></div>
        </div>
        <label class="ml-3 text-white font-medium text-sm">
            {{ props.label }}
        </label>
    </div>
</template>

<script setup lang="ts">
interface ButtonProps {
    modelValue: boolean;
    label: string;
}

const props = defineProps<ButtonProps>();

const emit = defineEmits(['update:modelValue']);
const updateValue = (event: any) => {
    emit('update:modelValue', !props.modelValue);
};
</script>

<style>
.active-dot {
    transform: translateX(100%);
    background-color: #37d0c8;
}
</style>
