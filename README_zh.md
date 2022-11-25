<h1 align="center">nes-vue</h1>

<p align="center">
用于 Vue 3 的 NES (FC)🎮 游戏模拟器组件。
</p>


<p align="center">
<a href="https://www.npmjs.com/package/nes-vue"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/nes-vue?color=green&logo=npm"></a>
</p>

## Demo

🚀[Demo](https://taiyuuki.github.io/nes-vue)

Demo 就在本项目的 `example/` 目录下

## 使用

### 安装

```shell
npm install nes-vue --save
```

### 全局引入

```js
import { createApp } from "vue";
import App from "./App.vue";
import nes from "nes-vue";

createApp(App).use(nes).mount("#app");
```

然后:

```vue
<template>
    <nes-vue url="example.com/xxx.nes" auto-start :width="512" :height="480" />
</template>
```

### 局部引入

```vue
<template>
  <nes-vue url="example.com/xxx.nes" auto-start :width="512" :height="480" />
</template>
<script setup>
  import { NesVue } from 'nes-vue';
</script>
```

## API

### 属性

| Property    | Description                  | Type    | Default      |
| ----------- | ---------------------------- | ------- | ------------ |
| `url`       | nes游戏的rom地址，必须！！！ | string  |              |
| `width`     | 游戏画面宽度                 | number  | 256          |
| `height`    | 游戏画面高度                 | number  | 240          |
| `label`     | 游戏运行前画面上的显示文字   | string  | ‘Game Start’ |
| `autoStart` | 组件挂载后自动开始游戏       | boolean | false        |
| `p1`        | 玩家 1 控制器                | object  | 见下文       |
| `p2`        | 玩家 2 控制器                | object  | 见下文       |
| `storage`   | 游戏保存时使用localStorage   | boolean | false        |

关于保存游戏，详细说明在[方法](#方法).

控制器各属性值是 [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code), 默认值: 

```js
p1 = {
    UP: 'KeyW',
    DOWN: 'KeyS',
    LEFT: 'KeyA',
    RIGHT: 'KeyD',
    A: 'KeyK',
    B: 'KeyJ',
    SELECT: 'Digit2',
    START: 'Digit1'
}
p2 = {
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    A: 'Numpad2',
    B: 'Numpad1'
}
```

### 事件

| events                                       | Description        |
| -------------------------------------------- | ------------------ |
| `@fps -> function(fps: number)`              | 每秒触发一次       |
| `@success -> function()`                     | rom加载成功时触发  |
| `@error -> funciont({code, message})`   | rom读取错误时触发  |
| `@saved ->  function({id, message, target})` | 游戏保存后触发     |
| `@loaded -> function({id, message, target})` | 读取游戏存档后触发 |

```vue
<template>
    <nes-vue url="example.com/xxx.nes" @fps="getFPS" />
</template>
<script setup>
function getFPS(fps){
    console.log(fps.toFixed(2))
}
</script>
```

### 方法

| Methods                                              |
| ---------------------------------------------------- |
| `gameStart(url?: string) => void`                    |
| `gameReset() => void`                                |
| `gameStop() => void`                                 |
| `save(id: string) => void`                           |
| `load(id: string) => void`                           |
| `screenshot(download?: boolean) => HTMLImageElement` |

#### gameStart

```ts
gameStart(url?: string) => void
```

通常情况下**不需要url** ，gameStart一般是用于开始停止状态的游戏。

如果要切换游戏，只需要用响应式数据绑定url，然后修改url的值即可。

**注意**: 如果你一定要用gameStart来切换游戏, 那就必须要使用 **v-model **指令绑定url属性，这样nes-vue组件才会更新url的值：

```vue
<template>
  <nes-vue ref="nes" v-model:url="gameURL" auto-start :width="512" :height="480" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NesVueInstance } from 'nes-vue'
import { NesVue } from 'nes-vue'
const gameURL = ref('example.com/aaa.nes')
const nes = ref<NesVueInstance | null>(null)

function switch() {
  if (nes.value) {
    // 这会将gameURL的值改为'example.com/bbb.nes'
    nes.value.gameStart('example.com/bbb.nes')
  }
}
</script>
```

#### gameReset

```ts
gameReset() => void
```

重新运行当前游戏。

#### gameStop

```ts
gameStop() => void
```

#### save

```ts
save(id: string) => void
```

默认情况下，存档是保存在 indexedDB，你可以设置[storage](#属性)属性让其保存在localStorage。

根据不同的浏览器localStorage能保存**2 MB**至**10 MB** 的数据，每个游戏的保存数据大约在**0.5MB** 至 **2MB**不等。

如果你需要保存较多的数据，建议你使用默认的 indexedDB。

#### load

```ts
load(id: string) => void
```

**注意**: 只有在游戏运行时才能进行保存、读取操作，读取游戏还需要确保运行的游戏与读取的游戏是一致的。

```vue
<template>
  <nes-vue ref="nes" v-model:url="example.com/xxx.nes" auto-start :width="512" :height="480" />
  <button @click="save">Save</button>
  <button @click="load">Load</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NesVueInstance } from 'nes-vue'
import { NesVue } from 'nes-vue'

const gameURL = ref('example.com/aaa.nes')
const nes = ref<NesVueInstance | null>(null)
const id = 'example'

function save() {
  if (nes.value) {
    // Save state
    nes.value.save(id)
  }
}

function load() {
  if (nes.value) {
    // Load state
    nes.value.load(id)
  }
}
</script>
```

#### screenshot

```ts
screenshot(download?: boolean) => HTMLImageElement
```

调用`screenshot(true)` 会在浏览器中开始下载游戏截图。

返回值是截图的image元素。

