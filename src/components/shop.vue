<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-20 21:36:25
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-24 22:21:14
-->
<template>
  <div>
    <div class="store_outer">
      <div class="store_title">商店</div>
      <div class="store_list">
        <itemlistui :itemtab='tab' :itemlist="itemlist"></itemlistui>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import itemlistui from "./item_list.vue";
import equi from "../item/equi.js";
let tab = reactive([
  {
    name: "购买",
    fun: function (self) {

    },
  },
]);
let itemlist = reactive([
  { ...equi.wuqi001, tab },
  { ...equi.wuqi002, tab },
  { ...equi.wuqi003, tab },
  { ...equi.shangyi001, tab },
  { ...equi.xiayi001, tab },
]);
</script>

<style scoped>
a {
  color: #42b983;
}
.store_outer {
  position: relative;
  background-color: rgba(0, 0, 0, 0.205);
  width: 300px;
  height: 500px;
}
.store_list {
  position: absolute;
  top: 100px;
}
.store_title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 40px;
  line-height: 100px;
  text-align: center;
}
</style>