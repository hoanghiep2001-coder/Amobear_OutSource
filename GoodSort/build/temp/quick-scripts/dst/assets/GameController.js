
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7978aMDhV5NjI90I4SBsbi4', 'GameController');
// GameController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {
    window.gameReady && window.gameReady();
  },
  onFinish: function onFinish() {
    window.gameEnd && window.gameEnd();
  },
  installHandle: function installHandle() {
    this.onFinish(); //If ad network is tiktok

    if (typeof playableSDK != "undefined") {
      window.playableSDK.openAppStore();
      return;
    } // If ad network is google ads


    if (typeof ExitApi != "undefined") {
      ExitApi.exit();
      return;
    } // If ad netwrok is ironsources


    if (typeof dapi != "undefined") {
      dapi.openStoreUrl();
      return;
    } // If ad network support MRAID 2.0


    if (typeof mraid != "undefined") {
      if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
        mraid.open("https://play.google.com/store/apps/details?id=com.animedoll.avatarmaker");
        return;
      }

      if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
        mraid.open("https://itunes.apple.com/us/app/id1662447489?mt=8");
        return;
      }

      mraid.open("https://play.google.com/store/apps/details?id=com.animedoll.avatarmaker");
      return;
    } // If ad network is mindwork. window alway avaiable so skip undefined check


    window.install && window.install();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJzdGFydCIsIndpbmRvdyIsImdhbWVSZWFkeSIsIm9uRmluaXNoIiwiZ2FtZUVuZCIsImluc3RhbGxIYW5kbGUiLCJwbGF5YWJsZVNESyIsIm9wZW5BcHBTdG9yZSIsIkV4aXRBcGkiLCJleGl0IiwiZGFwaSIsIm9wZW5TdG9yZVVybCIsIm1yYWlkIiwic3lzIiwib3MiLCJPU19BTkRST0lEIiwiQU5EUk9JRCIsIm9wZW4iLCJPU19JT1MiLCJJUEhPTkUiLCJJUEFEIiwiaW5zdGFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFNTEMsRUFBQUEsTUFOSyxvQkFNSyxDQUVULENBUkk7QUFVTEMsRUFBQUEsS0FWSyxtQkFVSTtBQUNMQyxJQUFBQSxNQUFNLENBQUNDLFNBQVAsSUFBb0JELE1BQU0sQ0FBQ0MsU0FBUCxFQUFwQjtBQUNILEdBWkk7QUFjTEMsRUFBQUEsUUFkSyxzQkFjTTtBQUNQRixJQUFBQSxNQUFNLENBQUNHLE9BQVAsSUFBa0JILE1BQU0sQ0FBQ0csT0FBUCxFQUFsQjtBQUNILEdBaEJJO0FBa0JMQyxFQUFBQSxhQUFhLEVBQUUseUJBQVk7QUFDdkIsU0FBS0YsUUFBTCxHQUR1QixDQUd2Qjs7QUFDQSxRQUFJLE9BQVFHLFdBQVIsSUFBd0IsV0FBNUIsRUFBeUM7QUFDckNMLE1BQUFBLE1BQU0sQ0FBQ0ssV0FBUCxDQUFtQkMsWUFBbkI7QUFDQTtBQUNILEtBUHNCLENBU3ZCOzs7QUFDQSxRQUFJLE9BQVFDLE9BQVIsSUFBb0IsV0FBeEIsRUFBcUM7QUFDakNBLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUjtBQUNBO0FBQ0gsS0Fic0IsQ0FldkI7OztBQUNBLFFBQUksT0FBUUMsSUFBUixJQUFpQixXQUFyQixFQUFrQztBQUM5QkEsTUFBQUEsSUFBSSxDQUFDQyxZQUFMO0FBQ0E7QUFDSCxLQW5Cc0IsQ0FxQnZCOzs7QUFDQSxRQUFJLE9BQU9DLEtBQVAsSUFBaUIsV0FBckIsRUFBa0M7QUFDOUIsVUFBSWpCLEVBQUUsQ0FBQ2tCLEdBQUgsQ0FBT0MsRUFBUCxJQUFhbkIsRUFBRSxDQUFDa0IsR0FBSCxDQUFPRSxVQUFwQixJQUFrQ3BCLEVBQUUsQ0FBQ2tCLEdBQUgsQ0FBT0MsRUFBUCxJQUFhbkIsRUFBRSxDQUFDa0IsR0FBSCxDQUFPRyxPQUExRCxFQUFtRTtBQUMvREosUUFBQUEsS0FBSyxDQUFDSyxJQUFOLENBQVcseUVBQVg7QUFDQTtBQUNIOztBQUVELFVBQUl0QixFQUFFLENBQUNrQixHQUFILENBQU9DLEVBQVAsSUFBYW5CLEVBQUUsQ0FBQ2tCLEdBQUgsQ0FBT0ssTUFBcEIsSUFBOEJ2QixFQUFFLENBQUNrQixHQUFILENBQU9DLEVBQVAsSUFBYW5CLEVBQUUsQ0FBQ2tCLEdBQUgsQ0FBT00sTUFBbEQsSUFBNER4QixFQUFFLENBQUNrQixHQUFILENBQU9DLEVBQVAsSUFBYW5CLEVBQUUsQ0FBQ2tCLEdBQUgsQ0FBT08sSUFBcEYsRUFBMEY7QUFDdEZSLFFBQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXLG1EQUFYO0FBQ0E7QUFDSDs7QUFFREwsTUFBQUEsS0FBSyxDQUFDSyxJQUFOLENBQVcseUVBQVg7QUFDQTtBQUNILEtBbkNzQixDQW9DdkI7OztBQUNBaEIsSUFBQUEsTUFBTSxDQUFDb0IsT0FBUCxJQUFrQnBCLE1BQU0sQ0FBQ29CLE9BQVAsRUFBbEI7QUFFSDtBQXpESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmluaXNoKCkge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluc3RhbGxIYW5kbGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm9uRmluaXNoKCk7XHJcblxyXG4gICAgICAgIC8vSWYgYWQgbmV0d29yayBpcyB0aWt0b2tcclxuICAgICAgICBpZiAodHlwZW9mIChwbGF5YWJsZVNESykgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cucGxheWFibGVTREsub3BlbkFwcFN0b3JlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgZ29vZ2xlIGFkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKEV4aXRBcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgRXhpdEFwaS5leGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdyb2sgaXMgaXJvbnNvdXJjZXNcclxuICAgICAgICBpZiAodHlwZW9mIChkYXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGRhcGkub3BlblN0b3JlVXJsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgc3VwcG9ydCBNUkFJRCAyLjBcclxuICAgICAgICBpZiAodHlwZW9mKG1yYWlkKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5hbmltZWRvbGwuYXZhdGFybWFrZXJcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQSE9ORSB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQQUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwL2lkMTY2MjQ0NzQ4OT9tdD04XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5hbmltZWRvbGwuYXZhdGFybWFrZXJcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBtaW5kd29yay4gd2luZG93IGFsd2F5IGF2YWlhYmxlIHNvIHNraXAgdW5kZWZpbmVkIGNoZWNrXHJcbiAgICAgICAgd2luZG93Lmluc3RhbGwgJiYgd2luZG93Lmluc3RhbGwoKTtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19