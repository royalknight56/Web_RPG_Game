/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-26 12:32:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-29 17:39:12
 */
export default {
  xueping001: {
    id: 'xueping001',
    src: "./goods/xueping001.png",
    name: "血瓶-/c900 血附魔/",
    desc: ["血量+ 80", "这个铁棍附带/c900 流血伤害/"],
    attr: {
      attack: 80,
      use(self) {
        self.usedhp = Math.max(0,self.usedhp-80)
        return {
          state: true
        }
      }
    },

  },
  xueping002: {
    id: 'xueping002',
    src: "./goods/xueping002.png",
    name: "小血瓶",
    desc: ["血量+ 20"],
    attr: {
      use(self) {
        self.usedhp = Math.max(0,self.usedhp-20)
        return {
          state: true
        }
      }
    },
  },
  gongjiping001: {
    id: 'gongjiping001',
    src: "./goods/gongjiping001.png",
    name: "攻击瓶",
    desc: ["获得攻击+ 20Buff,持续两回合"],
    attr: {
      use(self) {

        self.buff.gongjiping001 = {
          beforeRound(self) {
            self.attr.attack += 20;
          },
          afterRound(self) {
            self.attr.attack -= 20;
          },
          numbers: 2,
          desc: ['攻击提升'],
          src: "./buff/buff_attack001.png"
        }

        return {
          state: true
        }
      }
    },
  },
  tiliyaoshui001: {
    id: 'tiliyaoshui001',
    src: "./goods/tiliyaoshui001.png",
    name: "体力药水",
    desc: ["获得+20体力"],
    attr: {
      use(self) {
        self.spirit += 20
        return {
          state: true
        }
      }
    },
  },
  superattack001: {
    id: 'superattack001',
    src: "./goods/superattack001.png",
    name: "攻击药水",
    desc: ["获得+200攻击"],
    attr: {
      use(self) {
        self.buff.superattack001 = {
          beforeRound(self) {
            self.attr.attack += 200;
          },
          afterRound(self) {
            self.attr.attack -= 200;
          },
          numbers: 2,
          desc: ['攻击大幅提升'],
          src: "./buff/buff_attack001.png"
        }

        return {
          state: true
        }
      }
    },
  },

  superattack002: {
    id: 'superattack002',
    src: "./goods/superattack002.png",
    name: "被封印的攻击药水",
    desc: ["有几率获得攻击药水"],
    attr: {
      use(self) {
        if (Math.random() <= 0.5) {
          return {
            state: true,
            type: 'gain',
            id: 'superattack001',
            num: 1
          }
        } else {
          return {
            state: true,
          }
        }

      }
    },
  },

  box001: {
    id: 'box001',
    src: "./goods/box001.png",
    name: "未知的补给箱",
    desc: ["有几率获得各种物品"],
    attr: {
      use(self) {
        let rand = Math.random()
        if (rand <= 0.1) {
          return {
            state: true,
            type: 'gain',
            id: 'superattack001',
            num: 1
          }
        } else if (rand <= 0.5) {
          return {
            state: true,
            type: 'gain',
            id: 'tiliyaoshui001',
            num: 1
          }
        } else {
          return {
            state: true,
          }
        }

      }
    },
  },
}