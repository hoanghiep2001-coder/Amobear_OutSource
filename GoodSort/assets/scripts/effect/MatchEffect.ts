// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class MatchEffect extends cc.Component {
  @property(cc.Node)
  star: cc.Node;
  @property(cc.Node)
  glow: cc.Node;
  @property(cc.Node)
  star_2: cc.Node;
  @property(cc.Node)
  circle: cc.Node;

  start() {
    cc.tween(this.star)
      .to(0.5, {
        opacity: 0,
        position: new cc.Vec3(0, 20, 0),
        scale: 1.2,
      })
      .start();

    cc.tween(this.star_2)
      .to(0.5, { scale: 1.3 }, { easing: cc.easing.elasticOut })
      .to(0.5, { scale: 0, opacity: 0 }, { easing: cc.easing.sineIn })
      .start();

      cc.tween(this.circle)
      .to(0.25, { opacity: 255, scale: 1 }, { easing: cc.easing.elasticOut })
      .to(0.25, { opacity: 0, scale: 1.5 }, { easing: cc.easing.sineIn })
      .start();
      
    cc.tween(this.glow)
      .to(
        1,
        {
          rotation: -360,
          opacity: 0,
        },
        { easing: "quadOut" }
      )
      // .to(1.5, {
      //   opacity: 0,
      // })
      // .union()
      .start();
  }
}
