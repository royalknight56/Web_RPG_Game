<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-25 19:43:13
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-26 16:31:28
-->
<template>
  <div>
    <div class="fight_outer">
      <div class="fight_title">地图</div>
      <div class="fight_list">
        <div class="equip_item" v-for="item in fmap" :key="item">
          <itemui :peritem="item"></itemui>
          <div class="fight_right">
            <div
              v-for="perdesc in item.desc"
              :key="perdesc"
              class="item_hover_ui_desc"
            >
              <itemdesc :desc="perdesc"></itemdesc>
            </div>
            <div @click="mapTP(item)" class="map_button">传送</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject, reactive } from "vue";
import itemui from "./item_ui.vue";
import itemdesc from "./item_desc.vue";
import itembuff from "./buff_ui.vue";
import enemylist from "../item/enemy.js";
import fmap from "../item/fmap.js";
import itemmap from "../item/equi.js";

function deepClone(obj) {
  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  //进行深拷贝的不能为空，并且是对象或者是
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
let enemymap = inject("enemymap");
let global_my = inject("my");
function mapTP(item) {
  //地图传送FUN
  if (global_my.spirit - item.spirit >= 0) {
    //判断体力是否充足
    enemymap.splice(0); //清空怪物列表
    for (let i = 0; i < item.enemylist.length; i++) {
      enemymap.push(deepClone(enemylist[item.enemylist[i]]));
    }
    global_my.spirit -= item.spirit;
  }
}
</script>

<style scoped>
.fight_outer {
  position: relative;
  background-color: rgba(0, 0, 0, 0.205);
  width: 300px;
  height: 500px;
}
.fight_list {
  position: absolute;
  top: 100px;
  width: 100%;
  height: 400px;
  overflow: auto;
  overflow-x: hidden;
}
.fight_title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 40px;
  line-height: 100px;
  text-align: center;
}
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
.fight_button {
  cursor: pointer;
  width: 40px;
  height: 20px;
  background-color: black;
  color: aliceblue;
}
.fight_hp {
}
.buff_list {
  display: flex;
}
.map_button {
  cursor: pointer;
}
</style>