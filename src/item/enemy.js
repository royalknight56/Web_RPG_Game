/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-24 20:35:11
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-24 22:06:50
 */

export default {
    yezhu001: {
        id: 'default',
        src: "./wepon/default.png",
        name: "无",
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
                    drop:[
                        {
                            prob:0.5,
                            id:'shangyi001'
                        }

                    ]
                }
            }
        },

    },
}