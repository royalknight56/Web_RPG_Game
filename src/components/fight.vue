<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-24 15:43:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-15 15:58:37
-->
<template>
  <div class="fight_outer">
    <div v-if="enemymap[0]" class="fight_ui">
      <!-- <div class="equip_item" v-for="item in enemymap" :key="item"> -->
      <itemui
        class="fight_logo"
        :peritem="enemymap[0]"
        :key="enemymap[0]"
      ></itemui>

      <div class="fight_button_group">
        <div @click="fight(enemymap[0])" class="fight_button">攻击</div>
        <div
          @click="fight(enemymap[0], item)"
          v-for="item in skill"
          :key="item"
          class="fight_button"
        >
          {{ item.name }}
        </div>
        <!-- <div @click="fight(enemymap[0])" class="fight_button">技能1</div>
          <div @click="fight(enemymap[0])" class="fight_button">技能2</div>
          <div @click="fight(enemymap[0])" class="fight_button">技能3</div> -->
      </div>
      <div class="fight_right">
        <div class="fight_hp">{{ enemymap[0].hp }}</div>
        <div class="buff_list">
          <div
            class="fight_buff"
            v-for="perbuff in enemymap[0].buff"
            :key="perbuff"
          >
            <itembuff :peritem="perbuff"></itembuff>
          </div>
        </div>
      </div>
    </div>
    <div class="fight_ani">
      <img  :src="fightansrc">
    </div>
    <div class="fight_ui">
      <div class="fight_right">
        <div class="fight_my_hp">{{ my.hp }}</div>
        <div class="fight_my_mp">{{ my.mp }}</div>

        <div class="my_buff_list">
          <div class="fight_my_buff" v-for="perbuff in my.buff" :key="perbuff">
            <itembuff :peritem="perbuff"></itembuff>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject, nextTick, onMounted, reactive, ref } from "vue";
import itemui from "./base/item_ui.vue";
import itemdesc from "./base/item_desc.vue";
import itembuff from "./base/buff_ui.vue";
import enemylist from "../item/enemy.js";
import itemmap from "../item/equi.js";
import goods from "../item/goods.js";

let my = inject("my");
let global_bag = inject("bag");
let global_bag_goods = inject("bag_goods");

let equi = inject("equi");

let skill = inject("skill");


let fightansrc = ref('./fight/attack.gif')
function attack(from, to) {
  let atk = from.attr.attack;
  let def = to.attr.defense;
  
  let dam = Math.floor(
    (atk * atk) /
      (atk + def + 1)
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
          if (res.drop[i].type == "goods") {
            global_bag_goods.addItems(res.drop[i].id, res.drop[i]?.num ?? 1);
          } else {
            global_bag.addItems(res.drop[i].id);
          }
        }
      }
    }
    if (res?.exp) {
      //处理经验获得
      my.exp+=res?.exp
    }
    let ind = enemymap.indexOf(from);
    if (ind >= 0) {
      enemymap.splice(ind, 1);
    }
  }
}
function checkMyDead(my){
  
}
function fight(enemy, skill) {

  beforeRound(enemy);
  beforeRound(my); //回合开始前,检查buff的beforeRound


  if (skill && my.mp - skill.mp >= 0) {
    //是否使用了技能和是否有蓝量使用技能
    skill.use(my, enemy);
    fightansrc.value=skill.ani+'?'+new Date().toString()
    my.mp = my.mp - skill.mp;
  } else {
    fightansrc.value = './fight/attack.gif'+'?'+new Date().toString()
    attack(my, enemy);
  }

  attack(enemy, my); //伤害结算

  checkDead(enemy);
  checkMyDead(my); //检查死亡

  afterRound(enemy);
  afterRound(my); //回合结束,检查buff的afterRound


  equiAttackCheck(my, enemy);
}

let enemymap = inject("enemymap");
</script>

<style scoped>
.fight_outer {
  position: relative;
  background-color: rgba(0, 0, 0, 0.205);
  width: 100%;
  height: 100%;
}
.fight_logo {
  position: absolute;
  top: 40px;
  right: 0;
  animation: enemylogoan 1s;
  /* margin-left: -30px; */
}

.fight_button_group {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}
.fight_button {
  cursor: pointer;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: black;
  color: aliceblue;
}
.fight_button:hover {
  background-color: aliceblue;
  color: black;
}
.fight_title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 40px;
  line-height: 100px;
  text-align: center;
}
.fight_hp {
  position: absolute;
  top: 0;
  right: 0;

  width: 400px;
  height: 40px;
  line-height: 40px;
  background-color: rgb(160, 13, 13);
  color: aliceblue;
  text-align: center;
}
.fight_my_hp {
  position: absolute;
  top: 0;
  left: 0;

  width: 400px;
  height: 40px;
  line-height: 40px;
  background-color: rgb(160, 13, 13);
  color: aliceblue;
  text-align: center;
}
.fight_my_mp {
  position: absolute;
  top: 40px;
  left: 0;

  width: 400px;
  height: 20px;
  line-height: 20px;
  background-color: rgb(0, 41, 175);
  color: aliceblue;
  text-align: center;
}
.my_buff_list {
  position: absolute;
  top: 110px;
  left: 0;
  /* margin-left: -30px; */
  display: flex;
}
.buff_list {
  position: absolute;
  top: 110px;
  right: 0;
  /* margin-left: -30px; */
  display: flex;
}
.fight_ani{
  position: absolute;
  user-select: none;
  left: 50%;
  top: 50%;
}
</style>
<style>
@keyframes enemylogoan {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>