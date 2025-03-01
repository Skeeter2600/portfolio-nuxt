<template>
  <section id="contact">
    <h1 
      class="title" 
    >
      Contact Me
    </h1>
    <div 
      class="contact-info-upper-container"
    >
      <div class="contact-info-container ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png"
          alt="Email icon"
          class="icon contact-icon"
        />
        <p class="nav-links"><a href="mailto:andersbe2600@gmail.com">andersbe2600@gmail.com</a></p>
      </div>
      <div class="contact-info-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="Github Icon"
          class="icon contact-icon"
        />
        <p class="nav-links"><a href="https://github.com/Skeeter2600" target="_blank" rel="noreferrer">Github</a></p>
      </div>

      <div class="contact-info-container">
        <img
          src="https://img.icons8.com/ios11/512/linkedin.png"
          alt="LinkedIn Icon"
          class="icon contact-icon"
        />
        <p class="nav-links"><a href="https://www.linkedin.com/in/beck-anderson-se/" target="_blank" rel="noreferrer">Linkedin</a></p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  @import '@/assets/scss/main.scss';
  
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
      border-color: $clr-surface-a10;
      margin: 2rem 0 2rem 0;
      padding: 0.5rem;
      background-color: $clr-surface-a10;
  }

  .contact-info-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin: 1rem;
      background-color: $clr-surface-a10;
  }

  .contact-info-container p {
      background-color: $clr-surface-a10;
      font-size: 2vmin;
  }

  .contact-icon {
      cursor: default;
      color: $clr-surface-a40;
      background-color: $clr-surface-a10;
      height: 2.5rem;
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    
    li {
      background-color: transparent;
    }
    
    a {
      color: $clr-surface-a50;
      text-decoration: none;
      font-weight: 500;
      position: relative;
      padding: 0.5rem 0;
      background-color: transparent;
      transition: color 0.3s ease;
      white-space: nowrap;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: $clr-primary-a30;
        transition: width 0.3s ease;
      }
      
      &:hover {
        color: $clr-light-a0;
        text-decoration: none;
        
        &::after {
          width: 100%;
        }
      }
    }
  }
</style>