<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 12:49:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-15 15:59:42
-->
<template>
  <div>
    <div class="panel_outer">
      <div class="panel_title">我的属性</div>
      <div class="panel_list_outer">
        <div class="panel_attr">
          <div class="panel_attr_key">HP</div>
          <div class="panel_attr_value">
            {{ my.hp }}
          </div>
        </div>
        <div class="panel_attr">
          <div class="panel_attr_key">MP</div>
          <div class="panel_attr_value">
            {{ my.mp }}
          </div>
        </div>

        <div class="panel_attr">
          <div class="panel_attr_key">体力</div>
          <div class="panel_attr_value">
            {{ my.spirit }}
          </div>
        </div>

        <div class="panel_attr">
          <div class="panel_attr_key">经验</div>
          <div class="panel_attr_value">
            {{ my.exp }}
          </div>
        </div>

        <div v-for="(item, key) in my.computedAttr" :key="key" class="panel_attr" >
            <div class="panel_attr_key">
              {{ attrs_key[key] }}
            </div>
            <div class="panel_attr_value">
              {{ item }}
            </div>
        </div>

        <div class="buff_list">
          <div class="fight_buff" v-for="perbuff in my.buff" :key="perbuff">
            <itembuff :peritem="perbuff"></itembuff>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, inject, reactive } from "vue";
import itembuff from "../base/buff_ui.vue";
// let equi = inject("equi");
let my = inject("my");

let attrs_key = {
  attack: "攻击力",

  defense: "防御力",
  strength: "力量",
  intelligence: "智力",
  speed: "速度",
};
// for (let key in attrs_key) {
  
//   my.computedAttr[key] = computed(() => {
//     let total = 0;
//     for (let pos in equi) {
//       total += equi[pos]?.attr?.[key] ?? 0;
//     }
//     total += my.baseAttr[key] ?? 0;
//     my.attr[key] = total;
//     return total;
//   });
// }

</script>

<style scoped>
.panel_outer {

  position: fixed;
  left: 50%;
  top: 50%;
  background-color: rgb(151, 151, 151);
  width: 300px;
  height: 500px;
  /* margin-left: -450px; */
  margin-top:  -250px;

}
.panel_title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 20px;
  line-height: 50px;
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
.buff_list {
  display: flex;
}
</style>