<template>
  <div 
    class="project-card-body" 
    :class="{ 'fade-in': isVisible }" 
    ref="cardRef"
  >
    <div class="content-img">
      <a v-if="linkUrl" :href="linkUrl" target="_blank" rel="noreferrer">
        <img :src="`/images/${imageSrc}`" :alt="title + ' Image'" class="project-card-image" />
      </a>
      <img v-else :src="`/images/${imageSrc}`" :alt="title + ' Image'" class="project-card-image" />
    </div>
    <div class="project-card-text">
      <p class="project-card-tag">{{ tag }}</p>
      <h2 class="project-card-title">{{ title }}</h2>
      <p class="project-card-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

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

const cardRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
      // Optional: Unobserve after animation is triggered
      if (observer && cardRef.value) {
        observer.unobserve(cardRef.value);
      }
    }
  }, {
    threshold: 0.1 // Trigger when at least 10% of the card is visible
  });

  if (cardRef.value) {
    observer.observe(cardRef.value);
  }
});

onUnmounted(() => {
  if (observer && cardRef.value) {
    observer.unobserve(cardRef.value);
    observer = null;
  }
});
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/main.scss';
  .project-card-body {
    background-color: $clr-surface-a10;
    border: 5px solid $clr-primary-a10;
    margin: 25px 0;
    overflow: hidden;
    width: auto;
    min-width: 350px;
    max-width: 45%;
    border-radius: 35px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  .project-card-image {
    border-bottom: 4px solid $clr-primary-a10;
    width: 100%;
    min-width: 35rem;
    overflow: hidden;
    aspect-ratio: 16/9;
    object-fit: cover;
    display: flex;
    justify-content: center;
    background-color: $clr-surface-a10;
  }

  .project-card-tag {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $clr-surface-a10;
  }

  .project-card-title {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $clr-surface-a10;
    color: $clr-light-a0;
  }

  .project-card-text {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-content: center;
    height: 100%;
    background-color: $clr-surface-a10;
  }

  .project-card-description {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: medium;
    margin: .5rem;
    margin-bottom: 2rem;
    background-color: $clr-surface-a10;
  }

  .project-link-container {
    display: flex;
    align-self: center;
    justify-content: center;
    margin: 1.5rem 0;
    background-color: transparent;
  }
</style>
