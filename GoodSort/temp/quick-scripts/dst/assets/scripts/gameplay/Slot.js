
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameplay/Slot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZXBsYXlcXFNsb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQTRCO0FBRXRCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBb0RDO1FBaERRLFVBQUksR0FBUyxJQUFJLENBQUM7O0lBZ0QzQixDQUFDO0lBNUNXLHFCQUFNLEdBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELDhCQUFlLEdBQWYsVUFBZ0IsSUFBVSxFQUFFLE1BQWU7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFBRSxPQUFPO1FBQzNCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUNwRCxJQUFJLENBQUMsSUFBSTthQUNOLFdBQVcsRUFBRSxDQUNqQixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0Qsc0JBQU8sR0FBUCxVQUFRLElBQVU7UUFDaEIsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1DQUFtQztJQUNyQyxDQUFDO0lBQ0QsdUJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELHNCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCx5QkFBVSxHQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUk7WUFBRSxPQUFPO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNELHlCQUFVLEdBQVY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJO1lBQUUsT0FBTztRQUNoQyx3QkFBd0I7UUFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBakREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0NBQ0U7SUFGSCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBb0R4QjtJQUFELFdBQUM7Q0FwREQsQUFvREMsQ0FwRGlDLEVBQUUsQ0FBQyxTQUFTLEdBb0Q3QztrQkFwRG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XHJcbmltcG9ydCBTaGVsZiBmcm9tIFwiLi9TaGVsZlwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgcHJpdmF0ZSBiZzogY2MuU3ByaXRlO1xyXG5cclxuICBwdWJsaWMgaXRlbTogSXRlbSA9IG51bGw7XHJcbiAgcHVibGljIGluZGV4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzaGVsZjogU2hlbGY7XHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5ub2RlLnBhcmVudCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNoZWxmID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoU2hlbGYpO1xyXG4gICAgICB0aGlzLmluZGV4ID0gdGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SXRlbVJpZ2h0UG9zKGl0ZW06IEl0ZW0sIHBhcmVudDogY2MuTm9kZSkge1xyXG4gICAgdGhpcy5zZXRJdGVtKGl0ZW0pO1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm47XHJcbiAgICBjb25zdCB0ZW1wUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoXHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRQb3NpdGlvbigpXHJcbiAgICApO1xyXG4gICAgdGhpcy5pdGVtLm5vZGUuc2V0UGFyZW50KHBhcmVudCk7XHJcbiAgICB0aGlzLml0ZW0ubm9kZS5zZXRQb3NpdGlvbihwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGVtcFBvcykpO1xyXG4gIH1cclxuICBzZXRJdGVtKGl0ZW06IEl0ZW0pIHtcclxuICAgIGlmIChpdGVtID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2hlbGYucmVtb3ZlSXRlbSh0aGlzLml0ZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaGVsZi5yZXBsYWNlSXRlbSh0aGlzLml0ZW0sIGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgIC8vIHRoaXMuYmcuZW5hYmxlZCA9IGl0ZW0gPT09IG51bGw7XHJcbiAgfVxyXG4gIHNldEVtcHR5KCkge1xyXG4gICAgdGhpcy5zZXRJdGVtKG51bGwpO1xyXG4gIH1cclxuICBpc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbSA9PT0gbnVsbDtcclxuICB9XHJcbiAgY2hlY2tTaGVsZigpIHtcclxuICAgIGlmICh0aGlzLnNoZWxmID09PSBudWxsKSByZXR1cm47XHJcbiAgICB0aGlzLnNoZWxmLmNoZWNrQmFja0xheWVyKCk7XHJcbiAgfVxyXG4gIGNoZWNrTWF0Y2goKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNoZWNrXCIpO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zaGVsZiA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJDaGVja1wiKTtcclxuICAgIFxyXG4gICAgdGhpcy5zaGVsZi5jaGVja01hdGNoKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==