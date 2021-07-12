<template>
  <div id="Projects">
    <div class="flex flex-col md:flex-row justify-center gap-4 sc-large">
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
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ProjectContainer from './Project-container'
export default {
  name: 'Projects',
  components: {
    ProjectContainer,
  },
  mounted() {
    this.Animate()
  },
  methods: {
    Animate() {
      gsap.registerPlugin(ScrollTrigger)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#Projects',
          start: 'top 90%',
          end: 'bottom 50%',
          scrub: 2,
        },
      })
      tl.from('.Project-container', {
        delay: 1,
        stagger: 0.6,
        duration: 2,
        opacity: 0,
        ease: 'power2.easeInOut',
      }).from('.Project-container h1', {
        scrollTrigger: {
          trigger: '#Projects',
          start: 'top 90%',
          end: 'bottom 80%',
          scrub: 2,
        },
        stragger: 0.6,
        y: 300,
        delay: 10,
        opacity: 0,
        ease: 'power1.easeInOut',
      })
    },
  },
}
</script>

<style scoped></style>
