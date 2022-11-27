import { h, ref } from "../../lib/guide-mini-vue.esm.js";

const nextChildren = "nextChildren";
const prevChildren = [h("div", {}, "A"), h("div", {}, "B")];
export const ArrayToText = {
  name: "ArrayToText",
  setup() {
    const isChange = ref(false);
    window.isChange = isChange;
    return {
      isChange,
    };
  },
  render() {
    return this.isChange === true
      ? h("div", {}, nextChildren)
      : h("div", {}, prevChildren);
  },
};
