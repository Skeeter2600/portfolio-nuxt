<template>
  <div class="education-card-body">
    <div class="content-img">
      <img :src="imageSrc" :alt="school + ' Logo'" class="education-card-image" />
    </div>
    <div class="education-card-text">
      <h2 class="education-position-info">{{ degree }}</h2>
      <h2 class="education-position-info">{{ period }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    school: {
      type: String,
      required: true
    },
    degree: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    }
  });
</script>

<style lang="scss" scoped>
</style>