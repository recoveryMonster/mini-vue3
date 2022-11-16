import { h } from "../../lib/guide-mini-vue.esm.js";

window.self = null;
export const App = {
  // render 函数
  render() {
    window.self = this;
    return h(
      "div",
      {
        class: "main",
        id: "main",
      },
      // setupState
      // this.$el
      "hi, " + this.msg
      // string
      // "hi, mini-vue"
      // array
      // [
      //   h("p", { class: "red" }, "red content"),
      //   h("p", { class: "lightblue" }, "hello mini-vue"),
      // ]
    );
  },
  // composition-api
  setup() {
    return {
      msg: "mini-vue-haha",
    };
  },
};
