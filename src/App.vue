<template>
  <div id="app" class="vh-100">
    <div class="row h-100 m-0">
      <div class="col-2 p-0 d-flex flex-column">
        <router-link to="/" class="nav-link h3 py-1 my-5 text-white">Accueil</router-link>
        <router-link to="/calculator" class="nav-link h3 py-1 my-5 text-white">Calculatrice</router-link>
      </div>
      <div class="col-10 p-0">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import data from '@/assets/json/data.json'
export default {
  meds: data,
  mounted () {
    this.$router.push({ name: 'Home'});
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app .col-2 {
  background-color: #0596DE;
}

#app .col-10 {
  background-color: #E5E5E5;
}

#app .col-2 .nav-link:hover {
  color: #8cefff!important;
}

#app .router-link-active {
  font-weight: bolder;
  color: #8cefff!important;
}

</style>