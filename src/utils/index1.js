/*
 * @Description: Hello World
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2022-11-09 10:32:33
 * @LastEditors: WangBo
 * @LastEditTime: 2022-11-09 11:38:11
 */
export {nihao};
var test = 'test';
var ceshi = 666;
var nihao = 'niaho';

// export { test };
// export { ceshi };
// export default test;
// export var nihao = 1
var obj = {
    attr:999
}
export function fn() { }
export { fn as hhh }
export { fn as hhhh }
// export {nihao}
export { ceshi }
export { obj }

// export { add  } from './index2'


import { add } from './index2'

add(1, 2)

export {add}

