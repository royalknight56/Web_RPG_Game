<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-24 15:43:40
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-26 16:12:41
-->
<template>
  <div>
    <div class="fight_outer">
      <div class="fight_title" >战斗</div>
      <div class="fight_list">
        <div class="equip_item" v-for="item in enemymap" :key="item">
          <itemui :peritem="item"></itemui>
          <div class="fight_right">
            <div class="fight_hp">{{ item.hp }}</div>
            <div @click="fight(item)" class="fight_button">攻击</div>
            <div class="buff_list">
              <div
                class="fight_buff"
                v-for="perbuff in item.buff"
                :key="perbuff"
              >
                <itembuff :peritem="perbuff"></itembuff>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject, onMounted, reactive, ref } from "vue";
import itemui from "./item_ui.vue";
import itemdesc from "./item_desc.vue";
import itembuff from "./buff_ui.vue";
import enemylist from "../item/enemy.js";
import itemmap from "../item/equi.js";
import goods from "../item/goods.js"

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

function addGoods(id,nums){//添加消耗品函数
  if(global_bag_goods[id]){
    global_bag_goods[id].num+=nums
  }else{
    global_bag_goods[id]=deepClone(goods[id])
    global_bag_goods[id].num = nums
  }
}


let my = inject("my");
let global_bag = inject("bag");
let global_bag_goods = inject("bag_goods");

let equi = inject("equi");
function attack(from, to) {
  let dam = Math.floor(
    (from.attr.attack * from.attr.attack) /
      (from.attr.attack + to.attr.defense + 1)
  );
  to.hp -= dam;
}
function beforeRound(from) {
  if (from?.buff) {
    for (let key in from.buff) {
      from.buff[key].beforeRound?.(from);
    }
  }
}

function afterRound(from) {
  if (from?.buff) {
    for (let key in from.buff) {
      from.buff[key].afterRound?.(from);
      from.buff[key].numbers--;
      if (from.buff[key].numbers <= 0) {
        delete from.buff[key];
      }
    }
  }
}
function equiAttackCheck(my, enemy) {
  for (let eq in equi) {
    equi[eq]?.attr?.afterAttack?.(my, enemy);
  }
}
function checkDead(from) {
  if (from.hp <= 0) {
    let res = from.attr.afterDead?.();
    if (res?.drop) {
      //处理掉落物
      for (let i = 0; i < res.drop.length; i++) {
        if (res.drop[i].prob >= Math.random()) {
          if(res.drop[i].type=='goods'){
            addGoods(res.drop[i].id,res.drop[i]?.num??1)
          }else {
            global_bag.push({ ...itemmap[res.drop[i].id] });
          }
        }
      }
    }
    let ind = enemymap.indexOf(from);
    if (ind >= 0) {
      enemymap.splice(ind, 1);
    }
  }
}
function fight(enemy) {
  beforeRound(enemy);
  beforeRound(my); //回合开始前,检查buff的beforeRound

  attack(my, enemy);
  attack(enemy, my); //伤害结算

  checkDead(enemy);
  checkDead(my); //检查死亡

  afterRound(enemy);
  afterRound(my); //回合结束,检查buff的afterRound

  equiAttackCheck(my, enemy);
}

let enemymap=inject('enemymap')

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
</style>