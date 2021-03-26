/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-26 12:32:26
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-26 18:43:23
 */
export default {
    xueping001:{
        id: 'xueping001',
        src: "./goods/xueping001.png",
        name: "血瓶-/c900 血附魔/",
        desc: ["血量+ 80", "这个铁棍附带/c900 流血伤害/"],
        attr: {
          attack: 80,
          use(self){
            self.hp+=80;
            return {
                state:true
            }
          }
        },

      },
      xueping002:{
        id: 'xueping002',
        src: "./goods/xueping002.png",
        name: "小血瓶",
        desc: ["血量+ 20"],
        attr: {
          use(self){
            self.hp+=20;
            return {
                state:true
            }
          }
        },
      },
      gongjiping001:{
        id: 'gongjiping001',
        src: "./goods/gongjiping001.png",
        name: "攻击瓶",
        desc: ["获得攻击+ 20Buff,持续两回合"],
        attr: {
          use(self){

            self.buff.gongjiping001 = {
              beforeRound(self) {
                self.attr.attack +=20;
              },
              afterRound(self) {
                self.attr.attack -=20;
              },
              numbers: 2,
              desc: ['攻击提升'],
              src: "./goods/gongjiping001.png"
            }

            return {
                state:true
            }
          }
        },
      },
}