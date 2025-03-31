import Board from "../Board";
import { ConfigData } from "../config/GameConfig";
// import { PrefabSoundTrack, SoundController } from "../Controller/SoundController";
import Shelf from "../gameplay/Shelf";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu('Helper/Rocket')
export class Rocket extends cc.Component {
    @property(cc.Node)
    bubble: cc.Node = null;

    @property(cc.ParticleSystem)
    light_vfx: cc.ParticleSystem = null;

    _rocket: cc.Node = null;
    _Board: Board = null;

    protected start(): void {
        this._rocket = this.node.getChildByName("Rocket");
        this.activeIdleAnim();
    }

    _tween: cc.Tween = null;
    private activeIdleAnim(): void {
        const floatRange = 22; // Biên độ dao động
        const duration = cc.math.randomRange(1.2, 2); // Thời gian chuyển động ngẫu nhiên

        this._tween = cc.tween(this._rocket)
            .by(duration, { y: floatRange }, { easing: cc.easing.sineInOut })
            .by(duration, { y: -floatRange }, { easing: cc.easing.sineInOut })
            .call(() => this.activeIdleAnim()) // Lặp lại vô hạn
            .start();
    }


    public activeRocket(): void {
        this.node.scale = 0.3;
        this.disableBubble();
        this.activeVfx();
        if (this._tween) this._tween.stop();
        ConfigData.Game.isCanClick = false;
    }


    lerpAngle(from: number, to: number, t: number): number {
        let delta = ((to - from + 540) % 360) - 180; // Tính độ chênh lệch góc theo hướng ngắn nhất
        return from + delta * t;
    }


    public moveToAnother(pos: cc.Vec2, item: Shelf, isRocketWithMatch: boolean): void {
        let startPos = this.node.getPosition();

        // Tính toán góc xoay chính xác
        let direction = pos.sub(startPos);
        let targetAngle = Math.atan2(direction.y, direction.x) * (180 / Math.PI) + 180;
        let currentAngle = this.node.angle;
        let finalAngle = this.lerpAngle(currentAngle, targetAngle, 1); // Sử dụng hàm lerpAngle

        // Tăng thời gian di chuyển
        let distance = direction.mag();
        let minDist = 100, maxDist = 500;
        let minTime = 0.5, maxTime = 1.5;
        let t = Math.min(1, Math.max(0, (distance - minDist) / (maxDist - minDist)));
        let moveTime = minTime + t * (maxTime - minTime);

        // === 💫 Tạo điểm control để rocket bay vòng cung ===
        let normal = new cc.Vec2(-direction.y, direction.x).normalize(); // Vector vuông góc với hướng bay
        let arcHeight = distance * 0.68; // Độ cong (30% khoảng cách)
        let controlPoint = startPos.add(direction.mul(0.5)).add(normal.mul(arcHeight)); // Trung điểm + lệch vuông góc

        item.isActive = false;

        cc.tween(this.node)
            // .delay(0.15)
            .parallel(
                cc.tween().bezierTo(moveTime, startPos, controlPoint, pos), // Di chuyển theo Bezier
                cc.tween().to(moveTime, { angle: finalAngle }) // Xoay theo hướng chính xác
            )
            .call(() => {
                // SoundController.Instance(SoundController).playPrefabSound(PrefabSoundTrack.clearSound);
                const effectPos = this.node.parent.convertToNodeSpaceAR(
                    this.node.parent.convertToWorldSpaceAR(this.node.getPosition())
                );
                this._Board.createExplosionFx(effectPos);
                this.node.active = false;
                item.node.active = false;
                item.itemInShelfs.forEach(item => { if (item.isValid) item.node.active = false; });

                ConfigData.Idea.shelfEatenCount += 1;

                this._Board.updateCombo();
                // this._Board.updateMatchCount();

                if (isRocketWithMatch) {
                    ConfigData.Idea.shelfExplosionCount += 1;
                    const startPos = this._Board.node.convertToNodeSpaceAR(
                        this.node.parent.convertToWorldSpaceAR(this.node.position)
                    );
                    if (this._Board.shelves.filter(shelf => shelf.isActive).length > 0) {
                        this._Board.create5Rockets(startPos, 0, 5);
                    }
                }
            })
            .start();
    }




    private disableBubble(): void {
        this.bubble.active = false;
    }


    private activeVfx(): void {
        this.light_vfx.node.active = true;
    }


}
