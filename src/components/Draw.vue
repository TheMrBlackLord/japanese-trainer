<template>
  <div class="adjust">
     <div class="spinner-border" role="status" v-if="isLoading"></div>
      <div v-show="!isLoading" class="adjust">
         <p>Hold CTRL to erase</p>
         <p>Press C to clear</p>
        <vue-drawing-canvas
         ref="VueCanvasDrawing"
         :lineWidth="lineWidth"
         v-model:image="image"
         color="rgb(34, 34, 34)"
         :width="size"
         :height="size"
         class="symbol"
         :eraser="eraser"
         :lock="isLocking"
         />
      <button type="button" class="btn btn-primary drawed" @click="drawed" :disabled="isLocking">
         Check
         <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="isLocking"></span>
      </button>
     </div>
     <span style="font-size: 32px">Recognized: <strong>{{recognized}}</strong></span>
  </div>
</template>

<script>
import VueDrawingCanvas from "vue-drawing-canvas"
import { createWorker } from 'tesseract.js'
import { mapGetters } from 'vuex'
export default {
   components: {
      VueDrawingCanvas
   },
   data() {
      return {
         size: 250,
         eraser: false,
         lineWidth: 10,
         image: '',
         isLoading: false,
         isLocking: false,
         recognized: ''
      }
   },
   async mounted() {
      document.addEventListener('keydown', e => {
         if (e.key === "Control") {
            this.eraser = true
            this.lineWidth = 20
         }
         else if (e.code === 'KeyC') this.reset()
      })
      document.addEventListener('keyup', e => {
         if (e.key === "Control") {
            this.eraser = false
            this.lineWidth = 10
         }
      })
      this.isLoading = true
      this.worker = createWorker()
      await this.worker.load()
      await this.worker.loadLanguage('jpn')
      await this.worker.initialize('jpn')
      this.isLoading = false
   },
   methods: {
      async drawed() {
         this.isLocking = true
         await this.worker.setParameters({
            tessedit_char_whitelist: this.whiteList,
         })
         const { data: { text } } = await this.worker.recognize(this.image)
         this.isLocking = false
         this.recognized = text
         this.$emit('drawed', text.replace('\n', ''))
         this.reset()
      },
      reset() {
         this.$refs.VueCanvasDrawing.reset()
      }
   },
   computed: {
      ...mapGetters(['whiteList']),
   }
}
</script>
