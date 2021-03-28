<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-27 20:37:25
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-28 21:09:55
-->
<template>
  <div>
    <div class="msg_outer" :class="{msg_hidden:!ifshow}">
      <div @click="vischange()" class="msg_title">系统消息</div>
      <div v-show="ifshow" class="msg_list">
        <div v-for="item in sys_log.list" :key="item" class="msg_item">
          <itemdesc class="msg_desc" :desc="`[${item.time.getHours()}:${item.time.getMinutes()}:${item.time.getSeconds()}] - [${item.from}] :`+item.text"></itemdesc>
          <!-- <itemdesc class="msg_desc" :desc="item.text"></itemdesc> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import itemdesc from "./item_desc.vue";
let sys_log = inject("log");

let ifshow = ref(true)
function vischange(){
ifshow.value=!ifshow.value
}
</script>
<style scoped>
a {
  color: #42b983;
}
.msg_outer {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.205);
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
}
.msg_hidden{
  height: 60px;
}
.msg_title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
}

.msg_list {
  position: absolute;
  top: 15px;
  width: 100%;
  height: 240px;
  overflow: auto;
}
.msg_item {
  /* width: 300px; */
}
.msg_desc {
  width: 250px;
  word-break: normal;
  /* width: auto; */
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
}
</style>