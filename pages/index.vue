<template>
  <div class="space-y-20">
    <div
      class="sc h-screen flex items-center justify-center pb-2 pt-80 starter"
    >
      <div>
        <!--Starter-->
        <div>
          <typical
            class="text-4xl sm:text-6xl md:text-7xl font-bold text-highlight text-center text-green-500"
            :steps="[
              '{Merhaba',
              500,
              '{Merhaba Dünya!}',
              500,
              '{Ben Burak 👋🏽}',
            ]"
            :wrapper="'h1'"
          ></typical>
        </div>
        <!--Description-->
        <div class="pt-32">
          <p class="font-bold text-xl text-center description opacity-0">
            Merhaba ben Burak Mike {{ ageCalculator() }} yaşında, <br />developer ve aynı zamanda
            Akdeniz Üniversitesi'nde öğrenciyim.<br />
            <br />Front-end teknolojileri ve tasarım araçları gibi konularla
            <br />yakından ilgileniyorum.<br />
            Kendimce geliştirdiğim Projelerime Github adresimden
            ulaşabilirisiniz
          </p>
          <div class="pt-12 opacity-100 flex justify-center">
            <Social />
          </div>
        </div>
      </div>
    </div>
    <!--Technologies I'm interested in-->
    <div class="h-screen sc flex items-center justify-center technologies">
      <Technologies class="w-full" />
    </div>
    <!-- My Projects-->
    <div
      class="pt-14 pb-4 h-screen flex flex-col items-center justify-baseline projects gap-4"
    >
      <div>
        <h1 class="text-center font-bold text-4xl mb-4">Projeler</h1>
        <Projects />
      </div>
    </div>
    <div
      class="bottom-8 right-4 fixed flex justify-center items-center flex-col md:block hidden text-center"
    >
      <arrow-down fill="white" class="animate-bounce" /> Scroll <br />
      Down
    </div>
  </div>
</template>

<script>
import typical from 'vue-typical'
import { gsap } from 'gsap'
import { DateTime} from 'luxon'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ProjectContainer from '../components/Project-container'
import Technologies from '../components/Technologies'
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
    ageCalculator(){
      const currentDate = DateTime.now()
      const birthday = DateTime.fromISO('2000-11-01')
      console.log(birthday);
      const age = parseInt(currentDate.diff(birthday,'days').toObject().days / 365.25)
      return age
    }
  },
}
</script>
