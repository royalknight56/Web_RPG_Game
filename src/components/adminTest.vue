<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-27 10:51:28
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-04-03 22:10:08
-->
<template>
  <div>
    <button @click="logTest()">测试系统提醒</button>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import equi from "../item/equi.js";
import goods from "../item/goods.js";
let global_my = inject("my");
let global_bag = inject("bag");
let global_bag_goods = inject("bag_goods");
let global_equi = inject("equi");
let sys_log = inject("log");


function logTest() {
  sys_log.info(
    "/c060 TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
    "Sys"
  );
  sys_log.info("/c060 TestTes", "Sys");
}

global_bag.addItems("wuqi001");
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

//为my attr添加计算属性
//computedAttr:面板属性
//attr:生效属性
let attrs_key = {
  attack: "攻击力",

  defense: "防御力",
  strength: "力量",
  intelligence: "智力",
  speed: "速度",
};
for (let key in attrs_key) {
  global_my.computedAttr[key] = computed(() => {
    let total = 0;
    for (let pos in global_equi) {
      //计算每个装备赋予的属性
      total += global_equi[pos]?.attr?.[key] ?? 0;
    }

    total += global_my.baseAttr[key] ?? 0; //加上基础属性

    for (let name in global_my.buff) {
      //计算buff赋予的属性,临时的
      total += global_my.buff[name]?.attr?.[key] ?? 0;
    }
    global_my.attr[key] = total;

    return total;
  });
}
</script>

<style>
</style>