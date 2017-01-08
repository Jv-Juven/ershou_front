// import {} from "./index"
/**
 * 向下拉动函数
 * @param [object] el dom元素
 * @param [object] fns 返回promise对象的函数对象集合：resolveFn--->可执行事件；loadingFn--->加载事件
 * @type {[type]}
 */
export const pullDown = (el, fns) => {
    fns = fns || {
        // 可执行事件，必须返回Promise
        resolveFn() {
            return new Promise( (resolve, reject) => { console.log("something must do!"); resolve(); });
        },
        // 加载事件，必须返回Promise，
        loadingFn() {
            return new Promise( (resolve, reject) => { setTimeout( () => { resolve(); }, 3000); });
        }
    }
    let touchOffsetY = 0,
        totalOffsetY = 0,
        elOffsetY = 0,
        startY = 0,
        resolveFn = fns.resolveFn, // 可执行事件
        resolveLock = 0, // 可执行事件锁
        loadingFn = fns.loadingFn; // 加载事件

    let thresoldVal = 100;
    let resolveVal = thresoldVal * .8; // 可执行事件阈值
    el.style.webkitTransition = "all 0.1s linear";
    // el.style.webkitTransform = "translate3d(0, 0, 0)";
    let touchStartFn = (e) => {
        startY = e.targetTouches[0].clientY;
        // console.log(startY);
    }
    let touchMoveFn = (e) => {
        let y = e.targetTouches[0].clientY;
        let offsetY = y - startY; // 手指滑动距离
        elOffsetY = totalOffsetY + offsetY; // 元素移动距离
        if (elOffsetY < 0) {
            elOffsetY = 0;
        }
        if (elOffsetY > thresoldVal) {
            elOffsetY = thresoldVal + (elOffsetY - thresoldVal)/10;
        }
        // 达到 可执行事件阈值 执行的函数
        if (elOffsetY >= resolveVal && resolveLock == 0) {
            resolveLock = 1;
            resolveFn();
        }
        el.style.webkitTransform = `translate3d(0, ${elOffsetY}px, 0)`;
    }
    let touchEndFn = (e) => {
        if (elOffsetY >= resolveVal) {
            el.style.webkitTransform = `translate3d(0, ${resolveVal}px, 0)`;
            loadingFn().then(() => {
                // 恢复原状
                el.style.webkitTransform = "translate3d(0, 0, 0)";
                totalOffsetY = 0;
            });
        } else {
            // 恢复原状
            el.style.webkitTransform = "translate3d(0, 0, 0)";
            totalOffsetY = 0;
            console.log(resolveVal);
        }

        resolveLock = 0;
    }
    el.addEventListener("touchstart", touchStartFn);
    el.addEventListener("touchmove", touchMoveFn);
    el.addEventListener("touchend", touchEndFn);
}
