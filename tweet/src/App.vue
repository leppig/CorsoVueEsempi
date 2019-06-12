<template>
  <div id="app">
    <ItemList name="Tweets" :items='tweets'/>
  </div>
</template>

<script>
import ItemList from './components/ItemList.vue'
import {TWEETS} from './components/tweets.js'

export default {
  name: 'app',
  data() {
    return TWEETS;
  },
  components: {
    ItemList,
  },
}
</script>

<style>
#app {
  margin: 60px;
}
</style>
