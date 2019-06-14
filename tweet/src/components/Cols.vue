<template>
    <td :style='displ(visibile)' >  {{ breve(ridotto,getval(item,chiave)) }}  </td>
</template>

<script>
export default {
  name: 'Cols',
  props: {
      campi: Array,
      screen_name: String,
      myid: Number,
      retweet: Number,
      text: String,
      id: String,
      vals: Object,
      v: Number,
      item: Object,
      chiave: String,
      visibile: Boolean,
      ridotto: Boolean
  },
  methods: {
    breve (r, d){
        if (r == undefined )return d;
        return r ? d.substring(0,20) : d;
    },
      getval(o, k){
    //   console.log("chiave:%s", k );
        if (k==='') {
            return o;
        } 
        let indice=k.indexOf('.');
        if (indice==-1){
            return o[k];
        } else {
//          return "sotto "+k.substring(k.indexOf('.')+1)
          return this.getval(o[k.substring(0,indice)],k.substring(indice+1));
        } 
      },
      displ(d){
        return d ? 'display:table-cell' : 'display:none';
      },
    color(rtc) {
      return rtc < 20 ? 'background: lightgreen;' : 'background: orange';
    }
  }
}
</script>
