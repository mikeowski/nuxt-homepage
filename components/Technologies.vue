<template>
  <div>
    <h1 class="font-bold text-xl text-center mb-4 technologies-box">
      İlgilendiğim Teknolojiler
    </h1>
    <div class="flex flex-wrap items-center md:justify-evenly justify-center">
      <technologies-container :href="JavaScriptLink"  class="technologies-box" :name="'JavaScript'">
        <IconJs fill="white" />
      </technologies-container>
      <technologies-container :href="nodeLink" class="technologies-box" :name="'Node Js'">
        <IconNode fill="#32B67A" />
      </technologies-container>
      <technologies-container :href="vueLink" class="technologies-box" :name="'Vue Js'">
        <IconVue fill="#17C37B" />
      </technologies-container>
      <technologies-container :href="tailwindLink" class="technologies-box" :name="'Tailwind'">
        <IconTailwind fill="#0033FF" />
      </technologies-container>
      <technologies-container :href="figmaLink" class="technologies-box" :name="'Figma'">
        <IconFigma fill="red" />
      </technologies-container>
    </div>
  </div>
</template>

<script>
import IconJs from '../assets/icons/logo-javascript.svg'
import IconNode from '../assets/icons/node-dot-js.svg'
import IconVue from '../assets/icons/vue-dot-js.svg'
import IconFigma from '../assets/icons/figma.svg'
import IconTailwind from '../assets/icons/tailwindcss.svg'
import TechnologiesContainer from './technologies-container'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
export default {
  name: 'Technologies',
  components: {
    TechnologiesContainer,
    IconJs,
    IconNode,
    IconVue,
    IconFigma,
    IconTailwind,
  },
  data() {
    return {
      tailwindLink: 'https://tailwindcss.com/',
      figmaLink: 'https://www.figma.com/',
      vueLink: 'https://vuejs.org/',
      nodeLink: 'https://nodejs.org/en/',
      JavaScriptLink: 'https://www.javascript.com/',
    }
  },
  mounted() {
    this.ScrollAnimation()
  },
  methods:{
    ScrollAnimation(){
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('.technologies-box',{
        scrollTrigger:{
          trigger: '.technologies',
          start: "top center",
          end: "60% center",
          scrub: true,
        },
        opacity:0,
        delay: 1,
        stagger: 0.3,
        ease: 'elastic',
        scale:1,
        duration: 5

      })
      gsap.to('.technologies-box',{
        scrollTrigger:{
          trigger: '.technologies',
          start:"10px 20%",
          end: "65% 200px",
          scrub: true,

        },
        opacity:0,
        y: -100,
        stagger: 0.1,
        ease: 'back.out'
      })

      //tec animation
      gsap.to('.technologies',{
        scrollTrigger:{
          trigger: '.technologies',
          start: "top center",
          end: "center center",
          scrub: true,

        },
        opacity:1,
        y:-300,
        scale:1,
        duration: 5

      })
    }
  }


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
