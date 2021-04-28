<template>
  <header class="sc py-6 z-50">
    <nav class="space-x-4 flex">
      <NavItem :path="'/'"  :name="'Giriş'"/>
      <NavItem :path="'/notes'" :name="'Notlar'"/>
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
