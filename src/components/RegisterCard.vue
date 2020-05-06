<template>
  <v-card
    :id=id
    class="mb-3"
    outlined
    >
    <v-card-title
      class="primary white--text mb-4"
    >
      {{cardTitle}}
    </v-card-title>

    <v-card-text>
      <v-text-field
        v-model="title"
        :label="stepLabel"
        outlined
        clearable
        :counter="titeCounter"
        :rules="[required(title), max_length(title, titeCounter)]"
      ></v-text-field>
      <v-textarea
        class="pt-2"
        :label="descriptionLabel"
        v-model="description"
        outlined
        rounded
        :counter="descCounter"
        :rules="[required(description), max_length(description, descCounter)]"
      ></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
  import lodash from 'lodash';
  import utils from '@/util/Utils'
  import Const from '@/util/Const'

  export default {
    data() {
      return {
        titeCounter      : Const.STEP_TITLE_MAX_LENGTH,
        descCounter      : Const.DESCRIPTION_MAX_LENGTH,
        descriptionLabel : Const.DESCRIPTION_TITLE,
      }
    },
    props: {
      no: {
        Type:Number,
        required: true
      },
    },
    computed: {
      stepLabel: {
        get() {
          return Const.STEP_TITLE + this.no;
        }
      },
      description: {
        get() {
          return this.$store.state.qaList[this.no -1].description;
        },
        set(value) {
          this.$store.commit(
            'setDescription'
            , {
              description: value
              , no       : this.no - 1
            }
          );
        },
      },
      title: {
        get() {
          return this.$store.state.qaList[this.no -1].title;
        },
        set(value) {
          this.$store.commit(
            'setSubTitle'
            , {
              title      : value
              , no       : this.no - 1
            },
          );
        },
      },

      cardTitle: function() {
        return lodash.isEmpty(this.title) ? this.stepLabel : this.title;
      }
    },
    created : function() {
      this.newRegisterList();
    },
    methods: {
      required: (value) => utils.required(value),
      max_length: (value, count) => utils.max_length(value, count),
      newRegisterList: function() {
        // if (this.$store.state.qaList.length != 0) {
        //   return;
        // }
        this.$store.commit(
          'addRegister'
          , {
            title      : "",
            description: "",
            }
        );
      }
    }
  }
</script>