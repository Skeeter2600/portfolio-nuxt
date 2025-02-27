<template>
  <section id="contact">
    <h1 class="title">Contact Me</h1>
    <div class="contact-info-upper-container">
      <div class="contact-info-container">
        <box-icon name='envelope' type='solid' color='#000000' size="default"/>
        <p><a href="mailto:andersbe2600@gmail.com">andersbe2600@gmail.com</a></p>
      </div>
      <div class="contact-info-container">
        <box-icon name='github' type='logo' color='#000000' size="default"/>
        <a href="https://github.com/Skeeter2600" target="_blank" rel="noreferrer">Github</a>
      </div>

      <div class="contact-info-container">
        <box-icon name='linkedin' type='logo' color='#000000' size="default"/>
        <p><a href="https://www.linkedin.com/in/beck-anderson-se/" target="_blank" rel="noreferrer">Linkedin</a></p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

#contact {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.contact-info-upper-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 2rem;
    border-color: rgb(163, 163, 163);
    margin: 2rem 0 2rem 0;
    padding: 0.5rem;
    background-color: #dfdfe5;
}

.contact-info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem;
    background-color: #dfdfe5;
}

.contact-info-container p {
    background-color: #dfdfe5;
    font-size: 2vmin;
}

.contact-icon {
    cursor: default;
    background-color: #dfdfe5;
}

.email-icon {
    height: 2.5rem;
}
</style>