
import { ConfigData } from '../config/GameConfig';
import Singleton from '../utils/Singleton';
const { ccclass, property } = cc._decorator;

/**
 * Predefined variables
 * Name = SoundController
 * DateTime = Thu Feb 06 2025 23:04:17 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = SoundController.ts
 * FileBasenameNoExtension = SoundController
 * URL = db://assets/scripts/Controller/SoundController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

export enum DefaultSoundTrack {
    LoseSound = "LoseSound",
    WinSound = "WinSound",
}

export enum LoopedSoundTrack {
    bgSound = "bgSound",
}

export enum PrefabSoundTrack {
    tilePickedSound = "tilePickedSound",
    onShelfSound = "onShelfSound",
    tripleMatchSortSound = "tripleMatchSortSound",
    clearSound = "clearSound",
}

@ccclass('SoundController')
export class SoundController extends Singleton<SoundController> {
    public sounds: cc.AudioSource[] = [];
    private soundCooldown: number = 0.5;
    private lastEatSoundTime: number = 0;
    private eatSoundCount: number = 0;
    private scheduledSounds: string[] = [];


    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    LoseSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    WinSound: cc.AudioSource = null;

    @property(cc.Node)
    InstantiateSoundContainer: cc.Node = null;

    @property(cc.Prefab)
    tilePickedSound: cc.Prefab = null;
    @property(cc.Prefab)
    onShelfSound: cc.Prefab = null;
    @property(cc.Prefab)
    tripleMatchSortSound: cc.Prefab = null;
    @property(cc.Prefab)
    clearSound: cc.Prefab = null;


    constructor() {
        super();
        SoundController._instance = this;
    }


    protected onLoad(): void {

    }


    protected start(): void {

    }


    public playDefaultSound(soundName: string): void {
        if (ConfigData.Game.isEnableSound) {
            switch (soundName) {
                case DefaultSoundTrack.LoseSound:
                    this.LoseSound.play();
                    break;
                case DefaultSoundTrack.WinSound:
                    this.WinSound.play();
                    break;
                case LoopedSoundTrack.bgSound:
                    this.bgSound.play();
                    break;
                default:
                    break;
            }
        }
    }


    public playPrefabSound(soundName: PrefabSoundTrack): void {
        if (ConfigData.Game.isEnableSound) {
            this._playSound(soundName);
            // if (soundName === PrefabSoundTrack.onShelfSound) {
            //     this.playEatSound();
            // } 

            // else {
            //     this._playSound(soundName);
            // }
        }
    }


    // private playEatSound(): void {
    //     const currentTime = performance.now() / 1000;

    //     if (currentTime - this.lastEatSoundTime >= this.soundCooldown) {
    //         this.eatSoundCount = 0;
    //         this.scheduledSounds = [];
    //         this.lastEatSoundTime = currentTime;
    //         this._playSound(PrefabSoundTrack.EatSound);
    //     } else if (this.eatSoundCount < 2) {
    //         this.eatSoundCount++;
    //         this.scheduledSounds.push(PrefabSoundTrack.EatSound);
    //         this.scheduleEatSounds();
    //     }
    // }


    // private scheduleEatSounds(): void {
    //     if (this.scheduledSounds.length > 0) {
    //         let interval = this.soundCooldown / this.eatSoundCount;
    //         for (let i = 0; i < this.eatSoundCount; i++) {
    //             this.scheduleOnce(() => {
    //                 this._playSound(PrefabSoundTrack.EatSound);
    //             }, interval * i);
    //         }
    //     }
    // }


    private _playSound(soundName: PrefabSoundTrack): void {
        let sound: cc.Node = null;
        switch (soundName) {
            case PrefabSoundTrack.onShelfSound:
                sound = cc.instantiate(this.onShelfSound);
                break;
            case PrefabSoundTrack.tilePickedSound:
                sound = cc.instantiate(this.tilePickedSound);
                break;
            case PrefabSoundTrack.tripleMatchSortSound:
                sound = cc.instantiate(this.tripleMatchSortSound);
                break;
            case PrefabSoundTrack.clearSound:
                sound = cc.instantiate(this.clearSound);
                break;
            default:
                break;
        }

        sound.parent = this.InstantiateSoundContainer;

        const _SoundComp = sound.getComponent(cc.AudioSource);
        const audioId = cc.audioEngine.play(_SoundComp.clip, false, _SoundComp.volume);
        cc.audioEngine.setFinishCallback(audioId, () => {
            this.removeAudio(_SoundComp);
        })
        this.sounds.push(_SoundComp);
    }


    private removeAudio(_SoundComp: cc.AudioSource): void {
        _SoundComp.destroy();
    }


    public muteSound(soundName: string, isMuted: boolean): void {
        let result = this.sounds.find(sound => sound.node.name === soundName);
        if (isMuted) result.volume = 0;
        else result.volume = 1;
    }


    public stopSound(soundName: string): void {
        switch (soundName) {
            case DefaultSoundTrack.LoseSound:
                this.LoseSound.stop();
                break;
            case DefaultSoundTrack.WinSound:
                this.WinSound.stop();
                break;
            case LoopedSoundTrack.bgSound:
                this.bgSound.stop();
                break;
            default:
                break;
        }
    }


    public stopAllSound(): void {
        this.bgSound &&  this.bgSound.stop();
        this.LoseSound && this.LoseSound.stop();
        this.WinSound && this.WinSound.stop();
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
