<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-03-28 16:06:47
 * @Description: 
-->
<template>
    <div>
        <div
            @click="openTab('enhance')"
            class="w-24 h-10 text-center text-white leading-10 m-3 cursor-pointer rounded-2xl bg-coc"
        >强化</div>
        <enhance_panelVue v-if="vis == 'enhance'"></enhance_panelVue>
        <div
            @click="openTab('breach')"
            class="w-24 h-10 text-center text-white leading-10 m-3 cursor-pointer rounded-2xl bg-coc"
        >突破</div>
        <breach_panelVue v-if="vis == 'breach'"></breach_panelVue>
        <div
            @click="openTab('upgrade')"
            class="w-24 h-10 text-center text-white leading-10 m-3 cursor-pointer rounded-2xl bg-coc"
        >升阶</div>
        <upgrade_panelVue v-if="vis == 'upgrade'"></upgrade_panelVue>
    </div>
</template>
<script setup>
import { inject, ref } from '@vue/runtime-core';
import breach_panelVue from '../panel/breach_panel.vue';
import enhance_panelVue from '../panel/enhance_panel.vue';
import upgrade_panelVue from '../panel/upgrade_panel.vue';

let global_equi = inject("equi");
let global_my = inject("my");

let vis = ref('')

function openTab(str) {
    if (vis.value == str) {
        vis.value = "";
    } else {
        vis.value = str;
    }
}

function enhance() {
    global_equi.wuqi.attr.attack += 30
}
function breach() {
    global_my.baseAttr.attack += 1
}
</script>
<style scoped>
.town_button {
    width: 100px;
    height: 50px;
    /* background-color:rgb(128, 126, 126); */
    color: white;
    text-align: center;
    line-height: 50px;
    margin: 10px;
    cursor: pointer;
}
</style>