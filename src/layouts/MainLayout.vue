<template>
  <div>
    <HeaderBar />
    <div class="container">
      <router-view/>
    </div>
    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index.vue'
import FooterBar from '@/components/FooterBar/Index.vue'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>
