<template>
  <article class="flex flex-col my-5">
    <p class="text-2xl font-medium mx-5">También te podría gustar</p>
    <section class="flex flex-row overflow-x-auto overflow-y-hidden">
      <div v-for="product in listSuggestedProducts" class="flex flex-col m-5">
        <div class="w-36 h-40">
          <img v-if="product.image" class="w-full h-full" :src="product.image" />
          <div class="w-full h-full bg-slate-200" v-if="!product.image"></div>
        </div>
        <span class="font-semibold text-xl">{{ product.name }}</span>
        <span class="font-semibold text-xl text-gray-400">${{ product.price }}</span>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { SuggestedProduct } from '../../../../interfaces/suggested-product.interface';

interface SuggestedProductsProps {
  listSuggestedProducts?: SuggestedProduct[];
}

const props = defineProps<SuggestedProductsProps>();
</script>

<style scoped></style>
