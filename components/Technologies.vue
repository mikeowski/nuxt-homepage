<template>
  <div class="pt-40">
    <h1 class="technologies-text text-center text-4xl font-bold">
      İlgilendiğim Teknolojiler
    </h1>
    <div
      class="technologies-container flex flex-wrap items-center justify-center md:justify-evenly"
    >
      <technologies-container :href="JavaScriptLink" :name="'JavaScript'">
        <IconJs fill="white" />
      </technologies-container>
      <technologies-container :href="nodeLink" :name="'Node Js'">
        <IconNode fill="#32B67A" />
      </technologies-container>
      <technologies-container :href="vueLink" :name="'Vue Js'">
        <IconVue fill="#17C37B" />
      </technologies-container>
      <technologies-container :href="tailwindLink" :name="'Tailwind'">
        <IconTailwind fill="#0033FF" />
      </technologies-container>
      <technologies-container :href="figmaLink" :name="'Figma'">
        <IconFigma fill="red" />
      </technologies-container>
      <technologies-container :href="nuxtLink" :name="'Nuxt Js'">
        <IconNuxt fill="#17C37B" />
      </technologies-container>
      <technologies-container :href="cssTrickLink" :name="'Css'">
        <IconCss fill="#E54B4B" />
      </technologies-container>
      <technologies-container :href="flutterLink" :name="'Flutter'">
        <IconFlutter fill="blue" />
      </technologies-container>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import IconJs from '../assets/icons/logo-javascript.svg'
import IconNode from '../assets/icons/node-dot-js.svg'
import IconCss from '../assets/icons/css3.svg'
import IconVue from '../assets/icons/vue-dot-js.svg'
import IconFigma from '../assets/icons/figma.svg'
import IconNuxt from '../assets/icons/nuxt-dot-js.svg'
import IconTailwind from '../assets/icons/tailwindcss.svg'
import TechnologiesContainer from './technologies-container'
import IconFlutter from '../assets/icons/flutter.svg'
export default {
  name: 'Technologies',
  components: {
    TechnologiesContainer,
    IconJs,
    IconNode,
    IconVue,
    IconFigma,
    IconTailwind,
    IconNuxt,
    IconCss,
    IconFlutter,
  },
  data() {
    return {
      tailwindLink: 'https://tailwindcss.com/',
      figmaLink: 'https://www.figma.com/',
      vueLink: 'https://vuejs.org/',
      nodeLink: 'https://nodejs.org/en/',
      JavaScriptLink: 'https://www.javascript.com/',
      nuxtLink: 'https://nuxtjs.org/',
      cssTrickLink: 'https://css-tricks.com/',
      flutterLink: 'https://flutter.dev',
    }
  },
  mounted() {
    this.ScrollAnimation()
  },
  methods: {
    ScrollAnimation() {
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('.technologies-box', {
        scrollTrigger: {
          trigger: '.technologies',
          start: 'top 60%',
          end: '60% center',
          scrub: 1,
        },
        y: 300,
        opacity: 0,
        delay: 1,
        stagger: 0.6,
        ease: 'back',
        scale: 0.5,
        duration: 5,
      })
    },
  },
}
</script>

<style scoped>
.item svg {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  -webkit-filter: grayscale(70%);
  filter: grayscale(70%);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.item:hover svg {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}
</style>
