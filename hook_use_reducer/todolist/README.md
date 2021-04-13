## todolist Demo

本项目是 todolist 任务待办事项练习

### 技术采用

react hooks + typescript + localstorage 本地缓存

#### 细节

1. 采用了组件化，很细节的拆分了
2. 使用了 useReducer 实现数据共享
   这里没有使用 dispatch 作为 props 传递，而是直接用函数传递，目的是为了组件的耦合性，组件里不做逻辑的判断及运算，全部由顶层组件完成
3. ts 规范变量
