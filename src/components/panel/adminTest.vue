<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-27 10:51:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-24 10:59:19
-->
<template>
  <div class="panel_outer ">
    <button @click="logTest()">测试系统提醒</button>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import equi from "../../item/equi.js";
import goods from "../../item/goods.js";

let global_bag = inject("bag");
let global_bag_goods = inject("bag_goods");
let sys_log = inject("log");

function logTest() {
  sys_log.info(
    "/c060 TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
    "Sys"
  );
  sys_log.info("/c060 TestTes", "Sys");
}

global_bag.addItems("wuqi001");

// global_bag.addItems("wuqit001");

global_bag.addItems("wuqi002");
global_bag.addItems("wuqi003");
global_bag.addItems("shangyi001");
global_bag.addItems("xiayi001");
global_bag.addItems("xiezi001");
global_bag.addItems("jiezhi001");
global_bag.addItems("xianglian001");
global_bag.addItems("shouzhuo001");
global_bag.addItems("yuren001");

global_bag_goods.addItems("xueping001", 3);
global_bag_goods.addItems("xueping001", 2);
global_bag_goods.addItems("xueping002", 2);
global_bag_goods.addItems("gongjiping001", 2);
global_bag_goods.addItems("tiliyaoshui001", 2);
global_bag_goods.addItems("superattack002", 4);
global_bag_goods.addItems("box001", 20);


</script>

<style scoped>
@import './panel.css';
</style>