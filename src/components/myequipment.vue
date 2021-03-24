<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 15:28:04
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-24 15:11:13
-->
<template>
  <div>
    <div class="equip_outer">
      <div class="equip_title">装备</div>
      <div class="equip_list">
        <div class="equip_item" v-for="item in itemmap" :key="item">
          <itemui :peritem="item"></itemui>
          <div class="equip_desc">
            <div
              v-for="perdesc in item.equdesc"
              :key="perdesc"
              class="item_hover_ui_desc"
            >
              <itemdesc :desc="perdesc"></itemdesc>
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
import itemui from "./item_ui.vue";
import itemdesc from "./item_desc.vue";
let itemmap = inject('equi')
// let equi = inject('equi');
// let itemlist = reactive();
</script>

<style scoped>
.equip_outer {
  position: relative;
  background-color: rgba(0, 0, 0, 0.205);
  width: 300px;
  height: 500px;
  
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
  font-size: 40px;
  line-height: 100px;
  text-align: center;
}
.equip_item {
  display: flex;
  width: 100%;
  border: 1px solid black;
}
</style>