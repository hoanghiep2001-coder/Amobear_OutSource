// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Config from "../config/Config";
import { ConfigData } from "../config/GameConfig";

const {ccclass, property, menu} = cc._decorator;

@ccclass
@menu("Component/TimeCount")
export class TimeCount extends cc.Component {

    @property(cc.Integer)
    timeCount: number = 0;

    @property(cc.Label)
    countdownLabel: cc.Label = null;

    // @property(cc.Node)
    // warningLayout: cc.Node = null;

    timeLeft: number = 0;
    progress: number = 1; 


    protected start(): void {
        this.progress = 1.0;

        this.timeLeft = this.timeCount;

        // this.updateTimeFillProgress();
    }


    _isActiveTimeCount: boolean = false;
    public activeTime(): void {
        this._isActiveTimeCount = true;
        this.schedule(this.updateTimer, 1);
    }


    private updateTimer(): void {
        if (this.timeLeft > 0) {
            this.timeLeft -= 1;

            ConfigData.Game.isLoose && (() => this.node.active = false);

            if(this.timeLeft <= 9) {
                // red color
                this.countdownLabel.node.color = cc.color(255, 0, 0, 255);
                this.countdownLabel.string = `00:0${this.timeLeft}`;
                ConfigData.UI.isActiveWarning = true;
                // this.warningLayout.active = true;
            } else this.countdownLabel.string = `00:${this.timeLeft}`;

        } else {
            this.unschedule(this.updateTimer);
            this.countdownLabel.string = '00:00';
            ConfigData.Game.isLoose = true;
        }
    }


    protected onDisable(): void {
        this.node.active = false;
    }


    protected onDestroy(): void {
        this.node.active = false;
    }


    protected update(dt: number): void {
        if(ConfigData.Game.isPlaying && !this._isActiveTimeCount) this.activeTime()
    }
}
