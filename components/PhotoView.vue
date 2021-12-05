<template>
    <div v-if="!isLoading" class="grid lg:grid-cols-3 sm:grid-cols-2 sc-large">
      <div v-for="photo in photoData" :key="photo.id">
        <a :href="photo.href">
          <img :src="photo.src" :alt="photo.description" />
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name:"PhotoView",
  props:{
    photoData:{
      type:Array,
      required:true,
    }
  },
  data(){
    return{
      photoData:[],
    }
  },
  created() {

  },
  methods:{

  }
}
</script>

<style scoped>

</style>
