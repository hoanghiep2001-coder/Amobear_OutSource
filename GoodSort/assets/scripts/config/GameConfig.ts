export const levelConfig = {
  row: 5,
  col: 3,
  numberLayer: 1,
  numberItem: 15,
  initialEmptySlot: 6,
};
export const layoutConfig = {
  marginTop: 0,
  // offsetX: -17,
  // offsetY: -17,
  offsetX: -30,
  offsetY: -30,
  backItemOffsetY: 6,

};

export const animationConfig = {
  toSlotDuration: 0.1,
  matchDuration: 0.15,
  spawnDuration: 0.3
};
export const adConfig = {
  matchTimeBeforeShowEndCard: 8,
};


export class ConfigData {
  static Game = {
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
  static UI = {
    isActiveWarning: false,
  }
  static Idea = {
    isShelfExplosionWhenHitRocket: false,
    fakeRocketPoses: [],
    shelf: [],
    shelfExplosionCount: 0,
    shelfEatenCount: 0,
  }
  static OutSource = {
    isHasCart: true,
  }
  static Helper = {
    maxRocketCanSpawn: 4,
  }
}
// export const adVersion = {
//   // ver: "1.1",
//   ver: "1.2",
// };
