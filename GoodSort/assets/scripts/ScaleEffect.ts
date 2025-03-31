const { ccclass, property } = cc._decorator;

@ccclass
export class ScaleEffect extends cc.Component {
  @property
  public scaleSize = 1.1;

  start() {
    this.StartEffect();
  }

  StartEffect() {
    // let startScale = this.node.scale;
    let upScale = 1.35;
    let downScale = 1.3;
    let time = 0.5;

    // console.log(upScale);
    // console.log(downScale);
    

    cc.tween(this.node)
      .repeatForever(
        cc
          .tween()
          .to(time, { scale: upScale }, { easing: "sineOut" })
          .then(
            cc
              .tween(this.node)
              .to(time, { scale: downScale }, { easing: "sineOut" })
          )
      )
      .start();
  }
}
