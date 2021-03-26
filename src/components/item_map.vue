<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-26 12:19:57
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-26 12:20:15
-->
<template>
  <div>
    <div class="list_outer">
      <div class="list_item_outer">
        <div class="list_item" v-for="item in itemlist" :key="item">
          <itemui :itemtab='itemtab' :peritem='item'></itemui>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import itemui from "./item_ui.vue";
defineProps({
  itemlist: Object,
  itemtab:Array
})

</script>

<style scoped>
a {
  color: #42b983;
}
.list_outer {
  position: relative;
  width: 300px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.144);
  overflow: visible;

  overflow-y: auto;
}
.list_item_outer {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.list_item {

}

</style>