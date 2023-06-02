<h1 align="center">nes-vue</h1>

<p align="center">
A NES (FC)🎮 emulator component for Vue 3.
</p>


<p align="center">
<a href="https://www.npmjs.com/package/nes-vue"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/nes-vue?color=green&logo=npm"></a>
</p>

:cn:[中文](./README_zh.md)

## Playground

🚀[Playground](https://taiyuuki.github.io/nes-vue)

## Features

- [x] Support for multiplayer.
- [x] Support for gamepad.
- [x] Support for turbo button.
- [x] Support for saving and loading.
- [x] Support for playing TAS recordings (`*.fm2`)

## Usage

### install

```shell
npm install nes-vue --save
```

### global component

```js
import { createApp } from "vue";
import App from "./App.vue";
import nes from "nes-vue";

createApp(App).use(nes).mount("#app");
```

Then:

```vue
<template>
  <nes-vue url="example.com/xxx.nes" auto-start :width="512" :height="480" />
</template>
```

### local component

```vue
<template>
  <nes-vue url="example.com/xxx.nes" auto-start :width="512" :height="480" />
</template>
<script setup>
import { NesVue } from 'nes-vue';
</script>
```

## API

### props

| Property    | Description                                                  | Type             | Default                       |
| ----------- | ------------------------------------------------------------ | ---------------- | ----------------------------- |
| `url`       | URL of the nes ROM. Required!!!                              | string           |                               |
| `width`     | Game screen width.                                           | string \| number | 256                           |
| `height`    | Game screen height.                                          | string \| number | 240                           |
| `label`     | Text of the game screen, show only before running.           | string           | ‘Game Start’                  |
| `gain`      | The game volume between [0, 100].                            | number           | 100                           |
| `clip`     | Background clipping, false=BG invisible in left 8-pixel column, true=No clipping.<br />Dense mode can solve the problem that the edges of some game BG are not fully displayed, and the background will not have black edges, but it will also cause the edge materials of most game BG to flicker. Please use it as appropriate. | boolean          | false                         |
| `autoStart` | Auto start when the component on mounted.                    | boolean          | false                         |
| `storage`   | Use `localStorage ` to save the game state, see [Methods - save](#save). | boolean          | false                         |
| `debugger`  | The error message is output in the console.                  | boolean          | false                         |
| `turbo` | Mashing speed per second, between [5, 20].                   | number           | 16                            |
| `p1`        | Player 1 controller.                                         | object           | see [Controller](#Controller) |
| `p2`        | Player 2 controller.                                         | object           | see [Controller](#Controller) |

#### Controller

The values of the controller keys are [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code), default values: 

```js
p1 = {
    UP: 'KeyW',
    DOWN: 'KeyS',
    LEFT: 'KeyA',
    RIGHT: 'KeyD',
    A: 'KeyK',
    B: 'KeyJ',
    C: 'KeyI',// Turbo(A)
    D: 'KeyU',// Turbo(B)
    SELECT: 'Digit2',
    START: 'Digit1'
}
p2 = {
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    A: 'Numpad2',
    B: 'Numpad1',
    C: 'Numpad5',
    D: 'Numpad4'
}
```

If you need to control the game in other ways, such as triggering the direction key UP through the touch event of the button element.

```vue
<template>
  <nes-vue url="example.com/xxx.nes" />
  <button @touchstart="upstart" @touchend="upend">UP</button>
</template>
<script setup>
const upEventStart = new KeyboardEvent('keydown', { code: 'KeyW' })
const upEventEnd = new KeyboardEvent('keyup', { code: 'KeyW' })
function upstart() {
  document.dispatchEvent(upEventStart)
}
function upend() {
  document.dispatchEvent(upEventEnd)
}
</script>
```

### events

| events                                       | Description                                   |
| -------------------------------------------- | --------------------------------------------- |
| `@fps -> function(fps: number)`              | Emitted per second while the game is running. |
| `@success -> function()`                     | Emitted when the ROM is loaded successfully.  |
| `@error -> funciont({code, message})`        | Emitted when error occurs.                    |
| `@saved ->  function({id, message, target})` | Emitted when the state has been saved         |
| `@loaded -> function({id, message, target})` | Emitted when the state has been loaded        |
| `@removed -> function(id)`                   | Emitted when the saved state has been removed |

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

### Methods

| Methods                                                      |
| ------------------------------------------------------------ |
| `start(url?: string) => void`                                |
| `reset() => void`                                            |
| `stop() => void`                                             |
| `pause() => void`                                            |
| `play() => void`                                             |
| `save(id: string) => void`                                   |
| `load(id: string) => void`                                   |
| `remove(id: string) => void`                                 |
| `clear() => void`                                            |
| `screenshot(download?: boolean, imageName?: string) => HTMLImageElement` |

#### start
```ts
start(url?: string) => void
```
Normally, **url is not required**, the `start` method is used to start the game in the stopped state.

If you want to switch games, you just need to bind the url property with a reactive value, and then change the value.

```vue
<template>
  <nes-vue :url="gameURL" auto-start :width="512" :height="480" />
  <button @click="switch">Switch</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NesVue } from 'nes-vue'
const gameURL = ref('example.com/aaa.nes')

function switch() {
  gameURL.value = 'example.com/bbb.nes'
}
</script>
```

**WARNING**: If you have to switch the game via the `start` method, you must use the **v-model** directive to bind the url, so that nes-vue can update it.

```vue
<template>
  <nes-vue ref="nes" v-model:url="gameURL" auto-start :width="512" :height="480" />
  <button @click="switch">Switch</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NesVueInstance } from 'nes-vue'
import { NesVue } from 'nes-vue'
const gameURL = ref('example.com/aaa.nes')
const nes = ref<NesVueInstance | null>(null)

function switch() {
  if (nes.value) {
    // this will be update the gameURL to 'example.com/bbb.nes'
    nes.value.start('example.com/bbb.nes')
  }
}
</script>
```

#### reset

```ts
reset() => void
```

Restart the current game.

#### stop

```ts
stop() => void
```

Game stop.

#### pause

```ts
pause() => void
```

Game pause.

#### play

```ts
play() => void
```

Paused game continues.

#### save

```ts
save(id: string) => void
```

By default, the game state is saved in indexedDB, you can also save it in localStorage via [storage](#props) property. 

The localStorage can store from **2 MB** to **10 MB** size of data depending upon the browser used, each game state archive requires about **0.5MB** to **2MB**.

If you need to save more data, it’s recommended to use indexedDB.

#### load

```ts
load(id: string) => void
```

**WARNING**: Can only be loaded while the game is running, and ensure that the running game is consistent with the saved game.

```vue
<template>
  <nes-vue ref="nes" url="example.com/xxx.nes" auto-start :width="512" :height="480" />
  <button @click="save">Save</button>
  <button @click="load">Load</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NesVueInstance } from 'nes-vue'
import { NesVue } from 'nes-vue'

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

#### remove

```ts
remove(id: string) => void
```

Remove saved data.

#### clear

```ts
clear() => void
```

Clear all saved data.

#### screenshot

```ts
screenshot(download?: boolean, imageName?: string) => HTMLImageElement
```

`screenshot(true)` will start downloading the  screenshot inside the browser.

The return value is an image element of the screenshot.

### Replay recording video

Starting from v1.5.0, the function of playing TAS videos (`*.fm2` files) has been added, which can be downloaded from [TASVideos](https://tasvideos.org/) .

There are two ways to play the `*.fm2` here.

The first is to request `*.fm2` files through a URL.

```vue
<template>
  <nes-vue :url="example.com/aaa.nes" auto-start :width="512" :height="480" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NesVue } from 'nes-vue'

function playVideo() {
  const url = './fm2/xxxxx.fm2'
  nes.value.fm2URL(url) // return a Promise.
  .then(fm2Play => {
      fm2Play() // Playing the recording.
  })
}
</script>
```

The second is to directly read the plain text string of the `*.fm2` file.

```vue
<template>
  <nes-vue :url="example.com/aaa.nes" auto-start :width="512" :height="480" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NesVue } from 'nes-vue'

function playVideo() {
  const url = './fm2/xxx.fm2'
  nes.value.fm2Text(text) // The text here is the plain text string of fm2 file.
  nes.value.fm2Play() // Playing the recording.
}
</script>
```

There are several points to note:

* Please ensure that the game version used in the `*.fm2` is completely consistent with the game ROM version, including Japanese, American, European, modified, and translated versions.

* Due to differences in the start frame, some game recording videos may require manual adjustment. A second parameter is provided to fine-tune the frame count.

  ```ts
  nes.value.fm2Text(text, -1) // 1 frame in advance
  nes.value.fm2URL(text, 2) // Delay by 2 frames
  ```

  The specific number of frames that need to be adjusted can only be tested by yourself.

* Even with identical game versions, the start frame is completely aligned, and as the game progresses, errors may occur due to differences in the implementation of the emulator. In this case, manual adjustment of the `*.fm2` file is the only way to correct it.