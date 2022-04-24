<template>
  <form class="p-4">
    <Input placeholder="John" label="NOMBRE" />
    <Input placeholder="Doe" label="APELLIDO" />
    <Input placeholder="ejemplo@email.com" label="EMAIL" />
    <Input placeholder="*******" label="CONTRASEÑA" />
    <div class="mx-4">
      <Button text="Registro" />
    </div>
  </form>
</template>

<script setup lang="ts">
import Button from '@/components/Buttons/Button.vue';
import Input from '@/components/Inputs/Input.vue';
</script>

<style></style>
