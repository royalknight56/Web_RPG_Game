<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-24 15:43:40
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-24 22:24:01
-->
<template>
  <div>
    <div class="fight_outer">
      <div class="fight_title">战斗</div>
      <div class="fight_list">
        <div class="equip_item" v-for="item in enemymap" :key="item">
          <itemui :peritem="item"></itemui>
          <div class="fight_button">{{ item.hp }}</div>

          <div @click="fight(item)" class="fight_button">攻击</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject, reactive } from "vue";
import itemui from "./item_ui.vue";
import itemdesc from "./item_desc.vue";
import enemylist from "../item/enemy.js";
import itemmap from "../item/equi.js";
let my = inject("my");
let bag = inject('bag')
function attack(from, to) {
  let dam = Math.floor(
    (from.attr.attack * from.attr.attack) /
      (from.attr.attack + to.attr.defense + 1)
  );
  to.hp -= dam;
}
function checkDead(from){
  if(from.hp<=0){
    let res = from.attr.afterDead?.();
    if(res.drop){
      for(let i=0;i<res.drop.length;i++){
        if(res.drop[i].prob>=Math.random()){
          console.log(itemmap[res.drop[i].id])
          bag.push({...itemmap[res.drop[i].id]})
        }
      }
    }
  }
}
function fight(enemy) {
  // enemy.attr.hp-=10;
  //ATK^2/(ATK+targetDEF+1)
  attack(my, enemy);
  attack(enemy, my);
  checkDead(enemy);
  checkDead(my);
}
let enemymap = reactive([
  {...enemylist.yezhu001},
  {...enemylist.yezhu001},
]);
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
</style>