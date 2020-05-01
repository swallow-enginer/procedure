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
    ></InputStep>
  </v-stepper>
</template>

<script>
  import InputStep from '@/components/InputStep'
  export default {
    data () {
      return {
        steps: 3,
        index: 1
      }
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
    }
  }
</script>