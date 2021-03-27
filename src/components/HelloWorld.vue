<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-20 21:19:58
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-27 20:39:32
-->
<template>
  <div class="main_layout">
    <store></store>
    <mybag></mybag>
    <mypanel></mypanel>
    <myequi></myequi>
    <fight></fight>
    <fmap></fmap>
    <admintest></admintest>
    <syslog></syslog>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
// import imgsrc from '../assets/wepon/stick01.png'
import store from "./shop.vue";
import mybag from "./mybag.vue";
import mypanel from "./role_panel.vue";
import myequi from "./myequipment.vue";
import fight from "./fight.vue"
import fmap from "./map.vue"
import admintest from "./adminTest.vue"
import syslog from "./sys_log.vue"
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