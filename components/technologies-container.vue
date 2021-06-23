<template>
  <a :href="href" class="svg-container technologies-box">
    <figure class="item">
      <slot />
    </figure>
    <hr
      class="mt-5 border border-gray-200 dark:border-gray-300 hidden sm:inline-block"
    />
    <h1 class="text-center mt-4 hidden sm:inline">{{ name }}</h1>
  </a>
</template>

<script>
export default {
  name: 'TechnologiesContainer',
  props: {
    href: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
