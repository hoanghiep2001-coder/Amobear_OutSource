import Board, { BoardState } from "../Board";
import Config from "../config/Config";
import { animationConfig, ConfigData } from "../config/GameConfig";
import { LoopedSoundTrack, PrefabSoundTrack, SoundController } from "../Controller/SoundController";
// import { LoopedSoundTrack, PrefabSoundTrack, SoundController } from "../Controller/SoundController";
import Shelf from "./Shelf";
import Slot from "./Slot";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Item extends cc.Component {
  @property([cc.Sprite])
  sprite: cc.Sprite;

  @property([cc.Color])
  lockColor: cc.Color = new cc.Color(87, 87, 87, 255);

  public id: number;
  public index: number;
  private initialTouchPos: cc.Vec2 = null;
  private deltaPos: cc.Vec2;
  private isLock = false;
  // public shelf: Shelf;
  public currentSlot: Slot;

  private nearestSlot: Slot = null;
  private touching = false;


  // PA_02
  itemPos: cc.Vec2 = null;
  itemRotate: number = null;


  start() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
  }
  setLock(isLock: boolean) {
    this.isLock = isLock;
  }


  setActiveWithCart(isActive: boolean): void {
    this.node.active = isActive;
  }


  setActive(isActive: boolean) {
    this.isLock = !isActive;
    if (!isActive) {
      this.node.color = this.lockColor;
    } else {
      this.node.color = cc.Color.WHITE;
    }
  }
  setActiveAnimation(isActive: boolean) {
    this.isLock = !isActive;
    let fadeDuration = 0.2;
    if (!isActive) {
      // this.node.color = this.lockColor;
      cc.tween(this.node).to(fadeDuration, {
        color: this.lockColor,
      }).start();
    } else {
      // this.node.color = this.lockColor;
      cc.tween(this.node).to(fadeDuration, {
        color: cc.Color.WHITE,
      }).start();
    }
  }


  setSlot(slot: Slot) {
    this.currentSlot = slot;
    this.setIndex(slot.index);
  }


  _Config: Config = null;
  setId(id: number) {
    this.id = id;
    this.sprite.spriteFrame = this._Config.itemConfig.getSprite(id);
  }
  setIndex(index: number) {
    this.index = index;
  }


  _Board: Board = null;
  match() {
    this._Board.setBoardState(BoardState.Lock);
    cc.tween(this.node)
      .delay(0.2)
      .to(
        animationConfig.matchDuration,
        {
          scale: 0,
        },
        {
          easing: "backIn",
        }
      )
      .call(() => {
        this.node.destroy();
      })
      .start();
  }
  moveTo(target: cc.Vec2) {
    // this.setLock(true);
    this._Board.setBoardState(BoardState.Lock);
    cc.tween(this.node)
      .to(animationConfig.toSlotDuration, {
        position: new cc.Vec3(target.x, target.y, 0),
      })
      .call(() => {
        this._Board.setBoardState(BoardState.Playing);
        // this.setLock(false);
      })
      .start();
  }
  handleMoveToBehind(target: cc.Vec2, layer: number) {
    this.node.scale = 0;
    cc.tween(this.node)
      .to(animationConfig.spawnDuration, {
        scale: 0.86,
      }, { easing: "backOut" })
      .to(animationConfig.spawnDuration, {
        position: new cc.Vec3(target.x, target.y, 0),
      }, { easing: "backIn" })
      .call(() => {
        if (layer > 0) {
          this.setActiveAnimation(false);
        }
        else {
          this._Board.handleCompleteGenerate();
          
        }
        this._Board.hideItemsLayer(layer + 2);
      })
      .start();
  }

  onTouchStart(event: cc.Event.EventTouch) {

    if (!ConfigData.Game.isCanClick) return;

    if (this.isLock || this._Board.isLock() || this._Board.isGenerating()) return;

    SoundController.Instance(SoundController).playPrefabSound(PrefabSoundTrack.tilePickedSound);

    this._Board.hideHand();
    this.initialTouchPos = event.getLocation();
    this.node.setSiblingIndex(this.node.parent.childrenCount);
    this.node.zIndex = 0;
    this.touching = true;
  }

  // this.initialTouchPos = new cc.Vec2(localTouchPos.x, localTouchPos.y);

  touchOffset: cc.Vec3 = new cc.Vec3(0, -50);
  onTouchMove(event: cc.Event.EventTouch) {
    if (!ConfigData.Game.isCanClick) return;
    if (this.isLock || this._Board.isLock() || !this.touching) return;

    let currentTouchPos = event.getLocation();

    // Chuyển vị trí chạm sang tọa độ local của node cha (dưới dạng Vec2)
    let localTouchPos2D = this.node.parent.convertToNodeSpaceAR(currentTouchPos);
    let localTouchPos = new cc.Vec3(localTouchPos2D.x, localTouchPos2D.y, 0); // Chuyển thành Vec3

    if (!this.initialTouchPos) {
      // Lưu vị trí chạm đầu tiên & tính offset
      this.initialTouchPos = new cc.Vec2(localTouchPos.x, localTouchPos.y);
      this.touchOffset = this.node.position.sub(localTouchPos);
    }

    // Đảm bảo touchOffset không null trước khi sử dụng
    if (!this.touchOffset) {
      this.touchOffset = cc.Vec3.ZERO;
    }

    // Cập nhật vị trí của node theo vị trí chạm mới + offset ban đầu
    this.node.setPosition(localTouchPos.add(this.touchOffset));
  }

  // onTouchMove(event: cc.Event.EventTouch) {
  //   if(!ConfigData.Game.isCanClick) return;
  //   if (this.isLock || this._Board.isLock() || !this.touching) return;
  //   let currentTouchPos = event.getLocation();
  //   if (this.initialTouchPos === null) {
  //     this.initialTouchPos = event.getLocation();
  //   }
  //   this.deltaPos = currentTouchPos.sub(this.initialTouchPos);
  //   this.node.setPosition(this.node.position.add(new cc.Vec3(this.deltaPos.x, this.deltaPos.y, 0)));
  //   this.initialTouchPos = currentTouchPos;
  // }

  onTouchEnd(event: cc.Event.EventTouch) {
    if (!ConfigData.Game.isCanClick) return;

    if (this.isLock || this._Board.isLock() || !this.touching) return;
    this.touching = false;
    if (this.nearestSlot === null) {
      this.nearestSlot = this.currentSlot;
    }
    let tempPos = this.nearestSlot.node.parent.convertToWorldSpaceAR(
      this.nearestSlot.node.position
    );
    let targetPos = this.node.parent.convertToNodeSpaceAR(tempPos);

    // SoundController.Instance(SoundController).playPrefabSound(PrefabSoundTrack.onShelfSound);

    // this.setLock(true);
    this._Board.setBoardState(BoardState.Lock);
    cc.tween(this.node)
      .to(animationConfig.toSlotDuration, {
        position: targetPos,
      })
      .call(() => {

        // this.setLock(false);
        this.nearestSlot.setItem(this);
        console.log("check");
        console.log(this.nearestSlot, this.currentSlot);
        
        if (this.currentSlot !== this.nearestSlot) {

          console.log("check");
          this.currentSlot.setEmpty();
          this.currentSlot.checkShelf();
          this.setSlot(this.nearestSlot);
          this.currentSlot.checkMatch();
        }
        this.scheduleOnce(() => {
          this._Board.setBoardState(BoardState.Playing);
        }, 0.1);
      })
      .start();
  }


  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (this.touching == false) return;
    if (other.node.group == "slot") {
      console.log("check");
      
      if (other.node.getComponent(Slot).isEmpty()) {
        this.nearestSlot = other.node.getComponent(Slot);
        // return;
      }
      // this.nearestSlot = other.node.getComponent(Slot);
    }
  }


  onCollisionExit(other: cc.Collider, self: cc.Collider) {
    if (this.touching == false) return;
    if (other.node.group == "slot") {
      
      if (
        other.node.getComponent(Slot) === this.nearestSlot ||
        this.nearestSlot === null
      ) {
        console.log("check");
        this.nearestSlot = this.currentSlot;
      }
    }
  }
  protected onDestroy(): void {
    if (this._Board.isLock) {
      this._Board.setBoardState(BoardState.Playing);
    }
  }
}
