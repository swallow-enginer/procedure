<template>
    <v-card
      class="mx-auto"
      max-width="400"
      tile
    >
      <v-list
        :subheader="subheader"
        :avatar="avatar"
      >
        <v-subheader>{{listTitle}}</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in titleList"
            :key="i"
            :inactive="inactive"
          >
            <v-list-item-avatar>
              <i class="fa-stack fa-lg">
                <i class="fas fa-circle primary"></i>
                <span class="white--text">{{title.no}}</span>
              </i>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
    }),
    computed: {
      titleList: {
        get() {
          return this.$store.getters.titleList(5);
        }
      }
    }
  }
</script>