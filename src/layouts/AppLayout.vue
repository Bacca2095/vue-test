<template>
  <main>
    <Navbar />
    <div class="overflow-y-auto">
      <slot></slot>
    </div>
    <Footer />
  </main>
</template>
<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '../components/footers/Footer.vue';
</script>

<style scoped></style>
