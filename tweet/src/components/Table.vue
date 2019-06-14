<template>
    <table id='tabella' @click="test" >
      <tr>
      <Colsh
      v-for="col in cols"  
      :key= "col.id"
      :id = 'col.id'
      :visibile='col.visibile'
      :chiave = 'col.chiave'
      :sort_order='col.sort_order'
      />
      <tr/>
      <Rows
        v-for='item in sorted_items'    
        :key="item.id"
        :text='item.text' 
        :item='item'
      />
    </table>
 </template>

<style>
table,td,th {
  border: 1px solid black;}

table {
  border-collapse: collapse;
}
</style>
<script>
import Rows from './Rows.vue'
import Colsh from './Colsh.vue'
import {COLS} from './cols.js'


export default {
  name: "Table",
  sort_order: "id", 
  last_sort_order: "id", 
  last_sort_direction: +1, 
  sort_kind: "number", 
   data() {
    return COLS;
  },

  props: {
    name: String,
    items: Array,
    campi: Array,
  },
  components: {
    Rows,
    Colsh,
    
  },
  methods: {

     getval(o, k){
        if (k==='') {
            return o;
        } 
        let indice=k.indexOf('.');
        if (indice==-1){
            return o[k];
        } else {
          return this.getval(o[k.substring(0,indice)],k.substring(indice+1));
        } 
      },


      sorting(a,b){
        let val_a=this.getval(a,this.sort_order);
        let val_b=this.getval(b,this.sort_order);
        let out;
        if(this.sort_kind == 'number'){
             out=val_a-val_b;
        }
        if(this.sort_kind == 'string'){
            let val_sa=val_a.toLowerCase();
            let val_sb=val_b.toLowerCase();
            out= val_sa<val_sb ? -1 : val_sa==val_sb ? 0 : 1;
        }
        return this.last_sort_direction*out;
      },

    ordinabile(t){
        if (this.cols.some(c => c.chiave==t  && c.ordinabile )){
          //eslint-disable-next-line
            console.log("OK!");
              return true;
        } else {
          //eslint-disable-next-line
            console.log("KO!");
              return false;
        }
    },
      test(e){
        if (e.target.tagName!='TH') return;
        var order=e.target.getAttribute("data-ordina");
        var so=e.target.getAttribute("data-okind");
        this.ordinabile(order);
        if (this.ordinabile(order)){
           this.items.push({id: -1}); 
           this.sort_order=order;
           this.sort_kind=so;
           if (this.last_sort_order==this.sort_order){
                this.last_sort_direction=-this.last_sort_direction;
            } else {
                this.last_sort_direction=1;
                this.last_sort_order=this.sort_order;
            }
        }
       console.log(order);
      },
  }
  ,
  computed: {
    
    sorted_items() { 
          //eslint-disable-next-line
      console.log("ordina per %s modo %s dir %s",this.sort_order, this.sort_kind, this.last_sort_direction);
            return this.items.filter(c=> c.id!="-1")
                    .slice()
                    .sort(this.sorting)
        //.sort(sorting(key))(a, b) => a.retweet_count < b.retweet_count);
    }
    
  }
};
</script>
