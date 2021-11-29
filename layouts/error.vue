<template>
  <div class='sc h-screen flex items-center justify-center flex-col'>
    <img src="https://media2.giphy.com/media/9J7tdYltWyXIY/giphy.gif?cid=ecf05e47jxzgrm9peko88ql9uv06c1sktoe6v3gcxeii6u94&amp;rid=giphy.gif&amp;ct=g" alt="sad vincent vega GIF" style="width: 500px; height: 421.1111111111111px; opacity: 1; left: 0px; top: 0px;">
    <span class='text-3xl font-bold mt-10'>{{error.message}}</span>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error'
}
</script>
