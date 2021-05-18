<template>
  <div>
    <form class="space-y-4">
      <textarea rows="3" class="w-full bg-gray-100 border border-gray-800  dark:border-gray-500  rounded px-2 py-1 dark:bg-gray-800" v-model="currentCommit"> </textarea>

      <div v-if="!$auth.loading" class="flex items-center space-x-4">
        <!--İf user login-->
        <div v-if="$auth.isAuthenticated" class="flex items-center space-x-2">
          <button class="bg-blue-700 rounded px-2 py-1 text-white" @click.prevent="onsubmit">Send</button>
          <img :src="$auth.user.picture" class="rounded-full h-12" :alt="$auth.user.name"/>
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
      <!--Comments-->
     <Comments :comments="comments" :delete-comments="deleteComment" :userValidator="userValidator"/>
    </form>
  </div>
</template>

<script>
import Comments from "./Comments";
export default {
  name:'Form',
  components: { Comments },
  data(){
    return{
      currentCommit:'',
      comments:null,
    }
  },
  mounted() {
    this.fetchComments()
  },
  methods:{
    // Log the user in
    login() {
      this.$auth.loginWithRedirect()
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: process.env.baseUrl + '/notes',
      })
    },
    //send Commit to the redis
    async onsubmit(){
      const userToken = await this.$auth.getTokenSilently()

      const text =  this.currentCommit
      const url = process.env.baseUrl + this.$route.fullPath
      const getUser = await fetch(`https://${process.env.authdomain}/userinfo`,{
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userToken}`
        }
      })
      const user = await getUser.json();
      await fetch('/api/comment',{
        method:'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({text, url,user})

      })
      this.currentCommit = ""
      this.fetchComments()
    },
    //getting comments
    async fetchComments(){
      const currentUrl = process.env.baseUrl + this.$route.fullPath
      const query = new URLSearchParams({currentUrl})
      const url = `/api/comment?${query.toString()}`

      const response = await fetch(url,{
        method:'GET'
      })
      this.comments = await response.json()
    },
    async deleteComment(id){
      const currentUrl = process.env.baseUrl + this.$route.fullPath
      const query = new URLSearchParams({currentUrl,id})
      const url = `/api/comment?${query}`
      await fetch(url,{
        method:'DELETE'
      })
      this.fetchComments()
    },
     userValidator(){
      if(this.$auth.isAuthenticated){
        const userToken =  this.$auth.user.sub
        return userToken === process.env.adminId
      }
     return false
    }
  }

};
</script>

<style scoped>

</style>
