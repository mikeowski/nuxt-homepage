<template>
  <div>
    <router-link
      :to="path"
      class="nav-link nav-link-ltr"
      :class="
        $route.path === path
          ? 'text-gray-900 dark:text-gray-200'
          : 'text-gray-600 dark:text-gray-400'
      "
    >
      <a class="font-serif font-bold sm:text-xl">{{ name }}</a>
      <hr
        v-if="$route.path === path"
        class="absolute bottom-0 w-full border-b-2 border-green-500"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.nav-link {
  display: inline-block;
  position: relative;
  opacity: 0.75;
  text-decoration: none;
}
.nav-link:hover {
  opacity: 1;
}
.nav-link::before {
  transition: 300ms;
  height: 2px;
  content: '';
  position: absolute;
  background-color: slategrey;
}
.nav-link-ltr::before {
  width: 0%;
  bottom: 0px;
}
.nav-link-ltr:hover::before {
  width: 100%;
}
</style>
