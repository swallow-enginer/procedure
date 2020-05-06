<template>
  <v-stepper
    vertical
    v-model="index">
    <InputStep
      v-for="i in $store.state.steps"
      :key="i"
      :no="i"
      :index="index"
      @nextTab="nextTab()"
      @backTab="backTab()"
      @changeAnswer="changeAnswer"
    ></InputStep>
  </v-stepper>
</template>

<script>
  import InputStep from '@/components/InputStep'
  export default {
    data () {
      return {
        index: 1
      }
    },
    created : function() {
      this.$store.commit(
        'setSteps'
        , {
          steps: 3
        }
      )
      this.newQaList();
    },
    components: {
      InputStep
    },
    methods: {
      nextTab: function() {
        this.index++;
      },
      backTab: function() {
        this.index--;
      },
      changeAnswer: function(answer) {
        this.answerList[this.index - 1] = answer;
      },
      newQaList: function() {
        if (this.$store.state.step == this.$store.state.qaList.length) {
          return;
        }
        
        for (let i = 0; i < this.$store.state.steps; i++) {
          this.$store.commit(
              'addQa'
              , {
                question   : "",
                answer     : "",
                description: "",
              }
          );
        }
      }
    }
  }
</script>

<style scoped>
  .v-stepper {
    box-shadow:none;
  }
</style>