<template>
  <aside>
     <div class="form-check">
         <input class="form-check-input" checked type="checkbox" id="hiragana" @click="change">
         <label class="form-check-label" for="hiragana">Hiragana</label>
      </div>
      <div class="form-check">
         <input class="form-check-input" type="checkbox" id="katakana" @click="change">
         <label class="form-check-label" for="katakana">Katakana</label>
      </div>

      <hr>
      
      <div class="form-check">
         <input class="form-check-input" checked type="checkbox" id="vowels" @click="change">
         <label class="form-check-label" for="vowels">Vowels</label>
      </div>
      <div class="form-check">
         <input class="form-check-input" type="checkbox" id="k" @click="change">
         <label class="form-check-label" for="k">K</label>
      </div>
      <div class="form-check">
         <input class="form-check-input" type="checkbox" id="s" @click="change">
         <label class="form-check-label" for="s">S</label>
      </div>
      <div class="form-check">
         <input class="form-check-input" type="checkbox" id="t" @click="change">
         <label class="form-check-label" for="t">T</label>
      </div>
      <div class="form-check">
         <input class="form-check-input" type="checkbox" id="n" @click="change">
         <label class="form-check-label" for="n">N</label>
      </div>
      <div class="form-check">
         <input class="form-check-input" type="checkbox" id="h" @click="change">
         <label class="form-check-label" for="h">H</label>
      </div>
      <div class="form-check">
         <input class="form-check-input" type="checkbox" id="m" @click="change">
         <label class="form-check-label" for="m">M</label>
      </div>
      <div class="form-check">
         <input class="form-check-input" type="checkbox" id="y" @click="change">
         <label class="form-check-label" for="y">Y</label>
      </div>
      <div class="form-check">
         <input class="form-check-input" type="checkbox" id="r" @click="change">
         <label class="form-check-label" for="r">R</label>
      </div>
      <div class="form-check">
         <input class="form-check-input" type="checkbox" id="w" @click="change">
         <label class="form-check-label" for="w">W</label>
      </div>
  </aside>
</template>

<script>
export default {
   methods: {
      change({target}) {
         const {id, checked} = target
         // this.$emit('changeConfig', [id, checked])
         this.$store.dispatch('changeConfig', [id, checked])
      }
   }
}
</script>
