<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-20 21:19:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-28 19:25:38
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
@import "./index.css";

@font-face {
  font-family: "LXGWWenKai-Bold";
  src: url("LXGWWenKai-Bold.eot"); /* IE9 */
  src: url("LXGWWenKai-Bold.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */
      /* url("LXGWWenKai-Bold.woff") format("woff"), chrome、firefox */
      url("LXGWWenKai-Bold.ttf") format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
      url("LXGWWenKai-Bold.svg#LXGWWenKai-Bold") format("svg"); /* iOS 4.1- */
  font-style: normal;
  font-weight: normal;
}
.lxgwwenkai-bold {
  font-family: "LXGWWenKai-Bold";
  font-style: normal;
  font-weight: normal;
  src: url("LXGWWenKai-Bold.eot"); /* IE9 */
  src: url("LXGWWenKai-Bold.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("LXGWWenKai-Bold.woff") format("woff"),
    /* chrome、firefox */ url("LXGWWenKai-Bold.ttf") format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
      url("LXGWWenKai-Bold.svg#LXGWWenKai-Bold") format("svg"); /* iOS 4.1- */
  font-style: normal;
  font-weight: normal;
}

body{
	font-family: "LXGWWenKai-Bold";
	margin: 0;
	padding: 0;
}
::-webkit-scrollbar
{
	width: 16px;
	height: 16px;
	background-color: #f5f5f500;
}
 
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 2px;
	background-color: #964d1f6b;
}
 
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
	border-radius: 2px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #964d1f;
}
</style>