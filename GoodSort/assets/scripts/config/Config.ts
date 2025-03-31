import ItemConfig from "./ItemConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Config extends cc.Component {
  @property([ItemConfig])
  itemConfig: ItemConfig;

  static _instance: Config | null = null;
  static get Instance(): Config {
    if (this._instance == null) {
      this._instance = cc.director
        .getScene()
        ?.getComponentInChildren(Config) as Config;
    }
    return this._instance;
  }
}
