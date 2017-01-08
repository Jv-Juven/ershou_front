import {
    pullDown
} from "util/touch";
export default {
    pullDown: {
        bind() {
            console.log("pullDown指令绑定");
        },
        update(value) {
            let el = this.el;
            pullDown(el);
        }
    }
}
