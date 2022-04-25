<template>
    <nav class="w-full bg-white border-gray-200 shadow-md flex items-center fixed z-50">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a class="flex items-center mx-4">
                <img src="../assets/svg/logo_home.svg" alt="" />
            </a>

            <div class="w-auto">
                <ul class="flex flex-row text-sm font-medium">
                    <li>
                        <a href="#" class="block py-2 px-1 md:px-2 rounded" aria-current="page"><img
                                src="../assets/svg/search.svg" alt="" width="40" /></a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-1 md:px-2 rounded" aria-current="page"><img
                                src="../assets/svg/like.svg" alt="" width="40" /></a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-1 md:px-2 rounded" aria-current="page"><img
                                src="../assets/svg/shopping.svg" alt="" width="40" /></a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-1 md:px-2 rounded" aria-current="page"><img
                                src="../assets/svg/menu_home.svg" alt="" width="40" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
nav {
    height: 5rem !important;
}
</style>
