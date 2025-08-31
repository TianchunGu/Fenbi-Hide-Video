// ==UserScript==
// @name         粉笔教师网页端 - 隐藏解析视频脚本
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  通过定时循环查找并彻底移除页面上所有的视频版块，避免误伤且支持动态加载。
// @author       TianchunGu
// @match        https://www.fenbi.com/*
// @match        https://spa.fenbi.com/*
// @grant        none
// @run-at        document-end
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  // 定时器将持续运行，以应对动态加载的新题目。
  setInterval(() => {
    // 使用 querySelectorAll 找到页面上 *所有* 匹配的视频版块。
    const videoSections = document.querySelectorAll('section[id^="section-video-"]');

    // 如果找到了一个或多个视频版块...
    if (videoSections.length > 0) {
      // ...就遍历找到的每一个版块，并将它们分别移除。
      videoSections.forEach(section => {
        section.remove();
      });
      console.log(`粉笔脚本(v6.0): 本次检测并移除了 ${videoSections.length} 个视频版块。`);
    }
  }, 500); // 每半秒钟检查一次，性能影响极小。

})();