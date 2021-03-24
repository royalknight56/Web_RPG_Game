/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 21:00:22
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-24 15:08:50
 */
export default {
  default: {
    id:'default',
    src: "./wepon/default.png",
    name: "无",
    desc: ["无"],
    attr: {
    },
  },
  wuqi001: {
    id:'wuqi001',
    src: "./wepon/stick01_blod.png",
    name: "铁棍-/c900 血附魔/",
    desc: ["攻击+ 80","这个铁棍附带/c900 流血伤害/"],
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
    desc: ["攻击+ 80","这个铁棍附带/c900 流血伤害/"],
    equdesc: [
      '下衣',
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
    desc: ["攻击+ 230","这个铁棍附带/c900 流血伤害/"],
    equdesc: [
      '下衣',
      '攻击+ 230',
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
    }
  },
  shangyi001: {
    id:'shangyi001',
    src: "./wepon/shangyi001.png",
    name: "短袖",
    desc: ["防御+ 20"],
    equdesc: [
      '上衣',
      '防御+ 20',
    ],
    pos:'shangyi',
    attr: {
      defense: 20,
    },
  },
  xiayi001: {
    id:'xiayi001',
    src: "./wepon/xiayi001.png",
    name: "短裤",
    desc: ["防御+ 20"],
    equdesc: [
      '下衣',
      '防御+/c111 20',
    ],
    pos:'xiayi',
    attr: {
      defense: 20,
    },
  },
  xiezi001: {
    id:'xiezi001',
    src: "./wepon/xiezi001.png",
    name: "鞋子",
    desc: ["防御+ 20","速度+ 20"],
    equdesc: [
      '鞋子',
      '防御+ 20',
      '速度+ 20',
    ],
    pos:'xiezi',
    attr: {
      defense: 20,
      speed:20
    },
  },
  jiezhi001: {
    id:'jiezhi001',
    src: "./wepon/jiezhi001.png",
    name: "戒指",
    desc: ["防御+ 20","智力+ 30",'力量+30',],
    equdesc: [
      '戒指',
      '防御+ 20',
      '智力+ 30',
      '力量+ 30',
    ],
    pos:'jiezhi',
    attr: {
      defense: 20,
      intelligence:30,
      strength:30
    },
  },
  xianglian001: {
    id:'xianglian001',
    src: "./wepon/xianglian001.png",
    name: "项链",
    desc: ["防御+ 20","智力+ 20",'力量+ 20',],
    equdesc: [
      '项链',
      '防御+ 20',
      '智力+ 20',
      '力量+ 20',
    ],
    pos:'xianglian',
    attr: {
      defense: 20,
      intelligence:20,
      strength:20
    },
  },
  shouzhuo001: {
    id:'shouzhuo001',
    src: "./wepon/shouzhuo001.png",
    name: "手镯",
    desc: ["防御+ 20","智力+ 40",'力量+ 40',],
    equdesc: [
      '手镯',
      '防御+ 20',
      '智力+ 40',
      '力量+ 40',
    ],
    pos:'shouzhuo',
    attr: {
      defense: 20,
      intelligence:40,
      strength:40
    },
  },
}