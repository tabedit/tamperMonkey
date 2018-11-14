// ==UserScript==
// @name         google translate utils
// @name:zh-CN   google翻译使用工具
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  auto remove line break for google translate(replaced with space)
// @description:zh-CN 自动移除google翻译原文中的换行符（替换为空格）
// @author       wjwxxn
// @include     http*://translate.google.*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // loop function
    function checkloop(){
        var pattern = /https:\/\/translate\.google\..*\//
        var headUrl=pattern.exec(location.href)[0]
        var tailUrl=location.href.slice(headUrl.length);
        var tailUrlDecode = decodeURIComponent(tailUrl);
        if ( tailUrlDecode.lastIndexOf('\n') >= 0 ){
            tailUrlDecode = tailUrlDecode.replace(/[\r\n]/g,' ');
            tailUrl = encodeURIComponent(tailUrlDecode);
            location.href = headUrl + tailUrl;
        }
    }

    setInterval(checkloop, 100);
})();
