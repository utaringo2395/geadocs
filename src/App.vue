<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navguide from './components/navguide.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 px-0" style="border: 1px solid red;">
        <navguide/>
      </div>
      <div class="col-lg-10 px-0" style="border: 1px solid blue;">
        <RouterView />
      </div>
    </div>
  </div>
 
</template>

<style scoped>

</style>
