<template>
  <form class="p-4" @submit.prevent="onSubmit">
    <Input v-model="$v.email.$model" placeholder="ejemplo@email.com" label="EMAIL" type="email"
      :invalid="$v.email.$dirty ? $v.email.$invalid : null" :error="$v.email.$errors[0]?.$validator" />

    <Input v-model="$v.password.$model" placeholder="*******" label="CONTRASEÑA" type="password"
      :invalid="$v.password.$dirty ? $v.password.$invalid : null" :error="$v.password.$errors[0]?.$validator" />

    <div class="mx-4">
      <Button text="Ingreso" />
    </div>
  </form>
</template>

<script setup lang="ts">
import Button from '@/components/Buttons/Button.vue';
import Input from '@/components/Inputs/Input.vue';
import { reactive, toRef } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useDefaultStore } from '../../../store/default-store';
import { RoutesName } from '../../../enums/routes-name.enum';
import { useRouter } from 'vue-router';

const signInForm = reactive({
  email: '',
  password: '',
});

const rules = {
  email: { required, email },
  password: { required },
};
const $v = useVuelidate(rules, {
  email: toRef(signInForm, 'email'),
  password: toRef(signInForm, 'password'),
});

const store = useDefaultStore();

const router = useRouter();

const onSubmit = async (event: Event) => {
  const result = await $v.value.$validate();

  if (result) {
    store.signIn(signInForm.email);
    store.$state.showSuccessLogo = true;
    setTimeout(() => {
      store.$state.showSuccessLogo = true;
      router.push({ name: RoutesName.HOME });
    }, 2000);
  }
};
</script>

<style>
</style>
