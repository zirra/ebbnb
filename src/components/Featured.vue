<template>
  <div>
    <h1>Featured Spot</h1>
    <div v-for="event in events" v-bind:key="event.id">
      <feature-item :item="event" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FeatureItem from './FeatureItem'

export default {
  name: 'featured-view',
  components: {
    'feature-item': FeatureItem
  },
  computed: {
    ...mapGetters([
      'events'
    ])
  }
}
</script>

<style>

</style>