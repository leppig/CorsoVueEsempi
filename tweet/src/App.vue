<template>

  <div id="app">
    <h1>Tweet</h1>
<br>
    <BottoniEspandi name='espandi' />
    <Colonne name='colonne' />
      <br>
    <Table name="Tweets" :items='tweets'/>
  </div>
</template>

<script>
import Table from './components/Table.vue'
import {TWEETS} from './components/tweets.js'
import Colonne from './components/Colonne.vue'
import BottoniEspandi from './components/BottoniEspandi.vue'


export default {
  name: 'app',

  data() {
    return TWEETS;
  },
  props: {

  },
  components: {
    Table,
    Colonne,
    BottoniEspandi
  },

  methods: {
      toggle(d){
         return d ? 'color: red;' : 'color: gray;';
      },
  }
}
</script>

<style>
#app {
  margin: 60px;

}
</style>
