<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-27 10:51:28
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-27 21:28:43
-->
<template>
  <button @click="saveGame()">测试保存</button>
  <button @click="loadGame()">测试加载</button>

  <button @click="logTest()">测试系统提醒</button>
</template>

<script setup>
import { inject } from "vue";
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
      spirit: my.spirit,
    })
  );
}
function loadMy(my) {
  let myobj = JSON.parse(localStorage.getItem("my"));
  my.hp = myobj.hp;
  my.mp = myobj.mp;
  my.spirit = myobj.spirit;
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
  saveBag(global_bag);
  saveBag_goods(global_bag_goods);
  sys_log.info("/c060 背包保存成功", "Sys");

}
function loadGame() {
  loadMy(global_my);
  sys_log.info("/c060 状态导入成功", "Sys");
  loadBag(global_bag);
  loadBag_goods(global_bag_goods);
  sys_log.info("/c060 背包导入成功", "Sys");

}

function logTest() {
  sys_log.info(
    "/c060 TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
    "Sys"
  );
  sys_log.info("/c060 TestTes", "Sys");
}
</script>

<style>
</style>