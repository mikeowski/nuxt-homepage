<template>
  <div>
    <Loading :is-loading="isLoading" />
    <div v-if="!isLoading" class="sc mb-8 flex justify-between space-x-8">
      <div class="unsplashContainer">
        <a
          href="https://unsplash.com/@mahykisreal"
          class="hover:underline dark:text-gray-400"
          >Unsplash Views</a
        >
        <div class="bold text-2xl sm:text-4xl">
          {{ statictics.views.total }}
        </div>
      </div>
      <div class="unsplashContainer">
        <a
          href="https://unsplash.com/@mahykisreal"
          class="hover:underline dark:text-gray-400"
          >Unsplash Downloads</a
        >
        <div class="bold text-2xl sm:text-4xl">
          {{ statictics.downloads.total }}
        </div>
      </div>
    </div>
    <PhotoView :photoData="photoData" :isLoading="isLoading" />
  </div>
</template>

<script>
import PhotoView from '../components/PhotoView'
import Unsplash from '../lib/unsplash.js'
import Loading from '../components/Loading'
export default {
  name: 'Photos',
  data() {
    return {
      statictics: [],
      photoData: [],
      isLoading: true,
    }
  },
  components: {
    Loading,
    PhotoView,
  },
  created() {
    this.getData()
  },

  methods: {
    async getData() {
      this.statictics = await Unsplash.getDetails()
      const photos = await Unsplash.getPhotos()
      photos.forEach((v) => {
        this.photoData.push({
          image: v.urls.regular,
          href: v.links.html,
          description: v.description,
        })
      })
      this.isLoading = false
    },
  },
}
</script>

<style scoped></style>
