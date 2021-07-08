<template>
  <div>
    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>

    <MainLayout v-else/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import LoadLayout from './layouts/LoadLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import BaseLoading from '@/components/BaseLoading.vue'

export default {
  name: 'App',
  components: {
    LoadLayout,
    MainLayout,
    BaseLoading
  },
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>

<style lang="stylus">
body
  padding 60px 0
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing grayscale
  color #fff
  background-color #15202b
</style>
