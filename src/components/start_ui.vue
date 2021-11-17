<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-11-15 17:20:49
 * @Description: 
-->
<template>
  <!-- 开始界面 -->
  <div class="start_ui">
    <div class="start_ui_title">
      <h1>欢迎来到我的世界</h1>
      <!-- <h2>请选择你的角色</h2> -->
    </div>
    <div class="start_ui_content">
      <div
        class="start_ui_content_item"
        v-for="(item, index) in start_ui_content_item"
        :key="index"
      >
        <div class="start_ui_content_item_img">
          <!-- <img :src="item.img" alt="" /> -->
        </div>
        <div class="start_ui_content_item_name">
          <!-- <h1>{{ item.name }}</h1> -->
          <h2>{{ item.desc }}</h2>
        </div>
        <div class="start_ui_content_item_btn">
          <button @click="start_ui_content_item_btn_click(item)">
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["action"]);

let start_ui_content_item = [
  {
    name: "开始游戏",
    desc: "开始一个全新的游戏",
    img: "./img/player1.png",
    action:"start"
  },

  {
    name: "加载存档",
    desc: "这是玩家2的描述",
    img: "./img/player2.png",
    action:"load"
  },
  {
    name: "退出",
    desc: "这是玩家3的描述",
    img: "./img/player3.png",
    action:"quit"
  },
];

function start_ui_content_item_btn_click(item) {
  // 开始游戏
  emit("action",item.action);
}
</script>

<style>
.start_ui {
  width: 1100px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -550px;
  margin-top: -300px;
  overflow: hidden;

  /* width: 100%;
  height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}
.start_ui_title {
  width: 1100px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.start_ui_title h1 {
  font-size: 50px;
  font-weight: bold;
  color: #333;
}
.start_ui_title h2 {
  font-size: 30px;
  color: #666;
}
.start_ui_content {
  width: 1100px;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.start_ui_content_item {
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.start_ui_content_item_img {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.start_ui_content_item_img img {
  width: 100%;
  height: 100%;
}
.start_ui_content_item_name {
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.start_ui_content_item_name h1 {
  font-size: 30px;
  font-weight: bold;
  color: #333;
}
.start_ui_content_item_name h2 {
  font-size: 20px;
  color: #666;
}
.start_ui_content_item_btn {
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.start_ui_content_item_btn button {
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 5px;
}
</style>