<template>
  <div class="sc relative pt-10">
    <a :href="href">
      <div class="img">
        <img
          :src="require(`~/assets/img/projects/${src}.png`)"
          :alt="src"
          class="z-10 rounded-2xl"
          width="100%"
          height="100%"
        />
      </div>
      <div class="text-3xl">
        <h1>{{ name }}</h1>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Project-detailed',
  props: {
    src: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      default: 'https://github.com/MahykBurak',
      required: false,
    },
  },
}
</script>

<style scoped>
.img:hover img {
}
.img img {
}
.img:hover h1 {
  display: none;
}
</style>
