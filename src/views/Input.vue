<template>
  <v-stepper
    vertical
    v-model="index">
    <InputStep
      v-for="i in steps"
      :key="i"
      :no="i"
      :index="index"
      :steps="steps"
      question="質問"
      description="説明"
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
        steps: 3,
        index: 1,
        answerList: null
      }
    },
    created : function() {
      this.answerList = new Array(this.steps);
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
    }
  }
</script>