<template>
  <!-- Gogole icon api -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <!-- <layout-view></layout-view> -->
  <router-view></router-view>
</template>

<script>
import LayoutView from './views/profile/LayoutView.vue';
export default {
  components:{
    LayoutView,
  }
}
</script>

<style>
/* Gogole font api */
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
/* style for google icon */
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

nav a {
  font-weight: bold;
  color: #01303f;
}

nav a.router-link-exact-active {
  color: #02577a;
}
</style>
<!-- jk -->
