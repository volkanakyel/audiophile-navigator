<template>
  <div class="px-7">
    <div class="bg-white max-w-6xl mx-auto">
      <p class="capitalize text-grey-300">Go back</p>
      <BuyProduct
        :image-src="obj.image.desktop"
        :description="obj.description"
        :title="obj.name"
      />
      <div class="flex justify-center">
        <div>
          <h2>Features</h2>
          <p>{{ obj.description }}</p>
        </div>
        <div>
          <h2>In the box</h2>
          <ul>
            <li>Headphones Unit</li>
            <li>Headphones Unit</li>
            <li>Headphones Unit</li>
            <li>Headphones Unit</li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="order-2 md:order-1">
          <img :src="obj.image.desktop" alt="Image 1" class="w-full h-auto" />
        </div>
        <div class="order-1 md:order-2">
          <img :src="obj.image.desktop" alt="Image 2" class="w-full h-auto" />
        </div>
        <div class="col-span-1 md:col-span-2">
          <img :src="obj.image.desktop" alt="Image 3" class="w-full h-auto" />
        </div>
      </div>
      <MarketingService />
    </div>
  </div>
</template>
<script setup lang="ts">
import data from "~/data/data.json";
const obj = data.filter((product) => product.id === 1)[0];
console.log(obj);
</script>
