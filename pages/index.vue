<template>
  <div class="space-y-20">
    <div class="sc space-y-20">
      <div class="space-y-8">
        <h1 class="text-2xl font-bold text-highlight">
          Ben Burak Mike.<br />
          Kendini Front-end teknolojileri alanında geliştiren öğrenci ve
          developerım.
        </h1>
        <p class="text-xl">
          Front-end teknolojileri, tasarım araçları gibi konulara ilgiliyim.
        </p>
      </div>
      <div class="mt-10">
        <Technologies />
      </div>
    </div>
    <div class="pt-10 pb-4">
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
</template>

<script>
import ProjectContainer from '../components/Project-container'
import Technologies from '../components/Technologies'
export default {
  name: 'Home',
  components: {
    ProjectContainer,
    Technologies,
  },
}
</script>
