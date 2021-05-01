<template>
  <div class="sc space-y-20 pb-4">
   <div class="space-y-4">
     <h1 class="text-2xl font-medium text-highlight">
       Kendime Notlar
     </h1>
     <p>
       Bu sayfada yazılım tricklerini ve öğrengiğim yeni teknolojileri paylaşıcağım
     </p>
   </div>

    <ul class="space-y-8">
      <li v-for="article of articles" :key="article.slug" >

        <nuxt-link :to="`/notes/${article.slug}`">
          <h2 class="text-xl font-bold underline hover:text-green-700">
            {{article.title.toUpperCase()}}
           <!-- <hr class="w-full border-gray-600 dark:border-gray-400"/> -->
          </h2>

          <p class="font-light text-lg">{{article.description}}</p>
          <p class="text-sm py-2">{{formatDate(article.updatedAt)}}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData({ $content, params }) {
    let articles = await $content('articles', params.slug).fetch()
    articles = articles.sort((a, b) => {
      return a.created > b.created ? -1 : 1
    })
    return { articles }
  },
  methods: {
    formatDate(date) {
      console.log(date)
      const options = { year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute:'numeric' }
      return new Date(date).toLocaleDateString('tr', options)
    }
  }


}
</script>

<style scoped></style>
