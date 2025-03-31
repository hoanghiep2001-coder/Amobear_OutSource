"use strict";
cc._RF.push(module, '2755eD+0aVPs7DEpl/8PslR', 'Slot');
// scripts/gameplay/Slot.ts

"use strict";
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
var Shelf_1 = require("./Shelf");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot = /** @class */ (function (_super) {
    __extends(Slot, _super);
    function Slot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        return _this;
    }
    Slot.prototype.onLoad = function () {
        if (this.node.parent !== null) {
            this.shelf = this.node.parent.getComponent(Shelf_1.default);
            this.index = this.node.getSiblingIndex();
        }
    };
    Slot.prototype.setItemRightPos = function (item, parent) {
        this.setItem(item);
        if (this.isEmpty())
            return;
        var tempPos = this.node.parent.convertToWorldSpaceAR(this.node
            .getPosition());
        this.item.node.setParent(parent);
        this.item.node.setPosition(parent.convertToNodeSpaceAR(tempPos));
    };
    Slot.prototype.setItem = function (item) {
        if (item === null) {
            this.shelf.removeItem(this.item);
        }
        else {
            this.shelf.replaceItem(this.item, item);
        }
        this.item = item;
        // this.bg.enabled = item === null;
    };
    Slot.prototype.setEmpty = function () {
        this.setItem(null);
    };
    Slot.prototype.isEmpty = function () {
        return this.item === null;
    };
    Slot.prototype.checkShelf = function () {
        if (this.shelf === null)
            return;
        this.shelf.checkBackLayer();
    };
    Slot.prototype.checkMatch = function () {
        console.log("Check");
        if (this.shelf === null)
            return;
        // console.log("Check");
        this.shelf.checkMatch();
    };
    __decorate([
        property(cc.Sprite)
    ], Slot.prototype, "bg", void 0);
    Slot = __decorate([
        ccclass
    ], Slot);
    return Slot;
}(cc.Component));
exports.default = Slot;

cc._RF.pop();