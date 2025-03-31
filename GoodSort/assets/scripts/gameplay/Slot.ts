import Item from "./Item";
import Shelf from "./Shelf";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Slot extends cc.Component {
  @property(cc.Sprite)
  private bg: cc.Sprite;

  public item: Item = null;
  public index: number;
  private shelf: Shelf;

  protected onLoad(): void {
    if (this.node.parent !== null) {
      this.shelf = this.node.parent.getComponent(Shelf);
      this.index = this.node.getSiblingIndex();
    }
  }

  setItemRightPos(item: Item, parent: cc.Node) {
    this.setItem(item);
    if (this.isEmpty()) return;
    const tempPos = this.node.parent.convertToWorldSpaceAR(
      this.node
        .getPosition()
    );
    this.item.node.setParent(parent);
    this.item.node.setPosition(parent.convertToNodeSpaceAR(tempPos));
  }
  setItem(item: Item) {
    if (item === null) {
      this.shelf.removeItem(this.item);
    } else {
      this.shelf.replaceItem(this.item, item);
    }
    this.item = item;
    // this.bg.enabled = item === null;
  }
  setEmpty() {
    this.setItem(null);
  }
  isEmpty() {
    return this.item === null;
  }
  checkShelf() {
    if (this.shelf === null) return;
    this.shelf.checkBackLayer();
  }
  checkMatch() {
    console.log("Check");
    
    if (this.shelf === null) return;
    // console.log("Check");
    
    this.shelf.checkMatch();
  }
}
