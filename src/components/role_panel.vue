<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 12:49:20
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-24 21:23:25
-->
<template>
  <div>
    <div class="panel_outer">
      <div class="panel_title">我的属性</div>
      <div class="panel_list_outer">
        <div class="panel_attr">
          <div class="panel_attr_key">
            HP
          </div>
          <div class="panel_attr_value">
            {{my.hp}}
          </div>
        </div>
        <div class="panel_attr">
          <div class="panel_attr_key">
            MP
          </div>
          <div class="panel_attr_value">
            {{my.mp}}
          </div>
        </div>
        <div v-for="(item, key) in my.attr" :key="key" class="panel_attr">
          <div class="panel_attr_key">
            {{ attrs_key[key] }}
          </div>
          <div class="panel_attr_value">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, inject, reactive } from "vue";

let equi = inject("equi");
let my = inject("my");

let attrs_key = {
  attack: "攻击力",
  
  defense: "防御力",
  strength: "力量",
  intelligence: "智力",
  speed: "速度",
};

let attr = reactive({});
for (let key in attrs_key) {
  my.attr[key] = computed(() => {
    let total = 0;
    for (let pos in equi) {
      total += equi[pos]?.attr?.[key] ?? 0;
    }
    total += my.baseAttr[key] ?? 0;
    return total;
  });
}


</script>

<style scoped>
.panel_outer {
  position: relative;
  background-color: rgba(0, 0, 0, 0.205);
  width: 300px;
  height: 500px;
}
.panel_title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 40px;
  line-height: 100px;
  text-align: center;
}
.panel_list_outer {
  position: absolute;
  top: 100px;
}
.panel_attr {
  display: flex;
  padding: 3px;
}
.panel_attr_key {
  padding-right: 3px;
}
</style>