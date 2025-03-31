"use strict";
cc._RF.push(module, '7904cgh/K1K27W1cHf6o8Qe', 'GameConfig');
// scripts/config/GameConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigData = exports.adConfig = exports.animationConfig = exports.layoutConfig = exports.levelConfig = void 0;
exports.levelConfig = {
    row: 5,
    col: 3,
    numberLayer: 1,
    numberItem: 15,
    initialEmptySlot: 6,
};
exports.layoutConfig = {
    marginTop: 0,
    // offsetX: -17,
    // offsetY: -17,
    offsetX: -30,
    offsetY: -30,
    backItemOffsetY: 6,
};
exports.animationConfig = {
    toSlotDuration: 0.1,
    matchDuration: 0.15,
    spawnDuration: 0.3
};
exports.adConfig = {
    matchTimeBeforeShowEndCard: 8,
};
var ConfigData = /** @class */ (function () {
    function ConfigData() {
    }
    ConfigData.Game = {
        isEnableSound: false,
        isShowEndCard: false,
        isCanClick: false,
        isPlaying: false,
        isPlayedBgSound: false,
        isLoose: false,
        isWin: false,
        isMovedToNextLevel: false,
        isHasTimeCount: false,
        isHasCTA: true,
    };
    ConfigData.UI = {
        isActiveWarning: false,
    };
    ConfigData.Idea = {
        isShelfExplosionWhenHitRocket: false,
        fakeRocketPoses: [],
        shelf: [],
        shelfExplosionCount: 0,
        shelfEatenCount: 0,
    };
    ConfigData.OutSource = {
        isHasCart: true,
    };
    ConfigData.Helper = {
        maxRocketCanSpawn: 4,
    };
    return ConfigData;
}());
exports.ConfigData = ConfigData;
// export const adVersion = {
//   // ver: "1.1",
//   ver: "1.2",
// };

cc._RF.pop();