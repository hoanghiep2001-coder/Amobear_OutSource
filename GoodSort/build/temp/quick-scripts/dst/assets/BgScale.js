
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BgScale.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmdTY2FsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJzZXRGaXRTaXplIiwiYmdXaWR0aCIsIm5vZGUiLCJ3aWR0aCIsInNjcmVlbl93aWR0aCIsIndpblNpemUiLCJzY3JlZW5faGVpZ2h0IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUUsRUFITDtBQUtQO0FBRUFDLEVBQUFBLEtBUE8sbUJBT0MsQ0FBRSxDQVBIO0FBU1BDLEVBQUFBLE1BVE8sa0JBU0FDLEVBVEEsRUFTSTtBQUNULFNBQUtDLFVBQUw7QUFDRCxHQVhNO0FBYVBBLEVBQUFBLFVBYk8sd0JBYU07QUFDWCxRQUFJQyxPQUFPLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxLQUF4QjtBQUNBLFFBQUlDLFlBQVksR0FBR1gsRUFBRSxDQUFDWSxPQUFILENBQVdGLEtBQTlCO0FBQ0EsUUFBSUcsYUFBYSxHQUFHYixFQUFFLENBQUNZLE9BQUgsQ0FBV0UsTUFBL0I7O0FBQ0EsUUFBSUgsWUFBWSxJQUFJSCxPQUFwQixFQUE2QjtBQUMzQixXQUFLQyxJQUFMLENBQVVDLEtBQVYsR0FBa0JDLFlBQWxCO0FBQ0EsV0FBS0YsSUFBTCxDQUFVSyxNQUFWLEdBQW1CRCxhQUFuQjtBQUNEOztBQUVELFFBQUlGLFlBQVksR0FBR0UsYUFBbkIsRUFBa0M7QUFDaEMsV0FBS0osSUFBTCxDQUFVQyxLQUFWLEdBQWtCQyxZQUFZLEdBQUcsR0FBakM7QUFDRDtBQUNGO0FBekJNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHt9LFxyXG5cclxuICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gIHN0YXJ0KCkge30sXHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgdGhpcy5zZXRGaXRTaXplKCk7XHJcbiAgfSxcclxuXHJcbiAgc2V0Rml0U2l6ZSgpIHtcclxuICAgIGxldCBiZ1dpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgbGV0IHNjcmVlbl93aWR0aCA9IGNjLndpblNpemUud2lkdGg7XHJcbiAgICBsZXQgc2NyZWVuX2hlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0O1xyXG4gICAgaWYgKHNjcmVlbl93aWR0aCAhPSBiZ1dpZHRoKSB7XHJcbiAgICAgIHRoaXMubm9kZS53aWR0aCA9IHNjcmVlbl93aWR0aDtcclxuICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHNjcmVlbl9oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNjcmVlbl93aWR0aCA8IHNjcmVlbl9oZWlnaHQpIHtcclxuICAgICAgdGhpcy5ub2RlLndpZHRoID0gc2NyZWVuX3dpZHRoICsgMTAwO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iXX0=