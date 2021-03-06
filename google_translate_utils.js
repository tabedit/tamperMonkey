// ==UserScript==
// @name         google translate utils
// @name:zh-CN   google翻译实用工具
// @namespace    https://github.com/tabedit/tamperMonkey
// @version      0.2
// @description  auto remove line break for google translate(replaced with space)
// @description:zh-CN 自动移除google翻译原文中的换行符（替换为空格）
// @author       tabedit
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

    var answer=confirm("是否启用原文自动替换换行符");
    if (answer){
        setInterval(checkloop, 100);
    }
})();
