# 粉笔教师网页端 - 隐藏解析视频脚本 🙈
![](https://img.shields.io/badge/License-MIT-yellow.svg)

这是一个为 [粉笔教师网页端](https://www.fenbi.com/) 设计的油猴（Tampermonkey）用户脚本。它的核心功能是**自动查找并彻底移除题目解析中的视频模块**，帮助用户专注于文字和图片解析，避免视频带来的干扰，提升学习和复习效率。

本脚本经过重构，以适应粉笔网最新的前端架构，确保了极高的稳定性和精确性。

## ✨ 功能特点
+ **自动移除**：无需任何手动操作，进入题目解析页面后自动将视频区域从页面上**彻底移除**，而非仅仅隐藏，有效避免了对“笔记”等其他功能的意外影响。
+ **精准定位**：通过`section[id^="section-video-"]`属性选择器，精确锁定包裹着视频及其标题的整个版块。这种方法不受网站代码微小变动的影响，定位极其精准，不会“误伤”文字解析、考点分析等任何其他元素。
+ **持续监测**：脚本采用`setInterval`轮询机制，能够持续扫描页面。无论是一开始就加载的题目，还是向下滑动时动态加载的新题目，视频模块一旦出现就会被立刻移除。
+ **支持多视频**：能够一次性移除页面上出现的所有视频解析模块，而非仅仅处理第一个。
+ **轻量高效**：代码简洁，对浏览器性能影响微乎其微。

## 🖥️ 安装与使用
### 1. 安装用户脚本管理器
您首先需要在浏览器中安装一个用户脚本管理器扩展。推荐使用 **Tampermonkey**。

+ [Chrome 安装地址](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
+ [Edge 安装地址](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
+ [Firefox 安装地址](https://addons.mozilla.org/firefox/addon/tampermonkey/)

### 2. 安装本脚本
点击下方的链接进行安装：

[➡️ 点击此处，一键安装脚本 ](https://github.com/TianchunGu/Fenbi-Hide-Video/raw/main/fenbi-hide-video.user.js)

Tampermonkey 会弹出一个确认页面，点击“安装”即可。

### 3. 如何使用
安装完成后，脚本会自动启用。您只需正常访问粉笔教师网页端进行刷题，在查看解析时，视频模块就会被自动移除。无需任何额外操作。

## 🖼️ 效果截图
**移除前:**  
![移除前](https://github.com/TianchunGu/Fenbi-Hide-Video/blob/main/img/BeforHide.png)

**移除后:**  
![移除后](https://github.com/TianchunGu/Fenbi-Hide-Video/blob/main/img/AfterHide.png)

## ❓ 问题反馈
如果您在使用过程中遇到任何问题，或有功能改进的建议，欢迎在本仓库的 [**Issues**](https://github.com/TianchunGu/Fenbi-Hide-Video/issues) 页面提出。

## 📄 开源许可
本脚本基于 [MIT License](LICENSE) 开源。