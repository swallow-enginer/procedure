<template>
  <div>
    <v-stepper-step
      :complete="isComplete()"
      :step="no"
    >
      {{question}}
    </v-stepper-step>

    <v-stepper-content
      :step="no">
      <p>
        {{description}}
      </p>
      <v-textarea
        class="pt-2"
        label="回答"
        v-model="answer"
        outlined
        autofocus
        rounded
      ></v-textarea>
      <v-btn
        :disabled="isFirst()"
        @click="backTab()"
      >戻る</v-btn>
        <v-btn
          class="ml-2"
          color="primary"
          @click="nextTab()"
        >{{nextButtonStr}}</v-btn>
      <v-progress-circular
        class="ml-2"
        size="16"
        width="2"
        :rotate="-90"
        :color="getCircularColor(this.answer)"
        :value="getPercent(this.answer)"
      ></v-progress-circular>
    </v-stepper-content>
  </div>
</template>

<script>
  const MAX_COUNT = 500;
  const COLORS = [
    {"light-blue" : 0}
    , {"yellow"   : 90}
    , {"red"      : 100}
  ];
  export default {
    data () {
      return {
        answer: ""
      }
    },
    props: {
      index: {
        Number,
        required: true
      },
      no: {
        Number,
        required: true
      },
      question: {
        String,
        required: true
      },
      description: {
        String,
        required: true
      },
      steps: {
        Number,
        required: true
      },
    },
    computed: {
      nextButtonStr: function() {
        if (this.isLast()) {
          return "完了";
        }
        return "次へ";
      }
    },
    watch: {
      answer: function() {
        this.changeAnswer();
      }
    },
    methods: {
      isComplete: function () {
        return this.no < this.index;
      },
      getPercent: function (str) {
        return str.length * 100 / MAX_COUNT;
      },
      getCircularColor: function (str) {
        let percent = this.getPercent(str);
        let color = "light-blue";
        for (let values of COLORS) {
          for (let key in values) {
            let value = values[key];
            if (percent <= value) {
              return color;
            }
            color = key;
          }
        }
      },
      isFirst: function() {
        return this.no == 1;
      },
      isLast: function() {
        return this.no == this.steps;
      },
      nextTab: function () {
        this.$emit("nextTab");
      },
      backTab: function () {
        this.$emit("backTab");
      },
      changeAnswer: function() {
        this.$emit("changeAnswer", this.answer);
      }
    }
  }
</script>