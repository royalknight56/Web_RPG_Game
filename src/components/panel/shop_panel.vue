<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-20 21:36:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-15 19:02:31
-->
<template>
  <div>
    <div class="panel_outer">
      <div class="store_title">商店</div>
      <div class="store_list">
        <itemlistui :itemtab='tab' :itemlist="itemlist"></itemlistui>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import itemlistui from "../base/item_list.vue";
import equi from "../../item/equi.js";
let tab = reactive([
  {
    name: "购买",
    fun: function (self) {

    },
  },
]);
let itemlist = reactive([

]);
</script>

<style scoped>
@import './panel.css';
.store_outer {
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: rgb(151, 151, 151);
  width: 300px;
  height: 500px;
  /* margin-left: -450px; */
  margin-top:  -250px;
  z-index: 3;
}
.store_list {
  position: absolute;
  top: 100px;
}
.store_title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
}
</style>