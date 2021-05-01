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
      <!--Form-->
      <form class="space-y-4">
        <textarea rows="3" class="w-full bg-gray-100 border rounded px-2 py-1"> </textarea>



        <div v-if="!$auth.loading" class="flex items-center space-x-4">
          <!--İf user login-->
          <div v-if="$auth.isAuthenticated" class="flex items-center space-x-2">
            <button class="bg-blue-700 rounded px-2 py-1 text-white">Send</button>
            <img :src="$auth.user.picture" class="rounded-full h-12" />
            <h2>{{ $auth.user.name }}</h2>
          </div>

          <!-- show login when not authenticated -->
          <button
            v-if="!$auth.isAuthenticated"
            @click="login"
            class="rounded bg-blue-700 p-2 text-white"
          >
            Giriş yap
          </button>
          <!-- show logout when authenticated -->
          <button
            v-if="$auth.isAuthenticated"
            @click="logout"
            class="text-red-700 text-xl"
          >
            x
          </button>
        </div>
      </form>
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
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }
      return new Date(date).toLocaleDateString('tr', options)
    },
    login() {
      this.$auth.loginWithRedirect()
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: process.env.baseUrl + '/notes',
      })
    },
  },
}
</script>

<style></style>
