<template>
  <form class="p-4" @submit.prevent="onSubmit">
    <Input v-model="$v.firstName.$model" placeholder="John" label="NOMBRE"
      :invalid="$v.firstName.$dirty ? $v.firstName.$invalid : null"
      :error="$v.firstName.$errors[0]?.$validator ?? null" />
    <Input v-model="$v.lastName.$model" placeholder="Doe" label="APELLIDO"
      :invalid="$v.lastName.$dirty ? $v.lastName.$invalid : null" :error="$v.lastName.$errors[0]?.$validator ?? null" />
    <Input v-model="$v.email.$model" placeholder="ejemplo@email.com" label="EMAIL"
      :invalid="$v.email.$dirty ? $v.email.$invalid : null" :error="$v.email.$errors[0]?.$validator ?? null" />
    <Input v-model="$v.password.$model" placeholder="*******" label="CONTRASEÑA"
      :invalid="$v.password.$dirty ? $v.password.$invalid : null" :error="$v.password.$errors[0]?.$validator ?? null" />
    <div class="mx-4">
      <Button text="Registro" type="submit" />
    </div>
  </form>
</template>

<script setup lang="ts">
import Button from '@/components/buttons/Button.vue';
import Input from '@/components/inputs/Input.vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { reactive, toRef } from 'vue';
import { useRouter } from 'vue-router';
import { RoutesName } from '../../../../enums/routes-name.enum';
import { useDefaultStore } from '../../../../store/default-store';

const signUpForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
});

const rules = {
  firstName: { required },
  lastName: { required },
  email: { required, email },
  password: { required },
};
const $v = useVuelidate(rules, {
  firstName: toRef(signUpForm, 'firstName'),
  lastName: toRef(signUpForm, 'lastName'),
  email: toRef(signUpForm, 'email'),
  password: toRef(signUpForm, 'password'),
});

const store = useDefaultStore();

const router = useRouter();

const onSubmit = async (event: Event) => {
  const result = await $v.value.$validate();

  if (result) {
    store.signIn(signUpForm.email);
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
