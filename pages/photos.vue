<template>
  <div class='sc-large'>
    <Loading :is-loading='isLoading'/>

    <div v-if='!  isLoading' class='grid lg:grid-cols-3 sm:grid-cols-2'>
      <div v-for='photo in data'>
        <a :href='photo.links.html'>
        <img :src='photo.urls.regular' :alt='photo.alt-description' >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Unsplash from '../lib/unsplash.js'
import Loading from '../components/Loading'
export default {
  name: 'Photos',
  data(){
    return{
      data:[],
      isLoading: true
    }
  },
  components:{
    Loading,
  },
  created() {
    this.getPhotos()
  },

  methods:{
    async getPhotos(){
      this.data = await Unsplash.getPhotos()
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>

</style>
