<template>
  <header class="sc py-6 z-50">
    <nav class="space-x-4 flex">
      <NavItem :path="'/'"  :name="'.giriş()'"/>
      <NavItem :path="'/notes'" :name="'.notlar()'"/>
      <NavItem :path="'/bookmarks'" :name="'.yerİmleri()'"/>
    </nav>
  </header>
</template>

<script>
import NavItem from './Nav-item'
export default {
  name: 'Header',
  components: { NavItem },
}
</script>

<style scoped>

</style>
