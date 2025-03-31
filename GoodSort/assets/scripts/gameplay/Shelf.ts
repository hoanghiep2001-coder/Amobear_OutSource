import Board from "../Board";
import { ProgressBar } from "../Component/ProgressBar";
import { Rocket } from "../Component/Rocket";
import Config from "../config/Config";
import { animationConfig, ConfigData, layoutConfig } from "../config/GameConfig";
import { PrefabSoundTrack, SoundController } from "../Controller/SoundController";
import Item from "./Item";
import Slot from "./Slot";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Shelf extends cc.Component {
  @property([cc.Prefab])
  itemPrefab: cc.Prefab;

  @property([cc.Prefab])
  matchPrefab: cc.Prefab;

  @property([cc.SpriteFrame])
  shelfSprites: cc.SpriteFrame[] = [];

  @property([Slot])
  slots: Slot[] = [];
  public sprite: cc.Sprite;
  public layers: Item[][] = [];

  // isActive: boolean = true;
  // itemInShelfs: Item[] = [];
  // @property(cc.Prefab)
  // rocketHelper: cc.Prefab = null;

  _Board: Board = null;

  onLoad() {
    this.sprite = this.getComponent(cc.Sprite);
  }


  // _isHasRocket: boolean = false;
  // _isSpawnRocket: boolean = false;
  protected start(): void {
    // const num: number = cc.math.randomRangeInt(0, 2);
    // const random: boolean = num === 1 ? true : false;
    // if(random) this._isHasRocket = true;
  }


  // public _canSpawnRocket: boolean = false;
  // _rocket: Rocket = null;
  // private spawnRocket(pos: cc.Vec2, parent: cc.Node): void {
  //   if (!this._canSpawnRocket || ConfigData.Helper.maxRocketCanSpawn <= 0) return;
  //   // this._isSpawnRocket = true;
  //   ConfigData.Helper.maxRocketCanSpawn -= 1;
  //   const _r = cc.instantiate(this.rocketHelper);
  //   _r.parent = parent;
  //   _r.setPosition(0, 130);
  //   _r.setScale(0.23);
  //   this._rocket = _r.getComponent(Rocket);
  //   parent.getComponent(Item)._isHasRocket = true;
  //   // const _rWPos = parent.convertToWorldSpaceAR(_r.getPosition());
  //   // ConfigData.Idea.fakeRocketPoses.push(parent.getPosition());
  //   // ConfigData.Idea.fakeRocketPoses.push(this.node.getPosition());
  //   ConfigData.Idea.shelf.push(this);
  // }



  initialize() { }


  _itemContainer: cc.Node = null;
  addItem(
    itemId: number,
    positionIndex: number,
    layer: number,
    parent: cc.Node,
    board: Board,
    config: Config
  ): Item {
    const item = cc.instantiate(this.itemPrefab).getComponent(Item);
    item._Board = board;
    item._Config = config;
    item.setId(itemId);
    if (this.layers[layer] == null) {
      this.layers[layer] = [];
    }
    this.layers[layer].push(item);

    this.node.addChild(item.node, -1 * layer);

    const tempPos = item.node.parent.convertToWorldSpaceAR(
      this.slots[positionIndex].node
        .getPosition()
        .add(new cc.Vec2(0, 0))
    );
    const tempBehindPos = item.node.parent.convertToWorldSpaceAR(
      this.slots[positionIndex].node
        .getPosition()
        .add(new cc.Vec2(0, layer * layoutConfig.backItemOffsetY))
    );
    const itemPos = parent.convertToNodeSpaceAR(tempPos);
    item.node.setParent(parent);
    item.node.setPosition(itemPos);

    const behindPos = parent.convertToNodeSpaceAR(tempBehindPos);

    this._itemContainer = parent;

    if (layer == 0) {
      this.slots[positionIndex].setItem(item);
      item.setSlot(this.slots[positionIndex]);
    }

    item.handleMoveToBehind(behindPos, layer);
    item.setIndex(positionIndex);
    // item.node.setScale(0.1, 0.1);
    return item;
  }
  setShelfType(shelfType: ShelfType) {
    switch (shelfType) {
      case ShelfType.Middle:
        this.sprite.spriteFrame = this.shelfSprites[0];
        break;
      case ShelfType.Left:
        this.sprite.spriteFrame = this.shelfSprites[1];
        break;
      case ShelfType.Right:
        this.sprite.spriteFrame = this.shelfSprites[2];
        this.node.scaleX = -1;
        break;

      default:
        break;
    }
  }
  testMatch(lastItemId: number, layer: number): boolean {
    if (this.layers[layer] == null) {
      return false;
    }
    if (this.layers[layer].length < 2) return false;
    if (
      this.layers[layer][0].id == this.layers[layer][1].id &&
      this.layers[layer][0].id == lastItemId
    ) {
      return true;
    }
    return false;
  }
  checkMatch() {
    for (let i = 0; i < this.slots.length; i++) {
      if (this.slots[i].isEmpty()) return false;
    }
    if (
      this.slots[0].item.id === this.slots[1].item.id &&
      this.slots[0].item.id === this.slots[2].item.id
    ) {

      const effectPos = this._Board.node.convertToNodeSpaceAR(
        this.node.parent.convertToWorldSpaceAR(this.node.position)
      );

      for (let i = 0; i < this.slots.length; i++) {

        // this.slots[i].item._isHasRocket && ConfigData.Idea.isShelfExplosionWhenHitRocket && this.changeParentRocket()
        // this.slots[i].item._isHasRocket
        //   && ConfigData.Idea.isShelfExplosionWhenHitRocket
        //   && this._Board.createRockets(effectPos);

        this.removeItem(this.slots[i].item);
        this.slots[i].item.match();
        this.slots[i].setEmpty();
      }


      // console.log(this.slots[0].item);
      // console.log(this.slots[1].item);
      // console.log(this.slots[2].item);

      // this.IsMatchWithRocket() && ConfigData.Idea.isShelfExplosionWhenHitRocket && this._rocket.activeRocket();


      this.createMatchFx(effectPos);
      this.checkBackLayer();
      ProgressBar.Instance.fillRangeProgress();
      SoundController.Instance(SoundController).playPrefabSound(PrefabSoundTrack.tripleMatchSortSound);
      // this._Board.updateCombo();
      this._Board.updateMatchCount();

      return true;
    }
    return false;
  }


  private changeParentRocket(): void {
    // const _wp = this._rocket.node.convertToWorldSpaceAR(this._rocket.node.getPosition())
    // this._rocket.node.parent = this._itemContainer;
    // this._rocket.node.setPosition(this._itemContainer.convertToNodeSpaceAR(_wp))
    // this._rocket.activeRocket();
    // Board.Instance.setRocketHighestZindex();
  }


  private createMatchFx(effectPos): void {
    const effect = cc.instantiate(this.matchPrefab);
    effect.setParent(this._Board.node);
    effect.setPosition(effectPos);
  }


  checkBackLayer() {
    let allEmpty = true;
    for (let i = 0; i < this.slots.length; i++) {
      if (!this.slots[i].isEmpty()) {
        allEmpty = false;
      }
    }
    if (allEmpty) {
      let lay = 0;
      for (let i = 0; i < this.layers.length; i++) {
        if (this.layers[i].length > 0) {
          if (lay == 0) {
            for (let j = 0; j < this.layers[i].length; j++) {
              const item = this.layers[i][j];
              if (item === null || item === undefined) continue;
              item.setActive(true);
              item.setSlot(this.slots[item.index]);
              this.slots[item.index].setItem(this.layers[i][j]);
            }
          }
          for (let j = 0; j < this.layers[i].length; j++) {
            let index = j;
            const item = this.layers[i][index];
            if (item === null || item === undefined) continue;
            item.node.active = lay < 2;
            const tempPos = this.node.convertToWorldSpaceAR(
              this.slots[item.index].node
                .getPosition()
                .add(new cc.Vec2(0, lay * layoutConfig.backItemOffsetY))
            );
            let target = item.node.parent.convertToNodeSpaceAR(tempPos);
            item.moveTo(target);
          }
          lay++;
        }
      }
    }
  }


  replaceItem(oldItem: Item, newItem) {
    for (let i = 0; i < this.layers.length; i++) {
      if (this.layers[i] === null || this.layers[i] === undefined) continue;
      for (let j = 0; j < this.layers[i].length; j++) {
        if (this.layers[i][j] === oldItem) {
          this.layers[i][j] = newItem;
          return;
        }
      }
    }
  }


  removeItem(item: Item) {
    for (let i = 0; i < this.layers.length; i++) {
      if (this.layers[i] === null || this.layers[i] === undefined) continue;
      for (let j = 0; j < this.layers[i].length; j++) {
        if (this.layers[i][j] === item) {
          this.layers[i].splice(j, 1);
          return;
        }
      }
    }
  }

}
export enum ShelfType {
  Middle,
  Left,
  Right,
}
