<template>
  <div class="space-y-20 relative">
    <div class="sc h-screen flex items-center justify-center pb-24">
      <div class="space-y-12">
        <nuxt-link to="/notes starter">
          <typical
            class="text-6xl font-bold text-highlight text-center hover:text-green-300 "
            :steps="['{Merhaba',800 , '{Merhaba Dünya!}', 500, '{Ben Burak 👋🏽}']"
            :wrapper="'h1'"
          ></typical>
        </nuxt-link>

        <p class="text-2xl text-center description">
          Front-end teknolojileri, tasarım araçları gibi konulara ilgiliyim
        </p>
      </div>
    </div>

    <div class="h-screen sc pt-12 flex items-end technologies opacity-0">
      <Technologies class="w-full"/>
    </div>
    <div class="pt-10 pb-4 h-screen flex items-center justify-center projects">
      <div>
      <h1 class="text-center font-bold text-xl mb-4">Projeler</h1>
      <div class="flex flex-wrap justify-center gap-4 sc-large">
        <ProjectContainer
          :name="'quastionaire'"
          :href="'https://quastionaire.vercel.app/'"
        />
        <ProjectContainer :name="'personal_website'" />
      </div>
      </div>
    </div>
    <div class="bottom-8 right-4 fixed flex justify-center items-center flex-col md:block hidden text-center">  <arrow-down fill="white" /> Scroll <br/> Down</div>

  </div>
</template>

<script>
import typical from 'vue-typical'
import ProjectContainer from '../components/Project-container'
import Technologies from '../components/Technologies'
import arrowDown from '../assets/icons/arrow-down.svg'

export default {
  name: 'Home',
  components: {
    ProjectContainer,
    Technologies,
    typical,
    arrowDown
  },
}
</script>
