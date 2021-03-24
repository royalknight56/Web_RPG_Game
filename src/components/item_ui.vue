<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-20 21:29:34
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-24 22:19:54
-->
<template>
  <div @mouseleave="item_leave()" ref="item_sel" class="item_outer">
    <img
      draggable="false"
      class="item_img"
      width="60"
      height="60"
      :src="peritem.src??'./wepon/default.png'"
      @mousemove="item_hover($event)"
      @mousedown="item_mousedown($event)"
    />
    <div v-if='peritem.ifEquip' class="item_if_equi">已装备</div>
    <div v-if="ifchose" class="item_ui">
      <div
        v-for="(item, key) in itemtab"
        :key="key"
        @click.stop="chose(item)"
        class="item_ui_item"
      >
        {{ item.name }}
      </div>
    </div>
    <div
      :style="{ left: item_hover_x + 'px', top: item_hover_y + 'px' }"
      class="item_hover_ui"
    >
      <div v-if="peritem.name" class="item_hover_ui_name">
        <itemdesc :desc="peritem.name"></itemdesc>
        <!-- {{ peritem.name }} -->
      </div>
      <div v-if="peritem.desc">
        <div
          v-for="perdesc in peritem.desc"
          :key="perdesc"
          class="item_hover_ui_desc"
        >
          <itemdesc :desc="perdesc"></itemdesc>
          <!-- {{ peritem.desc }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, nextTick, reactive, ref, useContext } from "vue";
// import imgsrc from '../assets/wepon/stick01.png'
import itemdesc from "./item_desc.vue";
let props = defineProps({
  peritem: Object,
  itemtab:Array
});
let item_sel = ref(null);
let ifchose = ref(false);
let item_hover_x = ref(0);
let item_hover_y = ref(0);
function item_hover(e) {
  // console.log(e)
  item_hover_x.value = e.clientX;
  item_hover_y.value = e.clientY;
}
function item_mousedown(e) {
  //物品被点击
  ifchose.value = !ifchose.value;
}
function item_leave(){
  ifchose.value = false
}
function chose(item) {
  // console.log(item)
  item.fun?.(props.peritem);
}
</script>

<style>
.item_outer {
  position: relative;
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.185);
  border: 3px solid black;
  user-select: none;
}
.item_outer:hover {
  background-color: rgba(124, 124, 124, 0.171);
}
.item_img {
  user-select: none;
  pointer-events: inherit;
}
.item_ui {
  position: relative;
  background-color: black;
  color: aliceblue;
  z-index: 2;
  transform: translateY(-2px);
}

.item_ui_item:hover {
  background-color: rgba(255, 255, 255, 0.61);
}
.item_hover_ui {
  display: none;
  pointer-events: none;
  z-index: 1;
}

.item_outer:hover .item_hover_ui {
  display: block;
  position: fixed;
  width: 140px;
  background-color: black;
  color: aliceblue;
  z-index: 1;
}

.item_hover_ui_name {
  width: 140px;
  text-align: center;
  color: antiquewhite;
  padding: 4px;
}
.item_hover_ui_desc {
  padding: 4px;
}
.item_if_equi{
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.281);
  color: white;
}
</style>