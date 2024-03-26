<template>
  <div class="mt-14 flex justify-center md:items-center flex-col md:flex-row gap-8">
    <img class="w-full rounded-lg max-w-2xl md:w-1/2" :src="imageSrc" alt="" />
    <div class="flex flex-col justify-center items-center md:items-start md:w-1/2">
      <p v-if="newItem" class=" text-orange uppercase">New Product</p>
      <p class="uppercase text-lg text-center md:text-left">
        {{ title }}
      </p>
      <p class="text-center md:text-left mt-8">
        {{ description }}
      </p>
      <p class="text-m mt-8">$ {{ price }}</p>
      <div class="mt-10">
        <button class="uppercase bg-orange p-3 my-4 text-white" @click="productCta">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  newItem: boolean;
}>();

const emit = defineEmits<{
  (e: 'productCta'): void;
}>();

const productCta = () => {
  emit("productCta");
};
</script>

<style scoped></style>
