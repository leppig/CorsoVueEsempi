<template>
    <tr>
      <Cols
      :item = item
      v-for ="col of cols"  
      :chiave = 'col.chiave'
      :id = 'col.id'
      :key = 'col.id'
      :visibile= 'col.visibile'
      :ridotto = 'col.ridotto'
      />
    </tr>
</template>

<script>
import Cols from './Cols.vue'
import {COLS} from './cols.js'

export default {
  name: 'Rows',
  data() {
    return COLS;
  }, 
  props: {
      campi: Array,
      screen_name: String,
      myid: Number,
      retweet: Number,
      text: String,
      vals: Object,
      item: Object,
      chiave: String,
      reduce: Boolean
  },
  components: {
    Cols,
  },


  methods: {
      visibile(d){
          return d ? 'Display: InLine' : 'Display: None';
      },
    color(rtc) {
      return rtc < 20 ? 'background: lightgreen;' : 'background: orange';
    }
  },

  computed: {
   
  }
}
</script>
