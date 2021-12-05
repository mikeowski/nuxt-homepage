<template>
  <header class="sc justify-center items-center py-6 z-50">
    <nav class="space-x-4 flex justify-center">
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
        { path: '/notes', name: '.notlar()' },
        { path: '/projects', name: '.projeler()' },
        { path: '/photos', name: '.galeri()' },
        { path: '/bookmarks', name: '.yerİmleri()' },
      ],
    }
  },
}
</script>

<style scoped></style>
