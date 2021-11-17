/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-24 20:35:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-16 11:12:09
 */

export default {
    yezhu001: {
        id: 'default',
        src: "./enemy/xiaoyezhu001.png",
        name: "小野猪",
        desc: ["小野猪"],
        hp: 100,
        mp: 100,
        attr: {
            defense: 10,
            attack: 10,
            beAttack: function (other) {
                console.log(other)
            },
            afterDead() {
                console.log('小野猪死了');
                return {
                    drop: [
                        {
                            prob: 0.5,
                            id: 'shangyi001'
                        },
                        {
                            prob: 0.5,
                            type:'goods',
                            id: 'xueping001',
                            num:4
                        }

                    ],
                    exp:30,
                }
            }
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
    yezhu002: {
        id: 'default',
        src: "./enemy/xiaoyezhu001.png",
        name: "大野猪",
        desc: ["大野猪"],
        hp: 200,
        mp: 100,
        attr: {
            defense: 20,
            attack: 20,
            beAttack: function (other) {
                console.log(other)
            },
            afterDead() {
                console.log('大野猪死了');
                return {
                    drop: [
                        {
                            prob: 0.5,
                            id: 'shangyi001'
                        },
                        {
                            prob: 0.5,
                            type:'goods',
                            id: 'xueping001',
                            num:4
                        }

                    ],
                    exp:30,
                }
            }
        },
        buff: {
            du: {
                beforeRound(self) {
                    self.attr.defense += 4000;
                },
                afterRound(self) {
                    self.attr.defense -= 4000;
                },
                numbers: 5,
                desc: ['获得4000防御值'],
                src: "./buff/buff_defend001.png"
            }
        }
    },
}