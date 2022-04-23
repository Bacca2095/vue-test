<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="route.meta.layout || 'div'">
      <component :is="Component" />
    </component>
  </router-view>
</template>

<style lang="scss" >
@import './assets/scss/index.scss';
</style>
