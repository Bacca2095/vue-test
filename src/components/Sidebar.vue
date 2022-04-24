<template>
    <button class="mt-2 p-2 mr-2 rounded fixed z-50" @click="showSidebar = !showSidebar">
        <img v-if="!showSidebar" src="../assets/svg/menu_auth_logo.svg" alt="menu_auth_logo" width="30" />
        <img v-if="showSidebar" src="../assets/svg/menu_arrow.svg" alt="menu_auth_logo" width="24" />
    </button>
    <Transition name="fade" mode="out-in" :duration="700">
        <aside v-if="showSidebar" class="z-40">
            <div class="overflow-y-auto bg-tertiary">
                <div class="text-white text-9xl text-center">R</div>
                <ul>
                    <li v-for="route in routes" class="flex py-2" @click="setActiveRoute(route.text)">
                        <small class="my-auto" :class="{ active: isActiveRoute(route.text) }"></small>
                        <a class="flex items-center uppercase text-base font-bold rounded-lg text-white">
                            <span class="ml-3">{{ route.text }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const routes = [
    { text: 'Inicio', path: '' },
    { text: 'Servicios', path: '' },
    { text: 'Nuestro Equipo', path: '' },
    { text: 'Portafolio', path: '' },
    { text: 'Contacto', path: '' },
    { text: 'Terminos y condiciones', path: '' },
];

const activeRoute = ref('Inicio');
const showSidebar = ref(false);
const setActiveRoute = (text: string) => {
    activeRoute.value = text;
};
const isActiveRoute = (text: string) => text === activeRoute.value;
</script>

<style lang="scss" scoped>
button {
    right: 0;
}

aside {
    position: fixed;
    width: 100vw;
    height: 100vh;

    & div {
        display: grid;
        grid-template-rows: 20vh 80vh;
        width: 100%;
        height: 100%;

        & ul {
            align-self: center;

            & li {
                cursor: pointer;
                align-self: center;
            }
        }
    }

    & small {
        width: 1.2rem;
    }

    & .active {
        display: inline-block;
        border: 1px solid #37d0c8;
        background-color: #37d0c8;
        width: 1.2rem;
    }
}
</style>
