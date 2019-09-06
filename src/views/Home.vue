<template>
  <div class="home">
    <p>Anonymous: {{isAnonymous}}</p>
    <p>{{today}}</p>
    <feature-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Feature from '@/components/Featured'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    'feature-view': Feature
  },
  mounted () {
    let tcity = this.$route.params.city
    console.log(tcity)
    this.actGetEvents(this.city)
  },
  methods: {
    ...mapActions([
      'actGetEvents'
    ])
  },
  computed: {
    ...mapGetters([
      'isAnonymous',
      'today',
      'city'
    ])
  }
}
</script>
