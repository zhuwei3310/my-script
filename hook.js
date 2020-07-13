// ==UserScript==
// @name         hook
// @namespace    https://github.com/zhuwei3310/my-script
// @updateURL    https://github.com/zhuwei3310/my-script/hook.js
// @version      0.1
// @description  function hook
// @author       zhuwei3310
// @grant        none
// @match        *://*/*
// @note         2020-07-13 0.1 创建项目
// ==/UserScript==
(function() {
    'use strict';
    function hook(parent, attr) {
        console.log('hooked', parent, attr);
        var func = parent[attr]
        parent[attr] = function () {
            console.log('hooked', parent, attr);
            var ret = func.apply(parent, arguments);
            debugger;
            return ret;
        }
    };
})();
