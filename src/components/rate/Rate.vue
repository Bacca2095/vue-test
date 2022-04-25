<template>
    <div>
        <ul class="flex justify-center">
            <li v-for="_ in rateFull">
                <img class="align-middle" src="../../assets/svg/star_full.svg" alt="" />
            </li>

            <li v-for="_ in rateNull">
                <img class="align-middle" src="../../assets/svg/star_null.svg" alt="" />
            </li>

            <li>
                <span class="mx-2">{{ rate }} de 5</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
interface RateProps {
    rate: number;
}

const props = defineProps<RateProps>();

const rateFull = Number(props.rate);
const rateNull = 5 - rateFull;
</script>

<style scoped>
</style>
