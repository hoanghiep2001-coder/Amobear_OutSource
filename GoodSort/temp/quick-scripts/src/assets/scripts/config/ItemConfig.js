"use strict";
cc._RF.push(module, 'a4314WSE+5Ny76qMiGSICwb', 'ItemConfig');
// scripts/config/ItemConfig.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemConfig = /** @class */ (function (_super) {
    __extends(ItemConfig, _super);
    function ItemConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemSprites = [];
        return _this;
    }
    ItemConfig.prototype.getSprite = function (id) {
        return this.itemSprites[id];
    };
    __decorate([
        property([cc.Prefab])
    ], ItemConfig.prototype, "itemPrefab", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ItemConfig.prototype, "itemSprites", void 0);
    ItemConfig = __decorate([
        ccclass
    ], ItemConfig);
    return ItemConfig;
}(cc.Component));
exports.default = ItemConfig;

cc._RF.pop();