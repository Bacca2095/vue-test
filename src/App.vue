<template>
  <Sidebar />
  <router-view v-slot="{ Component }">
    <component :is="route.meta.layout || 'div'">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
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
