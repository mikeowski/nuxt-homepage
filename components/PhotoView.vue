<template>
    <div v-if="!isLoading" class="sc-large">
      <vue-masonry-wall :items="photoData" :options='options'>
        <template v-slot:default="{item}">
            <img :src="item.image"/>
        </template>
      </vue-masonry-wall>
    </div>
</template>

<script>
import VueMasonryWall from 'vue-masonry-wall'
export default {
  name:"PhotoView",
  props:{
    photoData:{
      type:Array,
      required:true,
    },
    isLoading:{
      type:Boolean,
      required:true,
    }
  },
  components:{
    VueMasonryWall
  },
  data(){
    return{
      options: {
        width: 400,
        padding: {
          2: 8,
          default: 12
        },
      },
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
