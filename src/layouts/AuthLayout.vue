<template>
  <main class="auth-layout bg-tertiary">
    <img class="fixed top-0 top z-0" src="../assets/svg/background/top.svg" />
    <img class="fixed right-0 right z-0" src="../assets/svg/background/right.svg" />
    <img class="fixed -left-1/4 left z-0" src="../assets/svg/background/left.svg" />
    <img class="my-auto mx-auto mt-10 z-10" src="../assets/svg/logo.svg" />
    <!--  <div class="text-white text-9xl">R</div> -->
    <slot></slot>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.auth-layout {
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 25vh 75vh;
  place-items: center;
}

.top {
  left: 50%;
  transform: translateX(-50%);
}

.right {
  top: 60%;
  transform: translateY(-50%);
}

.left {
  top: 50%;
  transform: translateY(-50%);
}
</style>
