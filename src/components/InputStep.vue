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
      <router-link to="/confirm">
        <v-btn
          @click="nextTab"
          class="ml-2"
          color="primary"
        >{{nextButtonStr}}</v-btn>
      </router-link>
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
    props: {
      index: {
        Number,
        required: true
      },
      no: {
        Number,
        required: true
      },
    },
    computed: {
      answer: {
        get() {
          return this.$store.state.qaList[this.no -1].answer;
        },
        set(value) {
          this.$store.commit(
            'setAnswer'
            , {
              answer: value
              , no  : this.no - 1
            }
          );
        },
        question: {
          get() {
            return this.$store.state.qaList[this.no -1].question;
          }
        },
        description: {
          get() {
            return this.$store.state.qaList[this.no -1].description;
          }
        }
      },
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
        return this.no == this.$store.state.steps;
      },
      nextTab: function (e) {
        if (!this.isLast()) {
          e.preventDefault();
        }
        
        this.$emit("nextTab");
      },
      backTab: function () {
        this.$emit("backTab");
      },
      // changeAnswer: function() {
      //   this.$store.commit('setAnswer', {
      //     answer: this.answer,
      //     no: this.no
      //   })
        
      // }
    }
  }
</script>