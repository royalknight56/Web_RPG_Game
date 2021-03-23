<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-20 21:36:25
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-21 12:53:06
-->
<template>
  <div>
    <div class="store_outer">
      <div class="store_title">商店</div>
      <div class="store_list">
        <itemlistui :itemlist="itemlist"></itemlistui>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import itemlistui from "./item_list.vue";
let itemlist = reactive([
  { src: "./wepon/stick01.png" },
  {
    src: "./wepon/stick01_blod.png",
    tab: [
      {
        name: "丢弃",
        fun: function (self) {
          itemlist.splice(itemlist.indexOf(self), 1);
        },
      },
      {
        name: "复制",
        fun: (self) => {
          itemlist.push(self);
        },
      },
    ],
  },
  {
    src: "./wepon/stick01_blod.png",
    tab: [
      {
        name: "丢弃",
        fun: function (self) {
          itemlist.splice(itemlist.indexOf(self), 1);
        },
      },
    ],
  },
  {
    src: "./wepon/stick01_blod.png",
    tab: [
      {
        name: "丢弃",
        fun: function (self) {
          itemlist.splice(itemlist.indexOf(self), 1);
        },
      },
    ],
    name: "铁棍-/c900 血附魔/",
    desc: ["这个铁棍附带/c900 流血伤害/"],
  },
  {
    src: "./wepon/stick01_du.png",
    tab: [
      {
        name: "丢弃",
        fun: function (self) {
          itemlist.splice(itemlist.indexOf(self), 1);
        },
      },
    ],
    name: "铁棍-/c070 毒附魔/",
    color: "",
    desc: [
      `---这个铁棍有/c070 毒/,会附加/c070 持续毒属性伤害/`, 
    `攻击值:/c658 80`,
    `持续伤害:每回合/c658 8`,
    ``
    ],
    attr:{
      getAttack(){
        return 80
      },
      beforeAttack(self,army){
        return 80
      },
      afterAttack(self,army){
        army.addBuff({
          name:'铁棍毒',
          desc:'每回合8伤害',
          perRound(self){
            self.beAttack('ap',8)
          }
        })
        return 80
      },
    }
  },
]);
</script>

<style scoped>
a {
  color: #42b983;
}
.store_outer {
  position: relative;
  background-color: rgba(0, 0, 0, 0.205);
  width: 300px;
  height: 500px;
}
.store_list {
  position: absolute;
  top: 100px;
}
.store_title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 40px;
  line-height: 100px;
  text-align: center;
}
</style>