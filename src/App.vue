<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-20 21:19:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-15 17:54:34
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <indexUi v-show="states=='start'" />
  <StartUI v-if="states=='ready'" @action="actionFun"></StartUI>
  
</template>

<script setup>
import {kvProvide} from './store/index'
import kv from './store/global'
// import HelloWorld from './components/HelloWorld.vue'
import indexUi from './components/index_ui.vue'
import StartUI from "./components/start_ui.vue"
import { ref } from '@vue/reactivity'
import {loadGame} from "./libs/games/game_load.js"
import {inject} from "vue"

kvProvide(kv)


let global_my = kv.my;
let global_bag = kv.bag;
let global_bag_goods =kv.bag_goods;
let global_equi = kv.equi;
let sys_log = kv.log;

let states = ref('start')

function actionFun(msg){
	// console.log(msg)
	if(msg=='start'){
		states.value='start'
	}else if(msg=='load'){
		loadGame(global_my,global_bag,global_bag_goods,sys_log,global_equi)
	}
}
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