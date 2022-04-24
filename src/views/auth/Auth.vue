<template>
  <Tab :tabs="tabs" />
</template>

<script setup lang="ts">
import Tab from '@/components/Tabs/Tab.vue';
import { AuthActions } from '../../enums/auth-actions.enum';
import { TabData } from '../../interfaces/tab-data.interface';
import SignIn from '@/views/auth/singin/SignIn.vue';
import SignUp from '@/views/auth/singup/SignUp.vue';

const tabs: TabData[] = [
  { action: AuthActions.SIGN_IN, title: 'INGRESO', component: SignIn },
  { action: AuthActions.SIGN_UP, title: 'REGISTRO', component: SignUp },
];
</script>

<style></style>
