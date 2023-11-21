# Zustand快速上手

## 简介

[zustand](https://awesomedevin.github.io/zustand-vue/docs/introduce/start/zustand)为新一代的状态管理方案，目前已经有**34k Star**

- [x] `immutable state model`，体积只有**2kb**左右:sparkles:

- [x] 基本没有API，学习曲线非常低，大大减少开发者认知负担:sparkles:
- [x] 脱离于React组件自身状态，可作为第三方状态存储:sparkles:
- [x] 提供中间件，提高了拓展性，你可以使用`Devtools`调试或者让数据持久化:sparkles:
- [x] 不需要使用 `context provider` 包裹你的应用程序:sparkles:

## 快速开始

### Step 1: 拉取zustand-demo项目

在这之前，我已经为读者准备了示例便于快速学习:yum:，该`Demo`项目为官方`CRA`脚手架创建的，`node-v:16.16.0`，`TS`模板：

```bash
#zustand-demo
git clone https://github.com/dongmucat/zustand-demo.git
```

#### 启动

1. `npm i`
2. `npm run start`
3. 访问`http://localhost:3000/`即可，启动项目后您会看到如下页面🥰：

![](http://songnian.gitee.io/imgs/imgs/zustand-demo.jpg)

### Step 2: Store初始化

在`store/useCountStore.ts`创建的 `store `是一个 `hook`，你可以放任何东西到里面：基础变量，对象、函数，状态必须不可改变地更新，`set` 函数合并状态以实现状态更新。**为了降低心智，统一取值的时候命名为state**👊

```typescript
import { create } from "zustand";
// ...

const useCountStore = create<IUseCountStore>()((set) => ({
	count: 0,
	increase: () => set((state) => ({ count: state.count + 1 })),
	decrease: () => set((state) => ({ count: state.count - 1 })),
	reset: () => set({ count: 0 }),
    // ...
}));
```

### Step 3: 消费Store

可以在任何地方使用钩子，不需要再写 `provider`👏。

#### App

```typescript
import useCountStore from "./store/useCountStore";
import Foo from "./components/foo";
import "./App.css";

function App() {
	const { count, increase, decrease, reset, fetch } = useCountStore();

	return (
		<div className="app">
			<div className="app-content">
				<h2>app count: {count}</h2>
				<button onClick={increase}>increase</button>
				<button onClick={decrease}>decrease</button>
				<button onClick={reset}>reset</button>
				<button onClick={fetch}>fetch</button>
			</div>
			<Foo />
		</div>
	);
}

export default App;
```

#### Foo

也可以基于 `selector` 获取您的目标状态，组件将在状态更改时重新渲染😋，如果仅仅需要获取`store`中的某一变量、函数等等，都可以这么做😄

```typescript
import useCountStore from "../../store/useCountStore";
import "./index.css";
const Foo = () => {
    // selector
	const count = useCountStore((state)=>state.count);
    
	return (
		<div className="foo-wrap">
			<div className="foo-content">
				<h2>foo count: {count}</h2>
			</div>
		</div>
	);
};

export default Foo;
```

## 一些进阶

### selector

#### 直接解构获取

可以这样做，但是这会导致组件在每次状态更改时都进行更新

```typescript
const { count } = useCountStore();
```

#### 基于selector进行获取

默认情况下，它检测严格相等的变化（`old === new` 即 `新值全等于旧值`）

```typescript
const count = useCountStore((state)=> state.count);
```

如果你想获取多个变量，假如多了一个`honey`变量，可以这么做👇：

```typescript
import { shallow } from 'zustand/shallow';

// 选择 Object, 当`state.nuts`或`state.honey`发生变化后，组件重新渲染
const { count, honey } = useCountStore(
  (state) => ({ count: state.count, honey: state.honey }),
  shallow
)

// 选择 Array, 当`state.nuts`或`state.honey`发现变化后，组件重新渲染
const [count, honey] = useCountStore(
  (state) => [state.count, state.honey],
  shallow
)
```

**selector都为纯函数，也就是说我们可以自己任意编写selector更便于单元测试**👏

### set

#### 合并状态

默认情况下，`set`函数将与`store`中的现有状态和函数浅合并进行更新

```typescript
const useCountStore = create((set) => ({
  count: 0,
  honey: 1,
  setHoney: () => set(() => ({ honey:888 })),  // 不会抹除掉 count，将得到 {count, honey, setHoney }
}))
```

#### 覆盖状态

`set` 函数有第二个参数，默认为 `false`。如果为 `true`，它将取代(覆盖)状态模型，而不是合并。小心不要抹掉你所依赖的部分😂，比如 `actions`。

```typescript
const useCountStore = create((set) => ({
  count: 0,
  honey: 1,
  deleteEverything: () => set(() => ({}), true)
   // 将清除掉完整的 store !!!，包括 state、actions !!!
}))
```

### get

`get`函数主要作用是能让你在异步操作中能获取到最新的`state`。:yum:当然你也可以通过`set`函数：`set((state)=>state.count)`获取最新的`state`更方便

```typescript
const useCountStore = create((set, get) => ({
  count: 0,
  fetch: async (pond) => {
    const response = await fetchCount(pond)
    set(()=>{
      const { count } = get();
      console.log(count);
      return response.data+count;
    })
  },
}))
```

### 中间件

> zustand提供了一些的中间件，当然你可以自己使用其他的中间价达到目的

#### Cache middle

你可以基于你能想到的任何方式(localStorage/cookie/数据库等)将 `store` 中的 `state` 进行持久化存储:yum:，例如用`sessionStorage`储存该`store`。如果你想使用`localStorage`，则把`storage`属性删除就行，因为默认就是存储在`localStorage`:yum:

```typescript
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCountStore = create(
	persist<IUseCountStore>(
		(set) => ({
			count: 0,
		{
			name: "useCountStore-storage", // unique name
			storage: createJSONStorage(() => sessionStorage), // (optional) by default, 			'localStorage' is used
		}
	)
);
```

#### Devtools middle

利用开发者工具 `调试/追踪` Store，浏览器方面需要下载**Redux DevTools**

- [Edge Redux DevTools link](https://microsoftedge.microsoft.com/addons/detail/redux-devtools/nnkgneoiohoecpdiaponcejilbhhikei?hl=zh-CN)
- [Chorme Redux DevTools link](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en-US&utm_source=ext_sidebar)

```typescript
import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

const useFishStore = create(
  devtools(persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
  ))
)
```

#### Immer middle

主要用于更新嵌套状态，可以在Zustand使用，主要是为了保住头发👨‍🦳

```bash
# 记得先安装immer
npm install immer
```

示例代码：

```typescript
import { create } from "zustand";
import { produce } from "immer";

type State = {
	todos: string[];
	addTodo: (todo: string) => void;
	removeTodo: (index: number) => void;
};

// 创建store
const useTodoStore = create<State>((set) => ({
	todos: [],
	addTodo: (todo) => 
        set(produce((state) => state.todos.push(todo))),
	removeTodo: (index) =>
		set(produce((state) => state.todos.splice(index, 1))),
}));

export default useTodoStore;
```

## 结语

以上可以足够应付大多数应用了，更多详情请看[官网](https://awesomedevin.github.io/zustand-vue/docs/introduce/start/zustand)

