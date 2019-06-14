<template>
    <th :style='displ(visibile)'  :data-ordina='chiave' :data-okind='sort_order'>
       {{id}} 
    </th>
</template>

<script>
export default {
  name: 'Colsh',
  props: {
      campi: Array,
      screen_name: String,
      myid: Number,
      retweet: Number,
      text: String,
      id: String,
      visibile: Boolean,
      chiave: String,
        sort_order: String
  },
  methods: {
      displ(d){
         return d ? 'display:table-cell;' : 'display:none;';
      },
    color(rtc) {
      return rtc < 20 ? 'background: lightgreen;' : 'background: orange';
    },
   
  },
  computed: {
   
  }
}
</script>
