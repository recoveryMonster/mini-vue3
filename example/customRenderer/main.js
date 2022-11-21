import { createRenderer } from "../../lib/guide-mini-vue.esm.js";
import { App } from "./App.js";

const game = new PIXI.Application({
  x: 500,
  y: 500,
});
document.body.append(game.view);

// 给基于 pixi.js 的渲染函数
const renderer = createRenderer({
  createElement(type) {
    const rect = new PIXI.Graphics();
    rect.beginFill(0xff0000);
    rect.drawRect(0, 0, 100, 100);
    rect.endFill();

    return rect;
  },

  patchProp(el, key, val) {
    el[key] = val;
  },

  insert(el, parent) {
    parent.addChild(el);
  },
});

renderer.createApp(App).mount(game.stage);
