<template>
  <div>
    <Header></Header>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import Header from "~/components/Header.vue";

  export default defineComponent({
    name: 'DefaultLayout'
  })
</script>
