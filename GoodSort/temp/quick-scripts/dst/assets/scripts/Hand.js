
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Hand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSGFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUNFLHdCQUF3QjtRQUQxQixxRUFnRUM7UUE3REMsZUFBZTtRQUVQLGVBQVMsR0FBUyxJQUFJLENBQUM7UUFDdkIsYUFBTyxHQUFTLElBQUksQ0FBQztRQUNyQixhQUFPLEdBQVMsSUFBSSxDQUFDO1FBQ3JCLGlCQUFXLEdBQVksSUFBSSxDQUFDOztRQXVEcEMsaUJBQWlCO0lBQ25CLENBQUM7SUFyREMsd0JBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxrRUFBa0U7UUFDbEUsb0NBQW9DO1FBQ3BDLEtBQUs7UUFDTCwwRUFBMEU7UUFFMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixhQUFhLENBQ1osRUFBRTthQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ1AsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUN2QyxDQUFDO2FBQ0QsSUFBSSxDQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQ25ELENBQUMsQ0FDSCxDQUNKO2FBQ0EsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsMkJBQVksR0FBWixVQUFhLElBQVU7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNELHlCQUFVLEdBQVYsVUFBVyxJQUFVO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBQ0QseUJBQVUsR0FBVixVQUFXLElBQVU7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtJQUNILENBQUM7SUFDRCw2QkFBYyxHQUFkLFVBQWUsV0FBb0I7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUdELG9CQUFLLEdBQUwsY0FBVSxDQUFDO0lBN0RRLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FnRXhCO0lBQUQsV0FBQztDQWhFRCxBQWdFQyxDQWhFaUMsRUFBRSxDQUFDLFNBQVMsR0FnRTdDO2tCQWhFb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBJdGVtIGZyb20gXCIuL2dhbWVwbGF5L0l0ZW1cIjtcclxuaW1wb3J0IFNsb3QgZnJvbSBcIi4vZ2FtZXBsYXkvU2xvdFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgcHJpdmF0ZSBzdGFydEl0ZW06IEl0ZW0gPSBudWxsO1xyXG4gIHByaXZhdGUgZW5kU2xvdDogU2xvdCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBlbmRJdGVtOiBJdGVtID0gbnVsbDtcclxuICBwcml2YXRlIGVuZFBvc2l0aW9uOiBjYy5WZWMzID0gbnVsbDtcclxuXHJcblxyXG4gIHN0YXJ0TW92ZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXJ0SXRlbSA9PT0gbnVsbCB8fCB0aGlzLmVuZFBvc2l0aW9uID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgbGV0IG9mZnNldCA9IG5ldyBjYy5WZWMzKDgwLCAtMjUsIDApO1xyXG4gICAgbGV0IG9mZnNldDIgPSBuZXcgY2MuVmVjMigzMCwgLTI1KTtcclxuICAgIC8vIGNvbnN0IHRlbXBQb3MgPSB0aGlzLmVuZFNsb3Qubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKFxyXG4gICAgLy8gICB0aGlzLmVuZFNsb3Qubm9kZS5nZXRQb3NpdGlvbigpXHJcbiAgICAvLyApO1xyXG4gICAgLy8gbGV0IGVuZFBvcyA9IHRoaXMuc3RhcnRJdGVtLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0ZW1wUG9zKTtcclxuXHJcbiAgICB0aGlzLm5vZGUuc2V0UGFyZW50KHRoaXMuc3RhcnRJdGVtLm5vZGUucGFyZW50KTtcclxuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLnN0YXJ0SXRlbS5ub2RlLnBvc2l0aW9uLmFkZChvZmZzZXQpKTtcclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgY2NcclxuICAgICAgICAgIC50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAuZGVsYXkoMC40KVxyXG4gICAgICAgICAgLnRvKDEuMiwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5lbmRQb3NpdGlvbi5hZGQob2Zmc2V0KSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuc3RhcnRJdGVtLm5vZGUucG9zaXRpb24uYWRkKG9mZnNldCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApXHJcbiAgICAgIClcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG4gIHNldFN0YXJ0SXRlbShpdGVtOiBJdGVtKSB7XHJcbiAgICB0aGlzLnN0YXJ0SXRlbSA9IGl0ZW07XHJcbiAgfVxyXG4gIHNldEVuZFNsb3QoaXRlbTogU2xvdCkge1xyXG4gICAgaWYgKHRoaXMuZW5kU2xvdCA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmVuZFNsb3QgPSBpdGVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRFbmRJdGVtKGl0ZW06IEl0ZW0pIHtcclxuICAgIGlmICh0aGlzLmVuZEl0ZW0gPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5lbmRJdGVtID0gaXRlbTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0RW5kUG9zaXRpb24oZW5kUG9zaXRpb246IGNjLlZlYzMpIHtcclxuICAgIHRoaXMuZW5kUG9zaXRpb24gPSBlbmRQb3NpdGlvbjtcclxuICB9XHJcblxyXG5cclxuICBzdGFydCgpIHsgfVxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==