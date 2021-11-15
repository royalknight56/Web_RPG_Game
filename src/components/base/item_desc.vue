<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 10:26:09
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-27 10:48:20
-->
<template>
<span v-html="htm">
</span>
</template>

<script setup>
import { computed, defineProps } from "vue"
let props=defineProps({
    desc:String,
    item:Object

})
let htm = computed(()=>{
    // console.log(props.item)
    return parseDesc(props.desc)
})
function parseDesc(str){
    let ret ='';
    if(str){
        let ar = str.split('/');

        for(let i=0;i<ar.length;i++){
            let perret = ar[i];
            let pam = ar[i].split(' ');
            if(pam.length>1){
                let atts = pam[0];
                if(atts[0]=='c'){//指定了描述颜色
                    perret = `<span style='color:rgb(${parseInt(atts[1])/9*255},${parseInt(atts[2])/9*255},${parseInt(atts[3])/9*255})'>${pam[1]}</span>`
                }else if(atts[0]=='a'){//指定了描述变量,获取到属性
                    perret = `${props?.item?.attr[atts.slice(1)]}`
                }
            }
            ret+=perret
            
        }
    }else{
        
    }
    return ret
}
</script>

<style>

</style>