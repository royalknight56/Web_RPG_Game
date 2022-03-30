/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-03-29 19:12:43
 * @Description: 
 */
export default {
    yezhuboss: {
        id: 'yezhuboss',
        src: "./enemy/xiaoyezhu001.png",
        name: "小野猪",
        desc: ["小野猪"],

        attr: {
            hp: 400,
            mp: 400,
            defense: 100,
            attack: 100,
            afterDead() {
                console.log('小野猪boss死了');
                return {
                    drop: [
                        {
                            prob: 0.5,
                            id: 'shangyi001'
                        },
                        {
                            prob: 0.5,
                            type: 'goods',
                            id: 'xueping001',
                            num: 1
                        }

                    ],
                    exp: 30,
                    gold: 2,
                }
            }
        },
    },

}