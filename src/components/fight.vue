<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-24 15:43:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-28 15:41:08
-->
<template>
  <div class="fight_outer relative h-full">
    <div v-if="enemymap[0]" class="fight_ui">
      <!-- <div class="equip_item" v-for="item in enemymap" :key="item"> -->
      <itemui class="fight_logo" :peritem="enemymap[0]" :key="enemymap[0]"></itemui>
      <div class="absolute bottom-0 flex left-1/2 -translate-x-1/2 rounded-xl overflow-hidden">
        <div @click="switchAutoAttack" class="fight_button relative
         w-24 h-12 leading-10 text-center bg-cog text-white cursor-pointer">
          <div :style="{ 'width': autoAttack * 100 + '%' }" class="fight_button_cool"></div>攻击
        </div>
        <div
          @click="fight(enemymap[0], item)"
          v-for="item in skill"
          :key="item"
          class="fight_button relative
         w-24 h-12 leading-10 text-center bg-cog text-white cursor-pointer"
        >{{ item.name }}</div>
      </div>
      <div class="fight_right">
        <div class="fight_hp">{{ enemymap[0].hp }}</div>
        <div class="buff_list">
          <div class="fight_buff" v-for="perbuff in enemymap[0].buff" :key="perbuff">
            <itembuff :peritem="perbuff"></itembuff>
          </div>
        </div>
      </div>
    </div>
    <div class="fight_ani">
      <img :src="fightansrc" />
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
import { defineProps, inject, nextTick, onMounted, onUnmounted, reactive, ref } from "vue";
import itemui from "./base/item_ui.vue";
import itemdesc from "./base/item_desc.vue";
import itembuff from "./base/buff_ui.vue";
import enemylist from "../item/enemy.js";
import itemmap from "../item/equi.js";
import goods from "../item/goods.js";

let my = inject("my");
let global_bag = inject("bag");
let global_bag_goods = inject("bag_goods");
let global_sysStates = inject("sysStates");



let equi = inject("equi");

let skill = inject("skill");
let enemymap = inject("enemymap");
let sys_log = inject("log")

let autoAttack = ref(0);
let isAutoAttack = ref(false);
let fightansrc = ref('./fight/attack.gif')
let timer = setInterval(() => {
  autoAttack.value += 0.1
  if (autoAttack.value > 1) {
    if (isAutoAttack.value) {
      autoAttack.value = 0
      fight(enemymap[0])
    } else {
      autoAttack.value = 1
    }

  } else {

    // fightansrc.value = './fight/attack.gif'
  }
  // autoAttack.value = autoAttack.value>1?0:autoAttack.value
}, 100)
onUnmounted(() => {
  clearInterval(timer)
})

/**
 * @description: 攻击伤害计算公式
 */
function attack(from, to) {
  // 攻击X（1+0.004 * 力量 +0.004 * 智力）
  // 闪避率 = 基础闪避率 + 0.004 * 敏捷
  // 暴击率 = 基础暴击率 + 暴击率
  // 伤害 = 攻击 + 伤害附加白字

  // 判断是否闪避
  // let isDodge = Math.random() < (from.attr.agile - to.attr.agile) / 100;
  let atk = from.attr.attack || 0 * (1 + 0.004 * from.attr.strength || 0 + 0.004 * from.attr.intelligence || 0); // 攻击X（1+0.004 * 力量 +0.004 * 智力）
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
      from.buff[key]?.afterRound?.(from);
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
    //处理经验获得
    if (res?.exp) {
      my.exp += res?.exp
    }
    //处理金币获得
    if (res?.gold) {
      my.gold += res?.gold
    }
    let ind = enemymap.indexOf(from);
    if (ind >= 0) {
      enemymap.splice(ind, 1);
    }
    sys_log.info(`/c111 杀死了 /c100 ${from.name}`,
      "系统")
  }
  //判断地图清空
  if (enemymap.length == 0) {
    global_sysStates.loc = "town";
    console.log('清空地图')
    my.hp = my.maxhp;
    my.mp = my.maxmp;
    sys_log.info(`/c111 已经传送到城镇`,
      "系统")
  }
}
function checkMyDead(my) {
  if (my.hp <= 0) {
    my.hp = my.maxhp;

    my.mp = my.maxmp;
    global_sysStates.loc = 'town'
    sys_log.info(`/c111 哦吼，死亡了`,
      "系统")
    sys_log.info(`/c111 已经传送到城镇`,
      "系统")
  }
}
function fight(enemy, skill) {
  if (global_sysStates.loc == 'town') {
    return
  }
  beforeRound(enemy);
  beforeRound(my); //回合开始前,检查buff的beforeRound


  if (skill && my.mp - skill.mp >= 0) {
    //是否使用了技能和是否有蓝量使用技能
    skill.use(my, enemy);
    fightansrc.value = skill.ani + '?' + new Date().toString()
    my.mp = my.mp - skill.mp;
  } else {
    fightansrc.value = './fight/attack.gif' + '?' + new Date().toString()
    attack(my, enemy);
  }

  attack(enemy, my); //伤害结算

  checkDead(enemy);
  checkMyDead(my); //检查死亡

  afterRound(enemy);
  afterRound(my); //回合结束,检查buff的afterRound


  equiAttackCheck(my, enemy);
}

function switchAutoAttack() {
  isAutoAttack.value = !isAutoAttack.value;
}
</script>

<style scoped>
.fight_outer {
  /* position: relative; */
  /* top: 200px; */
  /* background-color: rgb(255, 0, 0); */
  /* width: 100%; */
  /* height: 100%; */
}
.fight_logo {
  position: absolute;
  top: 60px;
  right: 0;
  animation: enemylogoan 1s;
  /* margin-left: -30px; */
}

/* .fight_button {
  cursor: pointer;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: black;
  color: aliceblue;
  position: relative;
} */
.fight_button_cool {
  position: absolute;
  background-color: rgb(255, 255, 255);
  height: 100%;
  mix-blend-mode: difference;
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
  top: 0px;
  right: 0;

  width: 30%;
  height: 60px;
  line-height: 40px;
  background-color: rgb(160, 13, 13);
  color: aliceblue;
  text-align: center;
}
.fight_my_hp {
  position: absolute;
  top: 0;
  left: 0;

  width: 50%;
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

  width: 50%;
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
  top: 125px;
  right: 0;
  /* margin-left: -30px; */
  display: flex;
}
.fight_ani {
  position: absolute;
  user-select: none;
  left: 50%;
  top: 30%;
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