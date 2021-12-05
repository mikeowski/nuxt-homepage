<template>
  <div class="sc space-y-20 pb-4">
    <div class="space-y-4 text-center md:text-left">
      <typical
        class="text-2xl font-medium text-highlight"
        :steps="['{', 500, '{ Notlar }']"
        :wrapper="'h1'"
      ></typical>
      <p>
        Bu sayfada yazılım tricklerini ve öğrendiğim yeni teknolojileri
        paylaşıcağım
      </p>
    </div>

    <ul class="space-y-8">
      <li v-for="article of articles" :key="article.slug">
        <nuxt-link :to="`/notes/${article.slug}`">
          <h2 class="text-xl font-bold hover:text-green-700">
            {{ article.title.toUpperCase() }}
            <!-- <hr class="w-full border-gray-600 dark:border-gray-400"/> -->
          </h2>

          <p class="font-light text-lg">{{ article.description }}</p>
          <p class="text-sm py-2">{{ formatDate(article.created) }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import typical from 'vue-typical'
export default {
  name: 'Blog',
  components: {
    typical,
  },
  async asyncData({ $content, params }) {
    let articles = await $content('articles', params.slug).fetch()
    articles = articles.sort((a, b) => {
      return a.created > b.created ? -1 : 1
    })
    return { articles }
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }
      return new Date(date).toLocaleDateString('tr', options)
    },
  },
}
</script>

<style scoped></style>
