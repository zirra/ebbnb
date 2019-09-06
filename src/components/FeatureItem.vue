<template>
  <div class="event-container">
    <img :src="event.logo.url" :alt="event.name" style="width:100%;"/>
    <div class="top-left">
      <p><a :href="event.url">{{event.name.html}}</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'feature-item',
  props: [
    'item'
  ],
  data () {
    return {
      event: this.item
    }
  }
}
</script>

<style>
.event-container {
  margin: 0px auto;
  width: 100%;
  max-width: 480px;
  position: relative;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}
</style>