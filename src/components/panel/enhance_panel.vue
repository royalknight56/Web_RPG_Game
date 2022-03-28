<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-27 10:51:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-24 10:27:57
-->
<template>
  <div class="panel_outer">
    <itemui :peritem="global_equi.wuqi"></itemui>
    <button class="enhance_button" @click="enhance()">强化</button>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import itemui from "../base/item_ui.vue";

let global_equi = inject("equi");
let global_my = inject("my");


function enhance() {
    global_equi.wuqi.attr.attack+=30
}

</script>

<style scoped>
@import './panel.css';
.enhance_button{
    position: absolute;
    top: 100px;
    left: 50%;
    width: 100px;
    height: 100px;
    transform: translateX(-50%);
    background-color: #bdbdbd;
    border-radius: 50%;
    border: none;
    outline: none;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
}
</style>