/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-12-07 15:55:59
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-26 18:17:51
 */

export default {
  my: {
    hp: 100,
    mp: 100,
    spirit: 120,
    attr: {
    },
    computedAttr:{

    },
    baseAttr: {

    },
    buff: {
      du: {
        beforeRound(self) {
          self.attr.defense += 4000;
        },
        afterRound(self) {
          self.attr.defense -= 4000;
        },
        numbers: 2,
        desc: ['获得4000防御值'],
        src: "./buff/buff_defend001.png"
      }
    }
  },
  bag: [

  ],
  bag_goods: {

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