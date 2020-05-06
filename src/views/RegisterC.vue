<template>
  <div>
    <v-slide-y-reverse-transition
        group
        mode="out-in">
      <RegisterCCard
        v-for="i in $store.state.steps"
        :key="i"
        :no="i">
      </RegisterCCard>
    </v-slide-y-reverse-transition>
  </div>
</template>

<script>
  import RegisterCCard from '@/components/RegisterCCard'
  export default {
    components: {
      RegisterCCard
    },
  }
</script>