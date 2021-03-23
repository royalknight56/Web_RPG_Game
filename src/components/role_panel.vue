<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 12:49:20
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-23 10:53:14
-->
<template>
  <div>
    <div class="panel_outer">
      <div class="panel_title">我的属性</div>
      <div class="panel_list_outer">
        <div v-for="item in attr" :key="item" class="panel_attr">
          <div class="panel_attr_key">
            {{ item.name }}
          </div>
          <div class="panel_attr_value">
            {{ item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, inject, reactive } from "vue";

// defineProps({
//     attr:Object
// })
let equi = inject("equi");
let myattatc = computed(() => {
  let total = 0;
  for (let pos in equi) {
    console.log(equi[pos]?.attr?.attack);
    total += equi[pos]?.attr?.attack ?? 0;
  }
  return total;
});

let attr = reactive({
  attack: {
    value: computed(() => {
      let total = 0;
      for (let pos in equi) {
        console.log(equi[pos]?.attr?.attack);
        total += equi[pos]?.attr?.attack ?? 0;
      }
      return total;
    }),
    name: "攻击力",
  },
  defense: {
    value: computed(() => {
      let total = 0;
      for (let pos in equi) {
        console.log(equi[pos]?.attr?.defend);
        total += equi[pos]?.attr?.defend ?? 0;
      }
      return total;
    }),
    name: "防御",
  },
});
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