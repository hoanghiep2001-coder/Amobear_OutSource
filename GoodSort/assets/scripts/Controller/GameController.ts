// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { ConfigData } from "../config/GameConfig";

const {ccclass, property, menu} = cc._decorator;

@ccclass
@menu("Controller/GameController")
export class GameController extends cc.Component {

    @property(cc.Prefab)
    Playable_Level_1: cc.Prefab = null;

    @property(cc.Prefab)
    Playable_Level_2: cc.Prefab = null;

    currentLevel: cc.Node = null;


    protected start(): void {
        this.createNewLevel();
    }


    public createNewLevel(): void {
        if(this.currentLevel) {
            this.currentLevel.active = false;
            // this.node.removeChild(this.currentLevel);
            this.currentLevel.destroy();
        }

        let gameLevel: cc.Node = null;
        if(!ConfigData.Game.isMovedToNextLevel) {
            gameLevel = cc.instantiate(this.Playable_Level_1);
        } else {
            gameLevel = cc.instantiate(this.Playable_Level_2);
        }

        this.currentLevel = gameLevel;
        gameLevel.parent = this.node;
        gameLevel.position = new cc.Vec3(0,0,0);
    }
}
