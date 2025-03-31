"use strict";
cc._RF.push(module, '31277H8UKdLAYeOFy3wbfqt', 'BgScale');
// BgScale.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    this.setFitSize();
  },
  setFitSize: function setFitSize() {
    var bgWidth = this.node.width;
    var screen_width = cc.winSize.width;
    var screen_height = cc.winSize.height;

    if (screen_width != bgWidth) {
      this.node.width = screen_width;
      this.node.height = screen_height;
    }

    if (screen_width < screen_height) {
      this.node.width = screen_width + 100;
    }
  }
});

cc._RF.pop();