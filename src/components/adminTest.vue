<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-27 10:51:28
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-04-01 16:51:31
-->
<template>
  <div>
    <button @click="saveGame()">测试保存</button>
    <button @click="loadGame()">测试加载</button>

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

function saveMy(my) {
  localStorage.setItem(
    "my",
    JSON.stringify({
      hp: my.hp,
      mp: my.mp,
      maxhp: my.maxhp,
      maxmp: my.maxmp,
      spirit: my.spirit,
      baseAttr: my.baseAttr,
      exp: my.exp,
    })
  );
}
function loadMy(my) {
  let myobj = JSON.parse(localStorage.getItem("my"));
  my.hp = myobj.hp;
  my.mp = myobj.mp;
  my.maxhp = myobj.maxhp;
  my.maxmp = myobj.maxmp;
  my.spirit = myobj.spirit;
  my.exp = myobj.exp;
  my.baseAttr = myobj.baseAttr;
}

function copyKey(funObj, attrObj) {
  //复制Key的函数
  let newObj = {};
  if (Object.prototype.toString.call(funObj) == "[object Object]") {
    //判断是否是Object,不是直接返回
    for (let key in funObj) {
      if (Object.prototype.toString.call(funObj[key]) == "[object Object]") {
        newObj[key] = copyKey(funObj[key], attrObj[key]);
      } else if (
        Object.prototype.toString.call(funObj[key]) == "[object Array]"
      ) {
        newObj[key] = [];

        for (let i = 0; i < funObj[key].length; i++) {
          newObj[key][i] = copyKey(funObj[key][i], attrObj[key][i]);
        }
      } else {
        if (attrObj[key]) {
          newObj[key] = attrObj[key];
        } else {
          newObj[key] = funObj[key];
        }
      }
    }
    for (let key in attrObj) {
      if (newObj[key]) {
      } else {
        newObj[key] = attrObj[key];
      }
    }

    return newObj;
  } else {
    return attrObj;
  }
}

function saveBag(bag) {
  localStorage.setItem(
    "bag",
    JSON.stringify({
      bag,
    })
  );
}
function loadBag(bag) {
  let bagTemp = JSON.parse(localStorage.getItem("bag"));
  let bagArr = bagTemp.bag;
  for (let i = 0; i < bagArr.length; i++) {
    let funObj = equi[bagArr[i].id]; //带有函数的OBJ
    let attrObj = bagArr[i]; //不带函数带有改进属性的OBJ
    bag[i] = copyKey(funObj, attrObj);
    // console.log(bag[i].ifEquip)
    if (bag[i].ifEquip) {
      //判断是否已经装备
      global_equi[bag[i].pos] = bag[i];
    }
  }
}

function saveBag_goods(bag) {
  localStorage.setItem("bag_goods", JSON.stringify(bag));
}
function loadBag_goods(bag_goods) {
  let bagObj = JSON.parse(localStorage.getItem("bag_goods"));
  for (let key in bag_goods) {
    delete bag_goods[key];
  }
  for (let key in bagObj) {
    let funObj = goods[bagObj[key].id]; //带有函数的OBJ
    let attrObj = bagObj[key]; //不带函数带有改进属性的OBJ
    bag_goods[key] = copyKey(funObj, attrObj);
  }
}
function saveGame() {
  saveMy(global_my);
  sys_log.info("/c060 状态保存成功", "Sys");
  saveBag(global_bag.arr);
  saveBag_goods(global_bag_goods.map);
  sys_log.info("/c060 背包保存成功", "Sys");
}
function loadGame() {
  loadMy(global_my);
  sys_log.info("/c060 状态导入成功", "Sys");
  loadBag(global_bag.arr);
  loadBag_goods(global_bag_goods.map);
  sys_log.info("/c060 背包导入成功", "Sys");
}

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