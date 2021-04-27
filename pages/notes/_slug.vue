<template>
  <div class="relative">
  <div class="top-0 right-10 absolute dark:text-red-400 dark:text-red-700 text-green-700 font-bold">{{formatDate(article.updatedAt)}}</div>
  <div class="sc space-y-4 pb-8">
    <h1 class="text-4xl uppercase text-highlight">{{ article.title }}</h1>
    <h2 class="text-2xl text-gray-400">
      #{{ article.description }}
    </h2>
    <hr/>
    <nuxt-content :document="article"/>
  </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute:'numeric' }
      return new Date(date).toLocaleDateString('tr', options)
    }
  }
}
</script>

<style >
.nuxt-content h1 {
  @apply font-bold text-2xl py-2 uppercase}
.nuxt-content h2 {
  @apply font-bold text-xl  py-2 uppercase}
.nuxt-content h3 {
  @apply font-bold  py-2 uppercase}
.nuxt-content a:hover{
  @apply text-red-400 }
.nuxt-content a {
  @apply font-bold}
.nuxt-content p, li {
  @apply tracking-wide text-lg px-4}

</style>
