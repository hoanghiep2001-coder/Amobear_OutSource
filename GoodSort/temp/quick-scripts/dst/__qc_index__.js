
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/AdsManager');
require('./assets/scripts/Board');
require('./assets/scripts/CollisionManager');
require('./assets/scripts/Combo');
require('./assets/scripts/ComboEffect');
require('./assets/scripts/Component/Cart');
require('./assets/scripts/Component/ProgressBar');
require('./assets/scripts/Component/Responsive');
require('./assets/scripts/Component/Rocket');
require('./assets/scripts/Component/TimeCount');
require('./assets/scripts/Controller/GameController');
require('./assets/scripts/Controller/SoundController');
require('./assets/scripts/Controller/UIController');
require('./assets/scripts/Hand');
require('./assets/scripts/ScaleEffect');
require('./assets/scripts/config/Config');
require('./assets/scripts/config/GameConfig');
require('./assets/scripts/config/ItemConfig');
require('./assets/scripts/effect/MatchEffect');
require('./assets/scripts/gameplay/Item');
require('./assets/scripts/gameplay/Shelf');
require('./assets/scripts/gameplay/Slot');
require('./assets/scripts/utils/Singleton');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();