<template>
  <div class='sc h-screen flex items-center justify-center'>
   <h1 class='text-8xl font-bold animate-pulse'>404</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>
