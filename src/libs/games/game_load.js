
import equi from "../../item/equi.js";
import goods from "../../item/goods.js";
// import {inject} from "vue"
// let global_my = inject("my");
// let global_bag = inject("bag");
// let global_bag_goods = inject("bag_goods");
// let global_equi = inject("equi");
// let sys_log = inject("log");
function copyKey(funObj, attrObj) {
  //复制Key的函数
  let newObj = {};
  if (Object.prototype.toString.call(funObj) == "[object Object]") {
    //判断是否是Object,不是直接返回
    for (let key in funObj) {
      if (Object.prototype.toString.call(funObj[key]) == "[object Object]") {
        newObj[key] = copyKey(funObj[key], attrObj[key]);
      } else if (
        Object.prototype.toString.call(funObj[key]) == "[object Array]"
      ) {
        newObj[key] = [];

        for (let i = 0; i < funObj[key].length; i++) {
          newObj[key][i] = copyKey(funObj[key][i], attrObj[key][i]);
        }
      } else {
        if (attrObj[key]) {
          newObj[key] = attrObj[key];
        } else {
          newObj[key] = funObj[key];
        }
      }
    }
    for (let key in attrObj) {
      if (newObj[key]) {
      } else {
        newObj[key] = attrObj[key];
      }
    }

    return newObj;
  } else {
    return attrObj;
  }
}

function saveMy(my) {
  localStorage.setItem(
    "my",
    JSON.stringify({
      // hp: my.hp,
      // mp: my.mp,
      // maxhp: my.maxhp,
      // maxmp: my.maxmp,
      spirit: my.spirit,
      baseAttr: my.baseAttr,
      exp: my.exp,
    })
  );
}
function loadMy(my) {
  let obj = localStorage.getItem("my")
  if(!obj){
    return
  }
  let myobj = JSON.parse(obj);
  // my.hp = myobj.hp;
  // my.mp = myobj.mp;
  // my.maxhp = myobj.maxhp;
  // my.maxmp = myobj.maxmp;
  my.spirit = myobj.spirit;
  my.exp = myobj.exp;
  my.baseAttr = myobj.baseAttr;
}

function saveBag(bag) {
  localStorage.setItem(
    "bag",
    JSON.stringify({
      bag,
    })
  );
}
function loadBag(bag,global_equi) {
  let obj  = localStorage.getItem("bag");
  if(!obj){
    return 
  }
  let bagTemp = JSON.parse(obj);
  let bagArr = bagTemp.bag;
  for (let i = 0; i < bagArr.length; i++) {
    let funObj = equi[bagArr[i].id]; //带有函数的OBJ
    let attrObj = bagArr[i]; //不带函数带有改进属性的OBJ
    bag[i] = copyKey(funObj, attrObj);
    // console.log(bag[i].ifEquip)
    if (bag[i].ifEquip) {
      //判断是否已经装备
      global_equi[bag[i].pos] = bag[i];
    }
  }
}

function saveBag_goods(bag) {
  localStorage.setItem("bag_goods", JSON.stringify(bag));
}
function loadBag_goods(bag_goods) {
  let obj = localStorage.getItem("bag_goods");
  if(!obj){
    return
  }
  let bagObj = JSON.parse(obj);
  for (let key in bag_goods) {
    delete bag_goods[key];
  }
  for (let key in bagObj) {
    let funObj = goods[bagObj[key].id]; //带有函数的OBJ
    let attrObj = bagObj[key]; //不带函数带有改进属性的OBJ
    bag_goods[key] = copyKey(funObj, attrObj);
  }
}
function saveGame(global_my,global_bag,global_bag_goods,sys_log) {
  saveMy(global_my);
  sys_log.info("/c060 状态保存成功", "Sys");
  saveBag(global_bag.arr);
  saveBag_goods(global_bag_goods.map);
  sys_log.info("/c060 背包保存成功", "Sys");
}
function loadGame(global_my,global_bag,global_bag_goods,sys_log,global_equi) {
  loadMy(global_my);
  sys_log.info("/c060 状态导入成功", "Sys");
  loadBag(global_bag.arr,global_equi);
  loadBag_goods(global_bag_goods.map);
  sys_log.info("/c060 背包导入成功", "Sys");
}

function clearGame(){
  localStorage.clear();
}
export {
    saveGame,
    loadGame,
    clearGame
}