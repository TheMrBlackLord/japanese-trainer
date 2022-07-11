<template>
  <div class="input-group input-group-lg">

    <input type="text" class="form-control" v-model.trim="value" @keypress.enter="answer">
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    answer() {
      if (this.value) this.$emit('answered', this.value.toLowerCase())
      this.value = ''
    }
  }
}
</script>