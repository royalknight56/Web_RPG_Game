<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 12:38:59
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-24 22:20:41
-->
<template>
  <div>
    <div class="store_outer">
      <div class="store_title">背包</div>
      <div class="store_list">
        <itemlistui :itemtab='tab' :itemlist="bag"></itemlistui>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject, reactive } from "vue";
import itemlistui from "./item_list.vue";
import equi from "../item/equi.js";
let equimap = inject("equi");
let bag = inject("bag");
let tab = reactive([
  {
    name: "丢弃",
    fun: function (self) {
      if(self.ifEquip){
        alert('请先卸下')
      }else{
        bag.splice(bag.indexOf(self), 1);
      }
      
    },
  },
  {
    name: "装备",
    fun: function (self) {
      if(equimap[self.pos].pointer){
        equimap[self.pos].pointer.ifEquip = false
      }
      equimap[self.pos]=equi[self.id]
      equimap[self.pos].pointer = self
      self.ifEquip=true
      // itemlist.splice(itemlist.indexOf(self), 1);
    },
  },
  {
    name: "卸下",
    fun: function (self) {
      
      equimap[self.pos].pointer.ifEquip = false
      equimap[self.pos]={}
      // self.ifEquip=true
      // itemlist.splice(itemlist.indexOf(self), 1);
    },
  },
]);
console.log(bag)
bag.push({ ...equi.wuqi001 })
  // ,
  // { ...equi.wuqi002, tab },
  // { ...equi.wuqi003, tab },
  // { ...equi.shangyi001, tab },
  // { ...equi.xiayi001, tab },
  // { ...equi.xiezi001, tab },
  // { ...equi.jiezhi001, tab },
  // { ...equi.xianglian001, tab },
  // { ...equi.shouzhuo001, tab },
// ]);

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