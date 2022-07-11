<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          <Config />
        </div>
        <div class="col-10">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="flexRadioDefault" :value="0" v-model.number="mode" id="typing" checked>
            <label class="form-check-label" for="typing">Typing</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="flexRadioDefault" :value="1" v-model.number="mode" id="drawing">
            <label class="form-check-label" for="drawing">Drawing</label>
          </div>
          <Symbol :symbol="symbol[mode]"/>
          <Answer @answered="answered" v-show="mode === 0"/>
          <Draw @drawed="answered" v-show="mode === 1"/>
          <span class="score">{{score}}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Symbol from '@/components/Symbol.vue'
import Answer from '@/components/Answer.vue'
import Draw from '@/components/Draw.vue'
import Config from '@/components/Config.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: { Symbol, Config, Answer, Draw },
  data() {
    return {
      mode: 0,
      symbol: ['', ''],
      score: 0
    }
  },
  watch: {
    mode() {
      this.selectSymbol()
    }
  },
  mounted() {
    this.selectSymbol()
  },
  methods: {
    selectSymbol() {
      let selected
      do {
        selected = Object.entries(this.dataSet[~~(Math.random() * this.dataSet.length)])[0]
      } while(selected[1] === this.symbol[1])
      this.symbol = selected
    },
    answered(answer) {
      if (answer !== this.symbol[+!this.mode]) {
        alert(this.symbol[+!this.mode])
        this.score = 0
      } else this.score++
      this.selectSymbol()
    }
  },
  computed: {
    ...mapGetters(['hiragana', 'katakana', 'config']),
    dataSet() {
      const dataSet = []
      if (this.config.hiragana) {
        for (const [key, value] of Object.entries(this.config)) {
          if (value && Object.hasOwnProperty.call(this.hiragana, key)) {
            const symbols = this.hiragana[key]
            Object.entries(symbols).forEach(symbol => {
              dataSet.push({[symbol[0]]: symbol[1]})
            })
          }
        }
      }
      if (this.config.katakana) {
        for (const [key, value] of Object.entries(this.config)) {
          if (value && Object.hasOwnProperty.call(this.katakana, key)) {
            const symbols = this.katakana[key]
            Object.entries(symbols).forEach(symbol => {
              dataSet.push({[symbol[0]]: symbol[1]})
            })
          }
        }
      }
      return dataSet
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 30px;
}
</style>
