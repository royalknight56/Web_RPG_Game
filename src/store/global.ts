/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-12-07 15:55:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-29 19:18:17
 */
import goods from "../item/goods.js";
import equi from "../item/equi.js";

function deepClone(obj) {
  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  //进行深拷贝的不能为空，并且是对象或者是
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

export default {
  sysStates:{
    loc:'town'
  },
  my: {
    usedhp:0,
    usedmp:0,
    // hp: 100,
    // maxhp: 100,

    // mp: 100,
    // maxmp: 100,
    spirit: 120,
    exp:0,
    gold:200,
    attr: {
    },
    computedAttr: {

    },
    baseAttr: {
      hp: 100,
      mp: 100,
      attack: 10,
      defense: 1,
      strength: 0,
      intelligence: 0,
      agile: 0,
      speed: 0,
      additional: 0,
    },
    buff: {
      du: {
        attr: {
          defense: 4000
        },
        beforeRound(self) {

        },
        afterRound(self) {

        },
        numbers: 2,
        desc: ['获得4000防御值'],
        src: "./buff/buff_defend001.png"
      }
    }
  },
  skill: {
    skill01: {
      id: 'huoqiushu001',
      name: '火球术',
      mp: 20,
      desc: ['造成2*ATK伤害'],
      ani: './fight/huoqiu001.gif',
      use(my, enemy) {
        let dam = Math.floor(
          (my.attr.attack * my.attr.attack) /
          (my.attr.attack + enemy.attr.defense + 1)
        );
        enemy.hp -= 2 * dam;
      }
    },
    skill02: {
      id: 'shengguang001',
      name: '圣光',
      mp: 20,
      desc: ['获得圣光buff'],
      ani: './fight/shengguang001.gif',
      use(my, enemy) {

        my.buff.shengguang_atk_001 = {
          attr: {
            attack: 200,
          },
          beforeRound(self) {
          },
          afterRound(self) {
          },
          numbers: 3,
          desc: ['攻击大幅提升'],
          src: "./buff/buff_attack001.png"
        }

        my.buff.shengguang_def_001 = {
          attr: {
            defense: 50,
          },
          beforeRound(self) {

          },
          afterRound(self) {

          },
          numbers: 3,
          desc: ['防御提升'],
          src: "./buff/buff_defend001.png"
        }

      }
    }
  },
  bag: {
    arr: [],
    addItems: function (id) {
      this.arr.push(deepClone(equi[id]));
    }
  },
  bag_goods: {
    map: {

    },
    addItems: function (id, nums) {
      if (this.map[id]) {
        this.map[id].num += nums
      } else {
        this.map[id] = deepClone(goods[id])
        this.map[id].num = nums
      }
    }
  },
  log: {
    list: [],
    info: function (info, from) {
      if (this.list.length >= 40) {
        this.list.shift()
      }
      this.list.push({
        text: info,
        time: new Date(),
        from: from
      })
    }
  },

  enemymap: [
  ],

  equi: {
    wuqi: {
      id: 'default',
      src: "./wepon/default.png",
      name: "无",
      desc: ["武器"],
      attr: {
      },
    },
    shangyi: {
      id: 'default',
      src: "./wepon/default.png",
      name: "无",
      desc: ["上衣"],
      attr: {
      },
    },
    xiayi: {
      id: 'default',
      src: "./wepon/default.png",
      name: "无",
      desc: ["下衣"],
      attr: {
      },
    },
    xiezi: {
      id: 'default',
      src: "./wepon/default.png",
      name: "无",
      desc: ["鞋子"],
      attr: {
      },
    },
    jiezhi: {
      id: 'default',
      src: "./wepon/default.png",
      name: "无",
      desc: ["戒指"],
      attr: {
      },
    },
    xianglian: {
      id: 'default',
      src: "./wepon/default.png",
      name: "无",
      desc: ["项链"],
      attr: {
      },
    },
    shouzhuo: {
      id: 'default',
      src: "./wepon/default.png",
      name: "无",
      desc: ["手镯"],
      attr: {
      },
    },
  }
}