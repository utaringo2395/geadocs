<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navguide from './components/navguide.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 position-fixed px-0 navbarColumn" style="background: #212529;">
        <navguide/>
      </div>
      <div class="col-lg-10 offset-lg-2 px-0" style="height: 100vh; background: #fff;">
        <RouterView />
      </div>
    </div>
  </div>
 
</template>

<style scoped lang="scss">

</style>
