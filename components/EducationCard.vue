<template>
  <div class="education-card-body">
    <div class="content-img">
      <img :src="`/images/${imageSrc}`" :alt="school + ' Logo'" class="education-card-image" />
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

.education-card-body {
  background-color: var(--clr-surface-a10);;
  border: 5px solid var(--clr-primary-a10);
  margin: 25px 0;
  width: 75%;
  overflow: hidden;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.education-card-image {
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

.education-card-text {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: medium;
  margin: .5rem;
  padding-bottom: 3rem;
  background-color: var(--clr-surface-a10);
}

.education-position-info {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: x-large;
  background-color: var(--clr-surface-a10);
  color: var(--clr-light-a0);
}
</style>