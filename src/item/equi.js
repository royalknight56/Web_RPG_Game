/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 21:00:22
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-28 19:59:50
 */
export default {
  default: {
    id: 'default',
    src: "./wepon/default.png",
    name: "无",
    desc: ["无"],
    attr: {
    },
  },
  wuqi001: {
    id: 'wuqi001',
    src: "./wepon/stick01_blod.png",
    name: "铁棍-/c900 血附魔/",
    desc: ["攻击+ /aattack ", "这个铁棍附带/c900 流血伤害/"],
    pos: 'wuqi',
    attr: {
      attack: 80,
      afterAttack(my, enemy) {
        if (enemy.buff) {

        } else {
          enemy.buff = {}
        }
        enemy.buff.tiegundu = {
          beforeRound(self) {
            self.hp -=3;
          },
          afterRound(self) {
            // self.attr.defense -= 4000;
          },
          numbers: 2,
          desc: ['流血伤害'],
          src: "./buff/buff_blod001.png"
        }
      }
    },
  },
  wuqi002: {
    id: 'wuqi002',
    src: "./wepon/stick01_blod.png",
    name: "铁棍",
    desc: ["攻击+ /aattack "],
    equdesc: [
      '武器',
      '攻击+/c111 /aattack ',
    ],
    pos: 'wuqi',
    attr: {
      attack: 20,
      afterAttack(self, enemy) {

      },
    },
  },
  wuqi003: {
    id: 'wuqi003',
    src: "./wepon/stick01_blod.png",
    name: "铁棍-/c900 燃烧附魔/",
    desc: ["攻击+ /aattack ", "这个铁棍附带/c900 燃烧伤害/"],
    equdesc: [
      '武器',
      '攻击+ /aattack ',
    ],
    pos: 'wuqi',
    attr: {
      attack: 230,
      afterAttack(my, enemy) {
        if (enemy.buff) {

        } else {
          enemy.buff = {}
        }
        enemy.buff.ranshao = {
          beforeRound(self) {
            self.hp -=5;
          },
          afterRound(self) {
            // self.attr.defense -= 4000;
          },
          numbers: 5,
          desc: ['燃烧伤害'],
          src: "./buff/buff_fire001.png"
        }
      },
    }
  },

  yuren001: {
    id: 'yuren001',
    src: "./wepon/yuren001.png",
    name: "羽刃",
    desc: ["攻击+ /adefense ", "智力+ /aintelligence ", '力量+ /adefense ',],
    equdesc: [
      '武器',
      '防御+ /adefense ',
      '智力+ /aintelligence ',
      '力量+ /adefense ',
    ],
    pos: 'wuqi',
    attr: {
      defense: 20,
      intelligence: 40,
      strength: 40
    },
  },

  shangyi001: {
    id: 'shangyi001',
    src: "./wepon/shangyi001.png",
    name: "短袖",
    desc: ["防御+ /adefense "],
    equdesc: [
      '上衣',
      '防御+ /adefense ',
    ],
    pos: 'shangyi',
    attr: {
      defense: 20,
    },
  },
  xiayi001: {
    id: 'xiayi001',
    src: "./wepon/xiayi001.png",
    name: "短裤",
    desc: ["防御+ /adefense "],
    equdesc: [
      '下衣',
      '防御+/c111 /adefense ',
    ],
    pos: 'xiayi',
    attr: {
      defense: 20,
    },
  },
  xiezi001: {
    id: 'xiezi001',
    src: "./wepon/xiezi001.png",
    name: "鞋子",
    desc: ["防御+ /adefense ", "速度+ /aspeed "],
    equdesc: [
      '鞋子',
      '防御+ /adefense ',
      '速度+ /aspeed ',
    ],
    pos: 'xiezi',
    attr: {
      defense: 20,
      speed: 20
    },
  },
  jiezhi001: {
    id: 'jiezhi001',
    src: "./wepon/jiezhi001.png",
    name: "戒指",
    desc: ["防御+ /adefense ", "智力+ /aintelligence ", '力量+ /adefense ',],
    equdesc: [
      '戒指',
      '防御+ /adefense ',
      '智力+ /aintelligence ',
      '力量+ /adefense ',
    ],
    pos: 'jiezhi',
    attr: {
      defense: 20,
      intelligence: 30,
      strength: 30
    },
  },
  xianglian001: {
    id: 'xianglian001',
    src: "./wepon/xianglian001.png",
    name: "项链",
    desc: ["防御+ /adefense ", "智力+ /aintelligence ", '力量+ /adefense ',],
    equdesc: [
      '项链',
      '防御+ /adefense ',
      '智力+ /aintelligence ',
      '力量+ /adefense ',
    ],
    pos: 'xianglian',
    attr: {
      defense: 20,
      intelligence: 20,
      strength: 20
    },
  },
  shouzhuo001: {
    id: 'shouzhuo001',
    src: "./wepon/shouzhuo001.png",
    name: "手镯",
    desc: ["防御+ /adefense ", "智力+ /aintelligence ", '力量+ /adefense ',],
    equdesc: [
      '手镯',
      '防御+ /adefense ',
      '智力+ /aintelligence ',
      '力量+ /adefense ',
    ],
    pos: 'shouzhuo',
    attr: {
      defense: 20,
      intelligence: 40,
      strength: 40
    },
  },
}