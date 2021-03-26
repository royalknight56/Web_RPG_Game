<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 12:38:59
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-26 18:40:18
-->
<template>
  <div>
    <div class="store_outer">
      <div class="store_title">背包</div>
      <div class="store_tab">
        <div @click="showBag=true"  class="store_tab_item">装备</div>
        <div @click="showBag=false" class="store_tab_item">消耗品</div>
      </div>
      <div v-if="showBag" class="store_list">
        <itemlistui :itemtab="tab" :itemlist="global_bag"></itemlistui>
      </div>
      <div v-if="!showBag" class="store_list">
        <itemmapui :itemtab="goodstab" :itemlist="global_bag_goods"></itemmapui>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject, reactive, ref } from "vue";
import itemlistui from "./item_list.vue";
import itemmapui from "./item_map.vue";
import equi from "../item/equi.js";
import goods from "../item/goods.js";
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

let equimap = inject("equi");
let global_bag = inject("bag");
let global_bag_goods = inject("bag_goods");
let global_my = inject('my');
let showBag = ref(true)

let tab = reactive([
  {
    name: "丢弃",
    fun: function (self) {
      if (self.ifEquip) {
        alert("请先卸下");
      } else {
        global_bag.splice(global_bag.indexOf(self), 1);
      }
    },
  },
  {
    name: "装备",
    fun: function (self) {
      if (equimap[self.pos].pointer) {
        equimap[self.pos].pointer.ifEquip = false;
      }
      equimap[self.pos] = equi[self.id];
      equimap[self.pos].pointer = self;
      self.ifEquip = true;
      // itemlist.splice(itemlist.indexOf(self), 1);
    },
  },
  {
    name: "卸下",
    fun: function (self) {
      equimap[self.pos].pointer.ifEquip = false;
      equimap[self.pos] = {};
      // self.ifEquip=true
      // itemlist.splice(itemlist.indexOf(self), 1);
    },
  },
]);

let goodstab = reactive([

  {
    name: "使用",
    fun: function (self) {
      let ret = self.attr.use(global_my);
      if(ret?.state == true){
        self.num--;
      }
      if(self.num<=0){
        delete global_bag_goods[self.id]
      }
    },
  },
]);

global_bag.push(deepClone(equi.wuqi001));
global_bag.push(deepClone(equi.wuqi002));
global_bag.push(deepClone(equi.wuqi003));
global_bag.push(deepClone(equi.shangyi001));
global_bag.push(deepClone(equi.xiayi001));
global_bag.push(deepClone(equi.xiezi001));
global_bag.push(deepClone(equi.jiezhi001));
global_bag.push(deepClone(equi.xianglian001));
global_bag.push(deepClone(equi.shouzhuo001));


function addGoods(id,nums){
  if(global_bag_goods[id]){
    global_bag_goods[id].num+=nums
  }else{
    global_bag_goods[id]=deepClone(goods[id])
    global_bag_goods[id].num = nums
  }
}
addGoods('xueping001',3)
addGoods('xueping001',2)
addGoods('xueping002',2)
addGoods('gongjiping001',2)
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
.store_tab_item{
  position: relative;
  cursor: pointer;
  width: 100px;
  height: 40px;
  background-color: aqua;
}
</style>