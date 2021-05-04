<template>
  <div class="relative pt-8">

    <div class="sc space-y-4 pb-8">
      <div>
        <h1 class="text-6xl uppercase text-highlight">{{ article.title }}</h1>
        <h2 class="text-2xl text-gray-400">#{{ article.description }}</h2>
        <div
          class="dark:text-red-400 dark:text-red-700 text-green-700 font-bold"
        >
          {{ formatDate(article.created) }}
        </div>
        <hr />
        <nuxt-content
          :document="article"
          class="prose lg:prose-lg dark:prose-dark"
        />
      </div>
    <Form/>
    </div>
  </div>
</template>

<script>
import Form from "../../components/Form";
export default {
  components: { Form },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
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

<style></style>
