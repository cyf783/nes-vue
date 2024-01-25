<h1 align="center">nes-vue</h1>

<p align="center">
A NES (FC)🎮 emulator component for Vue 3.
</p>


<p align="center">
<a href="https://www.npmjs.com/package/nes-vue"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/nes-vue?color=green&logo=npm"></a>
</p>

:cn:[中文](./README_zh.md)

## 🚀Playground

[Vue SFC Playgournd](https://play.vuejs.org/#eNqtV9lu2zgU/RWOX+wAtpw0LVB40k7SQTuYImmDLH2J8iBLlMVEIjUi5dgI/O9zuEmy46xoH1zxrueuZO57R2UZzGvam/QOZFyxUhFJVV1+DjkrSlEpck8qmg5JLIqyVjQhK5JWoiB9KPU7Qj+o/FXThsupHFmJkMeCS0VmUUGPGT4+kauQExL2MqVKORmPVcSWdX3LghlTWT0NmBg79fF5XdKKnEQVE+RLJSQZfL/cCcANe8O3G9l/rYUTNsvUknxjPMrxiwMZXJ4fvRrJCVOyLihyQS6EqGqEE5URd3ZCfu2TlRbvurkyPy/0kUVlucwpHUkddqGjniLo4V1UlTQJYNkhJmRX/3dtDq/xkIsqUaIYwnY9xEcZjWQx3R9pD3LNwWjvbR4WrBTz/VFh0p7qrKf683eAv1kOI/YfW4oa5k01ZpHStdhivFMQ3b2XZ8coCKZh4Hv5avd6x0vAgePyOs8bssx1FR+QEyajaU4dS1U1bVhMnka1xKRZXhrlsmWWmnUcTWkOtp/JwWCHfPrcKAbzKMco/kX6p3m07JMJPjSjDyshT2seKyY4SamKs2/FOyjf63CbzoNl139XPtCA8YQufqYDhGPN298dJIjo0B0ResjSIAj0F9zpXAYqo9xBNI70Pxe/gwqHOkrNXEFrtYazothI/wCIB9q6M6yB8bMRfMeiiqTOA+OzTd66H6lEud2N5lgvm7B14R7YoTmN1ZkovCHXO43SRg4ft/ssdluyVmijZRpIJdgXR+cPI0OVtKoNbouzrfEhG48ZO28y9eZ6dGFrC94PS8lg3ahjdCHoQK3/FaGwuUXC2jQiW3H+sU4xqA7G9m7ErYiDogX8KIoTIQcJm5M4j6T8FPamYhH2DBkMt3F8x6MwkHCL3pImdZWD5vqjQ79jicrA+bCHldRQM6qXIMjvP+625ENZxzE17v1Ee+bYIhwD4hasigOKB2ubdh0r+rR1wwESNFzuLc2bWhM8jLOIz7RsMwie6ZzBnSh1gf2RkPkoFZU1Txhv3gqtVYRvyrEJAfRbutykNo4Iucf7RRTYFChZTAd9fdX2h6Tf32lpL7g2rApZmZ4xIYxtDD6BYxutP05rpdDBh3HO4lsNzy+xJuWEnGmaV7cKj6n73dTR1qP2MmXT8mEPg4t3Ac6muybvKRJGJm7zJKC7z44PJK9z4fjgn/Vnt82z1vUWIBAkv1hCxcsTYW3PRzITdyC1+2QjO0/a9lNxMO6MM44mSfgMMMt2e5RCMl3pCcYCcmxO/3QrWwc6Qb/mjNPRNBfxLThmiQV6uqw6XkkzxkfAMyEfyoWVwGOFWzBDd18MYQeX+ZpOpefdaHmz+jVhJGwNyd7urjeJDnTQe8OefZaPiqgMbqTgeN0brdAxMPgTvxrNTjKLCrT2CRUnHKoJzdm8wsyoMS8LPw2He8HHYA8JlCBbUoAFe+NWG8CsgEFJXE94t20g0I8WltPqpxmfdSRRnou774ambx73GINORuPbLfQbiX2rUZ/q+armiKHhKeQQ42XYX89/0AW+G2Yhklr34hNMTKfIa7OmjNiXmieA3ZEzaP81CUXzXcivC0W59EH5K3zl/jxAkv5+IvQW7n6w32Rx9T8laIlV)

[NES Vue Playground](https://taiyuuki.github.io/nes-vue)

## Features

- [x] Support for multiplayer.
- [x] Support for gamepad.
- [x] Support for turbo button.
- [x] Support for saving and loading.
- [x] Support for playing TAS recordings. (`*.fm2`)
- [x] Support for cheat codes.

## Usage

### install

```shell
npm install nes-vue --save
```

And then

```vue
<script setup>
  import { NesVue } from 'nes-vue';
</script>
<template>
  <nes-vue
    url="https://taiyuuki.github.io/nes-vue/Super Mario Bros (JU).nes"
  />
</template>
```
Refer to [documentations](https://nes-vue-docs.netlify.app/) for more details.