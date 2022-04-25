<template>
  <div class="relative z-0 mb-6 w-10/12 group mx-auto">
    <label class="text-sm text-gray-300">{{ props.label }}</label>
    <input
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      :type="type ?? 'text'"
      class="py-1 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary"
    />
    <small v-if="invalid" class="float-right text-secondary flex flex-row">
      <img src="../../assets/svg/warning.svg" class="mx-1" alt="" />{{
        error?.toUpperCase()
      }}</small
    >
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface InputProps {
  modelValue: string;
  label: string;
  placeholder: string;
  type?: string;
  invalid: boolean | null;
  error: string | null;
}

const props = defineProps<InputProps>();

const { invalid, error } = toRefs(props);

const emit = defineEmits(['update:modelValue']);
const updateValue = (event: any) => emit('update:modelValue', event.target.value);
</script>

<style scoped></style>
