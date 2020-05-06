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
            v-for="(title, i) in titleList"
            :key="i"
            :inactive="inactive"
          >
            <v-list-item-avatar>
              <span class="fa-stack fa-lg">
                <i class="fas fa-circle primary--text"></i>
                <b class="white--text fa-stack-1x">{{title.no}}</b>
              </span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{title.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      listTitle:"人気順"
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

<style lang="scss">
  .fa-stack-1x {
  /* 中のテキストのバランスは ↓ を好みで調整 */
  font-size: 0.7em;
}
</style>
