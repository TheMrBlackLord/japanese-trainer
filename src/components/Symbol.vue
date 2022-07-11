<template>
  <div>
     <span class="char">{{symbol}}</span>
  </div>
</template>

<script>
export default {
   props: {
      symbol: {type: String, required: true}
   }
}
</script>
