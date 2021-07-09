<template>
  <div>
    <baseLoading v-if="isLoading"/>
    <template v-if="profileData !== null">
      <MainBlock :profileData="profileData" />
    </template>
  </div>
</template>

<script>
import baseLoading from '@/components/BaseLoading.vue'
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'
import MainBlock from './MainBlock/Index.vue'

export default {
  name: 'ProfileView',
  mixins: [
    setError
  ],
  data () {
    return {
      profileData: null,
      isLoading: false
    }
  },
  components: {
    baseLoading,
    MainBlock
  },
  created () {
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },
  methods: {
    fetchData () {
      const { region, battleTag: account } = this.$route.params

      getApiAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data
        }).catch((err) => {
          this.profileData = null
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }

          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }

          this.setApiErr(errObj)
          this.$router.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
