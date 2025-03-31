// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Item from "./gameplay/Item";
import Slot from "./gameplay/Slot";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Hand extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  private startItem: Item = null;
  private endSlot: Slot = null;
  private endItem: Item = null;
  private endPosition: cc.Vec3 = null;


  startMove() {
    if (this.startItem === null || this.endPosition === null) {
      this.node.active = false;
      return;
    }
    this.node.active = true;

    let offset = new cc.Vec3(80, -25, 0);
    let offset2 = new cc.Vec2(30, -25);
    // const tempPos = this.endSlot.node.parent.convertToWorldSpaceAR(
    //   this.endSlot.node.getPosition()
    // );
    // let endPos = this.startItem.node.parent.convertToWorldSpaceAR(tempPos);

    this.node.setParent(this.startItem.node.parent);
    this.node.setPosition(this.startItem.node.position.add(offset));
    cc.tween(this.node)
      .repeatForever(
        cc
          .tween(this.node)
          .delay(0.4)
          .to(1.2, {
            position: this.endPosition.add(offset),
          })
          .then(
            cc.tween(this.node).to(0, {
              position: this.startItem.node.position.add(offset),
            })
          )
      )
      .start();
  }
  setStartItem(item: Item) {
    this.startItem = item;
  }
  setEndSlot(item: Slot) {
    if (this.endSlot === null) {
      this.endSlot = item;
    }
  }
  setEndItem(item: Item) {
    if (this.endItem === null) {
      this.endItem = item;
    }
  }
  setEndPosition(endPosition: cc.Vec3) {
    this.endPosition = endPosition;
  }


  start() { }

  // update (dt) {}
}
