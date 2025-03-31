const { ccclass, property } = cc._decorator;
const { director } = cc;

@ccclass
export default class CollisionManager extends cc.Component {
  protected start(): void {}
  protected onLoad(): void {
    director.getCollisionManager().enabled = true;
    // director.getCollisionManager().enabledDebugDraw = true;
    // director.getCollisionManager().enabledDrawBoundingBox = true;
  }
}
