<template>
  <div id="Projects">
    <div
      class="flex flex-col flex-wrap md:flex-row justify-center gap-4 sc-large mb-12"
    >
      <ProjectContainer
        class="Project-container"
        :src="'quastionaire'"
        :name="'Quastionaire'"
        :href="'https://quastionaire.vercel.app/'"
      />
      <ProjectContainer
        class="Project-container"
        :name="'Personal website'"
        :src="'personal_website'"
      />
      <ProjectContainer
        class="Project-container"
        :name="'Nuxt with Notion API'"
        :src="'notion-blog-example'"
        :href="'https://notion-nuxt.herokuapp.com'"
      />
      <ProjectContainer
        class="Project-container"
        :name="'Recipe'"
        :src="'recipe'"
        :href="'https://recipe-app-peach.vercel.app'"
      />
    </div>
  </div>
</template>

<script>
import ProjectContainer from './Project-container'
export default {
  name: 'Projects',
  components: {
    ProjectContainer,
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped></style>
