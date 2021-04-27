<template>
  <div>
    <h1 class="font-bold text-xl text-center mb-4">
      İlgilendiğim Teknolojiler
    </h1>
    <div class="flex flex-wrap items-center md:justify-evenly justify-center">
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
