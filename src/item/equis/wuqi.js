/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-03-25 10:16:41
 * @Description: 
 */
export default {
  wuqi001: {
    id: 'wuqi001',
    src: "./wepon/stick01_blod.png",
    name: "铁棍-/c900 血附魔/",
    desc: ["攻击+ /aattack ", "这个铁棍附带/c900 流血伤害/"],
    equdesc: [
      '武器',
      '攻击+/c111 /aattack ',
    ],
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
            self.hp -= 3;
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
            self.hp -= 5;
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

}