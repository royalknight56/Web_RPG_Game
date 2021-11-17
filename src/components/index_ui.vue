<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-28 09:39:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-16 11:01:57
-->
<template>
  <div class="main_layout">
    <div class="main_flex">
      <div class="fight_outer">
        <fight v-if='global_sysStates.loc!="town"'></fight>
      </div>
      
      <div class="index_ui_button_group">
        <div
        v-for="(item,key) in tabslist"
        :key='item'
          @click="tabVisChange(key)"
          :class="{ chosen_index_ui_button: item.show }"
          class="index_ui_button"
        >
          {{item.name}}
        </div>
      </div>
    </div>
    <syslog></syslog>
    <div class="index_window">

      <!-- <store v-show="tabslist.store.show"></store>
      <mybag v-show="tabslist.mybag.show"></mybag>
      <mypanel v-show="tabslist.mypanel.show"></mypanel>
      <myequi v-show="tabslist.myequi.show"></myequi>

      <fmap v-show="tabslist.fmap.show"></fmap>
      <setting  v-show="tabslist.setting.show"></setting>
      <admintest v-show="tabslist.test.show"></admintest> -->


      <store v-show="vis.cur=='store'"></store>
      <mybag v-show="vis.cur=='mybag'"></mybag>
      <mypanel v-show="vis.cur=='mypanel'"></mypanel>
      <!-- 使用v-show使得计算属性被触摸 -->
      <myequi v-show="vis.cur=='myequi'"></myequi>

      <fmap v-show="vis.cur=='fmap'"></fmap>
      <setting  v-show="vis.cur=='setting'"></setting>
      <admintest v-show="vis.cur=='test'"></admintest>

    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive,inject } from "vue";
// import imgsrc from '../assets/wepon/stick01.png'
import store from "./panel/shop_panel.vue";
import mybag from "./panel/mybag_panel.vue";
import mypanel from "./panel/role_panel.vue";
import myequi from "./panel/myequipment_panel.vue";
import fight from "./fight.vue";
import fmap from "./panel/map_panel.vue";
import admintest from "./panel/adminTest.vue";
import syslog from "./sys_log.vue";
import setting from "./panel/setting_panel.vue";
let global_sysStates = inject("sysStates");

let vis = reactive({
  store: false,
  mybag: false,
  mypanel: false,
  myequi: false,
  fmap: false,
  setting: false,
  test: false,
  cur:""
});
let tabslist = reactive({
  store: {
    name:'商店',
    show:false
  },
  mybag: {
    name:'背包',
    show:false
  },
  mypanel: {
    name:'角色',
    show:false
  },
  myequi: {
    name:'装备',
    show:false
  },
  fmap: {
    name:'地图',
    show:false
  },
  setting: {
    name:'设置',
    show:false
  },
  test: {
    name:'测试',
    show:false
  },
});

function tabVisChange(tab) {
  // tabslist[tab].show = !tabslist[tab].show;
    if (vis.cur == tab) {
      vis.cur = "";
    } else {
      vis.cur = tab;
    }
}
</script>

<style scoped>

.main_layout {
  /* width: 1100px;
  height: 600px; */
  width: 100%;
  height: 100%;
  position: absolute;
  /* left: 50%; */
  /* top: 50%; */
  /* margin-left: -550px; */
  /* margin-top: -300px; */
  overflow: hidden;
}
.main_flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.fight_outer {
  position: relative;
  background-color: rgba(0, 0, 0, 0.205);
  width: 100%;
  height: 100%;
}
.index_ui_button_group {
  width: 100%;
  /* position: absolute; */
  bottom: 0;
  display: flex;
  z-index: 6;
}
.index_ui_button {
  background-image: url('../ui/UI-button001.png');
    position: relative;
  background-color: black;
  color: black;
  height: 40px;
  width: 100px;
  cursor: pointer;
  line-height: 40px;
  text-align: center;
  user-select: none;
}
.chosen_index_ui_button {
  background-image: url('../ui/UI-button002.png');
  background-color: white;
  color: black;
}
.index_ui_button:hover {
  background-image: url('../ui/UI-button003.png');
  /* bottom: 3px; */
}
.chosen_index_ui_button:hover {
  background-image: url('../ui/UI-button004.png');
  /* bottom: 3px; */
}
.index_window {
  position: absolute;
  top: 0;
}
</style>