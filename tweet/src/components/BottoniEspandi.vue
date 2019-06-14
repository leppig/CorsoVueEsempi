<template>
<div>
    <button v-for='c in cols.filter(c => "ridotto" in  c)' :key="c.name" @click='toggle(c)' 
      :style='displ(c.visibile)' >
       Espandi {{c.id}}
       </button>
</div>
</template>

<script>
import {COLS} from './cols.js'
export default {
  name: 'BottoniEspandi',
 data() {
    return COLS;
  },
  props: {
    id: Array,
    visibile: Boolean,
  },
  methods: {
      displ(d){
         return d ? 'display: inline;' : 'display: none;';
      },
    color(rtc) {
      return rtc < 20 ? 'background: lightgreen;' : 'background: orange';
    },
    toggle(c){
        c.ridotto = ! c.ridotto
        }
  },
  computed: {
    }
  }

</script>
