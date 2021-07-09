<template>
  <div class="top-heroes">
    <h1>Top Heroes</h1>
  </div>
</template>

<script>

export default {
  name: 'TopHeroes',
  props: {
    heroes: {
      required: true,
      type: Array
    }
  }
}
</script>
