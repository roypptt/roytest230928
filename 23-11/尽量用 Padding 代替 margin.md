相邻的 margin 再垂直方向上存在重叠问题，如果能用 padding 实现，那重叠通常会是未预期的副作用；

如果存在 box-sizing: border-box; 那么 padding 通常无需设计人员额外计算对整体尺寸的影响，而 margin 需要；

padding 属于盒子内部，配合 js 事件、或者 a 标签等情况下，padding 能让可点击区域大一些，而 margin 则不然；

padding 能适应各种情况的背景处理, 使用padding， 添加上背景，就能看到实际的视觉效果；而对 margin 来说，背景是不会扩展到这个区域；

一些历史遗留原因, margin 会导致一些 bug, 减少 margin 使用可以避免一些 bug
- doubled float-margin
- margin 负值隐藏
- 3px bug