/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-21 21:00:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-24 10:58:44
 */
import wuqi from "./equis/wuqi"
export default {
  default: {
    id: 'default',
    src: "./wepon/default.png",
    name: "无",
    desc: ["无"],
    attr: {
    },
  },
  ...wuqi,
  
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