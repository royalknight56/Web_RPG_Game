/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-11-17 19:02:51
 * @Description: 
 */
import { computed, inject } from "vue";

// let global_my = inject("my");
// let global_equi = inject("equi");
// let sys_log = inject("log");
//为my attr添加计算属性
//computedAttr:面板属性
//attr:生效属性
function myComputedAttr(global_my,global_equi){
    let attrs_key = {
        attack: "攻击力",
      
        defense: "防御力",
        strength: "力量",
        intelligence: "智力",
        speed: "速度",
      };
      for (let key in attrs_key) {
        global_my.computedAttr[key] = computed(() => {
          let total = 0;
          for (let pos in global_equi) {
            //计算每个装备赋予的属性
            total += global_equi[pos]?.attr?.[key] ?? 0;
          }
      
          total += global_my.baseAttr[key] ?? 0; //加上基础属性
      
          for (let name in global_my.buff) {
            //计算buff赋予的属性,临时的
            total += global_my.buff[name]?.attr?.[key] ?? 0;
          }
          global_my.attr[key] = total;
      
          return total;
        });
      }
    
}
export {
    myComputedAttr
}