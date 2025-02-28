<template>
  <div class="project-card-body">
    <div class="content-img">
      <img :src="`/images/${imageSrc}`" :alt="title + ' Image'" class="project-card-image" />
    </div>
    <div class="project-card-text">
      <p class="project-card-tag">{{ tag }}</p>
      <h2 class="project-card-title">{{ title }}</h2>
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

.project-card-body{
    background-color: var(--clr-surface-a10);
    border: 5px solid var(--clr-primary-a10);; /* Add subtle border */
    margin: 25px 0;
    overflow: hidden;
    width: auto;
    min-width: 350px;
    max-width: 45%;
    border-radius: 35px;
}

.project-card-image {
    border-bottom: 4px solid var(--clr-primary-a10);;
    width: 100%;
    min-width: 300px;
    overflow: hidden;
    aspect-ratio: 16/9;
    object-fit: cover;
    display: flex;
    justify-content: center;
    background-color: var(--clr-surface-a10);
}

.project-card-tag {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--clr-surface-a10);
}

.project-card-title {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--clr-surface-a10);
    color: var(--clr-light-a0);
}

.project-card-text {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-content: center;
    height: 100%;
    background-color: var(--clr-surface-a10);
}

.project-card-description {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: medium;
    margin: .5rem;
    background-color: var(--clr-surface-a10);
}

.project-card_link_boarder {
    display: flex;
    align-self: center;
    justify-content: center;
    gap: 1rem;
    margin: 1rem;
    background-color: #dfdfe5;
    border-radius: 2rem;
    height: 6vmin;
    width: 60%;
    
}

.project-card-link-text {
    background-color: transparent;
    color: black;
    text-decoration: none;
    text-decoration-color: white;
    font-size: 2.5vmin;
    padding: 0.5rem;
    
}
</style>