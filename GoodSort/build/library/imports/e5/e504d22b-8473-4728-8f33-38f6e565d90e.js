"use strict";
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