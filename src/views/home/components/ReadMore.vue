<template>
  <div class="flex flex-col my-5">
    <p class="text-xl font-medium mx-5">{{ props.title }}</p>
    <span
      class="text-justify text-ellipsis overflow-hidden text-gray-400 mx-5 my-3"
      :class="{
        'h-12': !showMoreText,
        'h-auto': showMoreText,
      }"
    >
      {{ props.text }}</span
    >
    <button class="w-auto text-sm font-semibold" @click="showMoreText = !showMoreText">
      LEER MAS
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface ReadMoreProps {
  title: string;
  text: string;
}

const props = defineProps<ReadMoreProps>();

const showMoreText = ref(false);
</script>

<style scoped></style>
