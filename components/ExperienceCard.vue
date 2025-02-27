<template>
  <div class="experience-card-body">
    <div class="content-img">
      <img :src="`/images/${imageSrc}`" :alt="company + ' Logo'" class="experience-card-image" />
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

.experience-card-body{
    background-color: var(--clr-surface-a20);
    border: 1px solid var(--clr-primary-a10);
    margin: 25px 0;
    overflow: hidden;
    border-radius: 35px;
    border-width: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
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
    background-color: var(--clr-surface-a20);
}

.experience-card-text {
    display: flex;
    flex-direction: column;
    align-content: center;
    height: 100%;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 3rem;
    width: 70vmin;
    color: white;
    background-color: var(--clr-surface-a20);
}

.experience-card-position-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: var(--clr-surface-a20);
}

.experience-position-info {
    padding-bottom: .5rem;
    font-size: 2.25vmin;
    background-color: var(--clr-surface-a20);
}

.experience-card-description {
    display: flex;
    flex-direction: column;
    white-space: pre-line;
    background-color: var(--clr-surface-a20);
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