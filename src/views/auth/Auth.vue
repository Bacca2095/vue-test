<template>
  <div class="z-20">
    <Tab :tabs="tabs" :selected="action" v-if="!showSuccessLogo" />
    <Transition name="fade" mode="out-in">
      <SuccessNotification v-if="showSuccessLogo" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, toRef } from 'vue';
import Tab from '@/components/tabs/Tab.vue';
import SignIn from '@/views/auth/components/sing-in/SignIn.vue';
import SignUp from '@/views/auth/components/sing-up/SignUp.vue';
import { AuthActions } from '../../enums/auth-actions.enum';
import { TabData } from '../../interfaces/tab-data.interface';
import { useDefaultStore } from '../../store/default-store';
import SuccessNotification from '../../components/notifications/SuccessNotification.vue';

const route = useRoute();
const store = useDefaultStore();

const showSuccessLogo = toRef(store, 'getShowSuccessLogo');

const action = ref(route.params.action);

const tabs: TabData[] = [
  { action: AuthActions.SIGN_IN, title: 'INGRESO', component: SignIn },
  { action: AuthActions.SIGN_UP, title: 'REGISTRO', component: SignUp },
];
</script>

<style scoped>
</style>
