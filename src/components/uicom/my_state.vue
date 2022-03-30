<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-03-28 20:06:39
 * @Description: 
-->
<template>
    <div class="flex justify-around w-full bg-cof">
        <div>
            金币：{{my.gold}}
        </div>
        <div>
            经验：{{my.exp}}
         </div>
         <div>
            体力：{{my.spirit}}
         </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
let my = inject("my");
</script>
<style scoped>

</style>