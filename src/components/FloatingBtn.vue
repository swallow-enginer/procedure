<template>
  <div>
    <v-speed-dial
      v-model="fab"
      bottom
      right
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-plus</v-icon>
        </v-btn>
      </template>
        <v-btn
          v-on="on"
          fab
          dark
          small
          color="white"
          @click="comp"
        >
          <v-icon color="primary">mdi-check</v-icon>
        </v-btn>
      <v-btn
        fab
        dark
        small
        color="white"
        @click="addSteps"
      >
        <v-icon color="primary">mdi-plus</v-icon>
      </v-btn>
    </v-speed-dial>
    
    <v-tooltip
      v-model="show"
      transition="slide-y-reverse-transition"
    >
      <span>{{addStepMsg}}</span>
    </v-tooltip>
  </div>
</template>

<script>
  import Const from '@/util/Const'
  export default {
    data: () => ({
      fab : false,
      show: false
    }),
    methods:{
      addSteps: function() {
        this.$store.commit(
          'addSteps'
          , {}
        );
        this.show = true;
        window.setTimeout(() => this.show = false, 1000)
      },
      comp: function() {
        this.$emit("comp");
      }
    },
    computed: {
      addStepMsg: {
        get() {
          return Const.ADD_STEP_MSG(this.$store.state.steps)
        }
      }
    }
  }
</script>

<style>
  .v-speed-dial {
    bottom: 50px;
    right: 50px;
    position: fixed;
  }

  .v-btn--floating {
    position: relative;
  }

  .v-tooltip__content {
    position: fixed;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
</style>