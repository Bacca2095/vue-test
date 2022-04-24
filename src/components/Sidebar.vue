<template>
    <button class="mt-2 p-2 ml-2 rounded fixed z-50" @click="showSidebar = !showSidebar">
        <img v-if="!showSidebar" src="../assets/svg/menu_auth_logo.svg" alt="menu_auth_logo" width="30" />
        <img v-if="showSidebar" src="../assets/svg/menu_arrow.svg" alt="menu_auth_logo" width="24" />
    </button>

    <aside v-if="showSidebar" class="z-40">
        <div class="overflow-y-auto py-4 bg-tertiary">
            <ul class="my-16">
                <li v-for="route in routes" class="my-4 flex">
                    <small class="my-auto" :class="{ active: route.active }"></small>
                    <a class="flex items-center py-2 uppercase text-base font-bold rounded-lg text-white">
                        <span class="ml-3">{{ route.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const routes = [
    { name: 'Inicio', path: '', active: true },
    { name: 'Servicios', path: '', active: false },
    { name: 'Nuestro Equipo', path: '', active: false },
    { name: 'Portafolio', path: '', active: false },
    { name: 'Contacto', path: '', active: false },
    { name: 'Terminos y condiciones', path: '', active: false },
];

const showSidebar = ref(false);
</script>

<style lang="scss" scoped>
aside {
    position: fixed;

    & div {
        width: 100vw;
        height: 100vh;
    }

    & small {
        width: 1.2rem;
    }

    & .active::before {
        display: inline-block;
        content: '';
        border: 1px solid #37d0c8;
        width: 1.2rem;
    }
}
</style>
