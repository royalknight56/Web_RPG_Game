/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-03-25 11:04:45
 * @Description: 
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
                            num:1
                        }

                    ],
                    exp:30,
                    gold:2,
                }
            }
        },
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
                    gold:4,
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


    yezhu003: {
        id: 'default',
        src: "./enemy/xiaoyezhu001.png",
        name: "大野猪lv2",
        desc: ["大野猪升级版"],
        hp: 300,
        mp: 100,
        attr: {
            defense: 10,
            attack: 10,
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
                            num:1
                        }

                    ],
                    exp:30,
                    gold:5,
                }
            }
        },
    },
}