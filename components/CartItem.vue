<template>
  <div class="w-full">
    <div class="flex justify-between items-center">
      <div class="flex gap-4 items-center">
        <img
          src="../assets/images/cart/image-xx59-headphones.jpg"
          width="64"
          height="64"
          alt="product"
          class="rounded-lg"
        />
        <div>
          <p>XX99 MK II</p>
          <p>$ 2,999</p>
        </div>
      </div>
      <div v-if="isSummarySection" class="flex gap-2 bg-grey-100 py-2 px-3">
        <p>-</p>
        <p>1</p>
        <p>+</p>
      </div>
      <div v-else>
        <p>x{{ itemQuantity }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isSummarySection: {
    type: Boolean,
    required: false,
    default: false,
  },
  itemQuantity: {
    type: Number,
    required: false,
    default: 1,
  },
});
</script>

<style scoped></style>
