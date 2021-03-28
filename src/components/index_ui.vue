<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-28 09:39:20
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-28 16:41:38
-->
<template>
  <div class="main_layout">
    <div class="main_flex">
      <fight></fight>
      <div class="index_ui_button_group">
        <div
          @click="tabVisChange('store')"
          :class="{ chosen_index_ui_button: vis.store }"
          class="index_ui_button"
        >
          商店
        </div>
        <div
          @click="tabVisChange('mybag')"
          :class="{ chosen_index_ui_button: vis.mybag }"
          class="index_ui_button"
        >
          背包
        </div>
        <div
          @click="tabVisChange('mypanel')"
          :class="{ chosen_index_ui_button: vis.mypanel }"
          class="index_ui_button"
        >
          角色
        </div>
        <div
          @click="tabVisChange('myequi')"
          :class="{ chosen_index_ui_button: vis.myequi }"
          class="index_ui_button"
        >
          装备
        </div>
        <div
          @click="tabVisChange('fight')"
          :class="{ chosen_index_ui_button: vis.fight }"
          class="index_ui_button"
        >
          战斗
        </div>
        <div
          @click="tabVisChange('fmap')"
          :class="{ chosen_index_ui_button: vis.fmap }"
          class="index_ui_button"
        >
          地图
        </div>
        <div
          @click="tabVisChange('test')"
          :class="{ chosen_index_ui_button: vis.test }"
          class="index_ui_button"
        >
          测试按钮
        </div>
      </div>
    </div>
    <syslog></syslog>
    <div class="index_window">
      <store v-show="vis.store"></store>
      <mybag v-show="vis.mybag"></mybag>
      <mypanel v-show="vis.mypanel"></mypanel>
      <!-- 使用v-show使得计算属性被触摸 -->
      <myequi v-show="vis.myequi"></myequi>

      <fmap v-show="vis.fmap"></fmap>
      <admintest v-show="vis.test"></admintest>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
// import imgsrc from '../assets/wepon/stick01.png'
import store from "./shop.vue";
import mybag from "./mybag.vue";
import mypanel from "./role_panel.vue";
import myequi from "./myequipment.vue";
import fight from "./fight.vue";
import fmap from "./map.vue";
import admintest from "./adminTest.vue";
import syslog from "./sys_log.vue";

let vis = reactive({
  cur: "",
  store: false,
  mybag: false,
  mypanel: false,
  myequi: false,
  fmap: false,
  test: false,
});

function tabVisChange(tab) {
  vis[tab] = !vis[tab];
  //   if (vis.cur == tab) {
  //     vis.cur = "";
  //   } else {
  //     vis.cur = tab;
  //   }
}
</script>

<style scoped>
.main_layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.main_flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.index_ui_button_group {
  width: 100vw;
  /* position: absolute; */
  bottom: 0;
  display: flex;
  z-index: 2;
}
.index_ui_button {
    position: relative;
  background-color: black;
  color: white;
  height: 40px;
  width: 100px;
  cursor: pointer;
  line-height: 40px;
  text-align: center;
  user-select: none;
}
.chosen_index_ui_button {
  background-color: white;
  color: black;
}
.index_ui_button:hover {
  bottom: 3px;
}
.index_window {
  position: absolute;
  top: 0;
}
</style>