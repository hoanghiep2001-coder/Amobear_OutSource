// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Board from "../Board";
import { Responsive } from "../Component/Responsive";
import { TimeCount } from "../Component/TimeCount";
import { ConfigData } from "../config/GameConfig";
import { GameController } from "./GameController";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu("Controller/UIController")
export class UIController extends cc.Component {

    @property(Responsive)
    Responsive: Responsive = null;
    @property(cc.Node)
    EndCard: cc.Node = null;


    @property(cc.Prefab)
    TimeCountPrefab: cc.Prefab = null;
    _tc: TimeCount = null;

    @property(cc.Node)
    warning: cc.Node = null;


    private init(): void {
        ConfigData.Helper.maxRocketCanSpawn = 4;
        ConfigData.Idea.fakeRocketPoses = [];
        ConfigData.Idea.shelf = [];
        ConfigData.Idea.shelfEatenCount = 0;
        ConfigData.Idea.shelfExplosionCount = 0;
    }


    protected start(): void {
        this.init();
        ConfigData.Game.isHasTimeCount && this.createTimeCount();
    }


    private createTimeCount(): void {
        const _tc = cc.instantiate(this.TimeCountPrefab);
        _tc.parent = this.node;
        _tc.setPosition(0, 0, 0);
        this._tc = _tc.getComponent(TimeCount);
        this.Responsive.setResObject(_tc);
    }


    _isActivedWarning: boolean = false;
    private activeWarning(): void {
        if (this._isActivedWarning) return;
        this._isActivedWarning = true;
        this.warning.active = true;
    }


    private moveToNextScene(): void {
        this.init();
        // Board.Instance.restartLevel();
        const _Scene = this.getRootNode(this.node);
        this.scheduleOnce(() => {
            _Scene.getComponentInChildren(GameController).createNewLevel();
            ConfigData.Game.isMovedToNextLevel = true;
        }, 1)
    }


    getRootNode(node: cc.Node): cc.Node {
        while (node.parent) {
            node = node.parent;
        }
        return node;
    }


    private showEndCard(): void {
        ConfigData.Game.isShowEndCard = true;
        this.EndCard.active = true;

    }


    protected update(dt: number): void {
        if (ConfigData.Game.isShowEndCard) return;

        if (ConfigData.Game.isWin && !this.EndCard.active) {
            this.showEndCard();
        }

        if (ConfigData.Game.isHasTimeCount && ConfigData.UI.isActiveWarning) {
            this.activeWarning();
        }

        if (ConfigData.Game.isMovedToNextLevel && ConfigData.Idea.shelfEatenCount >= 24 && !this.EndCard.active) {
            this.showEndCard();
        }

        if (!ConfigData.Game.isMovedToNextLevel && ConfigData.Idea.shelfEatenCount >= 24) {
            this.moveToNextScene();
        }

        if (ConfigData.Game.isLoose && !this.EndCard.active) {
            if (ConfigData.Game.isHasTimeCount) this._tc.node.active = false;
            if (ConfigData.UI.isActiveWarning) this.warning.active = false;
            this.showEndCard();
        }
    }

}
