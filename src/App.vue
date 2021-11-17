<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-20 21:19:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-17 19:43:56
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <indexUi v-show="states=='start'" />
  <StartUI v-if="states=='ready'" @action="actionFun"></StartUI> -->
  <RootVue></RootVue>
</template>

<script setup>
import {kvProvide} from './store/index'
import kv from './store/global'

import RootVue from './Root.vue'

kvProvide(kv)

</script>

<style>
body{
	margin: 0;
	padding: 0;
}
::-webkit-scrollbar
{
	width: 16px;
	height: 16px;
	background-color: #F5F5F5;
}
 
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}
 
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>