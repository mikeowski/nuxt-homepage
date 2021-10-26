<template>
  <div>
    <div v-if="isLoading" class="flex justify-center items-center mt-2">
      <span class="text-highlight text-2xl animate-pulse">Yükleniyor</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
