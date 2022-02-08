<template>
  <div class="space-y-20">
    <div
      class="sc starter flex h-screen items-center justify-center pb-2 pt-80"
    >
      <div>
        <!--Starter-->
        <div>
          <typical
            class="text-highlight text-center text-4xl font-bold text-green-500 sm:text-6xl md:text-7xl"
            :steps="[
              '{Merhaba',
              500,
              '{Merhaba Dünya!}',
              500,
              '{Ben Burak 👋}',
            ]"
            :wrapper="'h1'"
          ></typical>
        </div>
        <!--Description-->
        <div class="pt-32">
          <p class="description text-center text-xl font-bold opacity-0">
            Merhaba ben Burak Mike {{ ageCalculator() }} yaşında,
            <br />developer ve aynı zamanda Akdeniz Üniversitesi'nde
            öğrenciyim.<br />
            <br />Front-end teknolojileri ve tasarım araçları gibi konularla
            <br />yakından ilgileniyorum.<br />
            Kendimce geliştirdiğim Projelerime Github adresimden
            ulaşabilirisiniz
          </p>
          <div class="flex justify-center pt-12 opacity-100">
            <Social />
          </div>
        </div>
      </div>
    </div>
    <!--Technologies I'm interested in-->
    <div class="sc technologies flex h-screen items-center justify-center">
      <Technologies class="w-full" />
    </div>
    <!-- My Projects-->
    <div
      class="justify-baseline projects flex h-screen flex-col items-center gap-4 pt-14 pb-4"
    >
      <div>
        <h1 class="mb-4 text-center text-4xl font-bold">Projeler</h1>
        <Projects />
      </div>
    </div>
    <div
      class="fixed bottom-8 right-4 flex hidden flex-col items-center justify-center text-center md:block"
    >
      <arrow-down-white class="animate-bounce opacity-0 dark:opacity-100" />
      <arrow-down class="animate-bounce dark:hidden" />Scroll<br />Down
    </div>
  </div>
</template>

<script>
import typical from 'vue-typical'
import { gsap } from 'gsap'
import { DateTime } from 'luxon'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ProjectContainer from '../components/Project-container'
import Technologies from '../components/Technologies'
import arrowDownWhite from '../assets/icons/arrow-down white.svg'
import arrowDown from '../assets/icons/arrow-down.svg'
import Social from '../components/Social'
import Projects from '../components/Projects'

export default {
  name: 'Home',
  components: {
    Projects,
    Social,
    ProjectContainer,
    Technologies,
    typical,
    arrowDown,
    arrowDownWhite,
  },
  mounted() {
    this.Animation()
  },
  methods: {
    Animation() {
      gsap.registerPlugin(ScrollTrigger)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.starter',
          start: '200px top',
          toggleActions: 'restart pause resume reverse',
          // markers:true
        },
      })
      gsap.to('.description', {
        scrollTrigger: {
          trigger: '.starter',
          start: '200px top',
          toggleActions: 'restart pause resume reverse',
          // markers:true
        },
        opacity: 1,
      })
      tl.from('.description', {
        ease: 'power1',
        stagger: 0.3,
        y: 200,
      }).to('.social-container', {
        opacity: 1,
        stagger: 0.2,
        ease: 'power1',
      })
    },
    ageCalculator() {
      const now = DateTime.local()
      const birthday = DateTime.local(2000, 11, 1)
      const diff = now.diff(birthday, 'years')
      return parseInt(diff.years)
    },
  },
}
</script>
