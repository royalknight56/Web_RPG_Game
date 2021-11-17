<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-11-17 17:34:53
 * @Description: 
-->
<template>
<div>
    <div @click="enhance"  class="town_button">
        强化
    </div>
    <div @click="breach"  class="town_button">
        突破
    </div>
    <div @click="upgrade"  class="town_button">
        升阶
    </div>

</div>
</template>
<script setup>
import { inject } from '@vue/runtime-core';

let global_equi = inject("equi");
let global_my = inject("my");

function enhance() {
    global_equi.wuqi.attr.attack+=30
}
function breach() {
    global_my.baseAttr.attack+=1
}
</script>
<style scoped>
.town_button{
    width:100px;
    height:50px;
    background-color:rgb(128, 126, 126);
    color:white;
    text-align:center;
    line-height:50px;
    margin:10px;
    cursor:pointer;
}
</style>