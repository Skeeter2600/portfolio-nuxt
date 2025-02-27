<template>
  <div class="project-card-body">
    <div class="content-img">
      <img :src="`/images/${imageSrc}`" :alt="title + ' Image'" class="project-card-image" />
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

.project-card-body{
    background-color: #FFFFFF;
    border: 5px solid #dfdfe5; /* Add subtle border */
    margin: 25px 0;
    overflow: hidden;
    width: auto;
    min-width: 350px;
    max-width: 45%;
    border-radius: 35px;
}

.project-card-image {
    border-bottom: 4px solid #dfdfe5;
    width: 100%;
    min-width: 300px;
    overflow: hidden;
    aspect-ratio: 16/9;
    object-fit: cover;
    display: flex;
    justify-content: center;
}

.project-card-text {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-content: center;
    height: 100%;
}

.project-card-description {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: medium;
    margin: .5rem;
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