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
        class="flex space-x-2 hover:shadow-xl p-4 border-2 border-gray-100 dark:border-gray-800 rounded"
      >
        <a :href="bookmark.link" class="flex space-x-4">
          <div>
            <h1 class="text-xl text-highlight">{{ bookmark.title }}</h1>
            <p>{{ bookmark.domain }}・{{ formatDate(bookmark.created) }}</p>
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

<style scoped></style>
