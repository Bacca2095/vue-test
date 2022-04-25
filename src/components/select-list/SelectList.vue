<template>
    <div class="flex flex-row">
        <label v-for="item in listItems" @click="updateValue(item.text)" :class="{
            'bg-white': !isSelectedItem(item.text),
            'bg-black': isSelectedItem(item.text),
            'text-white': isSelectedItem(item.text),
            'text-black': !isSelectedItem(item.text),
            'hover:bg-gray-200': !isSelectedItem(item.text),
            'hover:text-black': !isSelectedItem(item.text),
        }"
            class="group w-auto m-1 relative border py-2 px-3 flex items-center justify-center text-sm font-medium uppercase focus:outline-none shadow-sm cursor-pointer">
            <input type="radio" :true-value="item.text" class="sr-only" />
            <p>{{ item.text }}</p>
        </label>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Item {
    text: string;
    available: boolean;
}
interface SelectListProps {
    modelValue: string;
    listItems: Item[];
}

const props = defineProps<SelectListProps>();

const { listItems } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const isSelectedItem = (value: string): boolean => props.modelValue === value;

const updateValue = (value: string) => {
    emit('update:modelValue', value);
};
</script>

<style scoped>
</style>
