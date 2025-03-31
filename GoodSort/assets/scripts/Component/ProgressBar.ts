import { ConfigData } from "../config/GameConfig";
import { DefaultSoundTrack, SoundController } from "../Controller/SoundController";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu('Component/ProgressBar')
export class ProgressBar extends cc.Component {

    static _instance: ProgressBar | null = null;
    static get Instance(): ProgressBar {
        if (this._instance == null) {
            this._instance = cc.director
                .getScene()
                ?.getComponentInChildren(ProgressBar) as ProgressBar;
        }
        return this._instance;
    }

    @property(cc.Sprite)
    ProgressSprite: cc.Sprite = null;

    @property([cc.Node])
    fxs: cc.Node[] = [];


    protected start(): void {

    }

    _fillRange: number = 0;
    _fillTimes: number = 0;
    public fillRangeProgress(): void {
        this._fillRange += 0.3333;
        cc.tween(this.ProgressSprite)
            .to(0.2, { fillRange: this._fillRange }, { easing: cc.easing.sineIn })
            .call(() => {
                console.log("fill progress");
                if (this._fillTimes < 2) {
                    const fx = this.fxs[this._fillTimes];
                    this.activeFX(fx);
                }
                this._fillTimes += 1;
                if (this._fillRange >= 0.9) {
                    ConfigData.Game.isWin = true;
                    SoundController.Instance(SoundController).playDefaultSound(DefaultSoundTrack.WinSound);
                }
            })
            .start();
    }


    private activeFX(fx: cc.Node): void {
        fx.active = true;
        const circle = fx.children[0];
        const star = fx.children[1];
        
        cc.tween(star)
        .to(0.25, { scale: 1.3, opacity: 255 }, { easing: cc.easing.elasticOut })
        .to(0.25, { scale: 0, opacity: 0 }, { easing: cc.easing.elasticIn })
        .start();
  
        cc.tween(circle)
        .to(0.25, { opacity: 255, scale: 1 }, { easing: cc.easing.elasticOut })
        .to(0.25, { opacity: 0, scale: 1.5 }, { easing: cc.easing.sineIn })
        .start();
    }

}
