<template>
  <div>
    <h1>Heroes List</h1>
    <b-table :items="heroes" :fields="fields" dark hover small striped stacked="sm"/>
  </div>
</template>

<script>
export default {
  name: 'HeroesList',
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: true
        }
      ]
    }
  }
}
</script>
