// import {
//     SET_FUNCS, // 设置页面回调函数队列
// } from "data/mutation-types"

// // 把函数加入数组队列
// export const pushFuncs = ({dispatch, state}, func) => {
//     if (typeof func === 'function') {
//         dispatch(SET_FUNCS, func);
//     } else {
//         console.error("[actions] pushFuncs => func 不是一个函数");
//     }
// }

// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
// export const incrementCounter = function ({ dispatch}) {
//  dispatch('INCREMENT', 1)
// }
// export const incrementa = function ({ dispatch}) {
//  dispatch('INCREMENT', 3)
// }
// export const change = function ({ dispatch}) {
//  dispatch('CHANGE')
// }


// export const setCaption =function({dispatch},value){
// 	dispatch('SETCAPTION',value)
// }