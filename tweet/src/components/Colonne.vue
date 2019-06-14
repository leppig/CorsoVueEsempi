<template>
<div>
  <br>
    Colonne visibili:<br>
    <span id='colonne' v-for='c in cols' :key="c.name"
        :style='displ(c.visibile)' @click='toggle(c)'>
       {{c.id}}
</span>
</div>
</template>

<script>
import {COLS} from './cols.js'
export default {
  name: 'Colonne',
 data() {
    return COLS;
  },
  props: {
    id: Array,
    visibile: Boolean,
  },
  methods: {
      displ(d){
         return d ? 'color: gray;' : 'color: red;';
      },
    color(rtc) {
      return rtc < 20 ? 'background: lightgreen;' : 'background: orange';
    },
    toggle(c){
        c.visibile = ! c.visibile
        }
  },
  computed: {
    }
  }

</script><style>
#colonne {
  margin: 2px;
  border: green dotted 1pt;
}
</style>
