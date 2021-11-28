<template>
  <div class='sc h-screen flex items-center justify-center flex-col'>
   <h1 class='text-8xl font-bold animate-pulse'>404</h1>
    <span class='text-3xl font-bold'>{{error.message}}</span>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>
