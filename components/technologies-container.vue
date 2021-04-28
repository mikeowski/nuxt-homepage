<template>
  <a :href="href" class="svg-container">
    <figure class="item">
      <slot />
    </figure>
    <hr class="mt-5 border border-gray-200 dark:border-gray-300 hidden md:inline-block" />
    <h1 class="text-center mt-4 hidden md:inline ">{{ name }}</h1>
  </a>
</template>

<script>
export default {
  name: "technologies-container",
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
};
</script>

<style scoped></style>
