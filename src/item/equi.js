/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 21:00:22
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-23 15:11:40
 */
export default {
  wuqi001: {
    id:'wuqi001',
    src: "./wepon/stick01_blod.png",
    name: "铁棍-/c900 血附魔/",
    desc: ["这个铁棍附带/c900 流血伤害/"],
    pos:'wuqi',
    attr: {
      attack: 80,
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
  wuqi002: {
    id:'wuqi002',
    src: "./wepon/stick01_blod.png",
    name: "铁棍-/c900 燃烧附魔/",
    desc: ["这个铁棍附带/c900 流血伤害/"],
    equdesc: [
      '下衣',
      '防御+/c111 80',
      '攻击+/c111 80',
    ],
    pos:'wuqi',
    attr: {
      attack: 80,
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
  wuqi003: {
    id:'wuqi003',
    src: "./wepon/stick01_blod.png",
    name: "铁棍-/c900 燃烧附魔/",
    desc: ["这个铁棍附带/c900 流血伤害/"],
    equdesc: [
      '下衣',
      '防御+/c111 80',
      '攻击+/c111 230',
    ],
    pos:'wuqi',
    attr: {
      attack: 230,
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
  }
}