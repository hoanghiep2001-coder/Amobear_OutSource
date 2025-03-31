// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export class Responsive extends cc.Component {
    @property(cc.Node)
    overall: cc.Node = null;
    @property(cc.Node)
    warning: cc.Node = null;
    // @property(GamePlay)
    // GamePlay: GamePlay = null;
    // @property)
    //: = null;

    // state
    device: string = "";
    isRotate: boolean = false;

    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";

    protected onLoad(): void {

    }

    protected start(): void {

    }

    private handleRotate(): void {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.isRotate = true;
            this.setHorizontal();
        } else {
            this.isRotate = false;
            this.setVertical();
        }
    }

    private setHorizontal(): void {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        } else {
            this.setHorizontalForTablet();
        }
    }

    private setHorizontalForIpX(): void {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_IPX;
        this.overall.setScale(1,1);
        
        if(this._timeCount) {
            this._timeCount.setPosition(0, 800);
        }

        // IPX
        if(cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 2) {
            this.warning.setScale(1.2 * 3.375, 0.36 * 4);
        }

        // IP 6 / 7 / 8
         else {
            this.warning.setScale(.97 * 3.375, 0.36 * 4);
         }

    }

    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;   

        console.log("hor_tab");

        if(this._timeCount) {
            this._timeCount.setPosition(0, 800);
        }
        this.overall.setScale(1,1);
        this.warning.setScale(0.71 * 3.375, 0.36 * 4);

    }

    private setVertical(): void {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        } else {
            this.setMobile();
        }
    }

    private setIphoneX(): void {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }

        this.device = this.VERTICAL_IPX;

        if(this._timeCount) {
            this._timeCount.setPosition(0, 850);
        }

        this.overall.setScale(0.9,0.9);
        this.warning.setScale(0.28 * 3.375, 0.4  * 4);
    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        
        this.overall.setScale(1,1);
        if(this._timeCount) {
            this._timeCount.setPosition(0, 800);
        }

        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 
            && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
                // mobile mode applovin
                this.warning.setScale(0.296 * 3.375, 0.42 * 4);
                return;
            }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.warning.setScale(0.296 * 3.375, 0.43 * 4);

        } else {
            // Ipad
            console.log("ver_tab");
            this.warning.setScale(0.4 * 3.375, 0.36 * 4);
        }
    }


    _timeCount: cc.Node = null;
    public setResObject(timeCount: cc.Node): void {
        this._timeCount = timeCount;
        this.device = "";
        // console.log("check");
        
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
