<template>
  <v-form
    ref="form"
  >
      <v-text-field
        v-model="title"
        :label="titleLabel"
        class="white"
        outlined
        clearable
        dense
        :counter="titleCounter"
        :rules="[required(title), max_length(title, titleCounter)]"
      >
      </v-text-field>

    <FloatingBtn
      :steps="steps"
      @comp="comp">
    </FloatingBtn>
    <v-slide-y-reverse-transition
        group
        mode="out-in">
      <RegisterCard
        v-for="i in steps"
        :key="i"
        :no="i">
      </RegisterCard>
    </v-slide-y-reverse-transition>
  </v-form>
</template>

<script>
  import FloatingBtn from '@/components/FloatingBtn'
  import RegisterCard from '@/components/RegisterCard'
  import utils from '@/util/Utils'
  import Const from '@/util/Const'
  export default {
    data () {
      return {
        titleCounter: 50,
        titleLabel: Const.TITLE_TITLE
      }
    },
    components: {
      FloatingBtn,
      RegisterCard
    },
    // beforeMount: function() {
    //   window.addEventListener("beforeunload", this.handler);
    // },
    methods: {
      required: (value) => utils.required(value),
      max_length: (value, count) => utils.max_length(value, count),
      comp: function() {
        if (this.$refs.form.validate()) {
          this.$router.push("/RegisterC");
        }
      }
    },
    created : function() {
      this.$store.commit(
        'setSteps'
        , {
          steps: 1
        }
      )
    },
    computed: {
      steps: {
        get() {
          return this.$store.state.steps;
        },
      },
      title: {
        get() {
          return this.$store.state.title;
        },
        set(title) {
          this.$store.commit('setTitle', {title:title});
        }
      }
    }
  }
</script>