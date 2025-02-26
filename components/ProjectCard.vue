<template>
  <div class="project-card-body">
    <div class="content-img">
      <img :src="'assets/images/' + imageSrc" :alt="title + ' Image'" class="project-card-image" />
    </div>
    <div class="project-card-text">
      <p class="tag">{{ tag }}</p>
      <h2>{{ title }}</h2>
      <p class="project-card-description">{{ description }}</p>
      <div v-if="linkUrl" class="project-card_link_boarder">
        <a class="project-card-link-text" :href="linkUrl" target="_blank" rel="noreferrer">{{ linkText }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    title: String,
    tag: String,
    description: String,
    imageSrc: String,
    linkUrl: String,
    linkText: {
      type: String,
      default: ''
    }
  });
</script>

<style lang="scss" scoped>
</style>