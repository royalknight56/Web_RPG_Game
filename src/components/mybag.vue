<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 12:38:59
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-04-03 22:32:13
-->
<template>
  <div class="store_outer">
    <div class="store_title">背包</div>
    <div class="store_tab">
      <div @click="showBag = true" :class="{chosen_store_tab_item:showBag}" class="store_tab_item">装备</div>
      <div @click="showBag = false" :class="{chosen_store_tab_item:!showBag}" class="store_tab_item">消耗品</div>
    </div>
    <div v-if="showBag" class="store_list">
      <itemlistui :itemtab="tab" :itemlist="global_bag.arr"></itemlistui>
    </div>
    <div v-if="!showBag" class="store_list">
      <itemmapui
        :itemtab="goodstab"
        :itemlist="global_bag_goods.map"
      ></itemmapui>
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
let global_my = inject("my");
let showBag = ref(true);

let tab = reactive([
  {
    name: "丢弃",
    fun: function (self) {
      if (self.ifEquip) {
        alert("请先卸下");
      } else {
        global_bag.arr.splice(global_bag.arr.indexOf(self), 1);
      }
    },
  },
  {
    name: "装备",
    fun: function (self) {
      if (equimap[self.pos]) {
        equimap[self.pos].ifEquip = false;
      }
      equimap[self.pos] = self;
      self.ifEquip = true;
    },
  },
  {
    name: "卸下",
    fun: function (self) {
      // equimap[self.pos].pointer.ifEquip = false;
      self.ifEquip = false;
      equimap[self.pos] = {};
    },
  },
]);

let goodstab = reactive([
  {
    name: "使用",
    fun: function (self) {
      //使用消耗品逻辑
      let ret = self.attr.use(global_my);
      if (ret?.state == true) {
        //判断是否成功使用
        self.num--;
      }
      if (ret?.type == "gain") {
        //判断是否获得了物品
        global_bag_goods.addItems(ret.id, ret.num);
      }
      if (self.num <= 0) {
        delete global_bag_goods.map[self.id];
      }
    },
  },
]);
</script>

<style scoped>
.store_outer {
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: rgb(151, 151, 151);
  width: 300px;
  height: 500px;
  margin-left: -150px;
  margin-top:  -250px;
  z-index: 2;
}
.store_list {
  position: absolute;
  top: 100px;
}
.store_title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
}
.store_tab {
  display: flex;
  position: absolute;
  top: 50px;
  width: 100%;
}
.store_tab_item {
  position: relative;
  cursor: pointer;
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: rgb(0, 0, 0);
  color: aliceblue;
}
.chosen_store_tab_item{
  background-color: aliceblue;
  color:  rgb(0, 0, 0);
}
.store_tab_item:hover {
  background-color: aliceblue;
  color:  rgb(0, 0, 0);
}
</style>