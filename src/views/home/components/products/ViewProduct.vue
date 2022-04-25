<template>
  <article class="mt-20">
    <section class="product-image">
      <img
        v-if="image"
        class="w-full h-full overflow-y-hidden bg-slate-200"
        :src="image"
        alt=""
      />
      <div v-if="!image" class="w-full h-full bg-slate-200">
        <span class="text-slate-600">Photo</span>
      </div>
    </section>
    <section class="product-description mt-4 pb-4">
      <div class="name">
        <p class="text-center font-medium">{{ name }}</p>
      </div>
      <div class="rate">
        <Rate :rate="rate" />
      </div>
      <div class="price font-bold">${{ price }}</div>
    </section>

    <div class="border-b-2 w-full h-1"></div>

    <section class="product-options mx-3 mt-6 flex flex-col">
      <div class="size flex my-2 md:justify-center">
        <p class="my-auto mx-2">TAMAÑO</p>
        <SelectList :listItems="sizes" v-model="size" />
      </div>
      <div class="kit flex my-2 md:justify-center">
        <p class="my-auto mx-2">KIT</p>
        <SelectList :listItems="kits" v-model="kit" />
      </div>
    </section>
    <section class="product-quantity mx-3 flex flex-col mb-3">
      <div class="size flex my-2 md:justify-center">
        <p class="my-auto mx-2">CANTIDAD</p>
        <InputCounter v-model="quantity" />
      </div>
    </section>

    <section class="flex mx-3 flex-col mb-5">
      <Button text="AÑADIR AL CARRITO" variant="black" type="button" />
    </section>

    <div class="border-b-2 w-full h-1"></div>
    <ReadMore title="Descripción" :text="description" />
  </article>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import Rate from '@/components/rate/Rate.vue';
import SelectList from '@/components/select-list/SelectList.vue';
import InputCounter from '@/components/inputs/InputCounter.vue';
import Button from '@/components/Buttons/Button.vue';
import ReadMore from '../ReadMore.vue';

interface ProductProps {
  image: string | null;
  name: string;
  description: string;
  rate: number;
  price: number;
}

const sizes = ref([
  { text: 'SM', available: true },
  { text: 'M', available: true },
  { text: 'L', available: true },
  { text: 'XL', available: true },
  { text: 'XXL', available: true },
]);

const kits = ref([
  { text: 'HOME', available: true },
  { text: 'AWAY', available: true },
  { text: 'THIRD', available: true },
]);

const props = defineProps<ProductProps>();

const { image } = toRefs(props);

const size = ref('');
const kit = ref('');
const quantity = ref(0);
</script>

<style lang="scss" scoped>
.product-image {
  width: 100%;
  height: 20rem;

  & div {
    display: grid;
    place-items: center;

    & span {
      font-size: 2rem;
    }
  }
}

.product-description {
  display: grid;

  .name {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rate {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .price {
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
