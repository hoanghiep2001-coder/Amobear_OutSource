
import { AdsManager } from "./AdsManager";
import Combo from "./Combo";
import { ProgressBar } from "./Component/ProgressBar";
import { LoopedSoundTrack, SoundController } from "./Controller/SoundController";
// import { PrefabSoundTrack, SoundController } from "./Controller/SoundController";
import Hand from "./Hand";
import Config from "./config/Config";
import { levelConfig, layoutConfig, adConfig, ConfigData } from "./config/GameConfig";
import Item from "./gameplay/Item";
import Shelf, { ShelfType } from "./gameplay/Shelf";
// import Slot from "./gameplay/Slot";

const { ccclass, property, executeInEditMode } = cc._decorator;


export const enum BoardState {
  Generating,
  Playing,
  Lock,
}


@ccclass
// @executeInEditMode
export default class Board extends cc.Component {
  static _instance: Board | null = null;
  static get Instance(): Board {
    if (this._instance == null) {
      this._instance = cc.director
        .getScene()
        ?.getComponentInChildren(Board) as Board;
    }
    return this._instance;
  }
  @property(Hand)
  hand: Hand;
  @property(Combo)
  combo: Combo;


  @property(cc.Camera)
  camera: cc.Camera = null;

  @property([cc.Prefab])
  shelfPrefab: cc.Prefab;

  @property([cc.Node])
  startPos: cc.Node;

  @property([cc.Node])
  shelfContainer: cc.Node;
  @property([cc.Node])
  itemContainer: cc.Node;

  @property(cc.Button)
  buttonOpenLink: cc.Button;
  @property(cc.Button)
  buttonOpenSmall: cc.Button;

  @property(cc.Node)
  endCard: cc.Node = null;

  @property(cc.Prefab)
  explosionFx: cc.Prefab = null;

  @property(Config)
  Config: Config = null;

  @property(ProgressBar)
  progressBar: ProgressBar = null;

  public moveCount: number = 0;
  public matchCount: number = 0;

  public shelves: Shelf[] = [];
  private boardState: BoardState;
  private firstMatchId: number = -1;


  @property(AdsManager)
  AdsManager: AdsManager = null;

  start() {
    // this.initializeShelves()
    this.shelves = [];
    this.generateLevel();

    this.buttonOpenLink.node.on(
      "click",
      () => {
        // SoundController.Instance(SoundController).stopAllSound();
        this.AdsManager.installHandle();
      },
      this
    );
    this.buttonOpenSmall.node.on(
      "click",
      () => {
        // SoundController.Instance(SoundController).stopAllSound();
        this.AdsManager.installHandle();
      },
      this
    );
  }


  isLock() {
    return this.boardState == BoardState.Lock;
  }

  isGenerating() {
    return this.boardState == BoardState.Generating;
  }

  setBoardState(state: BoardState) {
    this.boardState = state;
  }


  updateCombo() {
    // this.combo.updateCombo();
  }


  updateMatchCount() {
    this.matchCount++;
    //here
    // SoundController.Instance(SoundController).playPrefabSound(PrefabSoundTrack.clearSound);

    if (this.matchCount > adConfig.matchTimeBeforeShowEndCard - 1) {
      this.endCard.active = true;
      ConfigData.Game.isWin = true;
      // this.buttonOpenLink.node.active = true;
    }
  }


  public createExplosionFx(effectPos: cc.Vec2): void {
    const _fx = cc.instantiate(this.explosionFx);
    _fx.parent = this.node;
    _fx.setPosition(effectPos);
    this.scheduleOnce(() => {
      _fx.active = false;
    }, 1.68)
  }


  generateLevel() {
    this.boardState = BoardState.Generating;
    this.generateLayerShelves();
  }


  hideHand() {
    if (this.hand.node.active) {
      this.hand.node.active = false;
    }
  }


  findHandStartPoint() {
    for (let i = 0; i < this.shelves.length; i++) {
      if (i % 3 != 1) continue;
      for (let j = 0; j < this.shelves[i].slots.length; j++) {
        if (!this.shelves[i].slots[j].isEmpty()) {
          this.hand.setStartItem(this.shelves[i].slots[j].item);
          return;
        }
      }
    }
  }


  findHandEndPoint() {
    for (let i = 0; i < this.shelves.length; i++) {
      for (let j = 0; j < this.shelves[i].slots.length; j++) {
        if (this.shelves[i].slots[j].isEmpty()) {
          this.hand.setEndSlot(this.shelves[i].slots[j]);
          return;
        }
      }
    }
  }


  generateLayerShelves() {
    this.shelfContainer.scale = 0.6;
    this.itemContainer.scale = 0.6;
    const size: cc.Size = this.shelfPrefab.data.getContentSize();
    const { row, col } = levelConfig;
    console.log(this.node.children);

    let possiblePositions: { i: number, j: number }[] = [];

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        possiblePositions.push({ i, j });
      }
    }

    for (let k = possiblePositions.length - 1; k > 0; k--) {
      let randIdx = Math.floor(Math.random() * (k + 1));
      [possiblePositions[k], possiblePositions[randIdx]] = [possiblePositions[randIdx], possiblePositions[k]];
    }

    for (let i = 0; i < row; i++) {
      let index1 = i;
      for (let j = 0; j < col; j++) {
        let index2 = j;
        this.scheduleOnce(() => {
          const newShelf: cc.Node = cc.instantiate(this.shelfPrefab);
          this.shelfContainer.addChild(newShelf);
          const pos = this.startPos
            .getPosition()
            .add(
              new cc.Vec2(
                (size.width + layoutConfig.offsetX) * j,
                -(size.height + layoutConfig.offsetY) * i
              )
            );
          newShelf.setPosition(pos);

          const shelf: Shelf = newShelf.getComponent(Shelf);

          if (shelf != null) {
            if (j == 0) {
              shelf.setShelfType(ShelfType.Left);
            } else if (j == col - 1) {
              shelf.setShelfType(ShelfType.Right);
            } else {
              shelf.setShelfType(ShelfType.Middle);
            }

            shelf._Board = this;
            this.shelves.push(shelf);
          }
          newShelf.setScale(0);
          cc.tween(newShelf).to(0.1, { scale: 1 }).call(() => {
            if (index1 == row - 1 && index2 == col - 1) {
              this.generateLayerItems();
            }
          }).start();
        }, index1 * 0.1 + index2 * 0.05);
      }
    }

    this.scheduleOnce(() => {
      ConfigData.Game.isCanClick = true;
    }, 1.2)

  }


  randomEmpty(n: number): number[] {
    return Array(n).fill(6);
    let result: number[];
    let sum: number;

    do {
      result = [];
      sum = 0;
      for (let i = 0; i < n; i++) {
        const randomValue = Math.floor(Math.random() * 3) + 5; // Random number between 5 and 7
        result.push(randomValue);
        sum += randomValue;
      }
    } while (sum % 3 !== 0);

    return result;
  }


  _items: Item[] = [];
  generateLayerItems() {
    const randomEmptySlots: number[] = this.randomEmpty(
      levelConfig.numberLayer
    );

    let totalSet: number =
      levelConfig.row * levelConfig.col * levelConfig.numberLayer;
    let numPerItem = Math.floor(totalSet / levelConfig.numberItem) * 3;
    let remainSet = (totalSet * 3 - numPerItem * levelConfig.numberItem) / 3;
    let ids: number[] = [];
    if (totalSet <= levelConfig.numberItem) {
      ids = new Array(totalSet).fill(3);
    } else {
      ids = new Array(levelConfig.numberItem);
      ids.fill(numPerItem);
    }
    for (let i = 0; i < remainSet; i++) {
      ids[Math.floor(Math.random() * ids.length)] += 3;
    }

    let firstMatchShelf = Math.floor(this.shelves.length / 2) + 1;

    for (let layer = levelConfig.numberLayer - 1; layer >= 0; layer--) {
      let lay = layer;
      this.scheduleOnce(() => {

        // let items: Item[] = [];
        this.shelves.forEach((shelf, index1) => {
          if (index1 == firstMatchShelf && lay == 0) {
            let rIndex = Math.floor(Math.random() * ids.length);
            this.firstMatchId = rIndex;
            for (let index = 0; index < 3; index++) {
              let item = shelf.addItem(rIndex, index, lay, this.itemContainer, this, this.Config);
              if (index < 2) {
                ids[rIndex]--;
              }
              else {
                this.hand.setEndPosition(item.node.position);
                shelf.slots[index].setEmpty();
                item.node.destroy();
              }
            }

          }
          else {
            for (let index = 0; index < 3; index++) {
              let rIndex = Math.floor(Math.random() * ids.length);
              if (
                ids[rIndex] <= 0 ||
                (index == 2 && shelf.testMatch(rIndex, lay))
              ) {
                let found = false;
                for (let k = rIndex + 1; k < ids.length; k++) {
                  if (ids[k] > 0 && !shelf.testMatch(k, lay)) {
                    rIndex = k;
                    found = true;
                    break;
                  }
                }
                if (!found) {
                  for (let m = rIndex - 1; m >= 0; m--) {
                    if (ids[m] > 0 && !shelf.testMatch(m, lay)) {
                      rIndex = m;
                      break;
                    }
                  }
                }
              }
              ids[rIndex]--;
              let item: Item = shelf.addItem(rIndex, index, lay, this.itemContainer, this, this.Config)
              this._items.push(item);
            }
          }

        });
        for (let k = 0; k < randomEmptySlots[lay] / 3; k++) {
          const rIndex = Math.floor(Math.random() * this._items.length);
          ids[this._items[rIndex].id] += 3;
          if (lay == 0) {
            this._items[rIndex].currentSlot.setEmpty();
          } else {
            for (let m = 0; m < this.shelves.length; m++) {
              this.shelves[m].removeItem(this._items[rIndex]);
            }
          }
          let remain = 2;
          for (let m = 0; m < this._items.length; m++) {
            if (this._items[m].id == this._items[rIndex].id && this._items[rIndex] !== this._items[m]) {
              const it = this._items[m];
              if (lay == 0) {
                it.currentSlot.setEmpty();
              } else {
                for (let p = 0; p < this.shelves.length; p++) {
                  this.shelves[p].removeItem(it);
                }
              }
              it.node.destroy();
              remain--;
              if (remain <= 0) break;
            }
          }

          this._items[rIndex].node.destroy();
        }
        if (lay == 0) {
          let added = false;
          this.shelves.forEach(shelf2 => {
            shelf2.slots.forEach((slot, index2) => {
              if (slot.isEmpty() && shelf2 != this.shelves[firstMatchShelf] && !added) {
                let item = shelf2.addItem(this.firstMatchId, index2, lay, this.itemContainer, this, this.Config);
                this.hand.setStartItem(item);
                added = true;
              }
            })
          });
        }
      }, 0.5 * (levelConfig.numberLayer - 1 - lay))
    }
  }

  @property(cc.Node)
  cart: cc.Node = null;
  @property(cc.Node)
  cart_2: cc.Node = null;
  _isCallCompleteGen: boolean = false;
  _boardTruePos: cc.Vec2 = new cc.Vec2(10, -400);
  isClickedStartCart: boolean = false;
  handleCompleteGenerate() {
    if (this._isCallCompleteGen) return;

    if (ConfigData.OutSource.isHasCart && !this.isClickedStartCart) {
      this.cart.active = true;
      this.putItemsToCart();
      this._isCallCompleteGen = true;
      return;
    }

    this.boardState = BoardState.Playing;
    this._isCallCompleteGen = true;
    this.shelfContainer.children.reverse().forEach((child, index) => {
      child.setSiblingIndex(index);
    });
    cc.tween(this.node).to(0.25, { x: this._boardTruePos.x, y: this._boardTruePos.y }, { easing: cc.easing.sineIn }).start()
    cc.tween(this.shelfContainer).to(0.25, { scale: 1 }, { easing: "quadOut" }).start();
    cc.tween(this.itemContainer).to(0.25, { scale: 1 }, { easing: "quadOut" }).call(() => {
      this.scheduleOnce(() => {
        this.hand.startMove();
        !ConfigData.Game.isPlayedBgSound && SoundController.Instance(SoundController).playDefaultSound(LoopedSoundTrack.bgSound);
        ConfigData.Game.isPlayedBgSound = true;
        ConfigData.Game.isPlaying = true;
        // cc.log("gen completed!");
      }, 0.5)
    }).start();
  }

  cartBounds = {
    xMin: 0,  // Giới hạn trái của cart
    xMax: 0,   // Giới hạn phải của cart
    yMin: 0,    // Độ cao thấp nhất (sàn của cart)
    yMax: 0,   // Độ cao tối đa (để tránh item bay quá cao)
  };
  _isPuttedToCart: boolean = false
  private putItemsToCart(): void {
    if (this._isPuttedToCart) return;
    this._isPuttedToCart = true;
  
    this._items.forEach((item, index) => {
      if (!item || !item.node) {
        console.warn(`item null`);
        return; // Bỏ qua item lỗi để tránh crash
      }
  
      // Tạo vị trí ngẫu nhiên trong cart
      // let randomX = Math.random() * (this.cartBounds.xMax - this.cartBounds.xMin) + this.cartBounds.xMin;
      // let randomY = Math.random() * (this.cartBounds.yMax - this.cartBounds.yMin) + this.cartBounds.yMin;
      let randomRotation = Math.random() * 360;
  
      // Gán parent và thiết lập thuộc tính
      item.node.parent = this.cart_2;
      item.node.setPosition(item.node.getPosition());
      item.node.setRotation(randomRotation);
      item.node.active = true;

      console.log(item.node);
      
    });

    
  }


  findFirstEmptySlot() {
    for (let i = 0; i < this.shelves.length; i++) {
      for (let j = 0; j < this.shelves[i].slots.length; j++) {
        if (this.shelves[i].slots[j].isEmpty()) {
          return this.shelves[i].slots[j];
        }
      }
    }
    return null;
  }


  hideItemsLayer(layer: number) {
    this.shelves.forEach((shelf) => {
      if (layer >= shelf.layers.length) return;
      if (shelf.layers[layer] === null || shelf.layers[layer] === undefined) return;
      for (let i = 0; i < shelf.layers[layer].length; i++) {
        if (shelf.layers[layer][i] === null || shelf.layers[layer][i] === undefined) continue;
        shelf.layers[layer][i].node.active = false;
      }
    });
  }
}
