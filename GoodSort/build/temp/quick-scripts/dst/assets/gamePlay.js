
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/gamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e504dIrhHNHKI8zOPblZdkO', 'gamePlay');
// gamePlay.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    background: cc.Node,
    character: cc.Node,
    bgAudio: cc.AudioClip,
    acne1: cc.Node,
    acne2: cc.Node,
    acne3: cc.Node,
    circle: cc.Node,
    circle2: cc.Node,
    tweezers: cc.Node,
    tweezers2: cc.Node,
    tweezers3: cc.Node,
    hand: cc.Node,
    hand2: cc.Node,
    startPos: null,
    emptyNode: cc.Node,
    word: cc.Node
  },
  onLoad: function onLoad() {
    var _this = this;

    this.tweezers.on("touchmove", function (e) {
      _this.startPos = e.touch.getLocation();

      _this.tweezers.setPosition(_this.startPos.x - cc.winSize.width / 2 - 5, _this.startPos.y - cc.winSize.height / 2);
    });
    this.node.on("touchend", function (e) {
      if (_this.emptyNode.getBoundingBox().intersects(_this.tweezers.getBoundingBox())) {
        _this.tweezers.active = false;
        _this.tweezers2.active = true;
        _this.acne1.active = false;
        _this.acne2.active = true;
        _this.acne3.active = true;
        _this.hand.active = false;
        _this.circle.active = false;

        _this.scheduleOnce(function () {
          _this.tweezers3.active = true;
          _this.hand2.active = true;
          _this.circle2.active = true;
        }, 1.4);
      }
    });
    this.tweezers3.on("touchmove", function () {
      cc.audioEngine.stopAll();

      _this.getComponent("GameController").installHandle();
    });

    if (cc.winSize.width > cc.winSize.height) {
      this.tweezers.y = -120;
      this.tweezers.x = 120;
      this.word.x = -120;
      this.word.y = 179;
    }
  },
  start: function start() {
    this.playAudio(this.bgAudio);
  },
  playAudio: function playAudio(audio) {
    switch (audio) {
      case this.bgAudio:
        this.playBg = cc.audioEngine.play(this.bgAudio, true, 1);
        break;
    }
  },
  update: function update(dt) {
    this.handleFixSizeOfCharacterWhenRotate();
  },
  handleFixSizeOfCharacterWhenRotate: function handleFixSizeOfCharacterWhenRotate() {
    if (cc.winSize.width > cc.winSize.height) {
      this.character.scaleX = 0.4;
      this.character.scaleY = 0.4;
      this.character.x = 0;
      this.character.y = -80;
      this.emptyNode.x = 48;
      this.emptyNode.y = -124; // console.log(this.emptyNode.x, this.emptyNode.y)
    } else {
      this.character.scaleX = 0.32;
      this.character.scaleY = 0.32;
      this.character.position.x = 0;
      this.character.position.y = -49;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVBsYXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrZ3JvdW5kIiwiTm9kZSIsImNoYXJhY3RlciIsImJnQXVkaW8iLCJBdWRpb0NsaXAiLCJhY25lMSIsImFjbmUyIiwiYWNuZTMiLCJjaXJjbGUiLCJjaXJjbGUyIiwidHdlZXplcnMiLCJ0d2VlemVyczIiLCJ0d2VlemVyczMiLCJoYW5kIiwiaGFuZDIiLCJzdGFydFBvcyIsImVtcHR5Tm9kZSIsIndvcmQiLCJvbkxvYWQiLCJvbiIsImUiLCJ0b3VjaCIsImdldExvY2F0aW9uIiwic2V0UG9zaXRpb24iLCJ4Iiwid2luU2l6ZSIsIndpZHRoIiwieSIsImhlaWdodCIsIm5vZGUiLCJnZXRCb3VuZGluZ0JveCIsImludGVyc2VjdHMiLCJhY3RpdmUiLCJzY2hlZHVsZU9uY2UiLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJnZXRDb21wb25lbnQiLCJpbnN0YWxsSGFuZGxlIiwic3RhcnQiLCJwbGF5QXVkaW8iLCJhdWRpbyIsInBsYXlCZyIsInBsYXkiLCJ1cGRhdGUiLCJkdCIsImhhbmRsZUZpeFNpemVPZkNoYXJhY3RlcldoZW5Sb3RhdGUiLCJzY2FsZVgiLCJzY2FsZVkiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSyxJQURMO0FBRVZDLElBQUFBLFNBQVMsRUFBRU4sRUFBRSxDQUFDSyxJQUZKO0FBR1ZFLElBQUFBLE9BQU8sRUFBRVAsRUFBRSxDQUFDUSxTQUhGO0FBSVZDLElBQUFBLEtBQUssRUFBRVQsRUFBRSxDQUFDSyxJQUpBO0FBS1ZLLElBQUFBLEtBQUssRUFBRVYsRUFBRSxDQUFDSyxJQUxB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RCxNQVFPO0FBQ0wsV0FBS3pCLFNBQUwsQ0FBZTRDLE1BQWYsR0FBd0IsSUFBeEI7QUFDQSxXQUFLNUMsU0FBTCxDQUFlNkMsTUFBZixHQUF3QixJQUF4QjtBQUNBLFdBQUs3QyxTQUFMLENBQWU4QyxRQUFmLENBQXdCeEIsQ0FBeEIsR0FBNEIsQ0FBNUI7QUFDQSxXQUFLdEIsU0FBTCxDQUFlOEMsUUFBZixDQUF3QnJCLENBQXhCLEdBQTRCLENBQUMsRUFBN0I7QUFDRDtBQUNGO0FBakdNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUsXHJcbiAgICBjaGFyYWN0ZXI6IGNjLk5vZGUsXHJcbiAgICBiZ0F1ZGlvOiBjYy5BdWRpb0NsaXAsXHJcbiAgICBhY25lMTogY2MuTm9kZSxcclxuICAgIGFjbmUyOiBjYy5Ob2RlLFxyXG4gICAgYWNuZTM6IGNjLk5vZGUsXHJcbiAgICBjaXJjbGU6IGNjLk5vZGUsXHJcbiAgICBjaXJjbGUyOiBjYy5Ob2RlLFxyXG4gICAgdHdlZXplcnM6IGNjLk5vZGUsXHJcbiAgICB0d2VlemVyczI6IGNjLk5vZGUsXHJcbiAgICB0d2VlemVyczM6IGNjLk5vZGUsXHJcbiAgICBoYW5kOiBjYy5Ob2RlLFxyXG4gICAgaGFuZDI6IGNjLk5vZGUsXHJcbiAgICBzdGFydFBvczogbnVsbCxcclxuICAgIGVtcHR5Tm9kZTogY2MuTm9kZSxcclxuICAgIHdvcmQ6IGNjLk5vZGUsXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy50d2VlemVycy5vbihcInRvdWNobW92ZVwiLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXJ0UG9zID0gZS50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICB0aGlzLnR3ZWV6ZXJzLnNldFBvc2l0aW9uKFxyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MueCAtIGNjLndpblNpemUud2lkdGggLyAyIC0gNSxcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDJcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubm9kZS5vbihcInRvdWNoZW5kXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmVtcHR5Tm9kZVxyXG4gICAgICAgICAgLmdldEJvdW5kaW5nQm94KClcclxuICAgICAgICAgIC5pbnRlcnNlY3RzKHRoaXMudHdlZXplcnMuZ2V0Qm91bmRpbmdCb3goKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy50d2VlemVycy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnR3ZWV6ZXJzMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWNuZTEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY25lMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWNuZTMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhhbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaXJjbGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudHdlZXplcnMzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmNpcmNsZTIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCAxLjQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnR3ZWV6ZXJzMy5vbihcInRvdWNobW92ZVwiLCAoKSA9PiB7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgdGhpcy5nZXRDb21wb25lbnQoXCJHYW1lQ29udHJvbGxlclwiKS5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA+IGNjLndpblNpemUuaGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMudHdlZXplcnMueSA9IC0xMjA7XHJcbiAgICAgIHRoaXMudHdlZXplcnMueCA9IDEyMDtcclxuICAgICAgdGhpcy53b3JkLnggPSAtMTIwO1xyXG4gICAgICB0aGlzLndvcmQueSA9IDE3OTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMucGxheUF1ZGlvKHRoaXMuYmdBdWRpbyk7XHJcbiAgfSxcclxuXHJcbiAgcGxheUF1ZGlvKGF1ZGlvKSB7XHJcbiAgICBzd2l0Y2ggKGF1ZGlvKSB7XHJcbiAgICAgIGNhc2UgdGhpcy5iZ0F1ZGlvOlxyXG4gICAgICAgIHRoaXMucGxheUJnID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJnQXVkaW8sIHRydWUsIDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgdGhpcy5oYW5kbGVGaXhTaXplT2ZDaGFyYWN0ZXJXaGVuUm90YXRlKCk7XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlRml4U2l6ZU9mQ2hhcmFjdGVyV2hlblJvdGF0ZSgpIHtcclxuICAgIGlmIChjYy53aW5TaXplLndpZHRoID4gY2Mud2luU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgdGhpcy5jaGFyYWN0ZXIuc2NhbGVYID0gMC40O1xyXG4gICAgICB0aGlzLmNoYXJhY3Rlci5zY2FsZVkgPSAwLjQ7XHJcbiAgICAgIHRoaXMuY2hhcmFjdGVyLnggPSAwO1xyXG4gICAgICB0aGlzLmNoYXJhY3Rlci55ID0gLTgwO1xyXG4gICAgICB0aGlzLmVtcHR5Tm9kZS54ID0gNDg7XHJcbiAgICAgIHRoaXMuZW1wdHlOb2RlLnkgPSAtMTI0O1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVtcHR5Tm9kZS54LCB0aGlzLmVtcHR5Tm9kZS55KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jaGFyYWN0ZXIuc2NhbGVYID0gMC4zMjtcclxuICAgICAgdGhpcy5jaGFyYWN0ZXIuc2NhbGVZID0gMC4zMjtcclxuICAgICAgdGhpcy5jaGFyYWN0ZXIucG9zaXRpb24ueCA9IDA7XHJcbiAgICAgIHRoaXMuY2hhcmFjdGVyLnBvc2l0aW9uLnkgPSAtNDk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiJdfQ==