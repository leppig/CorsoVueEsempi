<template>
<div>
<button @click='ordina'>Ordina</button>
    <li> {{screen_name}} <span :style='color(retweet)'> {{text}} </span>{{retweet}}</li>
    </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
      campi: Array,
      screen_name: String,
      myid: Number,
      retweet: Number,
      text: String,
  },
  methods: {
    color(rtc) {
      return rtc < 20 ? 'background: lightgreen;' : 'background: orange';
    }
  }
}
</script>
