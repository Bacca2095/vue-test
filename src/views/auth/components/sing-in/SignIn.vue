<template>
  <form class="p-4" @submit.prevent="onSubmit">
    <Input v-model="$v.email.$model" placeholder="ejemplo@email.com" label="EMAIL" type="email"
      :invalid="$v.email.$dirty ? $v.email.$invalid : null" :error="$v.email.$errors[0]?.$validator ?? null" />

    <Input v-model="$v.password.$model" placeholder="*******" label="CONTRASEÑA" type="password"
      :invalid="$v.password.$dirty ? $v.password.$invalid : null" :error="$v.password.$errors[0]?.$validator ?? null" />

    <div class="text-center">
      <Checkbox v-model="$v.subscribeNewsLetter.$model" class="mx-auto" label="Suscribirse al Newsletter" />
    </div>

    <div class="mx-4">
      <Button text="Ingreso" type="submit" variant="secondary-gradient" />
    </div>

    <div class="text-center pb-3">
      <LinkButton text="Olvide contraseña" />
    </div>
  </form>
</template>

<script setup lang="ts">
import Button from '@/components/buttons/Button.vue';
import Input from '@/components/inputs/Input.vue';
import { reactive, toRef } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useRouter } from 'vue-router';
import { useDefaultStore } from '../../../../store/default-store';
import { RoutesName } from '../../../../enums/routes-name.enum';
import Checkbox from '@/components/checkboxes/Checkbox.vue';
import LinkButton from '@/components/buttons/LinkButton.vue';

const signInForm = reactive({
  email: '',
  password: '',
  subscribeNewsLetter: false,
});

const rules = {
  email: { required, email },
  password: { required },
  subscribeNewsLetter: {},
};
const $v = useVuelidate(rules, {
  email: toRef(signInForm, 'email'),
  password: toRef(signInForm, 'password'),
  subscribeNewsLetter: toRef(signInForm, 'subscribeNewsLetter'),
});

const store = useDefaultStore();

const router = useRouter();

const onSubmit = async (event: Event) => {
  const result = await $v.value.$validate();

  if (result) {
    store.signIn(signInForm.email);
    store.$state.showSuccessLogo = true;

    /* setTimeout(() => {
      store.$state.showSuccessLogo = true;
      router.push({ name: RoutesName.HOME });
    }, 2000); */
  }
};
</script>

<style scoped>
</style>
