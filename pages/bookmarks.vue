<template>
  <div class="sc">
   <div class="space-y-4">
     <typical
       class="text-2xl font-medium text-highlight"
       :steps="[
              '{',
              500,
              '{ Dikkatimi Çekenler }',
            ]"
       :wrapper="'h1'"
     ></typical>
     <p>İnternetten gezinirken dikkatimi çeken yararlı olacağını düşündüğüm linkler</p>
   </div>
    <div class="pt-10 space-y-4">
      <div v-for="bookmark in bookmarks" :key="bookmark._id" class="flex space-x-2 hover:shadow-xl p-4 border-2 border-gray-100 dark:border-gray-800 rounded">
        <a :href="bookmark.link" class="flex space-x-4">
        <div>
          <h1 class="text-xl text-highlight">{{bookmark.title}}</h1>
          <p>{{bookmark.domain}}・{{formatDate(bookmark.created)}}</p>
        </div>
        </a>

      </div>
    </div>
  </div>
</template>

<script>
import {DateTime} from 'luxon'
import {getBookmarks} from '../lib/raindrop'
import typical from 'vue-typical'
export default {
  name: 'Bookmarks',
  data(){
    return{
      bookmarks:null
    }
  },

  components:{
    typical,
  },
  created() {
      this.getBookmarks()
  },
  methods:{
    async getBookmarks(){
      this.bookmarks = await getBookmarks()
    },
    formatDate(date){
      return DateTime.fromISO(date).toRelative()
    }
  }
};
</script>

<style scoped>

</style>
