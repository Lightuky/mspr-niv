<template>
  <div class="home">
    <div class="bg-white py-4 h4 d-flex justify-content-end">
      <div class="mr-2">Accueil</div>
    </div>
    <div v-for="(item, index) in $options.data" :key="item">
      {{ index }}. {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>