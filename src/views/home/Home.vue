<template>
    <div>
        <ViewProduct :image="product.image" :name="product.name" :description="product.description" :rate="product.rate"
            :price="product.price" />
        <SuggestedProducts :listSuggestedProducts="suggestedProducts" />
    </div>
</template>

<script setup lang="ts">
import ViewProduct from './components/products/ViewProduct.vue';
import SuggestedProducts from './components/products/SuggestedProducts.vue';
import { ref } from 'vue';
import { SuggestedProduct } from '../../interfaces/suggested-product.interface';

const product = ref({
    image: null,
    name: 'test',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae facilis nulla nisi, sit explicabo voluptatum ipsum amet repudiandae excepturi eveniet sed est! Blanditiis inventore fugiat architecto, repellendus hic repudiandae?',
    rate: 4,
    price: 200,
});

const suggestedProducts = ref<SuggestedProduct[]>([
    { image: null, name: 'Product One', price: 140 },
    { image: null, name: 'Product Two', price: 170 },
    { image: null, name: 'Product', price: 190 },
]);
</script>

<style scoped>
</style>
