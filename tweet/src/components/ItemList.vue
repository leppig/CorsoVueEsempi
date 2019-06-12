<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <ul>
      <Item
        v-for="item of sorted_items"
        :key="item.id"
        :retweet="item.retweet_count"
        :screen_name="item.user.screen_name"
        :text="item.text"
      />
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "ItemList",
  props: {
    name: String,
    items: Array,
    campi: Array
  },
  components: {
    Item
  },
  computed: {
    sorted_items() {
      return this.items
        .slice()
        .sort((a, b) => a.retweet_count < b.retweet_count);
    }
  }
};
</script>
