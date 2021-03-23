/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-12-07 15:55:59
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-23 10:18:51
 */

export default {
  equi: {
    wuqi:{ src: "./wepon/stick01.png" },
    shangyi:{
      src: "./wepon/stick01_blod.png",
      equdesc: [
        '武器',
      ]
    },
    xiayi:{
      src: "./wepon/stick01_blod.png",
      name: "铁棍-/c900 血附魔/",
      desc: ["这个铁棍附带/c900 流血伤害/"],
      equdesc: [
        '上衣',
      ]
    },
    xiezi:{
      src: "./wepon/stick01_du.png",
      name: "铁棍-/c070 毒附魔/",
      color: "",
      desc: [
        `---这个铁棍有/c070 毒/,会附加/c070 持续毒属性伤害/`,
        `攻击值:/c658 80`,
        `持续伤害:每回合/c658 8`,
        ``,
      ],
      equdesc: [
        '下衣',
        '防御+/c111 80',
        '攻击+/c111 80',
      ],
      attr: {
        attack: 80,
        beforeAttack(self, army) {
          return 80;
        },
        afterAttack(self, army) {
          army.addBuff({
            name: "铁棍毒",
            desc: "每回合8伤害",
            perRound(self) {
              self.beAttack("ap", 8);
            },
          });
          return 80;
        },
      },
    },
  }
}