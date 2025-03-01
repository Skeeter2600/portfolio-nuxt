<template>
  <section id="education">
    <h1 
      class="title" 
    >
      Education
    </h1>
    <EducationCard
        school="RIT"
        degree="B.S. Software Engineering"
        period="August 2019 - May 2024"
        imageSrc="https://media.licdn.com/dms/image/v2/C4E0BAQGnICZxLlhERw/company-logo_200_200/company-logo_200_200/0/1630565170020/rochester_institute_of_technology_logo?e=1749081600&v=beta&t=Sdh5LFkNBCczSd9zXHuAvW9ozMWIivKAva-uu9fI9ts"
    />
  </section>
</template>

<script setup lang="ts">

import EducationCard from "~/components/EducationCard.vue";
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/main.scss';

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