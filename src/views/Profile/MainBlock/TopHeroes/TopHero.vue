<template>
  <div>
    <h1>TopHero</h1>
  </div>
</template>

<script>
export default {
  name: 'TopHero',
  props: {
    hero: {
      type: Object,
      required: true
    }
  }
}
</script>
