/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-26 10:07:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-25 10:21:39
 */
function repateEnemy(id, num) {//重复怪物列表
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(id);
  }
  return arr
}
export default {
  xinshoucun001: {
    id: 'xinshoucun001',
    name: '新手村',
    desc: ['新手村'],
    spirit: 3,
    enemylist: [
      ...repateEnemy('yezhu001', 3)
    ]
  },
  xinshoucun002: {
    id: 'xinshoucun002',
    name: '野猪林',
    desc: ['野猪林'],
    spirit: 3,
    enemylist: [
      ...repateEnemy('yezhu001', 3),
      ...repateEnemy('yezhu002', 3),
    ]
  },
  xinshoucun003: {
    id: 'xinshoucun003',
    name: '野猪深林',
    desc: ['野猪深林'],
    spirit: 3,
    enemylist: [
      ...repateEnemy('yezhu001', 3),
      ...repateEnemy('yezhu002', 3),
      ...repateEnemy('yezhu003', 3),

    ]
  }
}