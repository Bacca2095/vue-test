<template>
  <a class="rounded-3xl py-1 px-6 w-full my-4">
    <span class="text-sm">{{ props.text }}</span>
  </a>
</template>

<script setup lang="ts">
interface ButtonProps {
  text: string;
}

const props = defineProps<ButtonProps>();
</script>

<style scoped></style>
