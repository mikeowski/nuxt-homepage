<template>
  <div class="flex space-x-4">
    <div class="social-container">
      <a href="mailto:burakmahyk@gmail.com">
        <Span class="font-bold">EPosta</Span>
      </a>
    </div>
    <div class="social-container ">
      <a href="https://twitter.com/burakmahyk">
        <IconTwitter />
      </a>
    </div>
    <div class="social-container ">
      <a href="https://www.instagram.com/brk_mahyk/">
        <IconInstagram />
      </a>
    </div>
    <div class="social-container ">
      <a href="https://github.com/MahykBurak">
        <IconGithub />
      </a>
    </div>
  </div>
</template>

<script>
import IconTwitter from '../assets/icons/twitter.svg'
import IconInstagram from '../assets/icons/instagram.svg'
import IconGithub from '../assets/icons/github.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default {
  name: 'Social',
  components: {
    IconTwitter,
    IconInstagram,
    IconGithub,
  },
}
</script>

<style scoped></style>
