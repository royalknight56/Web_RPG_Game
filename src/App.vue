<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-20 21:19:58
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-28 09:58:36
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <indexUi />
</template>

<script setup>
import {kvProvide} from './store/index'
import kv from './store/global'
import HelloWorld from './components/HelloWorld.vue'
import indexUi from './components/index_ui.vue'
kvProvide(kv)

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
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