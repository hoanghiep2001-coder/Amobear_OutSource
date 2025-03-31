"use strict";
cc._RF.push(module, '18398oync9Di7q0xYZioUT+', 'Hand');
// scripts/Hand.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Hand = /** @class */ (function (_super) {
    __extends(Hand, _super);
    function Hand() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.startItem = null;
        _this.endSlot = null;
        _this.endItem = null;
        _this.endPosition = null;
        return _this;
        // update (dt) {}
    }
    Hand.prototype.startMove = function () {
        if (this.startItem === null || this.endPosition === null) {
            this.node.active = false;
            return;
        }
        this.node.active = true;
        var offset = new cc.Vec3(80, -25, 0);
        var offset2 = new cc.Vec2(30, -25);
        // const tempPos = this.endSlot.node.parent.convertToWorldSpaceAR(
        //   this.endSlot.node.getPosition()
        // );
        // let endPos = this.startItem.node.parent.convertToWorldSpaceAR(tempPos);
        this.node.setParent(this.startItem.node.parent);
        this.node.setPosition(this.startItem.node.position.add(offset));
        cc.tween(this.node)
            .repeatForever(cc
            .tween(this.node)
            .delay(0.4)
            .to(1.2, {
            position: this.endPosition.add(offset),
        })
            .then(cc.tween(this.node).to(0, {
            position: this.startItem.node.position.add(offset),
        })))
            .start();
    };
    Hand.prototype.setStartItem = function (item) {
        this.startItem = item;
    };
    Hand.prototype.setEndSlot = function (item) {
        if (this.endSlot === null) {
            this.endSlot = item;
        }
    };
    Hand.prototype.setEndItem = function (item) {
        if (this.endItem === null) {
            this.endItem = item;
        }
    };
    Hand.prototype.setEndPosition = function (endPosition) {
        this.endPosition = endPosition;
    };
    Hand.prototype.start = function () { };
    Hand = __decorate([
        ccclass
    ], Hand);
    return Hand;
}(cc.Component));
exports.default = Hand;

cc._RF.pop();