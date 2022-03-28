<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-03-28 15:14:07
 * @Description: 
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <indexUi v-show="states=='start'" />
  <StartUI v-if="states=='ready'" @action="actionFun"></StartUI>
  
</template>

<script setup>

// import HelloWorld from './components/HelloWorld.vue'
import indexUi from './components/index_ui.vue'
import StartUI from "./components/start_ui.vue"
import { ref } from '@vue/reactivity'
import {loadGame} from "./libs/games/game_load.js";
import {myComputedAttr} from "./libs/games/game_start.js"
import { inject } from '@vue/runtime-core';

let global_my = inject("my");
let global_bag = inject("bag");
let global_bag_goods =inject("bag_goods");
let global_equi = inject("equi");
let sys_log = inject("log");

let states = ref('start')


myComputedAttr(global_my,global_equi)

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