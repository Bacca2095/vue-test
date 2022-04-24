<template>
  <main class="auth-layout bg-tertiary">
    <div class="text-white text-9xl">R</div>
    <slot></slot>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.auth-layout {
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 20vh 80vh;
  place-items: center;
}
</style>
