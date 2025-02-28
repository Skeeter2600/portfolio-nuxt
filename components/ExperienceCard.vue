<template>
  <div 
    class="experience-card-body" 
    :class="{ 'fade-in': isVisible }" 
    ref="cardRef"
  >
    <div class="content-img">
      <a v-if="websiteUrl" :href="websiteUrl" target="_blank" rel="noreferrer">
        <img :src="`/images/${imageSrc}`" :alt="company + ' Logo'" class="experience-card-image" />
      </a>
      <img v-else :src="`/images/${imageSrc}`" :alt="company + ' Logo'" class="experience-card-image" />
    </div>
    <div class="experience-card-text">
      <div class="experience-card-position-container">
        <h2 class="experience-position-info">{{ position }}</h2>
        <h2 class="experience-position-info">{{ period }}</h2>
      </div>
      <p class="experience-card-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

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
.experience-card-body {
  background-color: var(--clr-surface-a10);
  border: 1px solid var(--clr-primary-a10);
  margin: 25px 0;
  overflow: hidden;
  border-radius: 35px;
  border-width: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.experience-card-image {
  height: auto;
  overflow: hidden;
  aspect-ratio: 1/1;
  max-height: 18vmax;
  display: flex;
  object-fit: cover;
  justify-content: center;
  padding: 3rem;
  border-radius: 60px;
  background-color: var(--clr-surface-a10);
}

.experience-card-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
  padding: 3rem;
  width: 70vmin;
  color: var(--clr-light-a0);
  background-color: var(--clr-surface-a10);
}

.experience-card-position-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: var(--clr-surface-a10);
}

.experience-position-info {
  padding-bottom: .5rem;
  font-size: 3vmin;
  background-color: var(--clr-surface-a10);
}

.experience-card-description {
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  background-color: var(--clr-surface-a10);
}

.experience-card_link_boarder {
  display: flex;
  align-self: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
  background-color: #dfdfe5;
  border-radius: 2rem;
  height: 6vmin;
  width: 50%;
}

.experience-card-link-text {
  background-color: transparent;
  color: black;
  text-decoration: none;
  text-decoration-color: white;
  font-size: 2.5vmin;
  padding: 0.5rem;
}
</style>
