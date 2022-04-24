<template>
  <div class="z-20">
    <Tab :tabs="tabs" :selected="action" v-if="!showSuccessLogo" />
    <Transition name="fade" mode="out-in">
      <div v-if="showSuccessLogo"
        class="success-logo w-3/4 md:w-2/6 lg:w-3/12 bg-secondary h-4/6 rounded-b-md shadow-md z-10">
        <div class="mt-16">
          <p class="text-center text-xl mb-6">SUCCESS</p>
          <img class="mx-auto" src="../../assets/svg/success_logo.svg" alt="success-logo" width="110" />
        </div>
      </div>
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
.success-logo {
  display: grid;
}
</style>
