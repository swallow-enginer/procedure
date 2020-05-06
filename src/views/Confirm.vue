<template>
  <div>
      <div v-for="i in $store.state.steps" :key="i">
        <div class="title pl-2">{{question(i)}}</div>
        <p class="body-1 pl-6">{{answer(i)}}</p>
        <v-divider></v-divider>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    answer: function() {
      return function(i) {
        return this.$store.state.qaList[i -1].answer;
      }
    },
    question: function() {
      return function(i) {
        return this.$store.state.qaList[i -1].question;
      }
    },
    
  }
}
</script>