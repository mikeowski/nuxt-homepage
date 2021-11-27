<template>
  <div>

  </div>
</template>

<script>
import Unsplash from '../lib/unsplash.js'
export default {
  name: 'Photos',
  created() {
    this.getPhotos()
  },
  methods:{
    async getPhotos(){
      console.log( await Unsplash.getPhotos());
    }
  }
}
</script>

<style scoped>

</style>
