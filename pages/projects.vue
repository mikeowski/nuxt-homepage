<template>
    <div class="sc">
        <div class="space-y-4 text-center md:text-left">
            <typical
                class="text-highlight text-center text-2xl font-medium md:text-left"
                :steps="['{', 500, '{ Geliştirdiğim Projeler }']"
                :wrapper="'h1'"
            ></typical>
            <p>Kendimce geliştirdiğim projelere burdan ulaşabilirisiniz.</p>
        </div>
        <div v-for="project in projects" :key="project.src">
            <ProjectDetailed
                :name="project.name"
                :src="project.src"
                :href="project.href"
            />
        </div>
    </div>
</template>

<script>
import typical from 'vue-typical'
import Projects from '../components/Projects.vue'
import ProjectDetailed from '../components/Project-detailed'
export default {
    name: 'projects',
    components: {
        ProjectDetailed,
        Projects,
        typical,
    },
    data() {
        return {
            projects: [
                {
                    src: 'quastionaire',
                    name: 'Quastionaire',
                    href: 'https://quastionaire.vercel.app/',
                },
                {
                    src: 'personal_website',
                    href: 'www.burakmike.software',
                    name: 'Personal website',
                },
                {
                    src: 'notion-blog-example',
                    href: 'https://notion-nuxt.herokuapp.com',
                    name: 'Nuxt with Notion API',
                },
                {
                    src: 'recipe',
                    href: 'https://recipe-app-peach.vercel.app',
                    name: 'Recipe',
                },
            ],
        }
    },
}
</script>

<style scoped></style>
