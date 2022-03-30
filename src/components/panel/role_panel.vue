<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 12:49:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-29 18:41:32
-->
<template>
  <div>
    <div class="panel_outer">
      <div class="panel_title">我的属性</div>
      <div class="panel_list_outer">
        <div class="panel_attr">
          <div class="panel_attr_key">HP</div>
          <div class="panel_attr_value">
            {{ my.computedAttr.hp - my.usedhp }}
          </div>
        </div>
        <div class="panel_attr">
          <div class="panel_attr_key">MP</div>
          <div class="panel_attr_value">
            {{ my.computedAttr.mp - my.usedmp }}

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

        <div class="panel_attr">
          <div class="panel_attr_key">金币</div>
          <div class="panel_attr_value">
            {{ my.gold }}
          </div>
        </div>

        <div v-for="(item, key) in my.computedAttr" :key="key" class="panel_attr" >
            <div class="panel_attr_key">
              {{ attrs_key[key] }}
            </div>
            <div class="panel_attr_value">
              {{ item }}
            </div>
            <div class="panel_attr_value panel_attr_base_value">
              ({{ my.baseAttr[key] }})
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
  hp: "最大生命",
  mp: "最大魔法",
  attack: "攻击力",

  defense: "防御力",
  strength: "力量",
  intelligence: "智力",
  speed: "速度",
  gold:"金币"
};

</script>

<style scoped>
@import './panel.css';

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