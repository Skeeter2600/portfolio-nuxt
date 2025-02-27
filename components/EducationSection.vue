<template>
  <section id="education">
    <h1 class="title">Education</h1>
    <EducationCard
        school="RIT"
        degree="B.S. Software Engineering"
        period="August 2019 - May 2024"
        imageSrc="RIT.png"
    />
  </section>
</template>

<script setup lang="ts">

import EducationCard from "~/components/EducationCard.vue";
</script>

<style lang="scss" scoped>
#education {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.education-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 80rem;
}
</style>