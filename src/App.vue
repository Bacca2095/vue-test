<template>
  <Sidebar />
  <router-view v-slot="{ Component }">
    <component :is="route.meta.layout || 'div'">
      <component :is="Component" />
    </component>
  </router-view>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue';

const route = useRoute();
</script>

<style lang="scss">
@import './assets/scss/index.scss';
</style>
