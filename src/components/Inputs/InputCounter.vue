<template>
    <div class="h-10 w-32">
        <div class="flex flex-row h-10 w-full relative bg-transparent mt-1 border">
            <button class="bg-white hover:bg-gray-200 h-full w-20 cursor-pointer outline-none" @click="decrementValue">
                <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <input type="number"
                class="focus:outline-none text-center w-full bg-white font-semibold text-md flex items-center text-gray-700 outline-none"
                :value="modelValue" @change="updateValue" name="custom-input-number" value="0" />
            <button class="bg-white hover:bg-gray-200 h-full w-20 cursor-pointer outline-none" @click="incrementValue">
                <span class="m-auto text-2xl font-thin">+</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
interface InputCounterProps {
    modelValue: number;
}

const props = defineProps<InputCounterProps>();
const emit = defineEmits(['update:modelValue']);

const updateValue = (event: any) => {
    emit('update:modelValue', event.target.value);
};

const incrementValue = () => {
    emit('update:modelValue', props.modelValue + 1);
};

const decrementValue = () => {
    if (props.modelValue > 0) {
        emit('update:modelValue', props.modelValue - 1);
    }
};
</script>

<style scoped>
</style>
