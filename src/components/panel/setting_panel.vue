<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-04-03 21:32:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-25 11:03:20
-->
<template>
  <div class="panel_outer">
    <div class="store_title">系统设置</div>
    <div class="button_group">
      <div class="store_button" @click="saveGame()">保存</div>
      <div class="store_button" @click="loadGame()">加载</div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import equi from "../../item/equi.js";
import goods from "../../item/goods.js";
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

loadGame()
</script>

<style scoped>
@import "./panel.css";
.store_outer {
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: rgb(151, 151, 151);
  width: 300px;
  height: 500px;
  /* margin-left: -150px; */
  margin-top: -250px;
  z-index: 2;
}

.store_title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
}
.button_group {
  width: 300px;
  height: 100%;
  position: absolute;
  top: 50px;
  display: flex;
  z-index: 6;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.store_button {
  background-image: url("../ui/UI-button001.png");

  background-color: black;
  color: black;
  height: 40px;
  width: 100px;
  cursor: pointer;
  line-height: 40px;
  text-align: center;
  user-select: none;
}

.store_button:hover {
  background-image: url("../ui/UI-button003.png");
  /* bottom: 3px; */
}
</style>