<template>
  <div class="sc">
    <div class="space-y-4 text-center md:text-left">
      <typical
        class="text-2xl font-medium text-highlight text-center md:text-left"
        :steps="['{', 500, '{ Dikkatimi Çekenler }']"
        :wrapper="'h1'"
      ></typical>
      <p>
        İnternetten gezinirken dikkatimi çeken yararlı olacağını düşündüğüm
        linkler
      </p>
    </div>
    <Loading :is-loading="isLoading" />
    <div v-if="!isLoading" class="pt-10 space-y-4 pb-4">
      <div
        v-for="bookmark in bookmarks"
        :key="bookmark._id"
        class="flex space-x-2 hover:shadow-xl p-4 border-2 border-gray-100 dark:border-gray-800"
      >
        <a :href="bookmark.link" class="flex space-x-4 bookmark">
          <div>
            <span class="text-xl text-highlight">{{ bookmark.title }}</span>
            <span>{{ bookmark.domain }}・{{ formatDate(bookmark.created) }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import typical from 'vue-typical'
import Loading from '../components/Loading'
import { getBookmarks } from '../lib/raindrop'
export default {
  name: 'Bookmarks',
  components: {
    typical,
    Loading,
  },
  data() {
    return {
      bookmarks: null,
      isLoading: true,
    }
  },
  created() {
    this.getBookmarks()
  },
  methods: {
    async getBookmarks() {
      this.bookmarks = await getBookmarks()
      this.isLoading = false
    },
    formatDate(date) {
      return DateTime.fromISO(date).toRelative()
    },
  },
}
</script>

<style scoped>

.bookmark {
    padding: 12px 24px;
    background-color: white;
    position: relative;
    overflow: hidden;
}
.bookmark{
  @apply
  dark:bg-gray-900 
}

.bookmark span {
    color: black;
    position: relative;
    z-index: 1;
    transition: color 0.6s cubic-bezier(0.53, 0.21, 0, 1);
}

.bookmark span{
  @apply dark:text-gray-400;
}
.bookmark::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    width: 100%;
    height: 100%;
    transition: transform 0.8s cubic-bezier(0.53, 0.21, 0, 1);
}

.bookmark::before{
  @apply dark:bg-green-600
  bg-green-300
  
}

.bookmark:hover span {
    @apply dark:text-gray-100
    text-gray-900;
}

.bookmark:hover::before {
    transform: translate(0, -50%);
}

</style>
