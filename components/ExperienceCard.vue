<template>
  <div class="experience-card-body">
    <div class="content-img">
      <img :src="imageSrc" :alt="company + ' Logo'" class="experience-card-image" />
    </div>
    <div class="experience-card-text">
      <div class="experience-card-position-container">
        <h2 class="experience-position-info">{{ position }}</h2>
        <h2 class="experience-position-info">{{ period }}</h2>
      </div>
      <p class="experience-card-description">{{ description }}</p>
      <div v-if="websiteUrl" class="experience-card_link_boarder">
        <a class="experience-card-link-text" :href="websiteUrl" target="_blank" rel="noreferrer">Website</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    company: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    websiteUrl: {
      type: String,
      default: ''
    }
  });
</script>

<style lang="scss" scoped>
</style>