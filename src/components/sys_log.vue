<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-27 20:37:25
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-27 21:19:17
-->
<template>
  <div>
    <div class="store_outer">
      <div class="store_title">系统消息</div>
      <div class="msg_list">
        <div v-for="item in sys_log.list" :key="item" class="msg_item">
          <itemdesc class="msg_desc" :desc="`[${item.time.getHours()}:${item.time.getMinutes()}:${item.time.getSeconds()}] - [${item.from}] :`+item.text"></itemdesc>
          <!-- <itemdesc class="msg_desc" :desc="item.text"></itemdesc> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import itemdesc from "./item_desc.vue";
let sys_log = inject("log");
</script>

<style scoped>
a {
  color: #42b983;
}
.store_outer {
  position: relative;
  background-color: rgba(0, 0, 0, 0.205);
  width: 300px;
  height: 500px;
}

.store_title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 40px;
  line-height: 100px;
  text-align: center;
}

.msg_list {
  position: absolute;
  top: 100px;
  width: 100%;
  height: 400px;
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