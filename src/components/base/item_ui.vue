<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-20 21:29:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-28 19:44:08
-->
<template>
  <div @mouseleave="item_leave()" @mousemove="item_hover($event)" ref="item_sel" class="item_outer">
    <img
      draggable="false"
      class="item_img"
      width="60"
      height="60"
      :src="peritem.src ?? './wepon/default.png'"
      @mousedown="item_mousedown($event)"
    />
    <div v-if="peritem.ifEquip" class="item_if_equi">已装备</div>
    <div v-if="peritem.num" class="item_num">{{ peritem.num }}</div>
    <div v-if="ifchose" class="item_ui">
      <div
        v-for="(item, key) in itemtab"
        :key="key"
        @click.stop="chose(item)"
        class="item_ui_item"
      >{{ item.name }}</div>
    </div>
    <!-- <div
      :style="{ left: item_hover_x + 'px', top: item_hover_y + 'px' }"
      class="item_hover_ui"
    >-->
    <div class="item_hover_ui" :class="{isover:isover}">
      <div v-if="peritem.name" class="item_hover_ui_name">
        <itemdesc :desc="peritem.name"></itemdesc>
        <!-- {{ peritem.name }} -->
      </div>
      <div v-if="peritem.desc">
        <div v-for="perdesc in peritem.desc" :key="perdesc" class="item_hover_ui_desc">
          <itemdesc :item="peritem" :desc="perdesc"></itemdesc>
          <!-- {{ peritem.desc }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, nextTick, onMounted, onUpdated, reactive, ref } from "vue";
// import imgsrc from '../assets/wepon/stick01.png'
import itemdesc from "./item_desc.vue";
let props = defineProps({
  peritem: Object,
  itemtab: Array,
});
let item_sel = ref(null);
let ifchose = ref(false);
let isover = ref(false);


function item_hover(e) {
  let rect = item_sel.value.getBoundingClientRect();
  if(rect.right > window.innerWidth - 80){
    isover.value=true;
  }
}
function item_mousedown(e) {
  //物品被点击
  ifchose.value = !ifchose.value;
}
function item_leave() {
  ifchose.value = false;
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
  z-index: 6;
  transform: translateY(-2px);
}

.item_ui_item:hover {
  background-color: rgba(255, 255, 255, 0.61);
}
.item_hover_ui {
  position: absolute;
  /* top: 0; */
  /* left: 0; */
  display: none;
  width: 140px;
  /* display: block; */
  background-color: black;
  color: aliceblue;
  pointer-events: none;
  z-index: 4;
}

.item_outer:hover .item_hover_ui {
  display: block;
  z-index: 99999;
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
.item_if_equi {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.281);
  color: white;
}
.item_num {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.616);
  color: aliceblue;
}
.isover{
  position: relative;
  transform: translateX(-100%);
}
</style>