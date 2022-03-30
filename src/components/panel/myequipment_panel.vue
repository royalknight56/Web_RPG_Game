<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 15:28:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-29 19:01:19
-->
<template>
  <div>
    <div class="panel_outer">
      <div class="equip_title">装备</div>
      <div class="equip_list">
        <div class="equip_item" v-for="item in itemmap" :key="item">
          <itemui :peritem="item"></itemui>
          <div class="equip_desc">
            <div
              v-for="perdesc in item.desc"
              :key="perdesc"
              class="item_hover_ui_desc"
            >
              <itemdesc :item="item" :desc="perdesc"></itemdesc>
            </div>
          </div>
        </div>
        <!-- <itemlistui :itemlist="itemlist"></itemlistui> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject, reactive } from "vue";
// import itemlistui from "./item_list.vue";
import itemui from "../base/item_ui.vue";
import itemdesc from "../base/item_desc.vue";
let itemmap = inject('equi')
console.log(itemmap)
// let equi = inject('equi');
// let itemlist = reactive();
</script>

<style scoped>
@import './panel.css';
.equip_outer {
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: rgb(151, 151, 151);
  width: 300px;
  height: 500px;
  /* margin-left: 150px; */
  margin-top:  -250px;
  z-index: 0;
}
.equip_list {
  position: absolute;
  top: 100px;
  width: 100%;
  height: 400px;
  overflow: auto;
  overflow-x: hidden;
  /* transform: scale(0.6); */
}
.equip_title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
}
.equip_item {
  display: flex;
  width: 100%;
  border: 1px solid black;
}
</style>