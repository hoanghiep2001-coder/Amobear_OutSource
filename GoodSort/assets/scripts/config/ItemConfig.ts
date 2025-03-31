const { ccclass, property } = cc._decorator;

@ccclass
export default class ItemConfig extends cc.Component {
  @property([cc.Prefab])
  itemPrefab: cc.Prefab;

  @property([cc.SpriteFrame])
  itemSprites: cc.SpriteFrame[] = [];

  getSprite(id: number): cc.SpriteFrame {
    return this.itemSprites[id];
  }
}
