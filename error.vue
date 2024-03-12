<template>
  <div>
    <p>{{ error.statusCode }}</p>
    <p>Ooops</p>
    <p>{{ error.message }}</p>
  </div>
</template>

<script setup>
defineProps < {
  error: Error
} > ();
</script>

<style lang="scss" scoped></style>
