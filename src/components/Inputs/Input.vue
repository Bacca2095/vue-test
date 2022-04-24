<template>
  <div class="relative z-0 mb-6 w-10/12 group mx-auto">
    <label class="text-md text-gray-300">{{ props.label }}</label>
    <input
      class="py-1.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
  placeholder: String,
  type: String,
});
</script>

<style></style>
