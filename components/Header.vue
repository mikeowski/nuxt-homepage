<template>
    <header class="sc z-50 items-center justify-center py-6">
        <nav class="flex justify-center space-x-4">
            <template v-for="navItem in navItems">
                <NavItem :name="navItem.name" :path="navItem.path" />
            </template>
        </nav>
    </header>
</template>

<script>
import NavItem from './Nav-item'
export default {
    name: 'Header',
    components: { NavItem },
    data() {
        return {
            navItems: [
                { path: '/', name: '.giriş()' },
                { path: '/projects', name: '.projeler()' },
                { path: '/photos', name: '.galeri()' },
                { path: '/bookmarks', name: '.yerİmleri()' },
            ],
        }
    },
}
</script>

<style scoped></style>
