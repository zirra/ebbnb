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

    try {
      tcity = tcity.toLowerCase()
    } catch (e) {
      tcity = this.city
    }
    if(tcity === undefined) {
      this.actSetCity(this.city)
      this.actGetEvents(this.city)
    } else {
      if(tcity == this.city) {
        this.actSetCity(this.city)
        this.actGetEvents(this.city)
      } else {
        this.actSetCity(tcity)
        this.actGetEvents(tcity)
      }
    }

    
    
  },
  methods: {
    ...mapActions([
      'actGetEvents',
      'actSetCity'
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
