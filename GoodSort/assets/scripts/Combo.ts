const { ccclass, property } = cc._decorator;

@ccclass
export default class Combo extends cc.Component {
  @property(cc.Node)
  comboBar: cc.Node;
  @property(cc.Node)
  comboEffect: cc.Node;

  @property(cc.ProgressBar)
  bar: cc.ProgressBar;

  @property(cc.Label)
  comboLabel: cc.Label;

  private combo: number = -2;
  // Cooldown duration in seconds
  private cooldownTime: number = 5;
  // Variable to track remaining cooldown
  private remainingCooldown: number = 0;

  updateCombo() {
    this.combo++;
    this.scheduleOnce(() => {
      this.comboEffect.active = this.combo > 0;
    }, 0.6);
    // this.comboBar.active = this.combo > 0;
    // this.remainingCooldown = this.cooldownTime;
    // this.comboLabel.string = "COMBO X" + this.combo;
    // Optional: You might want to disable combo actions here
  }
  stopCombo() {
    this.comboBar.active = false;
    this.combo = 0;
    this.remainingCooldown = 0;
  }

  update(dt) {
    if (this.remainingCooldown > 0) {
      // Decrease the remaining cooldown time
      this.remainingCooldown -= dt;
      if (this.remainingCooldown <= 0) {
        // Optional: Re-enable combo actions here
        this.stopCombo();
        return;
      }
      // Update the progress bar
      this.bar.progress = this.remainingCooldown / this.cooldownTime;
    }
  }
}
