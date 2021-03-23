<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-20 21:19:58
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-21 18:14:21
-->
<template>
  <div class="main_layout">
    <store></store>
    <mybag></mybag>
    <mypanel></mypanel>
    <myequi></myequi>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
// import imgsrc from '../assets/wepon/stick01.png'
import store from "./shop.vue";
import mybag from "./mybag.vue";
import mypanel from "./role_panel.vue";
import myequi from "./myequipment.vue";
</script>

<style scoped>
a {
  color: #42b983;
}
.main_layout{
  display: flex;
  flex-wrap: wrap;
}
</style>