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
      <p>{{description}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
  import lodash from 'lodash';
  export default {
    props: {
      no: {
        Type:Number,
        required: true
      },
    },
    computed: {
      id: function() {
        return "registerCard" + this.no;
      },
      description: {
        get() {
          return this.$store.state.qaList[this.no -1].description;
        }
      },
      title: {
        get() {
          return this.$store.state.qaList[this.no -1].title;
        },
      },
      cardTitle: function() {
        return lodash.isEmpty(this.title) ? this.label : this.title;
      }
    },
  }
</script>