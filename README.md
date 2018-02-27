# Vuejs - 練習筆記 - 踩地雷小遊戲
[遊戲連結](https://nono1526.github.io/VueMinesweeper/)
## 目標
練習使用 vuejs 的雙向資料綁定控制踩地雷這個小遊戲,  
也增加使用 vuejs 的熟悉度,  

## 主要使用
* vue 基本功能使用
包含 v-bind, v-click, v-for, v-if 等一些基本提供的功能來做使用
* method, computed 的使用
* component 
學習如何建立 vue component 以及將 parent 的資料傳道 children 去
* event bus 
利用 event bus 讓組件間能夠流暢的相互溝通
* vue transition 
使用 vue transition 去做一個 modal 的效果

## 主要架構
`#app['timer','modal']`
* app
踩地雷遊戲的主體

主要的 mv 下有兩個 componet  
分別是：  

* timer 
主要提供計時器的功能
* modal
主要是 modal 彈出視窗的使用

## 紀錄
> [參考 - vue guide](https://vuejs.org/v2/guide/)
> [event bus](https://code.luasoftware.com/tutorials/vuejs/parent-call-child-component-method/)