var Ut = Object.defineProperty;
var Zt = (p, l, u) => l in p ? Ut(p, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : p[l] = u;
var x = (p, l, u) => (Zt(p, typeof l != "symbol" ? l + "" : l, u), u);
import { computed as P, onMounted as Ot, onBeforeUnmount as vt, defineComponent as Kt, ref as ct, effect as Jt, nextTick as jt, watch as mt, openBlock as dt, createElementBlock as Rt, normalizeStyle as zt, createElementVNode as _t, unref as St, withDirectives as Qt, vShow as $t, toDisplayString as ti, createCommentVNode as ii } from "vue";
var si = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ei(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var yt = { exports: {} };
(function(p, l) {
  (function(u, c) {
    p.exports = c();
  })(typeof self < "u" ? self : si, function() {
    return function(u) {
      function c(m) {
        if (d[m])
          return d[m].exports;
        var n = d[m] = { i: m, l: !1, exports: {} };
        return u[m].call(n.exports, n, n.exports, c), n.l = !0, n.exports;
      }
      var d = {};
      return c.m = u, c.c = d, c.d = function(m, n, e) {
        c.o(m, n) || Object.defineProperty(m, n, { configurable: !1, enumerable: !0, get: e });
      }, c.n = function(m) {
        var n = m && m.__esModule ? function() {
          return m.default;
        } : function() {
          return m;
        };
        return c.d(n, "a", n), n;
      }, c.o = function(m, n) {
        return Object.prototype.hasOwnProperty.call(m, n);
      }, c.p = "", c(c.s = 3);
    }([function(u, c) {
      u.exports = { copyArrayElements: function(d, m, n, e, i) {
        for (var h = 0; h < i; ++h)
          n[e + h] = d[m + h];
      }, copyArray: function(d) {
        return d.slice(0);
      }, fromJSON: function(d, m) {
        for (var n = 0; n < d.JSON_PROPERTIES.length; n++)
          d[d.JSON_PROPERTIES[n]] = m[d.JSON_PROPERTIES[n]];
      }, toJSON: function(d) {
        for (var m = {}, n = 0; n < d.JSON_PROPERTIES.length; n++)
          m[d.JSON_PROPERTIES[n]] = d[d.JSON_PROPERTIES[n]];
        return m;
      } };
    }, function(u, c) {
      var d = function() {
        this.state = new Array(8);
        for (var m = 0; m < this.state.length; m++)
          this.state[m] = 64;
      };
      d.BUTTON_A = 0, d.BUTTON_B = 1, d.BUTTON_SELECT = 2, d.BUTTON_START = 3, d.BUTTON_UP = 4, d.BUTTON_DOWN = 5, d.BUTTON_LEFT = 6, d.BUTTON_RIGHT = 7, d.prototype = { buttonDown: function(m) {
        this.state[m] = 65;
      }, buttonUp: function(m) {
        this.state[m] = 64;
      } }, u.exports = d;
    }, function(u, c) {
      var d = function() {
        this.pix = new Array(64), this.fbIndex = null, this.tIndex = null, this.x = null, this.y = null, this.w = null, this.h = null, this.incX = null, this.incY = null, this.palIndex = null, this.tpri = null, this.c = null, this.initialized = !1, this.opaque = new Array(8);
      };
      d.prototype = { setBuffer: function(m) {
        for (this.y = 0; this.y < 8; this.y++)
          this.setScanline(this.y, m[this.y], m[this.y + 8]);
      }, setScanline: function(m, n, e) {
        for (this.initialized = !0, this.tIndex = m << 3, this.x = 0; this.x < 8; this.x++)
          this.pix[this.tIndex + this.x] = (n >> 7 - this.x & 1) + ((e >> 7 - this.x & 1) << 1), this.pix[this.tIndex + this.x] === 0 && (this.opaque[m] = !1);
      }, render: function(m, n, e, i, h, t, s, o, a, R, r, _, g) {
        if (!(t < -7 || t >= 256 || s < -7 || s >= 240))
          if (this.w = i - n, this.h = h - e, t < 0 && (n -= t), t + i >= 256 && (i = 256 - t), s < 0 && (e -= s), s + h >= 240 && (h = 240 - s), R || r)
            if (R && !r)
              for (this.fbIndex = (s << 8) + t, this.tIndex = 7, this.y = 0; this.y < 8; this.y++) {
                for (this.x = 0; this.x < 8; this.x++)
                  this.x >= n && this.x < i && this.y >= e && this.y < h && (this.palIndex = this.pix[this.tIndex], this.tpri = g[this.fbIndex], this.palIndex !== 0 && _ <= (255 & this.tpri) && (m[this.fbIndex] = a[this.palIndex + o], this.tpri = 3840 & this.tpri | _, g[this.fbIndex] = this.tpri)), this.fbIndex++, this.tIndex--;
                this.fbIndex -= 8, this.fbIndex += 256, this.tIndex += 16;
              }
            else if (r && !R)
              for (this.fbIndex = (s << 8) + t, this.tIndex = 56, this.y = 0; this.y < 8; this.y++) {
                for (this.x = 0; this.x < 8; this.x++)
                  this.x >= n && this.x < i && this.y >= e && this.y < h && (this.palIndex = this.pix[this.tIndex], this.tpri = g[this.fbIndex], this.palIndex !== 0 && _ <= (255 & this.tpri) && (m[this.fbIndex] = a[this.palIndex + o], this.tpri = 3840 & this.tpri | _, g[this.fbIndex] = this.tpri)), this.fbIndex++, this.tIndex++;
                this.fbIndex -= 8, this.fbIndex += 256, this.tIndex -= 16;
              }
            else
              for (this.fbIndex = (s << 8) + t, this.tIndex = 63, this.y = 0; this.y < 8; this.y++) {
                for (this.x = 0; this.x < 8; this.x++)
                  this.x >= n && this.x < i && this.y >= e && this.y < h && (this.palIndex = this.pix[this.tIndex], this.tpri = g[this.fbIndex], this.palIndex !== 0 && _ <= (255 & this.tpri) && (m[this.fbIndex] = a[this.palIndex + o], this.tpri = 3840 & this.tpri | _, g[this.fbIndex] = this.tpri)), this.fbIndex++, this.tIndex--;
                this.fbIndex -= 8, this.fbIndex += 256;
              }
          else
            for (this.fbIndex = (s << 8) + t, this.tIndex = 0, this.y = 0; this.y < 8; this.y++) {
              for (this.x = 0; this.x < 8; this.x++)
                this.x >= n && this.x < i && this.y >= e && this.y < h && (this.palIndex = this.pix[this.tIndex], this.tpri = g[this.fbIndex], this.palIndex !== 0 && _ <= (255 & this.tpri) && (m[this.fbIndex] = a[this.palIndex + o], this.tpri = 3840 & this.tpri | _, g[this.fbIndex] = this.tpri)), this.fbIndex++, this.tIndex++;
              this.fbIndex -= 8, this.fbIndex += 256;
            }
      }, isTransparent: function(m, n) {
        return this.pix[(n << 3) + m] === 0;
      }, toJSON: function() {
        return { opaque: this.opaque, pix: this.pix };
      }, fromJSON: function(m) {
        this.opaque = m.opaque, this.pix = m.pix;
      } }, u.exports = d;
    }, function(u, c, d) {
      u.exports = { Controller: d(1), NES: d(4) };
    }, function(u, c, d) {
      var m = d(5), n = d(1), e = d(6), i = d(7), h = d(8), t = function(s) {
        if (this.opts = { onFrame: function() {
        }, onAudioSample: null, onStatusUpdate: function() {
        }, onBatteryRamWrite: function() {
        }, preferredFrameRate: 60, emulateSound: !0, sampleRate: 48e3 }, s !== void 0) {
          var o;
          for (o in this.opts)
            s[o] !== void 0 && (this.opts[o] = s[o]);
        }
        this.frameTime = 1e3 / this.opts.preferredFrameRate, this.ui = { writeFrame: this.opts.onFrame, updateStatus: this.opts.onStatusUpdate }, this.cpu = new m(this), this.ppu = new e(this), this.papu = new i(this), this.mmap = null, this.controllers = { 1: new n(), 2: new n() }, this.ui.updateStatus("Ready to load a ROM."), this.frame = this.frame.bind(this), this.buttonDown = this.buttonDown.bind(this), this.buttonUp = this.buttonUp.bind(this), this.zapperMove = this.zapperMove.bind(this), this.zapperFireDown = this.zapperFireDown.bind(this), this.zapperFireUp = this.zapperFireUp.bind(this);
      };
      t.prototype = { fpsFrameCount: 0, romData: null, reset: function() {
        this.mmap !== null && this.mmap.reset(), this.cpu.reset(), this.ppu.reset(), this.papu.reset(), this.lastFpsTime = null, this.fpsFrameCount = 0;
      }, frame: function() {
        this.ppu.startFrame();
        var s = 0, o = this.opts.emulateSound, a = this.cpu, R = this.ppu, r = this.papu;
        t:
          for (; ; )
            for (a.cyclesToHalt === 0 ? (s = a.emulate(), o && r.clockFrameCounter(s), s *= 3) : a.cyclesToHalt > 8 ? (s = 24, o && r.clockFrameCounter(8), a.cyclesToHalt -= 8) : (s = 3 * a.cyclesToHalt, o && r.clockFrameCounter(a.cyclesToHalt), a.cyclesToHalt = 0); s > 0; s--) {
              if (R.curX === R.spr0HitX && R.f_spVisibility === 1 && R.scanline - 21 === R.spr0HitY && R.setStatusFlag(R.STATUS_SPRITE0HIT, !0), R.requestEndFrame && --R.nmiCounter === 0) {
                R.requestEndFrame = !1, R.startVBlank();
                break t;
              }
              R.curX++, R.curX === 341 && (R.curX = 0, R.endScanline());
            }
        this.fpsFrameCount++;
      }, buttonDown: function(s, o) {
        this.controllers[s].buttonDown(o);
      }, buttonUp: function(s, o) {
        this.controllers[s].buttonUp(o);
      }, zapperMove: function(s, o) {
        this.mmap && (this.mmap.zapperX = s, this.mmap.zapperY = o);
      }, zapperFireDown: function() {
        this.mmap && (this.mmap.zapperFired = !0);
      }, zapperFireUp: function() {
        this.mmap && (this.mmap.zapperFired = !1);
      }, getFPS: function() {
        var s = +new Date(), o = null;
        return this.lastFpsTime && (o = this.fpsFrameCount / ((s - this.lastFpsTime) / 1e3)), this.fpsFrameCount = 0, this.lastFpsTime = s, o;
      }, reloadROM: function() {
        this.romData !== null && this.loadROM(this.romData);
      }, loadROM: function(s) {
        this.rom = new h(this), this.rom.load(s), this.reset(), this.mmap = this.rom.createMapper(), this.mmap.loadROM(), this.ppu.setMirroring(this.rom.getMirroringType()), this.romData = s;
      }, setFramerate: function(s) {
        this.opts.preferredFrameRate = s, this.frameTime = 1e3 / s, this.papu.setSampleRate(this.opts.sampleRate, !1);
      }, toJSON: function() {
        return { romData: this.romData, cpu: this.cpu.toJSON(), mmap: this.mmap.toJSON(), ppu: this.ppu.toJSON() };
      }, fromJSON: function(s) {
        this.reset(), this.romData = s.romData, this.cpu.fromJSON(s.cpu), this.mmap.fromJSON(s.mmap), this.ppu.fromJSON(s.ppu);
      } }, u.exports = t;
    }, function(u, c, d) {
      var m = d(0), n = function(i) {
        this.nes = i, this.mem = null, this.REG_ACC = null, this.REG_X = null, this.REG_Y = null, this.REG_SP = null, this.REG_PC = null, this.REG_PC_NEW = null, this.REG_STATUS = null, this.F_CARRY = null, this.F_DECIMAL = null, this.F_INTERRUPT = null, this.F_INTERRUPT_NEW = null, this.F_OVERFLOW = null, this.F_SIGN = null, this.F_ZERO = null, this.F_NOTUSED = null, this.F_NOTUSED_NEW = null, this.F_BRK = null, this.F_BRK_NEW = null, this.opdata = null, this.cyclesToHalt = null, this.crash = null, this.irqRequested = null, this.irqType = null, this.reset();
      };
      n.prototype = { IRQ_NORMAL: 0, IRQ_NMI: 1, IRQ_RESET: 2, reset: function() {
        this.mem = new Array(65536);
        for (var i = 0; i < 8192; i++)
          this.mem[i] = 255;
        for (var h = 0; h < 4; h++) {
          var t = 2048 * h;
          this.mem[t + 8] = 247, this.mem[t + 9] = 239, this.mem[t + 10] = 223, this.mem[t + 15] = 191;
        }
        for (var s = 8193; s < this.mem.length; s++)
          this.mem[s] = 0;
        this.REG_ACC = 0, this.REG_X = 0, this.REG_Y = 0, this.REG_SP = 511, this.REG_PC = 32767, this.REG_PC_NEW = 32767, this.REG_STATUS = 40, this.setStatus(40), this.F_CARRY = 0, this.F_DECIMAL = 0, this.F_INTERRUPT = 1, this.F_INTERRUPT_NEW = 1, this.F_OVERFLOW = 0, this.F_SIGN = 0, this.F_ZERO = 1, this.F_NOTUSED = 1, this.F_NOTUSED_NEW = 1, this.F_BRK = 1, this.F_BRK_NEW = 1, this.opdata = new e().opdata, this.cyclesToHalt = 0, this.crash = !1, this.irqRequested = !1, this.irqType = null;
      }, emulate: function() {
        var i, h;
        if (this.irqRequested) {
          switch (i = this.F_CARRY | (this.F_ZERO === 0 ? 1 : 0) << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7, this.REG_PC_NEW = this.REG_PC, this.F_INTERRUPT_NEW = this.F_INTERRUPT, this.irqType) {
            case 0:
              if (this.F_INTERRUPT !== 0)
                break;
              this.doIrq(i);
              break;
            case 1:
              this.doNonMaskableInterrupt(i);
              break;
            case 2:
              this.doResetInterrupt();
          }
          this.REG_PC = this.REG_PC_NEW, this.F_INTERRUPT = this.F_INTERRUPT_NEW, this.F_BRK = this.F_BRK_NEW, this.irqRequested = !1;
        }
        var t = this.opdata[this.nes.mmap.load(this.REG_PC + 1)], s = t >> 24, o = 0, a = t >> 8 & 255, R = this.REG_PC;
        this.REG_PC += t >> 16 & 255;
        var r = 0;
        switch (a) {
          case 0:
            r = this.load(R + 2);
            break;
          case 1:
            r = this.load(R + 2), r += r < 128 ? this.REG_PC : this.REG_PC - 256;
            break;
          case 2:
            break;
          case 3:
            r = this.load16bit(R + 2);
            break;
          case 4:
            r = this.REG_ACC;
            break;
          case 5:
            r = this.REG_PC;
            break;
          case 6:
            r = this.load(R + 2) + this.REG_X & 255;
            break;
          case 7:
            r = this.load(R + 2) + this.REG_Y & 255;
            break;
          case 8:
            r = this.load16bit(R + 2), (65280 & r) != (r + this.REG_X & 65280) && (o = 1), r += this.REG_X;
            break;
          case 9:
            r = this.load16bit(R + 2), (65280 & r) != (r + this.REG_Y & 65280) && (o = 1), r += this.REG_Y;
            break;
          case 10:
            r = this.load(R + 2), (65280 & r) != (r + this.REG_X & 65280) && (o = 1), r += this.REG_X, r &= 255, r = this.load16bit(r);
            break;
          case 11:
            r = this.load16bit(this.load(R + 2)), (65280 & r) != (r + this.REG_Y & 65280) && (o = 1), r += this.REG_Y;
            break;
          case 12:
            r = this.load16bit(R + 2), r = r < 8191 ? this.mem[r] + (this.mem[65280 & r | 1 + (255 & r) & 255] << 8) : this.nes.mmap.load(r) + (this.nes.mmap.load(65280 & r | 1 + (255 & r) & 255) << 8);
        }
        switch (r &= 65535, 255 & t) {
          case 0:
            i = this.REG_ACC + this.load(r) + this.F_CARRY, (128 & (this.REG_ACC ^ this.load(r))) == 0 && (128 & (this.REG_ACC ^ i)) != 0 ? this.F_OVERFLOW = 1 : this.F_OVERFLOW = 0, this.F_CARRY = i > 255 ? 1 : 0, this.F_SIGN = i >> 7 & 1, this.F_ZERO = 255 & i, this.REG_ACC = 255 & i, s += o;
            break;
          case 1:
            this.REG_ACC = this.REG_ACC & this.load(r), this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC, a !== 11 && (s += o);
            break;
          case 2:
            a === 4 ? (this.F_CARRY = this.REG_ACC >> 7 & 1, this.REG_ACC = this.REG_ACC << 1 & 255, this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC) : (i = this.load(r), this.F_CARRY = i >> 7 & 1, i = i << 1 & 255, this.F_SIGN = i >> 7 & 1, this.F_ZERO = i, this.write(r, i));
            break;
          case 3:
            this.F_CARRY === 0 && (s += (65280 & R) != (65280 & r) ? 2 : 1, this.REG_PC = r);
            break;
          case 4:
            this.F_CARRY === 1 && (s += (65280 & R) != (65280 & r) ? 2 : 1, this.REG_PC = r);
            break;
          case 5:
            this.F_ZERO === 0 && (s += (65280 & R) != (65280 & r) ? 2 : 1, this.REG_PC = r);
            break;
          case 6:
            i = this.load(r), this.F_SIGN = i >> 7 & 1, this.F_OVERFLOW = i >> 6 & 1, i &= this.REG_ACC, this.F_ZERO = i;
            break;
          case 7:
            this.F_SIGN === 1 && (s++, this.REG_PC = r);
            break;
          case 8:
            this.F_ZERO !== 0 && (s += (65280 & R) != (65280 & r) ? 2 : 1, this.REG_PC = r);
            break;
          case 9:
            this.F_SIGN === 0 && (s += (65280 & R) != (65280 & r) ? 2 : 1, this.REG_PC = r);
            break;
          case 10:
            this.REG_PC += 2, this.push(this.REG_PC >> 8 & 255), this.push(255 & this.REG_PC), this.F_BRK = 1, this.push(this.F_CARRY | (this.F_ZERO === 0 ? 1 : 0) << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7), this.F_INTERRUPT = 1, this.REG_PC = this.load16bit(65534), this.REG_PC--;
            break;
          case 11:
            this.F_OVERFLOW === 0 && (s += (65280 & R) != (65280 & r) ? 2 : 1, this.REG_PC = r);
            break;
          case 12:
            this.F_OVERFLOW === 1 && (s += (65280 & R) != (65280 & r) ? 2 : 1, this.REG_PC = r);
            break;
          case 13:
            this.F_CARRY = 0;
            break;
          case 14:
            this.F_DECIMAL = 0;
            break;
          case 15:
            this.F_INTERRUPT = 0;
            break;
          case 16:
            this.F_OVERFLOW = 0;
            break;
          case 17:
            i = this.REG_ACC - this.load(r), this.F_CARRY = i >= 0 ? 1 : 0, this.F_SIGN = i >> 7 & 1, this.F_ZERO = 255 & i, s += o;
            break;
          case 18:
            i = this.REG_X - this.load(r), this.F_CARRY = i >= 0 ? 1 : 0, this.F_SIGN = i >> 7 & 1, this.F_ZERO = 255 & i;
            break;
          case 19:
            i = this.REG_Y - this.load(r), this.F_CARRY = i >= 0 ? 1 : 0, this.F_SIGN = i >> 7 & 1, this.F_ZERO = 255 & i;
            break;
          case 20:
            i = this.load(r) - 1 & 255, this.F_SIGN = i >> 7 & 1, this.F_ZERO = i, this.write(r, i);
            break;
          case 21:
            this.REG_X = this.REG_X - 1 & 255, this.F_SIGN = this.REG_X >> 7 & 1, this.F_ZERO = this.REG_X;
            break;
          case 22:
            this.REG_Y = this.REG_Y - 1 & 255, this.F_SIGN = this.REG_Y >> 7 & 1, this.F_ZERO = this.REG_Y;
            break;
          case 23:
            this.REG_ACC = 255 & (this.load(r) ^ this.REG_ACC), this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC, s += o;
            break;
          case 24:
            i = this.load(r) + 1 & 255, this.F_SIGN = i >> 7 & 1, this.F_ZERO = i, this.write(r, 255 & i);
            break;
          case 25:
            this.REG_X = this.REG_X + 1 & 255, this.F_SIGN = this.REG_X >> 7 & 1, this.F_ZERO = this.REG_X;
            break;
          case 26:
            this.REG_Y++, this.REG_Y &= 255, this.F_SIGN = this.REG_Y >> 7 & 1, this.F_ZERO = this.REG_Y;
            break;
          case 27:
            this.REG_PC = r - 1;
            break;
          case 28:
            this.push(this.REG_PC >> 8 & 255), this.push(255 & this.REG_PC), this.REG_PC = r - 1;
            break;
          case 29:
            this.REG_ACC = this.load(r), this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC, s += o;
            break;
          case 30:
            this.REG_X = this.load(r), this.F_SIGN = this.REG_X >> 7 & 1, this.F_ZERO = this.REG_X, s += o;
            break;
          case 31:
            this.REG_Y = this.load(r), this.F_SIGN = this.REG_Y >> 7 & 1, this.F_ZERO = this.REG_Y, s += o;
            break;
          case 32:
            a === 4 ? (i = 255 & this.REG_ACC, this.F_CARRY = 1 & i, i >>= 1, this.REG_ACC = i) : (i = 255 & this.load(r), this.F_CARRY = 1 & i, i >>= 1, this.write(r, i)), this.F_SIGN = 0, this.F_ZERO = i;
            break;
          case 33:
            break;
          case 34:
            i = 255 & (this.load(r) | this.REG_ACC), this.F_SIGN = i >> 7 & 1, this.F_ZERO = i, this.REG_ACC = i, a !== 11 && (s += o);
            break;
          case 35:
            this.push(this.REG_ACC);
            break;
          case 36:
            this.F_BRK = 1, this.push(this.F_CARRY | (this.F_ZERO === 0 ? 1 : 0) << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7);
            break;
          case 37:
            this.REG_ACC = this.pull(), this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC;
            break;
          case 38:
            i = this.pull(), this.F_CARRY = 1 & i, this.F_ZERO = (i >> 1 & 1) == 1 ? 0 : 1, this.F_INTERRUPT = i >> 2 & 1, this.F_DECIMAL = i >> 3 & 1, this.F_BRK = i >> 4 & 1, this.F_NOTUSED = i >> 5 & 1, this.F_OVERFLOW = i >> 6 & 1, this.F_SIGN = i >> 7 & 1, this.F_NOTUSED = 1;
            break;
          case 39:
            a === 4 ? (i = this.REG_ACC, h = this.F_CARRY, this.F_CARRY = i >> 7 & 1, i = (i << 1 & 255) + h, this.REG_ACC = i) : (i = this.load(r), h = this.F_CARRY, this.F_CARRY = i >> 7 & 1, i = (i << 1 & 255) + h, this.write(r, i)), this.F_SIGN = i >> 7 & 1, this.F_ZERO = i;
            break;
          case 40:
            a === 4 ? (h = this.F_CARRY << 7, this.F_CARRY = 1 & this.REG_ACC, i = (this.REG_ACC >> 1) + h, this.REG_ACC = i) : (i = this.load(r), h = this.F_CARRY << 7, this.F_CARRY = 1 & i, i = (i >> 1) + h, this.write(r, i)), this.F_SIGN = i >> 7 & 1, this.F_ZERO = i;
            break;
          case 41:
            if (i = this.pull(), this.F_CARRY = 1 & i, this.F_ZERO = (i >> 1 & 1) == 0 ? 1 : 0, this.F_INTERRUPT = i >> 2 & 1, this.F_DECIMAL = i >> 3 & 1, this.F_BRK = i >> 4 & 1, this.F_NOTUSED = i >> 5 & 1, this.F_OVERFLOW = i >> 6 & 1, this.F_SIGN = i >> 7 & 1, this.REG_PC = this.pull(), this.REG_PC += this.pull() << 8, this.REG_PC === 65535)
              return;
            this.REG_PC--, this.F_NOTUSED = 1;
            break;
          case 42:
            if (this.REG_PC = this.pull(), this.REG_PC += this.pull() << 8, this.REG_PC === 65535)
              return;
            break;
          case 43:
            i = this.REG_ACC - this.load(r) - (1 - this.F_CARRY), this.F_SIGN = i >> 7 & 1, this.F_ZERO = 255 & i, (128 & (this.REG_ACC ^ i)) != 0 && (128 & (this.REG_ACC ^ this.load(r))) != 0 ? this.F_OVERFLOW = 1 : this.F_OVERFLOW = 0, this.F_CARRY = i < 0 ? 0 : 1, this.REG_ACC = 255 & i, a !== 11 && (s += o);
            break;
          case 44:
            this.F_CARRY = 1;
            break;
          case 45:
            this.F_DECIMAL = 1;
            break;
          case 46:
            this.F_INTERRUPT = 1;
            break;
          case 47:
            this.write(r, this.REG_ACC);
            break;
          case 48:
            this.write(r, this.REG_X);
            break;
          case 49:
            this.write(r, this.REG_Y);
            break;
          case 50:
            this.REG_X = this.REG_ACC, this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC;
            break;
          case 51:
            this.REG_Y = this.REG_ACC, this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC;
            break;
          case 52:
            this.REG_X = this.REG_SP - 256, this.F_SIGN = this.REG_SP >> 7 & 1, this.F_ZERO = this.REG_X;
            break;
          case 53:
            this.REG_ACC = this.REG_X, this.F_SIGN = this.REG_X >> 7 & 1, this.F_ZERO = this.REG_X;
            break;
          case 54:
            this.REG_SP = this.REG_X + 256, this.stackWrap();
            break;
          case 55:
            this.REG_ACC = this.REG_Y, this.F_SIGN = this.REG_Y >> 7 & 1, this.F_ZERO = this.REG_Y;
            break;
          case 56:
            i = this.REG_ACC & this.load(r), this.F_CARRY = 1 & i, this.REG_ACC = this.F_ZERO = i >> 1, this.F_SIGN = 0;
            break;
          case 57:
            this.REG_ACC = this.F_ZERO = this.REG_ACC & this.load(r), this.F_CARRY = this.F_SIGN = this.REG_ACC >> 7 & 1;
            break;
          case 58:
            i = this.REG_ACC & this.load(r), this.REG_ACC = this.F_ZERO = (i >> 1) + (this.F_CARRY << 7), this.F_SIGN = this.F_CARRY, this.F_CARRY = i >> 7 & 1, this.F_OVERFLOW = 1 & (i >> 7 ^ i >> 6);
            break;
          case 59:
            i = (this.REG_X & this.REG_ACC) - this.load(r), this.F_SIGN = i >> 7 & 1, this.F_ZERO = 255 & i, (128 & (this.REG_X ^ i)) != 0 && (128 & (this.REG_X ^ this.load(r))) != 0 ? this.F_OVERFLOW = 1 : this.F_OVERFLOW = 0, this.F_CARRY = i < 0 ? 0 : 1, this.REG_X = 255 & i;
            break;
          case 60:
            this.REG_ACC = this.REG_X = this.F_ZERO = this.load(r), this.F_SIGN = this.REG_ACC >> 7 & 1, s += o;
            break;
          case 61:
            this.write(r, this.REG_ACC & this.REG_X);
            break;
          case 62:
            i = this.load(r) - 1 & 255, this.write(r, i), i = this.REG_ACC - i, this.F_CARRY = i >= 0 ? 1 : 0, this.F_SIGN = i >> 7 & 1, this.F_ZERO = 255 & i, a !== 11 && (s += o);
            break;
          case 63:
            i = this.load(r) + 1 & 255, this.write(r, i), i = this.REG_ACC - i - (1 - this.F_CARRY), this.F_SIGN = i >> 7 & 1, this.F_ZERO = 255 & i, (128 & (this.REG_ACC ^ i)) != 0 && (128 & (this.REG_ACC ^ this.load(r))) != 0 ? this.F_OVERFLOW = 1 : this.F_OVERFLOW = 0, this.F_CARRY = i < 0 ? 0 : 1, this.REG_ACC = 255 & i, a !== 11 && (s += o);
            break;
          case 64:
            i = this.load(r), h = this.F_CARRY, this.F_CARRY = i >> 7 & 1, i = (i << 1 & 255) + h, this.write(r, i), this.REG_ACC = this.REG_ACC & i, this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC, a !== 11 && (s += o);
            break;
          case 65:
            i = this.load(r), h = this.F_CARRY << 7, this.F_CARRY = 1 & i, i = (i >> 1) + h, this.write(r, i), i = this.REG_ACC + this.load(r) + this.F_CARRY, (128 & (this.REG_ACC ^ this.load(r))) == 0 && (128 & (this.REG_ACC ^ i)) != 0 ? this.F_OVERFLOW = 1 : this.F_OVERFLOW = 0, this.F_CARRY = i > 255 ? 1 : 0, this.F_SIGN = i >> 7 & 1, this.F_ZERO = 255 & i, this.REG_ACC = 255 & i, a !== 11 && (s += o);
            break;
          case 66:
            i = this.load(r), this.F_CARRY = i >> 7 & 1, i = i << 1 & 255, this.write(r, i), this.REG_ACC = this.REG_ACC | i, this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC, a !== 11 && (s += o);
            break;
          case 67:
            i = 255 & this.load(r), this.F_CARRY = 1 & i, i >>= 1, this.write(r, i), this.REG_ACC = this.REG_ACC ^ i, this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC, a !== 11 && (s += o);
            break;
          case 68:
            break;
          case 69:
            this.load(r), a !== 11 && (s += o);
            break;
          default:
            this.nes.stop(), this.nes.crashMessage = "Game crashed, invalid opcode at address $" + R.toString(16);
        }
        return s;
      }, load: function(i) {
        return i < 8192 ? this.mem[2047 & i] : this.nes.mmap.load(i);
      }, load16bit: function(i) {
        return i < 8191 ? this.mem[2047 & i] | this.mem[i + 1 & 2047] << 8 : this.nes.mmap.load(i) | this.nes.mmap.load(i + 1) << 8;
      }, write: function(i, h) {
        i < 8192 ? this.mem[2047 & i] = h : this.nes.mmap.write(i, h);
      }, requestIrq: function(i) {
        this.irqRequested && i === this.IRQ_NORMAL || (this.irqRequested = !0, this.irqType = i);
      }, push: function(i) {
        this.nes.mmap.write(this.REG_SP, i), this.REG_SP--, this.REG_SP = 256 | 255 & this.REG_SP;
      }, stackWrap: function() {
        this.REG_SP = 256 | 255 & this.REG_SP;
      }, pull: function() {
        return this.REG_SP++, this.REG_SP = 256 | 255 & this.REG_SP, this.nes.mmap.load(this.REG_SP);
      }, pageCrossed: function(i, h) {
        return (65280 & i) != (65280 & h);
      }, haltCycles: function(i) {
        this.cyclesToHalt += i;
      }, doNonMaskableInterrupt: function(i) {
        (128 & this.nes.mmap.load(8192)) != 0 && (this.REG_PC_NEW++, this.push(this.REG_PC_NEW >> 8 & 255), this.push(255 & this.REG_PC_NEW), this.push(i), this.REG_PC_NEW = this.nes.mmap.load(65530) | this.nes.mmap.load(65531) << 8, this.REG_PC_NEW--);
      }, doResetInterrupt: function() {
        this.REG_PC_NEW = this.nes.mmap.load(65532) | this.nes.mmap.load(65533) << 8, this.REG_PC_NEW--;
      }, doIrq: function(i) {
        this.REG_PC_NEW++, this.push(this.REG_PC_NEW >> 8 & 255), this.push(255 & this.REG_PC_NEW), this.push(i), this.F_INTERRUPT_NEW = 1, this.F_BRK_NEW = 0, this.REG_PC_NEW = this.nes.mmap.load(65534) | this.nes.mmap.load(65535) << 8, this.REG_PC_NEW--;
      }, getStatus: function() {
        return this.F_CARRY | this.F_ZERO << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7;
      }, setStatus: function(i) {
        this.F_CARRY = 1 & i, this.F_ZERO = i >> 1 & 1, this.F_INTERRUPT = i >> 2 & 1, this.F_DECIMAL = i >> 3 & 1, this.F_BRK = i >> 4 & 1, this.F_NOTUSED = i >> 5 & 1, this.F_OVERFLOW = i >> 6 & 1, this.F_SIGN = i >> 7 & 1;
      }, JSON_PROPERTIES: ["mem", "cyclesToHalt", "irqRequested", "irqType", "REG_ACC", "REG_X", "REG_Y", "REG_SP", "REG_PC", "REG_PC_NEW", "REG_STATUS", "F_CARRY", "F_DECIMAL", "F_INTERRUPT", "F_INTERRUPT_NEW", "F_OVERFLOW", "F_SIGN", "F_ZERO", "F_NOTUSED", "F_NOTUSED_NEW", "F_BRK", "F_BRK_NEW"], toJSON: function() {
        return m.toJSON(this);
      }, fromJSON: function(i) {
        m.fromJSON(this, i);
      } };
      var e = function() {
        this.opdata = new Array(256);
        for (var i = 0; i < 256; i++)
          this.opdata[i] = 255;
        this.setOp(this.INS_ADC, 105, this.ADDR_IMM, 2, 2), this.setOp(this.INS_ADC, 101, this.ADDR_ZP, 2, 3), this.setOp(this.INS_ADC, 117, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_ADC, 109, this.ADDR_ABS, 3, 4), this.setOp(this.INS_ADC, 125, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_ADC, 121, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_ADC, 97, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_ADC, 113, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_AND, 41, this.ADDR_IMM, 2, 2), this.setOp(this.INS_AND, 37, this.ADDR_ZP, 2, 3), this.setOp(this.INS_AND, 53, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_AND, 45, this.ADDR_ABS, 3, 4), this.setOp(this.INS_AND, 61, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_AND, 57, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_AND, 33, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_AND, 49, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_ASL, 10, this.ADDR_ACC, 1, 2), this.setOp(this.INS_ASL, 6, this.ADDR_ZP, 2, 5), this.setOp(this.INS_ASL, 22, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_ASL, 14, this.ADDR_ABS, 3, 6), this.setOp(this.INS_ASL, 30, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_BCC, 144, this.ADDR_REL, 2, 2), this.setOp(this.INS_BCS, 176, this.ADDR_REL, 2, 2), this.setOp(this.INS_BEQ, 240, this.ADDR_REL, 2, 2), this.setOp(this.INS_BIT, 36, this.ADDR_ZP, 2, 3), this.setOp(this.INS_BIT, 44, this.ADDR_ABS, 3, 4), this.setOp(this.INS_BMI, 48, this.ADDR_REL, 2, 2), this.setOp(this.INS_BNE, 208, this.ADDR_REL, 2, 2), this.setOp(this.INS_BPL, 16, this.ADDR_REL, 2, 2), this.setOp(this.INS_BRK, 0, this.ADDR_IMP, 1, 7), this.setOp(this.INS_BVC, 80, this.ADDR_REL, 2, 2), this.setOp(this.INS_BVS, 112, this.ADDR_REL, 2, 2), this.setOp(this.INS_CLC, 24, this.ADDR_IMP, 1, 2), this.setOp(this.INS_CLD, 216, this.ADDR_IMP, 1, 2), this.setOp(this.INS_CLI, 88, this.ADDR_IMP, 1, 2), this.setOp(this.INS_CLV, 184, this.ADDR_IMP, 1, 2), this.setOp(this.INS_CMP, 201, this.ADDR_IMM, 2, 2), this.setOp(this.INS_CMP, 197, this.ADDR_ZP, 2, 3), this.setOp(this.INS_CMP, 213, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_CMP, 205, this.ADDR_ABS, 3, 4), this.setOp(this.INS_CMP, 221, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_CMP, 217, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_CMP, 193, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_CMP, 209, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_CPX, 224, this.ADDR_IMM, 2, 2), this.setOp(this.INS_CPX, 228, this.ADDR_ZP, 2, 3), this.setOp(this.INS_CPX, 236, this.ADDR_ABS, 3, 4), this.setOp(this.INS_CPY, 192, this.ADDR_IMM, 2, 2), this.setOp(this.INS_CPY, 196, this.ADDR_ZP, 2, 3), this.setOp(this.INS_CPY, 204, this.ADDR_ABS, 3, 4), this.setOp(this.INS_DEC, 198, this.ADDR_ZP, 2, 5), this.setOp(this.INS_DEC, 214, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_DEC, 206, this.ADDR_ABS, 3, 6), this.setOp(this.INS_DEC, 222, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_DEX, 202, this.ADDR_IMP, 1, 2), this.setOp(this.INS_DEY, 136, this.ADDR_IMP, 1, 2), this.setOp(this.INS_EOR, 73, this.ADDR_IMM, 2, 2), this.setOp(this.INS_EOR, 69, this.ADDR_ZP, 2, 3), this.setOp(this.INS_EOR, 85, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_EOR, 77, this.ADDR_ABS, 3, 4), this.setOp(this.INS_EOR, 93, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_EOR, 89, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_EOR, 65, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_EOR, 81, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_INC, 230, this.ADDR_ZP, 2, 5), this.setOp(this.INS_INC, 246, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_INC, 238, this.ADDR_ABS, 3, 6), this.setOp(this.INS_INC, 254, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_INX, 232, this.ADDR_IMP, 1, 2), this.setOp(this.INS_INY, 200, this.ADDR_IMP, 1, 2), this.setOp(this.INS_JMP, 76, this.ADDR_ABS, 3, 3), this.setOp(this.INS_JMP, 108, this.ADDR_INDABS, 3, 5), this.setOp(this.INS_JSR, 32, this.ADDR_ABS, 3, 6), this.setOp(this.INS_LDA, 169, this.ADDR_IMM, 2, 2), this.setOp(this.INS_LDA, 165, this.ADDR_ZP, 2, 3), this.setOp(this.INS_LDA, 181, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_LDA, 173, this.ADDR_ABS, 3, 4), this.setOp(this.INS_LDA, 189, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_LDA, 185, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_LDA, 161, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_LDA, 177, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_LDX, 162, this.ADDR_IMM, 2, 2), this.setOp(this.INS_LDX, 166, this.ADDR_ZP, 2, 3), this.setOp(this.INS_LDX, 182, this.ADDR_ZPY, 2, 4), this.setOp(this.INS_LDX, 174, this.ADDR_ABS, 3, 4), this.setOp(this.INS_LDX, 190, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_LDY, 160, this.ADDR_IMM, 2, 2), this.setOp(this.INS_LDY, 164, this.ADDR_ZP, 2, 3), this.setOp(this.INS_LDY, 180, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_LDY, 172, this.ADDR_ABS, 3, 4), this.setOp(this.INS_LDY, 188, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_LSR, 74, this.ADDR_ACC, 1, 2), this.setOp(this.INS_LSR, 70, this.ADDR_ZP, 2, 5), this.setOp(this.INS_LSR, 86, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_LSR, 78, this.ADDR_ABS, 3, 6), this.setOp(this.INS_LSR, 94, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_NOP, 26, this.ADDR_IMP, 1, 2), this.setOp(this.INS_NOP, 58, this.ADDR_IMP, 1, 2), this.setOp(this.INS_NOP, 90, this.ADDR_IMP, 1, 2), this.setOp(this.INS_NOP, 122, this.ADDR_IMP, 1, 2), this.setOp(this.INS_NOP, 218, this.ADDR_IMP, 1, 2), this.setOp(this.INS_NOP, 234, this.ADDR_IMP, 1, 2), this.setOp(this.INS_NOP, 250, this.ADDR_IMP, 1, 2), this.setOp(this.INS_ORA, 9, this.ADDR_IMM, 2, 2), this.setOp(this.INS_ORA, 5, this.ADDR_ZP, 2, 3), this.setOp(this.INS_ORA, 21, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_ORA, 13, this.ADDR_ABS, 3, 4), this.setOp(this.INS_ORA, 29, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_ORA, 25, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_ORA, 1, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_ORA, 17, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_PHA, 72, this.ADDR_IMP, 1, 3), this.setOp(this.INS_PHP, 8, this.ADDR_IMP, 1, 3), this.setOp(this.INS_PLA, 104, this.ADDR_IMP, 1, 4), this.setOp(this.INS_PLP, 40, this.ADDR_IMP, 1, 4), this.setOp(this.INS_ROL, 42, this.ADDR_ACC, 1, 2), this.setOp(this.INS_ROL, 38, this.ADDR_ZP, 2, 5), this.setOp(this.INS_ROL, 54, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_ROL, 46, this.ADDR_ABS, 3, 6), this.setOp(this.INS_ROL, 62, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_ROR, 106, this.ADDR_ACC, 1, 2), this.setOp(this.INS_ROR, 102, this.ADDR_ZP, 2, 5), this.setOp(this.INS_ROR, 118, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_ROR, 110, this.ADDR_ABS, 3, 6), this.setOp(this.INS_ROR, 126, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_RTI, 64, this.ADDR_IMP, 1, 6), this.setOp(this.INS_RTS, 96, this.ADDR_IMP, 1, 6), this.setOp(this.INS_SBC, 233, this.ADDR_IMM, 2, 2), this.setOp(this.INS_SBC, 229, this.ADDR_ZP, 2, 3), this.setOp(this.INS_SBC, 245, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_SBC, 237, this.ADDR_ABS, 3, 4), this.setOp(this.INS_SBC, 253, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_SBC, 249, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_SBC, 225, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_SBC, 241, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_SEC, 56, this.ADDR_IMP, 1, 2), this.setOp(this.INS_SED, 248, this.ADDR_IMP, 1, 2), this.setOp(this.INS_SEI, 120, this.ADDR_IMP, 1, 2), this.setOp(this.INS_STA, 133, this.ADDR_ZP, 2, 3), this.setOp(this.INS_STA, 149, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_STA, 141, this.ADDR_ABS, 3, 4), this.setOp(this.INS_STA, 157, this.ADDR_ABSX, 3, 5), this.setOp(this.INS_STA, 153, this.ADDR_ABSY, 3, 5), this.setOp(this.INS_STA, 129, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_STA, 145, this.ADDR_POSTIDXIND, 2, 6), this.setOp(this.INS_STX, 134, this.ADDR_ZP, 2, 3), this.setOp(this.INS_STX, 150, this.ADDR_ZPY, 2, 4), this.setOp(this.INS_STX, 142, this.ADDR_ABS, 3, 4), this.setOp(this.INS_STY, 132, this.ADDR_ZP, 2, 3), this.setOp(this.INS_STY, 148, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_STY, 140, this.ADDR_ABS, 3, 4), this.setOp(this.INS_TAX, 170, this.ADDR_IMP, 1, 2), this.setOp(this.INS_TAY, 168, this.ADDR_IMP, 1, 2), this.setOp(this.INS_TSX, 186, this.ADDR_IMP, 1, 2), this.setOp(this.INS_TXA, 138, this.ADDR_IMP, 1, 2), this.setOp(this.INS_TXS, 154, this.ADDR_IMP, 1, 2), this.setOp(this.INS_TYA, 152, this.ADDR_IMP, 1, 2), this.setOp(this.INS_ALR, 75, this.ADDR_IMM, 2, 2), this.setOp(this.INS_ANC, 11, this.ADDR_IMM, 2, 2), this.setOp(this.INS_ANC, 43, this.ADDR_IMM, 2, 2), this.setOp(this.INS_ARR, 107, this.ADDR_IMM, 2, 2), this.setOp(this.INS_AXS, 203, this.ADDR_IMM, 2, 2), this.setOp(this.INS_LAX, 163, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_LAX, 167, this.ADDR_ZP, 2, 3), this.setOp(this.INS_LAX, 175, this.ADDR_ABS, 3, 4), this.setOp(this.INS_LAX, 179, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_LAX, 183, this.ADDR_ZPY, 2, 4), this.setOp(this.INS_LAX, 191, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_SAX, 131, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_SAX, 135, this.ADDR_ZP, 2, 3), this.setOp(this.INS_SAX, 143, this.ADDR_ABS, 3, 4), this.setOp(this.INS_SAX, 151, this.ADDR_ZPY, 2, 4), this.setOp(this.INS_DCP, 195, this.ADDR_PREIDXIND, 2, 8), this.setOp(this.INS_DCP, 199, this.ADDR_ZP, 2, 5), this.setOp(this.INS_DCP, 207, this.ADDR_ABS, 3, 6), this.setOp(this.INS_DCP, 211, this.ADDR_POSTIDXIND, 2, 8), this.setOp(this.INS_DCP, 215, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_DCP, 219, this.ADDR_ABSY, 3, 7), this.setOp(this.INS_DCP, 223, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_ISC, 227, this.ADDR_PREIDXIND, 2, 8), this.setOp(this.INS_ISC, 231, this.ADDR_ZP, 2, 5), this.setOp(this.INS_ISC, 239, this.ADDR_ABS, 3, 6), this.setOp(this.INS_ISC, 243, this.ADDR_POSTIDXIND, 2, 8), this.setOp(this.INS_ISC, 247, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_ISC, 251, this.ADDR_ABSY, 3, 7), this.setOp(this.INS_ISC, 255, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_RLA, 35, this.ADDR_PREIDXIND, 2, 8), this.setOp(this.INS_RLA, 39, this.ADDR_ZP, 2, 5), this.setOp(this.INS_RLA, 47, this.ADDR_ABS, 3, 6), this.setOp(this.INS_RLA, 51, this.ADDR_POSTIDXIND, 2, 8), this.setOp(this.INS_RLA, 55, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_RLA, 59, this.ADDR_ABSY, 3, 7), this.setOp(this.INS_RLA, 63, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_RRA, 99, this.ADDR_PREIDXIND, 2, 8), this.setOp(this.INS_RRA, 103, this.ADDR_ZP, 2, 5), this.setOp(this.INS_RRA, 111, this.ADDR_ABS, 3, 6), this.setOp(this.INS_RRA, 115, this.ADDR_POSTIDXIND, 2, 8), this.setOp(this.INS_RRA, 119, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_RRA, 123, this.ADDR_ABSY, 3, 7), this.setOp(this.INS_RRA, 127, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_SLO, 3, this.ADDR_PREIDXIND, 2, 8), this.setOp(this.INS_SLO, 7, this.ADDR_ZP, 2, 5), this.setOp(this.INS_SLO, 15, this.ADDR_ABS, 3, 6), this.setOp(this.INS_SLO, 19, this.ADDR_POSTIDXIND, 2, 8), this.setOp(this.INS_SLO, 23, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_SLO, 27, this.ADDR_ABSY, 3, 7), this.setOp(this.INS_SLO, 31, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_SRE, 67, this.ADDR_PREIDXIND, 2, 8), this.setOp(this.INS_SRE, 71, this.ADDR_ZP, 2, 5), this.setOp(this.INS_SRE, 79, this.ADDR_ABS, 3, 6), this.setOp(this.INS_SRE, 83, this.ADDR_POSTIDXIND, 2, 8), this.setOp(this.INS_SRE, 87, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_SRE, 91, this.ADDR_ABSY, 3, 7), this.setOp(this.INS_SRE, 95, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_SKB, 128, this.ADDR_IMM, 2, 2), this.setOp(this.INS_SKB, 130, this.ADDR_IMM, 2, 2), this.setOp(this.INS_SKB, 137, this.ADDR_IMM, 2, 2), this.setOp(this.INS_SKB, 194, this.ADDR_IMM, 2, 2), this.setOp(this.INS_SKB, 226, this.ADDR_IMM, 2, 2), this.setOp(this.INS_IGN, 12, this.ADDR_ABS, 3, 4), this.setOp(this.INS_IGN, 28, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_IGN, 60, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_IGN, 92, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_IGN, 124, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_IGN, 220, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_IGN, 252, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_IGN, 4, this.ADDR_ZP, 2, 3), this.setOp(this.INS_IGN, 68, this.ADDR_ZP, 2, 3), this.setOp(this.INS_IGN, 100, this.ADDR_ZP, 2, 3), this.setOp(this.INS_IGN, 20, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_IGN, 52, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_IGN, 84, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_IGN, 116, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_IGN, 212, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_IGN, 244, this.ADDR_ZPX, 2, 4), this.cycTable = new Array(7, 6, 2, 8, 3, 3, 5, 5, 3, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7, 6, 6, 2, 8, 3, 3, 5, 5, 4, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7, 6, 6, 2, 8, 3, 3, 5, 5, 3, 2, 2, 2, 3, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7, 6, 6, 2, 8, 3, 3, 5, 5, 4, 2, 2, 2, 5, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7, 2, 6, 2, 6, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4, 2, 6, 2, 6, 4, 4, 4, 4, 2, 5, 2, 5, 5, 5, 5, 5, 2, 6, 2, 6, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4, 2, 5, 2, 5, 4, 4, 4, 4, 2, 4, 2, 4, 4, 4, 4, 4, 2, 6, 2, 8, 3, 3, 5, 5, 2, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7, 2, 6, 3, 8, 3, 3, 5, 5, 2, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7), this.instname = new Array(70), this.instname[0] = "ADC", this.instname[1] = "AND", this.instname[2] = "ASL", this.instname[3] = "BCC", this.instname[4] = "BCS", this.instname[5] = "BEQ", this.instname[6] = "BIT", this.instname[7] = "BMI", this.instname[8] = "BNE", this.instname[9] = "BPL", this.instname[10] = "BRK", this.instname[11] = "BVC", this.instname[12] = "BVS", this.instname[13] = "CLC", this.instname[14] = "CLD", this.instname[15] = "CLI", this.instname[16] = "CLV", this.instname[17] = "CMP", this.instname[18] = "CPX", this.instname[19] = "CPY", this.instname[20] = "DEC", this.instname[21] = "DEX", this.instname[22] = "DEY", this.instname[23] = "EOR", this.instname[24] = "INC", this.instname[25] = "INX", this.instname[26] = "INY", this.instname[27] = "JMP", this.instname[28] = "JSR", this.instname[29] = "LDA", this.instname[30] = "LDX", this.instname[31] = "LDY", this.instname[32] = "LSR", this.instname[33] = "NOP", this.instname[34] = "ORA", this.instname[35] = "PHA", this.instname[36] = "PHP", this.instname[37] = "PLA", this.instname[38] = "PLP", this.instname[39] = "ROL", this.instname[40] = "ROR", this.instname[41] = "RTI", this.instname[42] = "RTS", this.instname[43] = "SBC", this.instname[44] = "SEC", this.instname[45] = "SED", this.instname[46] = "SEI", this.instname[47] = "STA", this.instname[48] = "STX", this.instname[49] = "STY", this.instname[50] = "TAX", this.instname[51] = "TAY", this.instname[52] = "TSX", this.instname[53] = "TXA", this.instname[54] = "TXS", this.instname[55] = "TYA", this.instname[56] = "ALR", this.instname[57] = "ANC", this.instname[58] = "ARR", this.instname[59] = "AXS", this.instname[60] = "LAX", this.instname[61] = "SAX", this.instname[62] = "DCP", this.instname[63] = "ISC", this.instname[64] = "RLA", this.instname[65] = "RRA", this.instname[66] = "SLO", this.instname[67] = "SRE", this.instname[68] = "SKB", this.instname[69] = "IGN", this.addrDesc = new Array("Zero Page           ", "Relative            ", "Implied             ", "Absolute            ", "Accumulator         ", "Immediate           ", "Zero Page,X         ", "Zero Page,Y         ", "Absolute,X          ", "Absolute,Y          ", "Preindexed Indirect ", "Postindexed Indirect", "Indirect Absolute   ");
      };
      e.prototype = { INS_ADC: 0, INS_AND: 1, INS_ASL: 2, INS_BCC: 3, INS_BCS: 4, INS_BEQ: 5, INS_BIT: 6, INS_BMI: 7, INS_BNE: 8, INS_BPL: 9, INS_BRK: 10, INS_BVC: 11, INS_BVS: 12, INS_CLC: 13, INS_CLD: 14, INS_CLI: 15, INS_CLV: 16, INS_CMP: 17, INS_CPX: 18, INS_CPY: 19, INS_DEC: 20, INS_DEX: 21, INS_DEY: 22, INS_EOR: 23, INS_INC: 24, INS_INX: 25, INS_INY: 26, INS_JMP: 27, INS_JSR: 28, INS_LDA: 29, INS_LDX: 30, INS_LDY: 31, INS_LSR: 32, INS_NOP: 33, INS_ORA: 34, INS_PHA: 35, INS_PHP: 36, INS_PLA: 37, INS_PLP: 38, INS_ROL: 39, INS_ROR: 40, INS_RTI: 41, INS_RTS: 42, INS_SBC: 43, INS_SEC: 44, INS_SED: 45, INS_SEI: 46, INS_STA: 47, INS_STX: 48, INS_STY: 49, INS_TAX: 50, INS_TAY: 51, INS_TSX: 52, INS_TXA: 53, INS_TXS: 54, INS_TYA: 55, INS_ALR: 56, INS_ANC: 57, INS_ARR: 58, INS_AXS: 59, INS_LAX: 60, INS_SAX: 61, INS_DCP: 62, INS_ISC: 63, INS_RLA: 64, INS_RRA: 65, INS_SLO: 66, INS_SRE: 67, INS_SKB: 68, INS_IGN: 69, INS_DUMMY: 70, ADDR_ZP: 0, ADDR_REL: 1, ADDR_IMP: 2, ADDR_ABS: 3, ADDR_ACC: 4, ADDR_IMM: 5, ADDR_ZPX: 6, ADDR_ZPY: 7, ADDR_ABSX: 8, ADDR_ABSY: 9, ADDR_PREIDXIND: 10, ADDR_POSTIDXIND: 11, ADDR_INDABS: 12, setOp: function(i, h, t, s, o) {
        this.opdata[h] = 255 & i | (255 & t) << 8 | (255 & s) << 16 | (255 & o) << 24;
      } }, u.exports = n;
    }, function(u, c, d) {
      var m = d(2), n = d(0), e = function(t) {
        this.nes = t, this.vramMem = null, this.spriteMem = null, this.vramAddress = null, this.vramTmpAddress = null, this.vramBufferedReadValue = null, this.firstWrite = null, this.sramAddress = null, this.currentMirroring = null, this.requestEndFrame = null, this.nmiOk = null, this.dummyCycleToggle = null, this.validTileData = null, this.nmiCounter = null, this.scanlineAlreadyRendered = null, this.f_nmiOnVblank = null, this.f_spriteSize = null, this.f_bgPatternTable = null, this.f_spPatternTable = null, this.f_addrInc = null, this.f_nTblAddress = null, this.f_color = null, this.f_spVisibility = null, this.f_bgVisibility = null, this.f_spClipping = null, this.f_bgClipping = null, this.f_dispType = null, this.cntFV = null, this.cntV = null, this.cntH = null, this.cntVT = null, this.cntHT = null, this.regFV = null, this.regV = null, this.regH = null, this.regVT = null, this.regHT = null, this.regFH = null, this.regS = null, this.curNt = null, this.attrib = null, this.buffer = null, this.bgbuffer = null, this.pixrendered = null, this.validTileData = null, this.scantile = null, this.scanline = null, this.lastRenderedScanline = null, this.curX = null, this.sprX = null, this.sprY = null, this.sprTile = null, this.sprCol = null, this.vertFlip = null, this.horiFlip = null, this.bgPriority = null, this.spr0HitX = null, this.spr0HitY = null, this.hitSpr0 = null, this.sprPalette = null, this.imgPalette = null, this.ptTile = null, this.ntable1 = null, this.currentMirroring = null, this.nameTable = null, this.vramMirrorTable = null, this.palTable = null, this.showSpr0Hit = !1, this.clipToTvSize = !0, this.reset();
      };
      e.prototype = { STATUS_VRAMWRITE: 4, STATUS_SLSPRITECOUNT: 5, STATUS_SPRITE0HIT: 6, STATUS_VBLANK: 7, reset: function() {
        var t;
        for (this.vramMem = new Array(32768), this.spriteMem = new Array(256), t = 0; t < this.vramMem.length; t++)
          this.vramMem[t] = 0;
        for (t = 0; t < this.spriteMem.length; t++)
          this.spriteMem[t] = 0;
        for (this.vramAddress = null, this.vramTmpAddress = null, this.vramBufferedReadValue = 0, this.firstWrite = !0, this.sramAddress = 0, this.currentMirroring = -1, this.requestEndFrame = !1, this.nmiOk = !1, this.dummyCycleToggle = !1, this.validTileData = !1, this.nmiCounter = 0, this.scanlineAlreadyRendered = null, this.f_nmiOnVblank = 0, this.f_spriteSize = 0, this.f_bgPatternTable = 0, this.f_spPatternTable = 0, this.f_addrInc = 0, this.f_nTblAddress = 0, this.f_color = 0, this.f_spVisibility = 0, this.f_bgVisibility = 0, this.f_spClipping = 0, this.f_bgClipping = 0, this.f_dispType = 0, this.cntFV = 0, this.cntV = 0, this.cntH = 0, this.cntVT = 0, this.cntHT = 0, this.regFV = 0, this.regV = 0, this.regH = 0, this.regVT = 0, this.regHT = 0, this.regFH = 0, this.regS = 0, this.curNt = null, this.attrib = new Array(32), this.buffer = new Array(61440), this.bgbuffer = new Array(61440), this.pixrendered = new Array(61440), this.validTileData = null, this.scantile = new Array(32), this.scanline = 0, this.lastRenderedScanline = -1, this.curX = 0, this.sprX = new Array(64), this.sprY = new Array(64), this.sprTile = new Array(64), this.sprCol = new Array(64), this.vertFlip = new Array(64), this.horiFlip = new Array(64), this.bgPriority = new Array(64), this.spr0HitX = 0, this.spr0HitY = 0, this.hitSpr0 = !1, this.sprPalette = new Array(16), this.imgPalette = new Array(16), this.ptTile = new Array(512), t = 0; t < 512; t++)
          this.ptTile[t] = new m();
        for (this.ntable1 = new Array(4), this.currentMirroring = -1, this.nameTable = new Array(4), t = 0; t < 4; t++)
          this.nameTable[t] = new i(32, 32, "Nt" + t);
        for (this.vramMirrorTable = new Array(32768), t = 0; t < 32768; t++)
          this.vramMirrorTable[t] = t;
        this.palTable = new h(), this.palTable.loadNTSCPalette(), this.updateControlReg1(0), this.updateControlReg2(0);
      }, setMirroring: function(t) {
        if (t !== this.currentMirroring) {
          this.currentMirroring = t, this.triggerRendering(), this.vramMirrorTable === null && (this.vramMirrorTable = new Array(32768));
          for (var s = 0; s < 32768; s++)
            this.vramMirrorTable[s] = s;
          this.defineMirrorRegion(16160, 16128, 32), this.defineMirrorRegion(16192, 16128, 32), this.defineMirrorRegion(16256, 16128, 32), this.defineMirrorRegion(16320, 16128, 32), this.defineMirrorRegion(12288, 8192, 3840), this.defineMirrorRegion(16384, 0, 16384), t === this.nes.rom.HORIZONTAL_MIRRORING ? (this.ntable1[0] = 0, this.ntable1[1] = 0, this.ntable1[2] = 1, this.ntable1[3] = 1, this.defineMirrorRegion(9216, 8192, 1024), this.defineMirrorRegion(11264, 10240, 1024)) : t === this.nes.rom.VERTICAL_MIRRORING ? (this.ntable1[0] = 0, this.ntable1[1] = 1, this.ntable1[2] = 0, this.ntable1[3] = 1, this.defineMirrorRegion(10240, 8192, 1024), this.defineMirrorRegion(11264, 9216, 1024)) : t === this.nes.rom.SINGLESCREEN_MIRRORING ? (this.ntable1[0] = 0, this.ntable1[1] = 0, this.ntable1[2] = 0, this.ntable1[3] = 0, this.defineMirrorRegion(9216, 8192, 1024), this.defineMirrorRegion(10240, 8192, 1024), this.defineMirrorRegion(11264, 8192, 1024)) : t === this.nes.rom.SINGLESCREEN_MIRRORING2 ? (this.ntable1[0] = 1, this.ntable1[1] = 1, this.ntable1[2] = 1, this.ntable1[3] = 1, this.defineMirrorRegion(9216, 9216, 1024), this.defineMirrorRegion(10240, 9216, 1024), this.defineMirrorRegion(11264, 9216, 1024)) : (this.ntable1[0] = 0, this.ntable1[1] = 1, this.ntable1[2] = 2, this.ntable1[3] = 3);
        }
      }, defineMirrorRegion: function(t, s, o) {
        for (var a = 0; a < o; a++)
          this.vramMirrorTable[t + a] = s + a;
      }, startVBlank: function() {
        this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NMI), this.lastRenderedScanline < 239 && this.renderFramePartially(this.lastRenderedScanline + 1, 240 - this.lastRenderedScanline), this.endFrame(), this.lastRenderedScanline = -1;
      }, endScanline: function() {
        switch (this.scanline) {
          case 19:
            this.dummyCycleToggle && (this.curX = 1, this.dummyCycleToggle = !this.dummyCycleToggle);
            break;
          case 20:
            this.setStatusFlag(this.STATUS_VBLANK, !1), this.setStatusFlag(this.STATUS_SPRITE0HIT, !1), this.hitSpr0 = !1, this.spr0HitX = -1, this.spr0HitY = -1, this.f_bgVisibility !== 1 && this.f_spVisibility !== 1 || (this.cntFV = this.regFV, this.cntV = this.regV, this.cntH = this.regH, this.cntVT = this.regVT, this.cntHT = this.regHT, this.f_bgVisibility === 1 && this.renderBgScanline(!1, 0)), this.f_bgVisibility === 1 && this.f_spVisibility === 1 && this.checkSprite0(0), this.f_bgVisibility !== 1 && this.f_spVisibility !== 1 || this.nes.mmap.clockIrqCounter();
            break;
          case 261:
            this.setStatusFlag(this.STATUS_VBLANK, !0), this.requestEndFrame = !0, this.nmiCounter = 9, this.scanline = -1;
            break;
          default:
            this.scanline >= 21 && this.scanline <= 260 && (this.f_bgVisibility === 1 && (this.scanlineAlreadyRendered || (this.cntHT = this.regHT, this.cntH = this.regH, this.renderBgScanline(!0, this.scanline + 1 - 21)), this.scanlineAlreadyRendered = !1, this.hitSpr0 || this.f_spVisibility !== 1 || this.sprX[0] >= -7 && this.sprX[0] < 256 && this.sprY[0] + 1 <= this.scanline - 20 && this.sprY[0] + 1 + (this.f_spriteSize === 0 ? 8 : 16) >= this.scanline - 20 && this.checkSprite0(this.scanline - 20) && (this.hitSpr0 = !0)), this.f_bgVisibility !== 1 && this.f_spVisibility !== 1 || this.nes.mmap.clockIrqCounter());
        }
        this.scanline++, this.regsToAddress(), this.cntsToAddress();
      }, startFrame: function() {
        var t = 0;
        if (this.f_dispType === 0)
          t = this.imgPalette[0];
        else
          switch (this.f_color) {
            case 0:
              t = 0;
              break;
            case 1:
              t = 65280;
              break;
            case 2:
              t = 16711680;
              break;
            case 3:
              t = 0;
              break;
            case 4:
              t = 255;
              break;
            default:
              t = 0;
          }
        var s, o = this.buffer;
        for (s = 0; s < 61440; s++)
          o[s] = t;
        var a = this.pixrendered;
        for (s = 0; s < a.length; s++)
          a[s] = 65;
      }, endFrame: function() {
        var t, s, o, a = this.buffer;
        if (this.showSpr0Hit) {
          if (this.sprX[0] >= 0 && this.sprX[0] < 256 && this.sprY[0] >= 0 && this.sprY[0] < 240) {
            for (t = 0; t < 256; t++)
              a[(this.sprY[0] << 8) + t] = 16733525;
            for (t = 0; t < 240; t++)
              a[(t << 8) + this.sprX[0]] = 16733525;
          }
          if (this.spr0HitX >= 0 && this.spr0HitX < 256 && this.spr0HitY >= 0 && this.spr0HitY < 240) {
            for (t = 0; t < 256; t++)
              a[(this.spr0HitY << 8) + t] = 5635925;
            for (t = 0; t < 240; t++)
              a[(t << 8) + this.spr0HitX] = 5635925;
          }
        }
        if (this.clipToTvSize || this.f_bgClipping === 0 || this.f_spClipping === 0)
          for (o = 0; o < 240; o++)
            for (s = 0; s < 8; s++)
              a[(o << 8) + s] = 0;
        if (this.clipToTvSize)
          for (o = 0; o < 240; o++)
            for (s = 0; s < 8; s++)
              a[255 + (o << 8) - s] = 0;
        if (this.clipToTvSize)
          for (o = 0; o < 8; o++)
            for (s = 0; s < 256; s++)
              a[(o << 8) + s] = 0, a[(239 - o << 8) + s] = 0;
        this.nes.ui.writeFrame(a);
      }, updateControlReg1: function(t) {
        this.triggerRendering(), this.f_nmiOnVblank = t >> 7 & 1, this.f_spriteSize = t >> 5 & 1, this.f_bgPatternTable = t >> 4 & 1, this.f_spPatternTable = t >> 3 & 1, this.f_addrInc = t >> 2 & 1, this.f_nTblAddress = 3 & t, this.regV = t >> 1 & 1, this.regH = 1 & t, this.regS = t >> 4 & 1;
      }, updateControlReg2: function(t) {
        this.triggerRendering(), this.f_color = t >> 5 & 7, this.f_spVisibility = t >> 4 & 1, this.f_bgVisibility = t >> 3 & 1, this.f_spClipping = t >> 2 & 1, this.f_bgClipping = t >> 1 & 1, this.f_dispType = 1 & t, this.f_dispType === 0 && this.palTable.setEmphasis(this.f_color), this.updatePalettes();
      }, setStatusFlag: function(t, s) {
        var o = 1 << t;
        this.nes.cpu.mem[8194] = this.nes.cpu.mem[8194] & 255 - o | (s ? o : 0);
      }, readStatusRegister: function() {
        var t = this.nes.cpu.mem[8194];
        return this.firstWrite = !0, this.setStatusFlag(this.STATUS_VBLANK, !1), t;
      }, writeSRAMAddress: function(t) {
        this.sramAddress = t;
      }, sramLoad: function() {
        return this.spriteMem[this.sramAddress];
      }, sramWrite: function(t) {
        this.spriteMem[this.sramAddress] = t, this.spriteRamWriteUpdate(this.sramAddress, t), this.sramAddress++, this.sramAddress %= 256;
      }, scrollWrite: function(t) {
        this.triggerRendering(), this.firstWrite ? (this.regHT = t >> 3 & 31, this.regFH = 7 & t) : (this.regFV = 7 & t, this.regVT = t >> 3 & 31), this.firstWrite = !this.firstWrite;
      }, writeVRAMAddress: function(t) {
        this.firstWrite ? (this.regFV = t >> 4 & 3, this.regV = t >> 3 & 1, this.regH = t >> 2 & 1, this.regVT = 7 & this.regVT | (3 & t) << 3) : (this.triggerRendering(), this.regVT = 24 & this.regVT | t >> 5 & 7, this.regHT = 31 & t, this.cntFV = this.regFV, this.cntV = this.regV, this.cntH = this.regH, this.cntVT = this.regVT, this.cntHT = this.regHT, this.checkSprite0(this.scanline - 20)), this.firstWrite = !this.firstWrite, this.cntsToAddress(), this.vramAddress < 8192 && this.nes.mmap.latchAccess(this.vramAddress);
      }, vramLoad: function() {
        var t;
        return this.cntsToAddress(), this.regsToAddress(), this.vramAddress <= 16127 ? (t = this.vramBufferedReadValue, this.vramAddress < 8192 ? this.vramBufferedReadValue = this.vramMem[this.vramAddress] : this.vramBufferedReadValue = this.mirroredLoad(this.vramAddress), this.vramAddress < 8192 && this.nes.mmap.latchAccess(this.vramAddress), this.vramAddress += this.f_addrInc === 1 ? 32 : 1, this.cntsFromAddress(), this.regsFromAddress(), t) : (t = this.mirroredLoad(this.vramAddress), this.vramAddress += this.f_addrInc === 1 ? 32 : 1, this.cntsFromAddress(), this.regsFromAddress(), t);
      }, vramWrite: function(t) {
        this.triggerRendering(), this.cntsToAddress(), this.regsToAddress(), this.vramAddress >= 8192 ? this.mirroredWrite(this.vramAddress, t) : (this.writeMem(this.vramAddress, t), this.nes.mmap.latchAccess(this.vramAddress)), this.vramAddress += this.f_addrInc === 1 ? 32 : 1, this.regsFromAddress(), this.cntsFromAddress();
      }, sramDMA: function(t) {
        for (var s, o = 256 * t, a = this.sramAddress; a < 256; a++)
          s = this.nes.cpu.mem[o + a], this.spriteMem[a] = s, this.spriteRamWriteUpdate(a, s);
        this.nes.cpu.haltCycles(513);
      }, regsFromAddress: function() {
        var t = this.vramTmpAddress >> 8 & 255;
        this.regFV = t >> 4 & 7, this.regV = t >> 3 & 1, this.regH = t >> 2 & 1, this.regVT = 7 & this.regVT | (3 & t) << 3, t = 255 & this.vramTmpAddress, this.regVT = 24 & this.regVT | t >> 5 & 7, this.regHT = 31 & t;
      }, cntsFromAddress: function() {
        var t = this.vramAddress >> 8 & 255;
        this.cntFV = t >> 4 & 3, this.cntV = t >> 3 & 1, this.cntH = t >> 2 & 1, this.cntVT = 7 & this.cntVT | (3 & t) << 3, t = 255 & this.vramAddress, this.cntVT = 24 & this.cntVT | t >> 5 & 7, this.cntHT = 31 & t;
      }, regsToAddress: function() {
        var t = (7 & this.regFV) << 4;
        t |= (1 & this.regV) << 3, t |= (1 & this.regH) << 2, t |= this.regVT >> 3 & 3;
        var s = (7 & this.regVT) << 5;
        s |= 31 & this.regHT, this.vramTmpAddress = 32767 & (t << 8 | s);
      }, cntsToAddress: function() {
        var t = (7 & this.cntFV) << 4;
        t |= (1 & this.cntV) << 3, t |= (1 & this.cntH) << 2, t |= this.cntVT >> 3 & 3;
        var s = (7 & this.cntVT) << 5;
        s |= 31 & this.cntHT, this.vramAddress = 32767 & (t << 8 | s);
      }, incTileCounter: function(t) {
        for (var s = t; s !== 0; s--)
          ++this.cntHT === 32 && (this.cntHT = 0, ++this.cntVT >= 30 && ++this.cntH === 2 && (this.cntH = 0, ++this.cntV === 2 && (this.cntV = 0, this.cntFV++, this.cntFV &= 7)));
      }, mirroredLoad: function(t) {
        return this.vramMem[this.vramMirrorTable[t]];
      }, mirroredWrite: function(t, s) {
        if (t >= 16128 && t < 16160)
          t === 16128 || t === 16144 ? (this.writeMem(16128, s), this.writeMem(16144, s)) : t === 16132 || t === 16148 ? (this.writeMem(16132, s), this.writeMem(16148, s)) : t === 16136 || t === 16152 ? (this.writeMem(16136, s), this.writeMem(16152, s)) : t === 16140 || t === 16156 ? (this.writeMem(16140, s), this.writeMem(16156, s)) : this.writeMem(t, s);
        else {
          if (!(t < this.vramMirrorTable.length))
            throw new Error("Invalid VRAM address: " + t.toString(16));
          this.writeMem(this.vramMirrorTable[t], s);
        }
      }, triggerRendering: function() {
        this.scanline >= 21 && this.scanline <= 260 && (this.renderFramePartially(this.lastRenderedScanline + 1, this.scanline - 21 - this.lastRenderedScanline), this.lastRenderedScanline = this.scanline - 21);
      }, renderFramePartially: function(t, s) {
        if (this.f_spVisibility === 1 && this.renderSpritesPartially(t, s, !0), this.f_bgVisibility === 1) {
          var o = t << 8, a = t + s << 8;
          a > 61440 && (a = 61440);
          for (var R = this.buffer, r = this.bgbuffer, _ = this.pixrendered, g = o; g < a; g++)
            _[g] > 255 && (R[g] = r[g]);
        }
        this.f_spVisibility === 1 && this.renderSpritesPartially(t, s, !1), this.validTileData = !1;
      }, renderBgScanline: function(t, s) {
        var o = this.regS === 0 ? 0 : 256, a = (s << 8) - this.regFH;
        if (this.curNt = this.ntable1[this.cntV + this.cntV + this.cntH], this.cntHT = this.regHT, this.cntH = this.regH, this.curNt = this.ntable1[this.cntV + this.cntV + this.cntH], s < 240 && s - this.cntFV >= 0) {
          for (var R, r, _, g, D = this.cntFV << 3, N = this.scantile, T = this.attrib, b = this.ptTile, B = this.nameTable, H = this.imgPalette, W = this.pixrendered, U = t ? this.bgbuffer : this.buffer, O = 0; O < 32; O++) {
            if (s >= 0) {
              if (this.validTileData) {
                if ((R = N[O]) === void 0)
                  continue;
                r = R.pix, _ = T[O];
              } else {
                if ((R = b[o + B[this.curNt].getTileIndex(this.cntHT, this.cntVT)]) === void 0)
                  continue;
                r = R.pix, _ = B[this.curNt].getAttrib(this.cntHT, this.cntVT), N[O] = R, T[O] = _;
              }
              var v = 0, k = (O << 3) - this.regFH;
              if (k > -8)
                if (k < 0 && (a -= k, v = -k), R.opaque[this.cntFV])
                  for (; v < 8; v++)
                    U[a] = H[r[D + v] + _], W[a] |= 256, a++;
                else
                  for (; v < 8; v++)
                    g = r[D + v], g !== 0 && (U[a] = H[g + _], W[a] |= 256), a++;
            }
            ++this.cntHT == 32 && (this.cntHT = 0, this.cntH++, this.cntH %= 2, this.curNt = this.ntable1[(this.cntV << 1) + this.cntH]);
          }
          this.validTileData = !0;
        }
        ++this.cntFV === 8 && (this.cntFV = 0, this.cntVT++, this.cntVT === 30 ? (this.cntVT = 0, this.cntV++, this.cntV %= 2, this.curNt = this.ntable1[(this.cntV << 1) + this.cntH]) : this.cntVT === 32 && (this.cntVT = 0), this.validTileData = !1);
      }, renderSpritesPartially: function(t, s, o) {
        if (this.f_spVisibility === 1) {
          for (var a = 0; a < 64; a++)
            if (this.bgPriority[a] === o && this.sprX[a] >= 0 && this.sprX[a] < 256 && this.sprY[a] + 8 >= t && this.sprY[a] < t + s)
              if (this.f_spriteSize === 0)
                this.srcy1 = 0, this.srcy2 = 8, this.sprY[a] < t && (this.srcy1 = t - this.sprY[a] - 1), this.sprY[a] + 8 > t + s && (this.srcy2 = t + s - this.sprY[a] + 1), this.f_spPatternTable === 0 ? this.ptTile[this.sprTile[a]].render(this.buffer, 0, this.srcy1, 8, this.srcy2, this.sprX[a], this.sprY[a] + 1, this.sprCol[a], this.sprPalette, this.horiFlip[a], this.vertFlip[a], a, this.pixrendered) : this.ptTile[this.sprTile[a] + 256].render(this.buffer, 0, this.srcy1, 8, this.srcy2, this.sprX[a], this.sprY[a] + 1, this.sprCol[a], this.sprPalette, this.horiFlip[a], this.vertFlip[a], a, this.pixrendered);
              else {
                var R = this.sprTile[a];
                (1 & R) != 0 && (R = this.sprTile[a] - 1 + 256);
                var r = 0, _ = 8;
                this.sprY[a] < t && (r = t - this.sprY[a] - 1), this.sprY[a] + 8 > t + s && (_ = t + s - this.sprY[a]), this.ptTile[R + (this.vertFlip[a] ? 1 : 0)].render(this.buffer, 0, r, 8, _, this.sprX[a], this.sprY[a] + 1, this.sprCol[a], this.sprPalette, this.horiFlip[a], this.vertFlip[a], a, this.pixrendered), r = 0, _ = 8, this.sprY[a] + 8 < t && (r = t - (this.sprY[a] + 8 + 1)), this.sprY[a] + 16 > t + s && (_ = t + s - (this.sprY[a] + 8)), this.ptTile[R + (this.vertFlip[a] ? 0 : 1)].render(this.buffer, 0, r, 8, _, this.sprX[a], this.sprY[a] + 1 + 8, this.sprCol[a], this.sprPalette, this.horiFlip[a], this.vertFlip[a], a, this.pixrendered);
              }
        }
      }, checkSprite0: function(t) {
        this.spr0HitX = -1, this.spr0HitY = -1;
        var s, o, a, R, r, _, g = this.f_spPatternTable === 0 ? 0 : 256;
        if (o = this.sprX[0], a = this.sprY[0] + 1, this.f_spriteSize === 0) {
          if (a <= t && a + 8 > t && o >= -7 && o < 256)
            if (R = this.ptTile[this.sprTile[0] + g], s = this.vertFlip[0] ? 7 - (t - a) : t - a, s *= 8, _ = 256 * t + o, this.horiFlip[0])
              for (r = 7; r >= 0; r--) {
                if (o >= 0 && o < 256 && _ >= 0 && _ < 61440 && this.pixrendered[_] !== 0 && R.pix[s + r] !== 0)
                  return this.spr0HitX = _ % 256, this.spr0HitY = t, !0;
                o++, _++;
              }
            else
              for (r = 0; r < 8; r++) {
                if (o >= 0 && o < 256 && _ >= 0 && _ < 61440 && this.pixrendered[_] !== 0 && R.pix[s + r] !== 0)
                  return this.spr0HitX = _ % 256, this.spr0HitY = t, !0;
                o++, _++;
              }
        } else if (a <= t && a + 16 > t && o >= -7 && o < 256)
          if (s = this.vertFlip[0] ? 15 - (t - a) : t - a, s < 8 ? R = this.ptTile[this.sprTile[0] + (this.vertFlip[0] ? 1 : 0) + ((1 & this.sprTile[0]) != 0 ? 255 : 0)] : (R = this.ptTile[this.sprTile[0] + (this.vertFlip[0] ? 0 : 1) + ((1 & this.sprTile[0]) != 0 ? 255 : 0)], this.vertFlip[0] ? s = 15 - s : s -= 8), s *= 8, _ = 256 * t + o, this.horiFlip[0])
            for (r = 7; r >= 0; r--) {
              if (o >= 0 && o < 256 && _ >= 0 && _ < 61440 && this.pixrendered[_] !== 0 && R.pix[s + r] !== 0)
                return this.spr0HitX = _ % 256, this.spr0HitY = t, !0;
              o++, _++;
            }
          else
            for (r = 0; r < 8; r++) {
              if (o >= 0 && o < 256 && _ >= 0 && _ < 61440 && this.pixrendered[_] !== 0 && R.pix[s + r] !== 0)
                return this.spr0HitX = _ % 256, this.spr0HitY = t, !0;
              o++, _++;
            }
        return !1;
      }, writeMem: function(t, s) {
        this.vramMem[t] = s, t < 8192 ? (this.vramMem[t] = s, this.patternWrite(t, s)) : t >= 8192 && t < 9152 ? this.nameTableWrite(this.ntable1[0], t - 8192, s) : t >= 9152 && t < 9216 ? this.attribTableWrite(this.ntable1[0], t - 9152, s) : t >= 9216 && t < 10176 ? this.nameTableWrite(this.ntable1[1], t - 9216, s) : t >= 10176 && t < 10240 ? this.attribTableWrite(this.ntable1[1], t - 10176, s) : t >= 10240 && t < 11200 ? this.nameTableWrite(this.ntable1[2], t - 10240, s) : t >= 11200 && t < 11264 ? this.attribTableWrite(this.ntable1[2], t - 11200, s) : t >= 11264 && t < 12224 ? this.nameTableWrite(this.ntable1[3], t - 11264, s) : t >= 12224 && t < 12288 ? this.attribTableWrite(this.ntable1[3], t - 12224, s) : t >= 16128 && t < 16160 && this.updatePalettes();
      }, updatePalettes: function() {
        var t;
        for (t = 0; t < 16; t++)
          this.f_dispType === 0 ? this.imgPalette[t] = this.palTable.getEntry(63 & this.vramMem[16128 + t]) : this.imgPalette[t] = this.palTable.getEntry(32 & this.vramMem[16128 + t]);
        for (t = 0; t < 16; t++)
          this.f_dispType === 0 ? this.sprPalette[t] = this.palTable.getEntry(63 & this.vramMem[16144 + t]) : this.sprPalette[t] = this.palTable.getEntry(32 & this.vramMem[16144 + t]);
      }, patternWrite: function(t, s) {
        var o = Math.floor(t / 16), a = t % 16;
        a < 8 ? this.ptTile[o].setScanline(a, s, this.vramMem[t + 8]) : this.ptTile[o].setScanline(a - 8, this.vramMem[t - 8], s);
      }, nameTableWrite: function(t, s, o) {
        this.nameTable[t].tile[s] = o, this.checkSprite0(this.scanline - 20);
      }, attribTableWrite: function(t, s, o) {
        this.nameTable[t].writeAttrib(s, o);
      }, spriteRamWriteUpdate: function(t, s) {
        var o = Math.floor(t / 4);
        o === 0 && this.checkSprite0(this.scanline - 20), t % 4 == 0 ? this.sprY[o] = s : t % 4 == 1 ? this.sprTile[o] = s : t % 4 == 2 ? (this.vertFlip[o] = (128 & s) != 0, this.horiFlip[o] = (64 & s) != 0, this.bgPriority[o] = (32 & s) != 0, this.sprCol[o] = (3 & s) << 2) : t % 4 == 3 && (this.sprX[o] = s);
      }, doNMI: function() {
        this.setStatusFlag(this.STATUS_VBLANK, !0), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NMI);
      }, isPixelWhite: function(t, s) {
        return this.triggerRendering(), this.nes.ppu.buffer[(s << 8) + t] === 16777215;
      }, JSON_PROPERTIES: ["vramMem", "spriteMem", "cntFV", "cntV", "cntH", "cntVT", "cntHT", "regFV", "regV", "regH", "regVT", "regHT", "regFH", "regS", "vramAddress", "vramTmpAddress", "f_nmiOnVblank", "f_spriteSize", "f_bgPatternTable", "f_spPatternTable", "f_addrInc", "f_nTblAddress", "f_color", "f_spVisibility", "f_bgVisibility", "f_spClipping", "f_bgClipping", "f_dispType", "vramBufferedReadValue", "firstWrite", "currentMirroring", "vramMirrorTable", "ntable1", "sramAddress", "hitSpr0", "sprPalette", "imgPalette", "curX", "scanline", "lastRenderedScanline", "curNt", "scantile", "attrib", "buffer", "bgbuffer", "pixrendered", "requestEndFrame", "nmiOk", "dummyCycleToggle", "nmiCounter", "validTileData", "scanlineAlreadyRendered"], toJSON: function() {
        var t, s = n.toJSON(this);
        for (s.nameTable = [], t = 0; t < this.nameTable.length; t++)
          s.nameTable[t] = this.nameTable[t].toJSON();
        for (s.ptTile = [], t = 0; t < this.ptTile.length; t++)
          s.ptTile[t] = this.ptTile[t].toJSON();
        return s;
      }, fromJSON: function(t) {
        var s;
        for (n.fromJSON(this, t), s = 0; s < this.nameTable.length; s++)
          this.nameTable[s].fromJSON(t.nameTable[s]);
        for (s = 0; s < this.ptTile.length; s++)
          this.ptTile[s].fromJSON(t.ptTile[s]);
        for (s = 0; s < this.spriteMem.length; s++)
          this.spriteRamWriteUpdate(s, this.spriteMem[s]);
      } };
      var i = function(t, s, o) {
        this.width = t, this.height = s, this.name = o, this.tile = new Array(t * s), this.attrib = new Array(t * s);
        for (var a = 0; a < t * s; a++)
          this.tile[a] = 0, this.attrib[a] = 0;
      };
      i.prototype = { getTileIndex: function(t, s) {
        return this.tile[s * this.width + t];
      }, getAttrib: function(t, s) {
        return this.attrib[s * this.width + t];
      }, writeAttrib: function(t, s) {
        for (var o, a, R, r, _ = t % 8 * 4, g = 4 * Math.floor(t / 8), D = 0; D < 2; D++)
          for (var N = 0; N < 2; N++) {
            o = s >> 2 * (2 * D + N) & 3;
            for (var T = 0; T < 2; T++)
              for (var b = 0; b < 2; b++)
                a = _ + 2 * N + b, R = g + 2 * D + T, r = R * this.width + a, this.attrib[r] = o << 2 & 12;
          }
      }, toJSON: function() {
        return { tile: this.tile, attrib: this.attrib };
      }, fromJSON: function(t) {
        this.tile = t.tile, this.attrib = t.attrib;
      } };
      var h = function() {
        this.curTable = new Array(64), this.emphTable = new Array(8), this.currentEmph = -1;
      };
      h.prototype = { reset: function() {
        this.setEmphasis(0);
      }, loadNTSCPalette: function() {
        this.curTable = [5395026, 11796480, 10485760, 11599933, 7602281, 91, 95, 6208, 12048, 543240, 26368, 1196544, 7153664, 0, 0, 0, 12899815, 16728064, 14421538, 16729963, 14090399, 6818519, 6588, 21681, 27227, 35843, 43776, 2918400, 10777088, 0, 0, 0, 16316664, 16755516, 16742785, 16735173, 16730354, 14633471, 4681215, 46327, 57599, 58229, 259115, 7911470, 15065624, 7895160, 0, 0, 16777215, 16773822, 16300216, 16300248, 16758527, 16761855, 13095423, 10148607, 8973816, 8650717, 12122296, 16119980, 16777136, 16308472, 0, 0], this.makeTables(), this.setEmphasis(0);
      }, loadPALPalette: function() {
        this.curTable = [5395026, 11796480, 10485760, 11599933, 7602281, 91, 95, 6208, 12048, 543240, 26368, 1196544, 7153664, 0, 0, 0, 12899815, 16728064, 14421538, 16729963, 14090399, 6818519, 6588, 21681, 27227, 35843, 43776, 2918400, 10777088, 0, 0, 0, 16316664, 16755516, 16742785, 16735173, 16730354, 14633471, 4681215, 46327, 57599, 58229, 259115, 7911470, 15065624, 7895160, 0, 0, 16777215, 16773822, 16300216, 16300248, 16758527, 16761855, 13095423, 10148607, 8973816, 8650717, 12122296, 16119980, 16777136, 16308472, 0, 0], this.makeTables(), this.setEmphasis(0);
      }, makeTables: function() {
        for (var t, s, o, a, R, r, _, g, D = 0; D < 8; D++)
          for (r = 1, _ = 1, g = 1, (1 & D) != 0 && (r = 0.75, g = 0.75), (2 & D) != 0 && (r = 0.75, _ = 0.75), (4 & D) != 0 && (_ = 0.75, g = 0.75), this.emphTable[D] = new Array(64), R = 0; R < 64; R++)
            a = this.curTable[R], t = Math.floor(this.getRed(a) * r), s = Math.floor(this.getGreen(a) * _), o = Math.floor(this.getBlue(a) * g), this.emphTable[D][R] = this.getRgb(t, s, o);
      }, setEmphasis: function(t) {
        if (t !== this.currentEmph) {
          this.currentEmph = t;
          for (var s = 0; s < 64; s++)
            this.curTable[s] = this.emphTable[t][s];
        }
      }, getEntry: function(t) {
        return this.curTable[t];
      }, getRed: function(t) {
        return t >> 16 & 255;
      }, getGreen: function(t) {
        return t >> 8 & 255;
      }, getBlue: function(t) {
        return 255 & t;
      }, getRgb: function(t, s, o) {
        return t << 16 | s << 8 | o;
      }, loadDefaultPalette: function() {
        this.curTable[0] = this.getRgb(117, 117, 117), this.curTable[1] = this.getRgb(39, 27, 143), this.curTable[2] = this.getRgb(0, 0, 171), this.curTable[3] = this.getRgb(71, 0, 159), this.curTable[4] = this.getRgb(143, 0, 119), this.curTable[5] = this.getRgb(171, 0, 19), this.curTable[6] = this.getRgb(167, 0, 0), this.curTable[7] = this.getRgb(127, 11, 0), this.curTable[8] = this.getRgb(67, 47, 0), this.curTable[9] = this.getRgb(0, 71, 0), this.curTable[10] = this.getRgb(0, 81, 0), this.curTable[11] = this.getRgb(0, 63, 23), this.curTable[12] = this.getRgb(27, 63, 95), this.curTable[13] = this.getRgb(0, 0, 0), this.curTable[14] = this.getRgb(0, 0, 0), this.curTable[15] = this.getRgb(0, 0, 0), this.curTable[16] = this.getRgb(188, 188, 188), this.curTable[17] = this.getRgb(0, 115, 239), this.curTable[18] = this.getRgb(35, 59, 239), this.curTable[19] = this.getRgb(131, 0, 243), this.curTable[20] = this.getRgb(191, 0, 191), this.curTable[21] = this.getRgb(231, 0, 91), this.curTable[22] = this.getRgb(219, 43, 0), this.curTable[23] = this.getRgb(203, 79, 15), this.curTable[24] = this.getRgb(139, 115, 0), this.curTable[25] = this.getRgb(0, 151, 0), this.curTable[26] = this.getRgb(0, 171, 0), this.curTable[27] = this.getRgb(0, 147, 59), this.curTable[28] = this.getRgb(0, 131, 139), this.curTable[29] = this.getRgb(0, 0, 0), this.curTable[30] = this.getRgb(0, 0, 0), this.curTable[31] = this.getRgb(0, 0, 0), this.curTable[32] = this.getRgb(255, 255, 255), this.curTable[33] = this.getRgb(63, 191, 255), this.curTable[34] = this.getRgb(95, 151, 255), this.curTable[35] = this.getRgb(167, 139, 253), this.curTable[36] = this.getRgb(247, 123, 255), this.curTable[37] = this.getRgb(255, 119, 183), this.curTable[38] = this.getRgb(255, 119, 99), this.curTable[39] = this.getRgb(255, 155, 59), this.curTable[40] = this.getRgb(243, 191, 63), this.curTable[41] = this.getRgb(131, 211, 19), this.curTable[42] = this.getRgb(79, 223, 75), this.curTable[43] = this.getRgb(88, 248, 152), this.curTable[44] = this.getRgb(0, 235, 219), this.curTable[45] = this.getRgb(0, 0, 0), this.curTable[46] = this.getRgb(0, 0, 0), this.curTable[47] = this.getRgb(0, 0, 0), this.curTable[48] = this.getRgb(255, 255, 255), this.curTable[49] = this.getRgb(171, 231, 255), this.curTable[50] = this.getRgb(199, 215, 255), this.curTable[51] = this.getRgb(215, 203, 255), this.curTable[52] = this.getRgb(255, 199, 255), this.curTable[53] = this.getRgb(255, 199, 219), this.curTable[54] = this.getRgb(255, 191, 179), this.curTable[55] = this.getRgb(255, 219, 171), this.curTable[56] = this.getRgb(255, 231, 163), this.curTable[57] = this.getRgb(227, 255, 163), this.curTable[58] = this.getRgb(171, 243, 191), this.curTable[59] = this.getRgb(179, 255, 207), this.curTable[60] = this.getRgb(159, 255, 243), this.curTable[61] = this.getRgb(0, 0, 0), this.curTable[62] = this.getRgb(0, 0, 0), this.curTable[63] = this.getRgb(0, 0, 0), this.makeTables(), this.setEmphasis(0);
      } }, u.exports = e;
    }, function(u, c) {
      var d = function(h) {
        this.nes = h, this.square1 = new e(this, !0), this.square2 = new e(this, !1), this.triangle = new i(this), this.noise = new n(this), this.dmc = new m(this), this.frameIrqCounter = null, this.frameIrqCounterMax = 4, this.initCounter = 2048, this.channelEnableValue = null, this.sampleRate = 44100, this.lengthLookup = null, this.dmcFreqLookup = null, this.noiseWavelengthLookup = null, this.square_table = null, this.tnd_table = null, this.frameIrqEnabled = !1, this.frameIrqActive = null, this.frameClockNow = null, this.startedPlaying = !1, this.recordOutput = !1, this.initingHardware = !1, this.masterFrameCounter = null, this.derivedFrameCounter = null, this.countSequence = null, this.sampleTimer = null, this.frameTime = null, this.sampleTimerMax = null, this.sampleCount = null, this.triValue = 0, this.smpSquare1 = null, this.smpSquare2 = null, this.smpTriangle = null, this.smpDmc = null, this.accCount = null, this.prevSampleL = 0, this.prevSampleR = 0, this.smpAccumL = 0, this.smpAccumR = 0, this.dacRange = 0, this.dcValue = 0, this.masterVolume = 256, this.stereoPosLSquare1 = null, this.stereoPosLSquare2 = null, this.stereoPosLTriangle = null, this.stereoPosLNoise = null, this.stereoPosLDMC = null, this.stereoPosRSquare1 = null, this.stereoPosRSquare2 = null, this.stereoPosRTriangle = null, this.stereoPosRNoise = null, this.stereoPosRDMC = null, this.extraCycles = null, this.maxSample = null, this.minSample = null, this.panning = [80, 170, 100, 150, 128], this.setPanning(this.panning), this.initLengthLookup(), this.initDmcFrequencyLookup(), this.initNoiseWavelengthLookup(), this.initDACtables();
        for (var t = 0; t < 20; t++)
          t === 16 ? this.writeReg(16400, 16) : this.writeReg(16384 + t, 0);
        this.reset();
      };
      d.prototype = { reset: function() {
        this.sampleRate = this.nes.opts.sampleRate, this.sampleTimerMax = Math.floor(1832727040 * this.nes.opts.preferredFrameRate / (60 * this.sampleRate)), this.frameTime = Math.floor(14915 * this.nes.opts.preferredFrameRate / 60), this.sampleTimer = 0, this.updateChannelEnable(0), this.masterFrameCounter = 0, this.derivedFrameCounter = 0, this.countSequence = 0, this.sampleCount = 0, this.initCounter = 2048, this.frameIrqEnabled = !1, this.initingHardware = !1, this.resetCounter(), this.square1.reset(), this.square2.reset(), this.triangle.reset(), this.noise.reset(), this.dmc.reset(), this.accCount = 0, this.smpSquare1 = 0, this.smpSquare2 = 0, this.smpTriangle = 0, this.smpDmc = 0, this.frameIrqEnabled = !1, this.frameIrqCounterMax = 4, this.channelEnableValue = 255, this.startedPlaying = !1, this.prevSampleL = 0, this.prevSampleR = 0, this.smpAccumL = 0, this.smpAccumR = 0, this.maxSample = -5e5, this.minSample = 5e5;
      }, readReg: function(h) {
        var t = 0;
        return t |= this.square1.getLengthStatus(), t |= this.square2.getLengthStatus() << 1, t |= this.triangle.getLengthStatus() << 2, t |= this.noise.getLengthStatus() << 3, t |= this.dmc.getLengthStatus() << 4, t |= (this.frameIrqActive && this.frameIrqEnabled ? 1 : 0) << 6, t |= this.dmc.getIrqStatus() << 7, this.frameIrqActive = !1, this.dmc.irqGenerated = !1, 65535 & t;
      }, writeReg: function(h, t) {
        h >= 16384 && h < 16388 ? this.square1.writeReg(h, t) : h >= 16388 && h < 16392 ? this.square2.writeReg(h, t) : h >= 16392 && h < 16396 ? this.triangle.writeReg(h, t) : h >= 16396 && h <= 16399 ? this.noise.writeReg(h, t) : h === 16400 ? this.dmc.writeReg(h, t) : h === 16401 ? this.dmc.writeReg(h, t) : h === 16402 ? this.dmc.writeReg(h, t) : h === 16403 ? this.dmc.writeReg(h, t) : h === 16405 ? (this.updateChannelEnable(t), t !== 0 && this.initCounter > 0 && (this.initingHardware = !0), this.dmc.writeReg(h, t)) : h === 16407 && (this.countSequence = t >> 7 & 1, this.masterFrameCounter = 0, this.frameIrqActive = !1, this.frameIrqEnabled = (t >> 6 & 1) == 0, this.countSequence === 0 ? (this.frameIrqCounterMax = 4, this.derivedFrameCounter = 4) : (this.frameIrqCounterMax = 5, this.derivedFrameCounter = 0, this.frameCounterTick()));
      }, resetCounter: function() {
        this.countSequence === 0 ? this.derivedFrameCounter = 4 : this.derivedFrameCounter = 0;
      }, updateChannelEnable: function(h) {
        this.channelEnableValue = 65535 & h, this.square1.setEnabled((1 & h) != 0), this.square2.setEnabled((2 & h) != 0), this.triangle.setEnabled((4 & h) != 0), this.noise.setEnabled((8 & h) != 0), this.dmc.setEnabled((16 & h) != 0);
      }, clockFrameCounter: function(h) {
        if (this.initCounter > 0 && this.initingHardware)
          return this.initCounter -= h, void (this.initCounter <= 0 && (this.initingHardware = !1));
        h += this.extraCycles;
        var t = this.sampleTimerMax - this.sampleTimer;
        h << 10 > t ? (this.extraCycles = (h << 10) - t >> 10, h -= this.extraCycles) : this.extraCycles = 0;
        var s = this.dmc, o = this.triangle, a = this.square1, R = this.square2, r = this.noise;
        if (s.isEnabled)
          for (s.shiftCounter -= h << 3; s.shiftCounter <= 0 && s.dmaFrequency > 0; )
            s.shiftCounter += s.dmaFrequency, s.clockDmc();
        if (o.progTimerMax > 0)
          for (o.progTimerCount -= h; o.progTimerCount <= 0; )
            o.progTimerCount += o.progTimerMax + 1, o.linearCounter > 0 && o.lengthCounter > 0 && (o.triangleCounter++, o.triangleCounter &= 31, o.isEnabled && (o.triangleCounter >= 16 ? o.sampleValue = 15 & o.triangleCounter : o.sampleValue = 15 - (15 & o.triangleCounter), o.sampleValue <<= 4));
        a.progTimerCount -= h, a.progTimerCount <= 0 && (a.progTimerCount += a.progTimerMax + 1 << 1, a.squareCounter++, a.squareCounter &= 7, a.updateSampleValue()), R.progTimerCount -= h, R.progTimerCount <= 0 && (R.progTimerCount += R.progTimerMax + 1 << 1, R.squareCounter++, R.squareCounter &= 7, R.updateSampleValue());
        var _ = h;
        if (r.progTimerCount - _ > 0)
          r.progTimerCount -= _, r.accCount += _, r.accValue += _ * r.sampleValue;
        else
          for (; _-- > 0; )
            --r.progTimerCount <= 0 && r.progTimerMax > 0 && (r.shiftReg <<= 1, r.tmp = 32768 & (r.shiftReg << (r.randomMode === 0 ? 1 : 6) ^ r.shiftReg), r.tmp !== 0 ? (r.shiftReg |= 1, r.randomBit = 0, r.sampleValue = 0) : (r.randomBit = 1, r.isEnabled && r.lengthCounter > 0 ? r.sampleValue = r.masterVolume : r.sampleValue = 0), r.progTimerCount += r.progTimerMax), r.accValue += r.sampleValue, r.accCount++;
        this.frameIrqEnabled && this.frameIrqActive && this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL), this.masterFrameCounter += h << 1, this.masterFrameCounter >= this.frameTime && (this.masterFrameCounter -= this.frameTime, this.frameCounterTick()), this.accSample(h), this.sampleTimer += h << 10, this.sampleTimer >= this.sampleTimerMax && (this.sample(), this.sampleTimer -= this.sampleTimerMax);
      }, accSample: function(h) {
        this.triangle.sampleCondition && (this.triValue = Math.floor((this.triangle.progTimerCount << 4) / (this.triangle.progTimerMax + 1)), this.triValue > 16 && (this.triValue = 16), this.triangle.triangleCounter >= 16 && (this.triValue = 16 - this.triValue), this.triValue += this.triangle.sampleValue), h === 2 ? (this.smpTriangle += this.triValue << 1, this.smpDmc += this.dmc.sample << 1, this.smpSquare1 += this.square1.sampleValue << 1, this.smpSquare2 += this.square2.sampleValue << 1, this.accCount += 2) : h === 4 ? (this.smpTriangle += this.triValue << 2, this.smpDmc += this.dmc.sample << 2, this.smpSquare1 += this.square1.sampleValue << 2, this.smpSquare2 += this.square2.sampleValue << 2, this.accCount += 4) : (this.smpTriangle += h * this.triValue, this.smpDmc += h * this.dmc.sample, this.smpSquare1 += h * this.square1.sampleValue, this.smpSquare2 += h * this.square2.sampleValue, this.accCount += h);
      }, frameCounterTick: function() {
        this.derivedFrameCounter++, this.derivedFrameCounter >= this.frameIrqCounterMax && (this.derivedFrameCounter = 0), this.derivedFrameCounter !== 1 && this.derivedFrameCounter !== 3 || (this.triangle.clockLengthCounter(), this.square1.clockLengthCounter(), this.square2.clockLengthCounter(), this.noise.clockLengthCounter(), this.square1.clockSweep(), this.square2.clockSweep()), this.derivedFrameCounter >= 0 && this.derivedFrameCounter < 4 && (this.square1.clockEnvDecay(), this.square2.clockEnvDecay(), this.noise.clockEnvDecay(), this.triangle.clockLinearCounter()), this.derivedFrameCounter === 3 && this.countSequence === 0 && (this.frameIrqActive = !0);
      }, sample: function() {
        var h, t;
        this.accCount > 0 ? (this.smpSquare1 <<= 4, this.smpSquare1 = Math.floor(this.smpSquare1 / this.accCount), this.smpSquare2 <<= 4, this.smpSquare2 = Math.floor(this.smpSquare2 / this.accCount), this.smpTriangle = Math.floor(this.smpTriangle / this.accCount), this.smpDmc <<= 4, this.smpDmc = Math.floor(this.smpDmc / this.accCount), this.accCount = 0) : (this.smpSquare1 = this.square1.sampleValue << 4, this.smpSquare2 = this.square2.sampleValue << 4, this.smpTriangle = this.triangle.sampleValue, this.smpDmc = this.dmc.sample << 4);
        var s = Math.floor((this.noise.accValue << 4) / this.noise.accCount);
        this.noise.accValue = s >> 4, this.noise.accCount = 1, h = this.smpSquare1 * this.stereoPosLSquare1 + this.smpSquare2 * this.stereoPosLSquare2 >> 8, t = 3 * this.smpTriangle * this.stereoPosLTriangle + (s << 1) * this.stereoPosLNoise + this.smpDmc * this.stereoPosLDMC >> 8, h >= this.square_table.length && (h = this.square_table.length - 1), t >= this.tnd_table.length && (t = this.tnd_table.length - 1);
        var o = this.square_table[h] + this.tnd_table[t] - this.dcValue;
        h = this.smpSquare1 * this.stereoPosRSquare1 + this.smpSquare2 * this.stereoPosRSquare2 >> 8, t = 3 * this.smpTriangle * this.stereoPosRTriangle + (s << 1) * this.stereoPosRNoise + this.smpDmc * this.stereoPosRDMC >> 8, h >= this.square_table.length && (h = this.square_table.length - 1), t >= this.tnd_table.length && (t = this.tnd_table.length - 1);
        var a = this.square_table[h] + this.tnd_table[t] - this.dcValue, R = o - this.prevSampleL;
        this.prevSampleL += R, this.smpAccumL += R - (this.smpAccumL >> 10), o = this.smpAccumL;
        var r = a - this.prevSampleR;
        this.prevSampleR += r, this.smpAccumR += r - (this.smpAccumR >> 10), a = this.smpAccumR, o > this.maxSample && (this.maxSample = o), o < this.minSample && (this.minSample = o), this.nes.opts.onAudioSample && this.nes.opts.onAudioSample(o / 32768, a / 32768), this.smpSquare1 = 0, this.smpSquare2 = 0, this.smpTriangle = 0, this.smpDmc = 0;
      }, getLengthMax: function(h) {
        return this.lengthLookup[h >> 3];
      }, getDmcFrequency: function(h) {
        return h >= 0 && h < 16 ? this.dmcFreqLookup[h] : 0;
      }, getNoiseWaveLength: function(h) {
        return h >= 0 && h < 16 ? this.noiseWavelengthLookup[h] : 0;
      }, setPanning: function(h) {
        for (var t = 0; t < 5; t++)
          this.panning[t] = h[t];
        this.updateStereoPos();
      }, setMasterVolume: function(h) {
        h < 0 && (h = 0), h > 256 && (h = 256), this.masterVolume = h, this.updateStereoPos();
      }, updateStereoPos: function() {
        this.stereoPosLSquare1 = this.panning[0] * this.masterVolume >> 8, this.stereoPosLSquare2 = this.panning[1] * this.masterVolume >> 8, this.stereoPosLTriangle = this.panning[2] * this.masterVolume >> 8, this.stereoPosLNoise = this.panning[3] * this.masterVolume >> 8, this.stereoPosLDMC = this.panning[4] * this.masterVolume >> 8, this.stereoPosRSquare1 = this.masterVolume - this.stereoPosLSquare1, this.stereoPosRSquare2 = this.masterVolume - this.stereoPosLSquare2, this.stereoPosRTriangle = this.masterVolume - this.stereoPosLTriangle, this.stereoPosRNoise = this.masterVolume - this.stereoPosLNoise, this.stereoPosRDMC = this.masterVolume - this.stereoPosLDMC;
      }, initLengthLookup: function() {
        this.lengthLookup = [10, 254, 20, 2, 40, 4, 80, 6, 160, 8, 60, 10, 14, 12, 26, 14, 12, 16, 24, 18, 48, 20, 96, 22, 192, 24, 72, 26, 16, 28, 32, 30];
      }, initDmcFrequencyLookup: function() {
        this.dmcFreqLookup = new Array(16), this.dmcFreqLookup[0] = 3424, this.dmcFreqLookup[1] = 3040, this.dmcFreqLookup[2] = 2720, this.dmcFreqLookup[3] = 2560, this.dmcFreqLookup[4] = 2288, this.dmcFreqLookup[5] = 2032, this.dmcFreqLookup[6] = 1808, this.dmcFreqLookup[7] = 1712, this.dmcFreqLookup[8] = 1520, this.dmcFreqLookup[9] = 1280, this.dmcFreqLookup[10] = 1136, this.dmcFreqLookup[11] = 1024, this.dmcFreqLookup[12] = 848, this.dmcFreqLookup[13] = 672, this.dmcFreqLookup[14] = 576, this.dmcFreqLookup[15] = 432;
      }, initNoiseWavelengthLookup: function() {
        this.noiseWavelengthLookup = new Array(16), this.noiseWavelengthLookup[0] = 4, this.noiseWavelengthLookup[1] = 8, this.noiseWavelengthLookup[2] = 16, this.noiseWavelengthLookup[3] = 32, this.noiseWavelengthLookup[4] = 64, this.noiseWavelengthLookup[5] = 96, this.noiseWavelengthLookup[6] = 128, this.noiseWavelengthLookup[7] = 160, this.noiseWavelengthLookup[8] = 202, this.noiseWavelengthLookup[9] = 254, this.noiseWavelengthLookup[10] = 380, this.noiseWavelengthLookup[11] = 508, this.noiseWavelengthLookup[12] = 762, this.noiseWavelengthLookup[13] = 1016, this.noiseWavelengthLookup[14] = 2034, this.noiseWavelengthLookup[15] = 4068;
      }, initDACtables: function() {
        var h, t, s, o = 0, a = 0;
        for (this.square_table = new Array(512), this.tnd_table = new Array(3264), s = 0; s < 512; s++)
          h = 95.52 / (8128 / (s / 16) + 100), h *= 0.98411, h *= 5e4, t = Math.floor(h), this.square_table[s] = t, t > o && (o = t);
        for (s = 0; s < 3264; s++)
          h = 163.67 / (24329 / (s / 16) + 100), h *= 0.98411, h *= 5e4, t = Math.floor(h), this.tnd_table[s] = t, t > a && (a = t);
        this.dacRange = o + a, this.dcValue = this.dacRange / 2;
      } };
      var m = function(h) {
        this.papu = h, this.MODE_NORMAL = 0, this.MODE_LOOP = 1, this.MODE_IRQ = 2, this.isEnabled = null, this.hasSample = null, this.irqGenerated = !1, this.playMode = null, this.dmaFrequency = null, this.dmaCounter = null, this.deltaCounter = null, this.playStartAddress = null, this.playAddress = null, this.playLength = null, this.playLengthCounter = null, this.shiftCounter = null, this.reg4012 = null, this.reg4013 = null, this.sample = null, this.dacLsb = null, this.data = null, this.reset();
      };
      m.prototype = { clockDmc: function() {
        this.hasSample && ((1 & this.data) == 0 ? this.deltaCounter > 0 && this.deltaCounter-- : this.deltaCounter < 63 && this.deltaCounter++, this.sample = this.isEnabled ? (this.deltaCounter << 1) + this.dacLsb : 0, this.data >>= 1), this.dmaCounter--, this.dmaCounter <= 0 && (this.hasSample = !1, this.endOfSample(), this.dmaCounter = 8), this.irqGenerated && this.papu.nes.cpu.requestIrq(this.papu.nes.cpu.IRQ_NORMAL);
      }, endOfSample: function() {
        this.playLengthCounter === 0 && this.playMode === this.MODE_LOOP && (this.playAddress = this.playStartAddress, this.playLengthCounter = this.playLength), this.playLengthCounter > 0 && (this.nextSample(), this.playLengthCounter === 0 && this.playMode === this.MODE_IRQ && (this.irqGenerated = !0));
      }, nextSample: function() {
        this.data = this.papu.nes.mmap.load(this.playAddress), this.papu.nes.cpu.haltCycles(4), this.playLengthCounter--, this.playAddress++, this.playAddress > 65535 && (this.playAddress = 32768), this.hasSample = !0;
      }, writeReg: function(h, t) {
        h === 16400 ? (t >> 6 == 0 ? this.playMode = this.MODE_NORMAL : (t >> 6 & 1) == 1 ? this.playMode = this.MODE_LOOP : t >> 6 == 2 && (this.playMode = this.MODE_IRQ), (128 & t) == 0 && (this.irqGenerated = !1), this.dmaFrequency = this.papu.getDmcFrequency(15 & t)) : h === 16401 ? (this.deltaCounter = t >> 1 & 63, this.dacLsb = 1 & t, this.sample = (this.deltaCounter << 1) + this.dacLsb) : h === 16402 ? (this.playStartAddress = t << 6 | 49152, this.playAddress = this.playStartAddress, this.reg4012 = t) : h === 16403 ? (this.playLength = 1 + (t << 4), this.playLengthCounter = this.playLength, this.reg4013 = t) : h === 16405 && ((t >> 4 & 1) == 0 ? this.playLengthCounter = 0 : (this.playAddress = this.playStartAddress, this.playLengthCounter = this.playLength), this.irqGenerated = !1);
      }, setEnabled: function(h) {
        !this.isEnabled && h && (this.playLengthCounter = this.playLength), this.isEnabled = h;
      }, getLengthStatus: function() {
        return this.playLengthCounter !== 0 && this.isEnabled ? 1 : 0;
      }, getIrqStatus: function() {
        return this.irqGenerated ? 1 : 0;
      }, reset: function() {
        this.isEnabled = !1, this.irqGenerated = !1, this.playMode = this.MODE_NORMAL, this.dmaFrequency = 0, this.dmaCounter = 0, this.deltaCounter = 0, this.playStartAddress = 0, this.playAddress = 0, this.playLength = 0, this.playLengthCounter = 0, this.sample = 0, this.dacLsb = 0, this.shiftCounter = 0, this.reg4012 = 0, this.reg4013 = 0, this.data = 0;
      } };
      var n = function(h) {
        this.papu = h, this.isEnabled = null, this.envDecayDisable = null, this.envDecayLoopEnable = null, this.lengthCounterEnable = null, this.envReset = null, this.shiftNow = null, this.lengthCounter = null, this.progTimerCount = null, this.progTimerMax = null, this.envDecayRate = null, this.envDecayCounter = null, this.envVolume = null, this.masterVolume = null, this.shiftReg = 16384, this.randomBit = null, this.randomMode = null, this.sampleValue = null, this.accValue = 0, this.accCount = 1, this.tmp = null, this.reset();
      };
      n.prototype = { reset: function() {
        this.progTimerCount = 0, this.progTimerMax = 0, this.isEnabled = !1, this.lengthCounter = 0, this.lengthCounterEnable = !1, this.envDecayDisable = !1, this.envDecayLoopEnable = !1, this.shiftNow = !1, this.envDecayRate = 0, this.envDecayCounter = 0, this.envVolume = 0, this.masterVolume = 0, this.shiftReg = 1, this.randomBit = 0, this.randomMode = 0, this.sampleValue = 0, this.tmp = 0;
      }, clockLengthCounter: function() {
        this.lengthCounterEnable && this.lengthCounter > 0 && --this.lengthCounter === 0 && this.updateSampleValue();
      }, clockEnvDecay: function() {
        this.envReset ? (this.envReset = !1, this.envDecayCounter = this.envDecayRate + 1, this.envVolume = 15) : --this.envDecayCounter <= 0 && (this.envDecayCounter = this.envDecayRate + 1, this.envVolume > 0 ? this.envVolume-- : this.envVolume = this.envDecayLoopEnable ? 15 : 0), this.envDecayDisable ? this.masterVolume = this.envDecayRate : this.masterVolume = this.envVolume, this.updateSampleValue();
      }, updateSampleValue: function() {
        this.isEnabled && this.lengthCounter > 0 && (this.sampleValue = this.randomBit * this.masterVolume);
      }, writeReg: function(h, t) {
        h === 16396 ? (this.envDecayDisable = (16 & t) != 0, this.envDecayRate = 15 & t, this.envDecayLoopEnable = (32 & t) != 0, this.lengthCounterEnable = (32 & t) == 0, this.envDecayDisable ? this.masterVolume = this.envDecayRate : this.masterVolume = this.envVolume) : h === 16398 ? (this.progTimerMax = this.papu.getNoiseWaveLength(15 & t), this.randomMode = t >> 7) : h === 16399 && (this.lengthCounter = this.papu.getLengthMax(248 & t), this.envReset = !0);
      }, setEnabled: function(h) {
        this.isEnabled = h, h || (this.lengthCounter = 0), this.updateSampleValue();
      }, getLengthStatus: function() {
        return this.lengthCounter !== 0 && this.isEnabled ? 1 : 0;
      } };
      var e = function(h, t) {
        this.papu = h, this.dutyLookup = [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], this.impLookup = [1, -1, 0, 0, 0, 0, 0, 0, 1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0], this.sqr1 = t, this.isEnabled = null, this.lengthCounterEnable = null, this.sweepActive = null, this.envDecayDisable = null, this.envDecayLoopEnable = null, this.envReset = null, this.sweepCarry = null, this.updateSweepPeriod = null, this.progTimerCount = null, this.progTimerMax = null, this.lengthCounter = null, this.squareCounter = null, this.sweepCounter = null, this.sweepCounterMax = null, this.sweepMode = null, this.sweepShiftAmount = null, this.envDecayRate = null, this.envDecayCounter = null, this.envVolume = null, this.masterVolume = null, this.dutyMode = null, this.sweepResult = null, this.sampleValue = null, this.vol = null, this.reset();
      };
      e.prototype = { reset: function() {
        this.progTimerCount = 0, this.progTimerMax = 0, this.lengthCounter = 0, this.squareCounter = 0, this.sweepCounter = 0, this.sweepCounterMax = 0, this.sweepMode = 0, this.sweepShiftAmount = 0, this.envDecayRate = 0, this.envDecayCounter = 0, this.envVolume = 0, this.masterVolume = 0, this.dutyMode = 0, this.vol = 0, this.isEnabled = !1, this.lengthCounterEnable = !1, this.sweepActive = !1, this.sweepCarry = !1, this.envDecayDisable = !1, this.envDecayLoopEnable = !1;
      }, clockLengthCounter: function() {
        this.lengthCounterEnable && this.lengthCounter > 0 && --this.lengthCounter === 0 && this.updateSampleValue();
      }, clockEnvDecay: function() {
        this.envReset ? (this.envReset = !1, this.envDecayCounter = this.envDecayRate + 1, this.envVolume = 15) : --this.envDecayCounter <= 0 && (this.envDecayCounter = this.envDecayRate + 1, this.envVolume > 0 ? this.envVolume-- : this.envVolume = this.envDecayLoopEnable ? 15 : 0), this.envDecayDisable ? this.masterVolume = this.envDecayRate : this.masterVolume = this.envVolume, this.updateSampleValue();
      }, clockSweep: function() {
        --this.sweepCounter <= 0 && (this.sweepCounter = this.sweepCounterMax + 1, this.sweepActive && this.sweepShiftAmount > 0 && this.progTimerMax > 7 && (this.sweepCarry = !1, this.sweepMode === 0 ? (this.progTimerMax += this.progTimerMax >> this.sweepShiftAmount, this.progTimerMax > 4095 && (this.progTimerMax = 4095, this.sweepCarry = !0)) : this.progTimerMax = this.progTimerMax - ((this.progTimerMax >> this.sweepShiftAmount) - (this.sqr1 ? 1 : 0)))), this.updateSweepPeriod && (this.updateSweepPeriod = !1, this.sweepCounter = this.sweepCounterMax + 1);
      }, updateSampleValue: function() {
        this.isEnabled && this.lengthCounter > 0 && this.progTimerMax > 7 ? this.sweepMode === 0 && this.progTimerMax + (this.progTimerMax >> this.sweepShiftAmount) > 4095 ? this.sampleValue = 0 : this.sampleValue = this.masterVolume * this.dutyLookup[(this.dutyMode << 3) + this.squareCounter] : this.sampleValue = 0;
      }, writeReg: function(h, t) {
        var s = this.sqr1 ? 0 : 4;
        h === 16384 + s ? (this.envDecayDisable = (16 & t) != 0, this.envDecayRate = 15 & t, this.envDecayLoopEnable = (32 & t) != 0, this.dutyMode = t >> 6 & 3, this.lengthCounterEnable = (32 & t) == 0, this.envDecayDisable ? this.masterVolume = this.envDecayRate : this.masterVolume = this.envVolume, this.updateSampleValue()) : h === 16385 + s ? (this.sweepActive = (128 & t) != 0, this.sweepCounterMax = t >> 4 & 7, this.sweepMode = t >> 3 & 1, this.sweepShiftAmount = 7 & t, this.updateSweepPeriod = !0) : h === 16386 + s ? (this.progTimerMax &= 1792, this.progTimerMax |= t) : h === 16387 + s && (this.progTimerMax &= 255, this.progTimerMax |= (7 & t) << 8, this.isEnabled && (this.lengthCounter = this.papu.getLengthMax(248 & t)), this.envReset = !0);
      }, setEnabled: function(h) {
        this.isEnabled = h, h || (this.lengthCounter = 0), this.updateSampleValue();
      }, getLengthStatus: function() {
        return this.lengthCounter !== 0 && this.isEnabled ? 1 : 0;
      } };
      var i = function(h) {
        this.papu = h, this.isEnabled = null, this.sampleCondition = null, this.lengthCounterEnable = null, this.lcHalt = null, this.lcControl = null, this.progTimerCount = null, this.progTimerMax = null, this.triangleCounter = null, this.lengthCounter = null, this.linearCounter = null, this.lcLoadValue = null, this.sampleValue = null, this.tmp = null, this.reset();
      };
      i.prototype = { reset: function() {
        this.progTimerCount = 0, this.progTimerMax = 0, this.triangleCounter = 0, this.isEnabled = !1, this.sampleCondition = !1, this.lengthCounter = 0, this.lengthCounterEnable = !1, this.linearCounter = 0, this.lcLoadValue = 0, this.lcHalt = !0, this.lcControl = !1, this.tmp = 0, this.sampleValue = 15;
      }, clockLengthCounter: function() {
        this.lengthCounterEnable && this.lengthCounter > 0 && --this.lengthCounter === 0 && this.updateSampleCondition();
      }, clockLinearCounter: function() {
        this.lcHalt ? (this.linearCounter = this.lcLoadValue, this.updateSampleCondition()) : this.linearCounter > 0 && (this.linearCounter--, this.updateSampleCondition()), this.lcControl || (this.lcHalt = !1);
      }, getLengthStatus: function() {
        return this.lengthCounter !== 0 && this.isEnabled ? 1 : 0;
      }, readReg: function(h) {
        return 0;
      }, writeReg: function(h, t) {
        h === 16392 ? (this.lcControl = (128 & t) != 0, this.lcLoadValue = 127 & t, this.lengthCounterEnable = !this.lcControl) : h === 16394 ? (this.progTimerMax &= 1792, this.progTimerMax |= t) : h === 16395 && (this.progTimerMax &= 255, this.progTimerMax |= (7 & t) << 8, this.lengthCounter = this.papu.getLengthMax(248 & t), this.lcHalt = !0), this.updateSampleCondition();
      }, clockProgrammableTimer: function(h) {
        if (this.progTimerMax > 0)
          for (this.progTimerCount += h; this.progTimerMax > 0 && this.progTimerCount >= this.progTimerMax; )
            this.progTimerCount -= this.progTimerMax, this.isEnabled && this.lengthCounter > 0 && this.linearCounter > 0 && this.clockTriangleGenerator();
      }, clockTriangleGenerator: function() {
        this.triangleCounter++, this.triangleCounter &= 31;
      }, setEnabled: function(h) {
        this.isEnabled = h, h || (this.lengthCounter = 0), this.updateSampleCondition();
      }, updateSampleCondition: function() {
        this.sampleCondition = this.isEnabled && this.progTimerMax > 7 && this.linearCounter > 0 && this.lengthCounter > 0;
      } }, u.exports = d;
    }, function(u, c, d) {
      var m = d(9), n = d(2), e = function(i) {
        this.nes = i, this.mapperName = new Array(92);
        for (var h = 0; h < 92; h++)
          this.mapperName[h] = "Unknown Mapper";
        this.mapperName[0] = "Direct Access", this.mapperName[1] = "Nintendo MMC1", this.mapperName[2] = "UNROM", this.mapperName[3] = "CNROM", this.mapperName[4] = "Nintendo MMC3", this.mapperName[5] = "Nintendo MMC5", this.mapperName[6] = "FFE F4xxx", this.mapperName[7] = "AOROM", this.mapperName[8] = "FFE F3xxx", this.mapperName[9] = "Nintendo MMC2", this.mapperName[10] = "Nintendo MMC4", this.mapperName[11] = "Color Dreams Chip", this.mapperName[12] = "FFE F6xxx", this.mapperName[15] = "100-in-1 switch", this.mapperName[16] = "Bandai chip", this.mapperName[17] = "FFE F8xxx", this.mapperName[18] = "Jaleco SS8806 chip", this.mapperName[19] = "Namcot 106 chip", this.mapperName[20] = "Famicom Disk System", this.mapperName[21] = "Konami VRC4a", this.mapperName[22] = "Konami VRC2a", this.mapperName[23] = "Konami VRC2a", this.mapperName[24] = "Konami VRC6", this.mapperName[25] = "Konami VRC4b", this.mapperName[32] = "Irem G-101 chip", this.mapperName[33] = "Taito TC0190/TC0350", this.mapperName[34] = "32kB ROM switch", this.mapperName[64] = "Tengen RAMBO-1 chip", this.mapperName[65] = "Irem H-3001 chip", this.mapperName[66] = "GNROM switch", this.mapperName[67] = "SunSoft3 chip", this.mapperName[68] = "SunSoft4 chip", this.mapperName[69] = "SunSoft5 FME-7 chip", this.mapperName[71] = "Camerica chip", this.mapperName[78] = "Irem 74HC161/32-based", this.mapperName[91] = "Pirate HK-SF3 chip";
      };
      e.prototype = { VERTICAL_MIRRORING: 0, HORIZONTAL_MIRRORING: 1, FOURSCREEN_MIRRORING: 2, SINGLESCREEN_MIRRORING: 3, SINGLESCREEN_MIRRORING2: 4, SINGLESCREEN_MIRRORING3: 5, SINGLESCREEN_MIRRORING4: 6, CHRROM_MIRRORING: 7, header: null, rom: null, vrom: null, vromTile: null, romCount: null, vromCount: null, mirroring: null, batteryRam: null, trainer: null, fourScreen: null, mapperType: null, valid: !1, load: function(i) {
        var h, t, s;
        if (i.indexOf("NES") === -1)
          throw new Error("Not a valid NES ROM.");
        for (this.header = new Array(16), h = 0; h < 16; h++)
          this.header[h] = 255 & i.charCodeAt(h);
        this.romCount = this.header[4], this.vromCount = 2 * this.header[5], this.mirroring = (1 & this.header[6]) != 0 ? 1 : 0, this.batteryRam = (2 & this.header[6]) != 0, this.trainer = (4 & this.header[6]) != 0, this.fourScreen = (8 & this.header[6]) != 0, this.mapperType = this.header[6] >> 4 | 240 & this.header[7];
        var o = !1;
        for (h = 8; h < 16; h++)
          if (this.header[h] !== 0) {
            o = !0;
            break;
          }
        o && (this.mapperType &= 15), this.rom = new Array(this.romCount);
        var a = 16;
        for (h = 0; h < this.romCount; h++) {
          for (this.rom[h] = new Array(16384), t = 0; t < 16384 && !(a + t >= i.length); t++)
            this.rom[h][t] = 255 & i.charCodeAt(a + t);
          a += 16384;
        }
        for (this.vrom = new Array(this.vromCount), h = 0; h < this.vromCount; h++) {
          for (this.vrom[h] = new Array(4096), t = 0; t < 4096 && !(a + t >= i.length); t++)
            this.vrom[h][t] = 255 & i.charCodeAt(a + t);
          a += 4096;
        }
        for (this.vromTile = new Array(this.vromCount), h = 0; h < this.vromCount; h++)
          for (this.vromTile[h] = new Array(256), t = 0; t < 256; t++)
            this.vromTile[h][t] = new n();
        var R, r;
        for (s = 0; s < this.vromCount; s++)
          for (h = 0; h < 4096; h++)
            R = h >> 4, r = h % 16, r < 8 ? this.vromTile[s][R].setScanline(r, this.vrom[s][h], this.vrom[s][h + 8]) : this.vromTile[s][R].setScanline(r - 8, this.vrom[s][h - 8], this.vrom[s][h]);
        this.valid = !0;
      }, getMirroringType: function() {
        return this.fourScreen ? this.FOURSCREEN_MIRRORING : this.mirroring === 0 ? this.HORIZONTAL_MIRRORING : this.VERTICAL_MIRRORING;
      }, getMapperName: function() {
        return this.mapperType >= 0 && this.mapperType < this.mapperName.length ? this.mapperName[this.mapperType] : "Unknown Mapper, " + this.mapperType;
      }, mapperSupported: function() {
        return m[this.mapperType] !== void 0;
      }, createMapper: function() {
        if (this.mapperSupported())
          return new m[this.mapperType](this.nes);
        throw new Error("This ROM uses a mapper not supported by JSNES: " + this.getMapperName() + "(" + this.mapperType + ")");
      } }, u.exports = e;
    }, function(u, c, d) {
      var m = d(0), n = {};
      n[0] = function(e) {
        this.nes = e;
      }, n[0].prototype = { reset: function() {
        this.joy1StrobeState = 0, this.joy2StrobeState = 0, this.joypadLastWrite = 0, this.zapperFired = !1, this.zapperX = null, this.zapperY = null;
      }, write: function(e, i) {
        e < 8192 ? this.nes.cpu.mem[2047 & e] = i : e > 16407 ? (this.nes.cpu.mem[e] = i, e >= 24576 && e < 32768 && this.nes.opts.onBatteryRamWrite(e, i)) : e > 8199 && e < 16384 ? this.regWrite(8192 + (7 & e), i) : this.regWrite(e, i);
      }, writelow: function(e, i) {
        e < 8192 ? this.nes.cpu.mem[2047 & e] = i : e > 16407 ? this.nes.cpu.mem[e] = i : e > 8199 && e < 16384 ? this.regWrite(8192 + (7 & e), i) : this.regWrite(e, i);
      }, load: function(e) {
        return e &= 65535, e > 16407 ? this.nes.cpu.mem[e] : e >= 8192 ? this.regLoad(e) : this.nes.cpu.mem[2047 & e];
      }, regLoad: function(e) {
        switch (e >> 12) {
          case 0:
          case 1:
            break;
          case 2:
          case 3:
            switch (7 & e) {
              case 0:
                return this.nes.cpu.mem[8192];
              case 1:
                return this.nes.cpu.mem[8193];
              case 2:
                return this.nes.ppu.readStatusRegister();
              case 3:
                return 0;
              case 4:
                return this.nes.ppu.sramLoad();
              case 5:
              case 6:
                return 0;
              case 7:
                return this.nes.ppu.vramLoad();
            }
            break;
          case 4:
            switch (e - 16405) {
              case 0:
                return this.nes.papu.readReg(e);
              case 1:
                return this.joy1Read();
              case 2:
                var i;
                return i = this.zapperX !== null && this.zapperY !== null && this.nes.ppu.isPixelWhite(this.zapperX, this.zapperY) ? 0 : 8, this.zapperFired && (i |= 16), 65535 & (this.joy2Read() | i);
            }
        }
        return 0;
      }, regWrite: function(e, i) {
        switch (e) {
          case 8192:
            this.nes.cpu.mem[e] = i, this.nes.ppu.updateControlReg1(i);
            break;
          case 8193:
            this.nes.cpu.mem[e] = i, this.nes.ppu.updateControlReg2(i);
            break;
          case 8195:
            this.nes.ppu.writeSRAMAddress(i);
            break;
          case 8196:
            this.nes.ppu.sramWrite(i);
            break;
          case 8197:
            this.nes.ppu.scrollWrite(i);
            break;
          case 8198:
            this.nes.ppu.writeVRAMAddress(i);
            break;
          case 8199:
            this.nes.ppu.vramWrite(i);
            break;
          case 16404:
            this.nes.ppu.sramDMA(i);
            break;
          case 16405:
            this.nes.papu.writeReg(e, i);
            break;
          case 16406:
            (1 & i) == 0 && (1 & this.joypadLastWrite) == 1 && (this.joy1StrobeState = 0, this.joy2StrobeState = 0), this.joypadLastWrite = i;
            break;
          case 16407:
            this.nes.papu.writeReg(e, i);
            break;
          default:
            e >= 16384 && e <= 16407 && this.nes.papu.writeReg(e, i);
        }
      }, joy1Read: function() {
        var e;
        switch (this.joy1StrobeState) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            e = this.nes.controllers[1].state[this.joy1StrobeState];
            break;
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
            e = 0;
            break;
          case 19:
            e = 1;
            break;
          default:
            e = 0;
        }
        return this.joy1StrobeState++, this.joy1StrobeState === 24 && (this.joy1StrobeState = 0), e;
      }, joy2Read: function() {
        var e;
        switch (this.joy2StrobeState) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            e = this.nes.controllers[2].state[this.joy2StrobeState];
            break;
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
            e = 0;
            break;
          case 19:
            e = 1;
            break;
          default:
            e = 0;
        }
        return this.joy2StrobeState++, this.joy2StrobeState === 24 && (this.joy2StrobeState = 0), e;
      }, loadROM: function() {
        if (!this.nes.rom.valid || this.nes.rom.romCount < 1)
          throw new Error("NoMapper: Invalid ROM! Unable to load.");
        this.loadPRGROM(), this.loadCHRROM(), this.loadBatteryRam(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
      }, loadPRGROM: function() {
        this.nes.rom.romCount > 1 ? (this.loadRomBank(0, 32768), this.loadRomBank(1, 49152)) : (this.loadRomBank(0, 32768), this.loadRomBank(0, 49152));
      }, loadCHRROM: function() {
        this.nes.rom.vromCount > 0 && (this.nes.rom.vromCount === 1 ? (this.loadVromBank(0, 0), this.loadVromBank(0, 4096)) : (this.loadVromBank(0, 0), this.loadVromBank(1, 4096)));
      }, loadBatteryRam: function() {
        if (this.nes.rom.batteryRam) {
          var e = this.nes.rom.batteryRam;
          e !== null && e.length === 8192 && m.copyArrayElements(e, 0, this.nes.cpu.mem, 24576, 8192);
        }
      }, loadRomBank: function(e, i) {
        e %= this.nes.rom.romCount, m.copyArrayElements(this.nes.rom.rom[e], 0, this.nes.cpu.mem, i, 16384);
      }, loadVromBank: function(e, i) {
        if (this.nes.rom.vromCount !== 0) {
          this.nes.ppu.triggerRendering(), m.copyArrayElements(this.nes.rom.vrom[e % this.nes.rom.vromCount], 0, this.nes.ppu.vramMem, i, 4096);
          var h = this.nes.rom.vromTile[e % this.nes.rom.vromCount];
          m.copyArrayElements(h, 0, this.nes.ppu.ptTile, i >> 4, 256);
        }
      }, load32kRomBank: function(e, i) {
        this.loadRomBank(2 * e % this.nes.rom.romCount, i), this.loadRomBank((2 * e + 1) % this.nes.rom.romCount, i + 16384);
      }, load8kVromBank: function(e, i) {
        this.nes.rom.vromCount !== 0 && (this.nes.ppu.triggerRendering(), this.loadVromBank(e % this.nes.rom.vromCount, i), this.loadVromBank((e + 1) % this.nes.rom.vromCount, i + 4096));
      }, load1kVromBank: function(e, i) {
        if (this.nes.rom.vromCount !== 0) {
          this.nes.ppu.triggerRendering();
          var h = Math.floor(e / 4) % this.nes.rom.vromCount, t = e % 4 * 1024;
          m.copyArrayElements(this.nes.rom.vrom[h], t, this.nes.ppu.vramMem, i, 1024);
          for (var s = this.nes.rom.vromTile[h], o = i >> 4, a = 0; a < 64; a++)
            this.nes.ppu.ptTile[o + a] = s[(e % 4 << 6) + a];
        }
      }, load2kVromBank: function(e, i) {
        if (this.nes.rom.vromCount !== 0) {
          this.nes.ppu.triggerRendering();
          var h = Math.floor(e / 2) % this.nes.rom.vromCount, t = e % 2 * 2048;
          m.copyArrayElements(this.nes.rom.vrom[h], t, this.nes.ppu.vramMem, i, 2048);
          for (var s = this.nes.rom.vromTile[h], o = i >> 4, a = 0; a < 128; a++)
            this.nes.ppu.ptTile[o + a] = s[(e % 2 << 7) + a];
        }
      }, load8kRomBank: function(e, i) {
        var h = Math.floor(e / 2) % this.nes.rom.romCount, t = e % 2 * 8192;
        m.copyArrayElements(this.nes.rom.rom[h], t, this.nes.cpu.mem, i, 8192);
      }, clockIrqCounter: function() {
      }, latchAccess: function(e) {
      }, toJSON: function() {
        return { joy1StrobeState: this.joy1StrobeState, joy2StrobeState: this.joy2StrobeState, joypadLastWrite: this.joypadLastWrite };
      }, fromJSON: function(e) {
        this.joy1StrobeState = e.joy1StrobeState, this.joy2StrobeState = e.joy2StrobeState, this.joypadLastWrite = e.joypadLastWrite;
      } }, n[1] = function(e) {
        this.nes = e;
      }, n[1].prototype = new n[0](), n[1].prototype.reset = function() {
        n[0].prototype.reset.apply(this), this.regBuffer = 0, this.regBufferCounter = 0, this.mirroring = 0, this.oneScreenMirroring = 0, this.prgSwitchingArea = 1, this.prgSwitchingSize = 1, this.vromSwitchingSize = 0, this.romSelectionReg0 = 0, this.romSelectionReg1 = 0, this.romBankSelect = 0;
      }, n[1].prototype.write = function(e, i) {
        if (e < 32768)
          return void n[0].prototype.write.apply(this, arguments);
        (128 & i) != 0 ? (this.regBufferCounter = 0, this.regBuffer = 0, this.getRegNumber(e) === 0 && (this.prgSwitchingArea = 1, this.prgSwitchingSize = 1)) : (this.regBuffer = this.regBuffer & 255 - (1 << this.regBufferCounter) | (1 & i) << this.regBufferCounter, ++this.regBufferCounter === 5 && (this.setReg(this.getRegNumber(e), this.regBuffer), this.regBuffer = 0, this.regBufferCounter = 0));
      }, n[1].prototype.setReg = function(e, i) {
        var h;
        switch (e) {
          case 0:
            h = 3 & i, h !== this.mirroring && (this.mirroring = h, (2 & this.mirroring) == 0 ? this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING) : (1 & this.mirroring) != 0 ? this.nes.ppu.setMirroring(this.nes.rom.HORIZONTAL_MIRRORING) : this.nes.ppu.setMirroring(this.nes.rom.VERTICAL_MIRRORING)), this.prgSwitchingArea = i >> 2 & 1, this.prgSwitchingSize = i >> 3 & 1, this.vromSwitchingSize = i >> 4 & 1;
            break;
          case 1:
            this.romSelectionReg0 = i >> 4 & 1, this.nes.rom.vromCount > 0 && (this.vromSwitchingSize === 0 ? this.romSelectionReg0 === 0 ? this.load8kVromBank(15 & i, 0) : this.load8kVromBank(Math.floor(this.nes.rom.vromCount / 2) + (15 & i), 0) : this.romSelectionReg0 === 0 ? this.loadVromBank(15 & i, 0) : this.loadVromBank(Math.floor(this.nes.rom.vromCount / 2) + (15 & i), 0));
            break;
          case 2:
            this.romSelectionReg1 = i >> 4 & 1, this.nes.rom.vromCount > 0 && this.vromSwitchingSize === 1 && (this.romSelectionReg1 === 0 ? this.loadVromBank(15 & i, 4096) : this.loadVromBank(Math.floor(this.nes.rom.vromCount / 2) + (15 & i), 4096));
            break;
          default:
            h = 15 & i;
            var t, s = 0;
            this.nes.rom.romCount >= 32 ? this.vromSwitchingSize === 0 ? this.romSelectionReg0 === 1 && (s = 16) : s = (this.romSelectionReg0 | this.romSelectionReg1 << 1) << 3 : this.nes.rom.romCount >= 16 && this.romSelectionReg0 === 1 && (s = 8), this.prgSwitchingSize === 0 ? (t = s + (15 & i), this.load32kRomBank(t, 32768)) : (t = 2 * s + (15 & i), this.prgSwitchingArea === 0 ? this.loadRomBank(t, 49152) : this.loadRomBank(t, 32768));
        }
      }, n[1].prototype.getRegNumber = function(e) {
        return e >= 32768 && e <= 40959 ? 0 : e >= 40960 && e <= 49151 ? 1 : e >= 49152 && e <= 57343 ? 2 : 3;
      }, n[1].prototype.loadROM = function() {
        if (!this.nes.rom.valid)
          throw new Error("MMC1: Invalid ROM! Unable to load.");
        this.loadRomBank(0, 32768), this.loadRomBank(this.nes.rom.romCount - 1, 49152), this.loadCHRROM(), this.loadBatteryRam(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
      }, n[1].prototype.switchLowHighPrgRom = function(e) {
      }, n[1].prototype.switch16to32 = function() {
      }, n[1].prototype.switch32to16 = function() {
      }, n[1].prototype.toJSON = function() {
        var e = n[0].prototype.toJSON.apply(this);
        return e.mirroring = this.mirroring, e.oneScreenMirroring = this.oneScreenMirroring, e.prgSwitchingArea = this.prgSwitchingArea, e.prgSwitchingSize = this.prgSwitchingSize, e.vromSwitchingSize = this.vromSwitchingSize, e.romSelectionReg0 = this.romSelectionReg0, e.romSelectionReg1 = this.romSelectionReg1, e.romBankSelect = this.romBankSelect, e.regBuffer = this.regBuffer, e.regBufferCounter = this.regBufferCounter, e;
      }, n[1].prototype.fromJSON = function(e) {
        n[0].prototype.fromJSON.apply(this, arguments), this.mirroring = e.mirroring, this.oneScreenMirroring = e.oneScreenMirroring, this.prgSwitchingArea = e.prgSwitchingArea, this.prgSwitchingSize = e.prgSwitchingSize, this.vromSwitchingSize = e.vromSwitchingSize, this.romSelectionReg0 = e.romSelectionReg0, this.romSelectionReg1 = e.romSelectionReg1, this.romBankSelect = e.romBankSelect, this.regBuffer = e.regBuffer, this.regBufferCounter = e.regBufferCounter;
      }, n[2] = function(e) {
        this.nes = e;
      }, n[2].prototype = new n[0](), n[2].prototype.write = function(e, i) {
        if (e < 32768)
          return void n[0].prototype.write.apply(this, arguments);
        this.loadRomBank(i, 32768);
      }, n[2].prototype.loadROM = function() {
        if (!this.nes.rom.valid)
          throw new Error("UNROM: Invalid ROM! Unable to load.");
        this.loadRomBank(0, 32768), this.loadRomBank(this.nes.rom.romCount - 1, 49152), this.loadCHRROM(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
      }, n[3] = function(e) {
        this.nes = e;
      }, n[3].prototype = new n[0](), n[3].prototype.write = function(e, i) {
        if (e < 32768)
          return void n[0].prototype.write.apply(this, arguments);
        var h = i % (this.nes.rom.vromCount / 2) * 2;
        this.loadVromBank(h, 0), this.loadVromBank(h + 1, 4096), this.load8kVromBank(2 * i, 0);
      }, n[4] = function(e) {
        this.nes = e, this.CMD_SEL_2_1K_VROM_0000 = 0, this.CMD_SEL_2_1K_VROM_0800 = 1, this.CMD_SEL_1K_VROM_1000 = 2, this.CMD_SEL_1K_VROM_1400 = 3, this.CMD_SEL_1K_VROM_1800 = 4, this.CMD_SEL_1K_VROM_1C00 = 5, this.CMD_SEL_ROM_PAGE1 = 6, this.CMD_SEL_ROM_PAGE2 = 7, this.command = null, this.prgAddressSelect = null, this.chrAddressSelect = null, this.pageNumber = null, this.irqCounter = null, this.irqLatchValue = null, this.irqEnable = null, this.prgAddressChanged = !1;
      }, n[4].prototype = new n[0](), n[4].prototype.write = function(e, i) {
        if (e < 32768)
          return void n[0].prototype.write.apply(this, arguments);
        switch (e) {
          case 32768:
            this.command = 7 & i;
            var h = i >> 6 & 1;
            h !== this.prgAddressSelect && (this.prgAddressChanged = !0), this.prgAddressSelect = h, this.chrAddressSelect = i >> 7 & 1;
            break;
          case 32769:
            this.executeCommand(this.command, i);
            break;
          case 40960:
            (1 & i) != 0 ? this.nes.ppu.setMirroring(this.nes.rom.HORIZONTAL_MIRRORING) : this.nes.ppu.setMirroring(this.nes.rom.VERTICAL_MIRRORING);
            break;
          case 40961:
            break;
          case 49152:
            this.irqCounter = i;
            break;
          case 49153:
            this.irqLatchValue = i;
            break;
          case 57344:
            this.irqEnable = 0;
            break;
          case 57345:
            this.irqEnable = 1;
        }
      }, n[4].prototype.executeCommand = function(e, i) {
        switch (e) {
          case this.CMD_SEL_2_1K_VROM_0000:
            this.chrAddressSelect === 0 ? (this.load1kVromBank(i, 0), this.load1kVromBank(i + 1, 1024)) : (this.load1kVromBank(i, 4096), this.load1kVromBank(i + 1, 5120));
            break;
          case this.CMD_SEL_2_1K_VROM_0800:
            this.chrAddressSelect === 0 ? (this.load1kVromBank(i, 2048), this.load1kVromBank(i + 1, 3072)) : (this.load1kVromBank(i, 6144), this.load1kVromBank(i + 1, 7168));
            break;
          case this.CMD_SEL_1K_VROM_1000:
            this.chrAddressSelect === 0 ? this.load1kVromBank(i, 4096) : this.load1kVromBank(i, 0);
            break;
          case this.CMD_SEL_1K_VROM_1400:
            this.chrAddressSelect === 0 ? this.load1kVromBank(i, 5120) : this.load1kVromBank(i, 1024);
            break;
          case this.CMD_SEL_1K_VROM_1800:
            this.chrAddressSelect === 0 ? this.load1kVromBank(i, 6144) : this.load1kVromBank(i, 2048);
            break;
          case this.CMD_SEL_1K_VROM_1C00:
            this.chrAddressSelect === 0 ? this.load1kVromBank(i, 7168) : this.load1kVromBank(i, 3072);
            break;
          case this.CMD_SEL_ROM_PAGE1:
            this.prgAddressChanged && (this.prgAddressSelect === 0 ? this.load8kRomBank(2 * (this.nes.rom.romCount - 1), 49152) : this.load8kRomBank(2 * (this.nes.rom.romCount - 1), 32768), this.prgAddressChanged = !1), this.prgAddressSelect === 0 ? this.load8kRomBank(i, 32768) : this.load8kRomBank(i, 49152);
            break;
          case this.CMD_SEL_ROM_PAGE2:
            this.load8kRomBank(i, 40960), this.prgAddressChanged && (this.prgAddressSelect === 0 ? this.load8kRomBank(2 * (this.nes.rom.romCount - 1), 49152) : this.load8kRomBank(2 * (this.nes.rom.romCount - 1), 32768), this.prgAddressChanged = !1);
        }
      }, n[4].prototype.loadROM = function() {
        if (!this.nes.rom.valid)
          throw new Error("MMC3: Invalid ROM! Unable to load.");
        this.load8kRomBank(2 * (this.nes.rom.romCount - 1), 49152), this.load8kRomBank(2 * (this.nes.rom.romCount - 1) + 1, 57344), this.load8kRomBank(0, 32768), this.load8kRomBank(1, 40960), this.loadCHRROM(), this.loadBatteryRam(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
      }, n[4].prototype.clockIrqCounter = function() {
        this.irqEnable === 1 && --this.irqCounter < 0 && (this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL), this.irqCounter = this.irqLatchValue);
      }, n[4].prototype.toJSON = function() {
        var e = n[0].prototype.toJSON.apply(this);
        return e.command = this.command, e.prgAddressSelect = this.prgAddressSelect, e.chrAddressSelect = this.chrAddressSelect, e.pageNumber = this.pageNumber, e.irqCounter = this.irqCounter, e.irqLatchValue = this.irqLatchValue, e.irqEnable = this.irqEnable, e.prgAddressChanged = this.prgAddressChanged, e;
      }, n[4].prototype.fromJSON = function(e) {
        n[0].prototype.fromJSON.apply(this, arguments), this.command = e.command, this.prgAddressSelect = e.prgAddressSelect, this.chrAddressSelect = e.chrAddressSelect, this.pageNumber = e.pageNumber, this.irqCounter = e.irqCounter, this.irqLatchValue = e.irqLatchValue, this.irqEnable = e.irqEnable, this.prgAddressChanged = e.prgAddressChanged;
      }, n[5] = function(e) {
        this.nes = e;
      }, n[5].prototype = new n[0](), n[5].prototype.write = function(e, i) {
        e < 32768 ? n[0].prototype.write.apply(this, arguments) : this.load8kVromBank(i, 0);
      }, n[5].prototype.write = function(e, i) {
        if (e < 20480)
          return void n[0].prototype.write.apply(this, arguments);
        switch (e) {
          case 20736:
            this.prg_size = 3 & i;
            break;
          case 20737:
            this.chr_size = 3 & i;
            break;
          case 20738:
            this.sram_we_a = 3 & i;
            break;
          case 20739:
            this.sram_we_b = 3 & i;
            break;
          case 20740:
            this.graphic_mode = 3 & i;
            break;
          case 20741:
            this.nametable_mode = i, this.nametable_type[0] = 3 & i, this.load1kVromBank(3 & i, 8192), i >>= 2, this.nametable_type[1] = 3 & i, this.load1kVromBank(3 & i, 9216), i >>= 2, this.nametable_type[2] = 3 & i, this.load1kVromBank(3 & i, 10240), i >>= 2, this.nametable_type[3] = 3 & i, this.load1kVromBank(3 & i, 11264);
            break;
          case 20742:
            this.fill_chr = i;
            break;
          case 20743:
            this.fill_pal = 3 & i;
            break;
          case 20755:
            this.SetBank_SRAM(3, 3 & i);
            break;
          case 20756:
          case 20757:
          case 20758:
          case 20759:
            this.SetBank_CPU(e, i);
            break;
          case 20768:
          case 20769:
          case 20770:
          case 20771:
          case 20772:
          case 20773:
          case 20774:
          case 20775:
            this.chr_mode = 0, this.chr_page[0][7 & e] = i, this.SetBank_PPU();
            break;
          case 20776:
          case 20777:
          case 20778:
          case 20779:
            this.chr_mode = 1, this.chr_page[1][0 + (3 & e)] = i, this.chr_page[1][4 + (3 & e)] = i, this.SetBank_PPU();
            break;
          case 20992:
            this.split_control = i;
            break;
          case 20993:
            this.split_scroll = i;
            break;
          case 20994:
            this.split_page = 63 & i;
            break;
          case 20995:
            this.irq_line = i, this.nes.cpu.ClearIRQ();
            break;
          case 20996:
            this.irq_enable = i, this.nes.cpu.ClearIRQ();
            break;
          case 20997:
            this.mult_a = i;
            break;
          case 20998:
            this.mult_b = i;
            break;
          default:
            e >= 20480 && e <= 20501 ? this.nes.papu.exWrite(e, i) : e >= 23552 && e <= 24575 ? this.graphic_mode === 2 || this.graphic_mode !== 3 && this.irq_status : e >= 24576 && e <= 32767 && this.sram_we_a === 2 && this.sram_we_b;
        }
      }, n[5].prototype.loadROM = function() {
        if (!this.nes.rom.valid)
          throw new Error("UNROM: Invalid ROM! Unable to load.");
        this.load8kRomBank(2 * this.nes.rom.romCount - 1, 32768), this.load8kRomBank(2 * this.nes.rom.romCount - 1, 40960), this.load8kRomBank(2 * this.nes.rom.romCount - 1, 49152), this.load8kRomBank(2 * this.nes.rom.romCount - 1, 57344), this.loadCHRROM(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
      }, n[7] = function(e) {
        this.nes = e;
      }, n[7].prototype = new n[0](), n[7].prototype.write = function(e, i) {
        e < 32768 ? n[0].prototype.write.apply(this, arguments) : (this.load32kRomBank(7 & i, 32768), 16 & i ? this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING2) : this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING));
      }, n[7].prototype.loadROM = function() {
        if (!this.nes.rom.valid)
          throw new Error("AOROM: Invalid ROM! Unable to load.");
        this.loadPRGROM(), this.loadCHRROM(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
      }, n[11] = function(e) {
        this.nes = e;
      }, n[11].prototype = new n[0](), n[11].prototype.write = function(e, i) {
        if (e < 32768)
          return void n[0].prototype.write.apply(this, arguments);
        var h = 2 * (15 & i) % this.nes.rom.romCount, t = (2 * (15 & i) + 1) % this.nes.rom.romCount;
        if (this.loadRomBank(h, 32768), this.loadRomBank(t, 49152), this.nes.rom.vromCount > 0) {
          var s = 2 * (i >> 4) % this.nes.rom.vromCount;
          this.loadVromBank(s, 0), this.loadVromBank(s + 1, 4096);
        }
      }, n[34] = function(e) {
        this.nes = e;
      }, n[34].prototype = new n[0](), n[34].prototype.write = function(e, i) {
        if (e < 32768)
          return void n[0].prototype.write.apply(this, arguments);
        this.load32kRomBank(i, 32768);
      }, n[38] = function(e) {
        this.nes = e;
      }, n[38].prototype = new n[0](), n[38].prototype.write = function(e, i) {
        if (e < 28672 || e > 32767)
          return void n[0].prototype.write.apply(this, arguments);
        this.load32kRomBank(3 & i, 32768), this.load8kVromBank(2 * (i >> 2 & 3), 0);
      }, n[66] = function(e) {
        this.nes = e;
      }, n[66].prototype = new n[0](), n[66].prototype.write = function(e, i) {
        if (e < 32768)
          return void n[0].prototype.write.apply(this, arguments);
        this.load32kRomBank(i >> 4 & 3, 32768), this.load8kVromBank(2 * (3 & i), 0);
      }, n[94] = function(e) {
        this.nes = e;
      }, n[94].prototype = new n[0](), n[94].prototype.write = function(e, i) {
        if (e < 32768)
          return void n[0].prototype.write.apply(this, arguments);
        this.loadRomBank(i >> 2, 32768);
      }, n[94].prototype.loadROM = function() {
        if (!this.nes.rom.valid)
          throw new Error("UN1ROM: Invalid ROM! Unable to load.");
        this.loadRomBank(0, 32768), this.loadRomBank(this.nes.rom.romCount - 1, 49152), this.loadCHRROM(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
      }, n[140] = function(e) {
        this.nes = e;
      }, n[140].prototype = new n[0](), n[140].prototype.write = function(e, i) {
        if (e < 24576 || e > 32767)
          return void n[0].prototype.write.apply(this, arguments);
        this.load32kRomBank(i >> 4 & 3, 32768), this.load8kVromBank(2 * (15 & i), 0);
      }, n[180] = function(e) {
        this.nes = e;
      }, n[180].prototype = new n[0](), n[180].prototype.write = function(e, i) {
        if (e < 32768)
          return void n[0].prototype.write.apply(this, arguments);
        this.loadRomBank(i, 49152);
      }, n[180].prototype.loadROM = function() {
        if (!this.nes.rom.valid)
          throw new Error("Mapper 180: Invalid ROM! Unable to load.");
        this.loadRomBank(0, 32768), this.loadRomBank(this.nes.rom.romCount - 1, 49152), this.loadCHRROM(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
      }, u.exports = n;
    }]);
  });
})(yt);
const L = /* @__PURE__ */ ei(yt.exports);
function hi(p, l) {
  const d = window.indexedDB.open(p, 1);
  let m;
  d.addEventListener("success", () => {
    m = d.result;
  }), d.addEventListener("success", () => {
    m = d.result;
  }), d.addEventListener("error", () => {
    console.error("indexedDB load error");
  }), d.addEventListener("upgradeneeded", () => {
    m = d.result, m.objectStoreNames.contains(l) || m.createObjectStore(l, { keyPath: "id" });
  });
  function n(t, s) {
    m.transaction([l], "readwrite").objectStore(l).put({ id: t, data: s });
  }
  function e(t, s) {
    const o = m.transaction([l], "readwrite").objectStore(l).get(t);
    o.addEventListener("success", () => {
      s(o.result.data);
    });
  }
  function i(t) {
    m.transaction([l], "readwrite").objectStore(l).delete(t);
  }
  function h() {
    m.transaction([l], "readwrite").objectStore(l).clear();
  }
  return {
    setItem: n,
    getItem: e,
    removeItem: i,
    clear: h
  };
}
function ot(p, l, u) {
  return l >= u && ([l, u] = [u, l]), Math.min(u, Math.max(l, p));
}
function E(p, l) {
  return Array.from({ length: p }).fill(l);
}
function ri(p) {
  return p !== null && typeof p == "object" && !Array.isArray(p);
}
function ni(p) {
  return p === void 0;
}
function ai(p) {
  return p === null;
}
function $(p) {
  return typeof p == "number" ? isNaN(p) : ai(p) || ni(p);
}
function oi(p) {
  return !$(p);
}
function li(p, l = !0) {
  const u = l ? !1 : $(p);
  return Array.isArray(p) ? p.length === 0 : u;
}
function ui(p, l = !0) {
  const u = l ? !1 : $(p);
  return ri(p) ? li(Object.keys(p)) : u;
}
function q(p, l = 16) {
  l = ot(l, 2, 36);
  let u = "";
  for (let c = 1; c <= p; c++)
    u += Math.floor(Math.random() * l).toString(l);
  return u;
}
function Mt() {
  let p = "";
  if (typeof crypto < "u" && "randomUUID" in crypto)
    p = crypto.randomUUID();
  else if (typeof Blob > "u")
    p = `${q(8)}-${q(4)}-${q(4)}-${q(4)}-${q(12)}`;
  else {
    const l = URL.createObjectURL(new Blob());
    p = l.toString().substring(l.lastIndexOf("/") + 1), URL.revokeObjectURL(l);
  }
  return p;
}
function pi(p, l = Mt()) {
  const u = document.createElement("a");
  u.href = p, u.download = l, u.click();
}
function ci(p, l = Mt()) {
  pi(p.toDataURL("image/png"), l);
}
function mi(p) {
  return Object.keys(p);
}
function ft(p, l) {
  return p in l;
}
let Y = {};
const gt = "........", ht = /\|\d\|([LRUDTSAB.]{8})\|([LRUDTSAB.]{8})?\|\|/g;
function At(p, l) {
  let u = ht.exec(p), c = 0 + l, d = !1;
  if (Y = {}, !!u)
    for (; u; ) {
      const m = u[1] === gt, n = u[2] === gt;
      if (m && n) {
        d && (Y[c] = {
          p1: E(8, 64),
          p2: E(8, 64)
        }, d = !1), c++, u = ht.exec(p);
        continue;
      }
      d = !0;
      const e = u[1] ? u[1].split("").map((h) => h === "." ? 64 : 65).reverse() : E(8, 64), i = u[2] ? u[2].split("").map((h) => h === "." ? 64 : 65).reverse() : E(8, 64);
      u = ht.exec(p), Y[c] = {
        p1: e,
        p2: i
      }, c++;
    }
}
const tt = 256, it = 240;
let J, Ft, Pt, j;
const rt = new ImageData(tt, it);
function di(p) {
  f.frameCounter++;
  for (let l = 0; l < 256 * 240; l += 1)
    Pt[l] = 4278190080 | p[l];
}
function Ri() {
  rt.data.set(Ft), j.putImageData(rt, 0, 0);
}
function _i(p) {
  j = p.getContext("2d"), j.fillStyle = "black", j.fillRect(0, 0, tt, it);
  const l = new ArrayBuffer(rt.data.length);
  Ft = new Uint8ClampedArray(l), Pt = new Uint32Array(l), f.frameCounter = 1, J = requestAnimationFrame(u);
  function u() {
    cancelAnimationFrame(J), J = requestAnimationFrame(u), Ri();
  }
}
function Ct(p) {
  const l = p.parentNode, u = l.clientWidth, c = l.clientHeight, d = u / c, m = tt / it;
  m < d ? (p.style.height = `${c}px`, p.style.width = `${Math.round(c + m)}px`) : (p.style.width = `${u}px`, p.style.height = `${Math.round(u / m)}px`);
}
function Dt() {
  cancelAnimationFrame(J);
}
function Si(p) {
  const l = new Image();
  return l.src = p.toDataURL("image/png"), l;
}
function Z(p) {
  return Array(p).fill(!1);
}
function fi(p) {
  return p.filter(Boolean);
}
function gi() {
  return E(32768, 0).map((p, l) => l);
}
function G(p) {
  const l = [];
  let u = p[0], c = 1;
  for (let d = 1; d < p.length; d++)
    p[d] === u ? c++ : (c > 1 ? (l.push(c), l.push(u)) : l.push(-u - 1), u = p[d], c = 1);
  return l.push(c), l.push(u), l;
}
function V(p) {
  const l = [];
  for (let u = 0; u < p.length; )
    if (p[u] < 0)
      l.push(-p[u] - 1), u++;
    else {
      const c = p[u], d = p[u + 1];
      for (let m = 0; m < c; m++)
        l.push(d);
      u += 2;
    }
  return l;
}
function Ai(p) {
  const l = [], u = [];
  for (let c = 0; c < p.length; c++) {
    for (let d = 0; d < p[c].opaque.length; d++)
      p[c].opaque[d] === !1 ? l.push(0) : l.push(1);
    u.push(...p[c].pix);
  }
  return [G(l), G(u)];
}
function Ci(p) {
  const l = [];
  let u = Array(8), c = [];
  const d = V(p[0]), m = V(p[1]);
  for (let n = 0; n < 512; n += 1) {
    for (let e = 0; e < 8; e += 1)
      d[n * 8 + e] === 0 && (u[e] = !1);
    for (let e = 0; e < 64; e += 1)
      c[e] = m[n * 64 + e];
    l.push({
      opaque: u,
      pix: c
    }), u = Array(8), c = [];
  }
  return l;
}
function Di(p) {
  const l = [], u = [];
  return p.reduce((c, d) => (l.push(...d.tile), u.push(...d.attrib), c), l), [G(l), G(u)];
}
function Ii(p) {
  const l = [];
  let u = [], c = [];
  const d = V(p[0]), m = V(p[1]);
  for (let n = 0; n < 1024 * 4; n += 1)
    u.push(d[n]), c.push(m[n]), (n + 1) % 1024 === 0 && (l.push({ tile: u, attrib: c }), u = [], c = []);
  return l;
}
const f = new L.NES({
  onFrame: di,
  onAudioSample: Ei,
  sampleRate: Ti()
});
f.videoMode = !1;
f.frameCounter = 1;
f.playbackMode = !1;
const M = {
  buffer: null
};
function It(p) {
  const l = f.ppu.toJSON(), u = f.cpu.toJSON(), c = f.mmap.toJSON();
  delete l.attrib, delete l.bgbuffer, delete l.buffer, delete l.pixrendered, delete l.vramMirrorTable;
  const d = G(l.vramMem), m = Di(l.nameTable), n = Ai(l.ptTile), e = G(u.mem);
  return delete l.vramMem, delete l.nameTable, delete u.mem, delete l.ptTile, {
    path: p,
    data: {
      cpu: u,
      mmap: c,
      ppu: l,
      vramMemZip: d,
      nameTableZip: m,
      cpuMemZip: e,
      ptTileZip: n,
      frameCounter: f.frameCounter
    }
  };
}
function bi(p, l, u) {
  if (u && p.path !== u)
    return l({
      code: 2,
      message: `Load Error: The saved data is inconsistent with the current game, saved: ${p.path}, current: ${u}.`
    });
  if (!M.buffer)
    return l({
      code: 3,
      message: "Load Error: NES ROM is not loaded."
    });
  try {
    const { ppu: c, cpu: d, mmap: m, frameCounter: n, vramMemZip: e, nameTableZip: i, cpuMemZip: h, ptTileZip: t } = p.data;
    c.attrib = E(32, 0), c.bgbuffer = E(61440, 0), c.buffer = E(61440, 0), c.pixrendered = E(61440, 0), c.vramMem = V(e), c.nameTable = Ii(i), c.vramMirrorTable = gi(), c.ptTile = Ci(t), d.mem = V(h), f.ppu.reset(), f.romData = M.buffer, f.cpu.fromJSON(d), f.mmap.fromJSON(m), f.ppu.fromJSON(c), f.frameCounter = n;
  } catch (c) {
    console.error(c), l({
      code: 3,
      message: "Load Error: The saved data is invalid."
    });
  }
}
let F = new AudioContext(), w, nt = 1;
const bt = 512, lt = 4 * 1024, Q = lt - 1, kt = new Float32Array(lt), Lt = new Float32Array(lt);
let X = 0, z = 0;
function Ni() {
  return X - z & Q;
}
function Ei(p, l) {
  kt[X] = p, Lt[X] = l, X = X + 1 & Q;
}
function Ti() {
  if (!window.AudioContext)
    return 44100;
  const p = new window.AudioContext(), l = p.sampleRate;
  return p.close(), l;
}
function Oi() {
  if (f.videoMode) {
    const p = Y[f.frameCounter];
    f.frameCounter > 0 && p && (f.controllers[1].state = p.p1, f.controllers[2].state = p.p2);
  }
  f.frame();
}
function vi() {
  F = new AudioContext(), w = F.createScriptProcessor(bt, 0, 2), w.onaudioprocess = (p) => {
    const l = p.outputBuffer, u = l.length;
    Ni() < bt && Oi();
    const c = l.getChannelData(0), d = l.getChannelData(1);
    for (let m = 0; m < u; m++) {
      const n = z + m & Q;
      c[m] = kt[n] * nt, d[m] = Lt[n] * nt;
    }
    z = z + u & Q;
  }, w.connect(F.destination);
}
function Nt() {
  w.disconnect(F.destination), w.onaudioprocess = null, w = {}, "close" in F && F.close();
}
function yi() {
  F.suspend();
}
function Mi() {
  F.resume();
}
function Et(p) {
  nt = ot(p, 0, 100) / 100;
}
const K = 0.3, wt = {
  UP: "KeyW",
  DOWN: "KeyS",
  LEFT: "KeyA",
  RIGHT: "KeyD",
  A: "KeyK",
  B: "KeyJ",
  C: "KeyI",
  D: "KeyU",
  SELECT: "Digit2",
  START: "Digit1"
}, Gt = {
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  A: "Numpad2",
  B: "Numpad1",
  C: "Numpad5",
  D: "Numpad4"
}, at = {
  UP: "BUTTON_UP",
  DOWN: "BUTTON_DOWN",
  LEFT: "BUTTON_LEFT",
  RIGHT: "BUTTON_RIGHT",
  A: "BUTTON_A",
  B: "BUTTON_B",
  C: "BUTTON_A",
  D: "BUTTON_B",
  SELECT: "BUTTON_SELECT",
  START: "BUTTON_START"
}, Fi = mi(at);
class Pi {
  constructor(l) {
    x(this, "animationFrame");
    x(this, "axesHolding");
    x(this, "btnHolding");
    x(this, "gamepad_btns");
    window.addEventListener("gamepadconnected", this.connectHandler.bind(this, !0)), window.addEventListener("gamepaddisconnected", this.connectHandler.bind(this, !1)), this.animationFrame = requestAnimationFrame(this.frame.bind(this)), this.btnHolding = {
      p1: Z(20),
      p2: Z(20)
    }, this.axesHolding = {
      p1: Z(4),
      p2: Z(4)
    }, this.gamepad_btns = l;
  }
  get gamepads() {
    return fi(navigator.getGamepads());
  }
  connectHandler(l, u) {
    l ? this.gamepads[u.gamepad.index] = u.gamepad : this.gamepads.length === 0 && this.close();
  }
  axesHandler(l, u, c, d) {
    var n;
    const m = (n = this.axesHolding[l]) == null ? void 0 : n[c];
    u ? m || (document.dispatchEvent(new KeyboardEvent("keydown", {
      code: this.gamepad_btns.value[l][d]
    })), this.axesHolding[l][c] = !0) : m && (document.dispatchEvent(new KeyboardEvent("keyup", {
      code: this.gamepad_btns.value[l][d]
    })), this.axesHolding[l][c] = !1);
  }
  btnHandler(l, u, c) {
    var m;
    const d = (m = this.btnHolding[l]) == null ? void 0 : m[c];
    if (u.pressed) {
      if (d)
        return;
      this.btnHolding[l][c] = !0, document.dispatchEvent(new KeyboardEvent("keydown", {
        code: this.gamepad_btns.value[l][c]
      }));
    } else
      d && (this.btnHolding[l][c] = !1, document.dispatchEvent(new KeyboardEvent("keyup", {
        code: this.gamepad_btns.value[l][c]
      })));
  }
  run() {
    for (let l = 0; l < this.gamepads.length && !(l > 1); l++) {
      const u = `p${l + 1}`, c = this.gamepads[l];
      c.buttons.forEach(this.btnHandler.bind(this, u));
      const d = c.axes[0], m = c.axes[1];
      this.axesHandler(u, d > K, 0, 15), this.axesHandler(u, d < -K, 1, 14), this.axesHandler(u, m > K, 2, 13), this.axesHandler(u, m < -K, 3, 12);
    }
  }
  frame() {
    this.run(), cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(this.frame.bind(this));
  }
  close() {
    this.btnHolding.p1.fill(!1), this.btnHolding.p2.fill(!1), cancelAnimationFrame(this.animationFrame);
  }
}
const ki = (p) => {
  const l = P(() => Object.assign(wt, p.p1)), u = P(() => Object.assign(Gt, p.p2)), c = P(() => {
    const e = {};
    return Fi.forEach((i) => {
      e[l.value[i]] = {
        key: i,
        p: 1,
        value: at[i]
      }, i in u.value && (e[u.value[i]] = {
        key: i,
        p: 2,
        value: at[i]
      });
    }), e;
  }), d = P(() => [l.value.C, l.value.D, u.value.C, u.value.D]), m = P(() => ({
    p1: [
      l.value.A,
      l.value.C,
      l.value.B,
      l.value.D,
      "",
      "",
      "",
      "",
      l.value.SELECT,
      l.value.START,
      "",
      "",
      l.value.UP,
      l.value.DOWN,
      l.value.LEFT,
      l.value.RIGHT
    ],
    p2: [
      u.value.A,
      u.value.C,
      u.value.B,
      u.value.D,
      "",
      "",
      "",
      "",
      l.value.SELECT,
      l.value.START,
      "",
      "",
      u.value.UP,
      u.value.DOWN,
      u.value.LEFT,
      u.value.RIGHT
    ]
  })), n = new Pi(m);
  return Ot(() => {
    n.frame();
  }), vt(() => {
    n.close();
  }), [c, d];
}, Li = ["width", "height"], wi = { style: { position: "absolute", top: "0", left: "0%", "background-color": "#000", width: "100%", height: "100%" } }, Tt = /* @__PURE__ */ Kt({
  name: "nes-vue",
  __name: "NesVue",
  props: {
    url: {},
    autoStart: { type: Boolean, default: !1 },
    width: { default: "256px" },
    height: { default: "240px" },
    label: { default: "Game Start" },
    gain: { default: 100 },
    noClip: { type: Boolean, default: !1 },
    storage: { type: Boolean, default: !1 },
    debugger: { type: Boolean, default: !1 },
    turbo: { default: 16 },
    p1: { default: () => wt },
    p2: { default: () => Gt }
  },
  emits: ["fps", "success", "error", "saved", "loaded", "update:url", "removed"],
  setup(p, { expose: l, emit: u }) {
    const c = p;
    if (!c.url)
      throw "nes-vue missing props: url.";
    const [d, m] = ki(c), n = ct(null), e = ct(!0), i = hi("nes-vue", "save_data");
    let h = !1, t;
    function s(S) {
      return c.debugger && console.error(S.message), u("error", S), !1;
    }
    Jt(() => {
      f.ppu.clipToTvSize = !c.noClip;
    });
    const o = {
      p1: {
        C: {
          timeout: 0,
          beDown: !1,
          once: !0
        },
        D: {
          timeout: 0,
          beDown: !1,
          once: !0
        }
      },
      p2: {
        C: {
          timeout: 0,
          beDown: !1,
          once: !0
        },
        D: {
          timeout: 0,
          beDown: !1,
          once: !0
        }
      }
    }, a = P(() => {
      const S = 1e3 / (2 * c.turbo);
      return ot(S, 20, 100);
    }), R = function(S) {
      const C = S.code;
      if (ft(C, d.value)) {
        const A = d.value[C];
        if (m.value.includes(S.code)) {
          const I = o[`p${A.p}`][A.key];
          I.once && (f.buttonDown(A.p, L.Controller[A.value]), I.timeout = window.setInterval(() => {
            I.beDown ? f.buttonDown(A.p, L.Controller[A.value]) : f.buttonUp(A.p, L.Controller[A.value]), I.beDown = !I.beDown;
          }, a.value), I.once = !1);
          return;
        } else
          f.buttonDown(A.p, L.Controller[A.value]);
      }
    }, r = function(S) {
      const C = S.code;
      if (ft(C, d.value)) {
        const A = d.value[C];
        if (m.value.includes(S.code)) {
          const I = o[`p${A.p}`][A.key];
          clearInterval(I.timeout), I.once = !0;
        }
        f.buttonUp(A.p, L.Controller[A.value]);
      }
    };
    function _() {
      document.addEventListener("keydown", R), document.addEventListener("keyup", r);
    }
    function g() {
      document.removeEventListener("keydown", R), document.removeEventListener("keyup", r);
    }
    function D(S = c.url) {
      if ($(n.value))
        return;
      if (e.value ? e.value = !1 : (Nt(), Dt(), clearInterval(t)), S !== c.url) {
        M.buffer = null, u("update:url", S);
        return;
      }
      _i(n.value), new Promise((A, I) => {
        function pt(y) {
          try {
            f.loadROM(y), t = window.setInterval(() => {
              const et = f.getFPS();
              u("fps", et || 0);
            }, 1e3), A("success");
          } catch {
            I({
              code: 0,
              message: `${S} loading Error: Probably the ROM is unsupported.`
            }), e.value = !0;
          }
        }
        if (oi(M.buffer))
          pt(M.buffer);
        else {
          const y = new XMLHttpRequest();
          y.open("GET", S), y.overrideMimeType("text/plain; charset=x-user-defined"), y.onerror = () => {
            I({
              code: 404,
              message: `${S} loading Error: ${y.statusText}`
            });
          }, y.onload = function() {
            this.status === 200 ? (M.buffer = this.responseText, pt(M.buffer)) : I({
              code: 404,
              message: `${S} loading Error: ${y.statusText}`
            });
          }, y.send();
        }
        n.value && Ct(n.value), _();
      }).then(() => {
        vi(), u("success");
      }, (A) => (s(A), A));
    }
    function N() {
      f.videoMode && ut(), e.value || T(), h && (h = !1), c.url && D();
    }
    function T() {
      e.value || (Nt(), Dt(), clearInterval(t), f.reset(), e.value = !0);
    }
    function b(S) {
      return S === void 0 ? s({
        code: 4,
        message: "TypeError: id is undefined."
      }) : !1;
    }
    function B(S) {
      bi(S, s, c.url);
    }
    function H(S) {
      if (!b(S))
        try {
          localStorage.setItem(S, JSON.stringify(It(c.url))), u("saved", {
            id: S,
            message: "The state has been saved in localStorage",
            target: "localStorage"
          });
        } catch (C) {
          if (C.name === "QuotaExceededError")
            return s({
              code: 1,
              message: "Save Error: localStorage out of memory."
            });
        }
    }
    function W(S) {
      if (b(S))
        return;
      const C = localStorage.getItem(S);
      if (!C)
        return s({
          code: 2,
          message: "Load Error: nothing to load."
        });
      B(JSON.parse(C)), u("loaded", {
        id: S,
        message: "Loaded state from localStorage",
        target: "localStorage"
      });
    }
    function U(S) {
      if (!b(S))
        try {
          i.setItem(S, It(c.url));
        } catch {
          s({
            code: 1,
            message: "Save Error: Unable to save data to indexedDB."
          });
        }
    }
    function O(S) {
      b(S) || i.getItem(S, (C) => {
        B(C);
      });
    }
    function v(S) {
      if (!b(S)) {
        if (!f.cpu.irqRequested || h || e.value)
          return s({
            code: 1,
            message: "Save Error: Can only be saved while the game is running."
          });
        c.storage ? H(S) : U(S);
      }
    }
    function k(S) {
      if (!b(S)) {
        if (!f.cpu.irqRequested || h || e.value)
          return s({
            code: 2,
            message: "Load Error: Can only be loaded when the game is running."
          });
        c.storage ? W(S) : O(S);
      }
    }
    function Vt(S) {
      b(S) || (c.storage ? localStorage.removeItem(S) : i.removeItem(S));
    }
    function Bt() {
      i.clear();
    }
    function xt(S, C) {
      if (!n.value || e.value)
        return;
      const A = Si(n.value);
      return S && ci(n.value, C), A;
    }
    function st() {
      if (ui(Y, !1)) {
        s({
          code: 3,
          message: "FM2 Error: No fm2 scripts found."
        });
        return;
      }
      N(), f.videoMode = !0, g();
    }
    async function qt(S, C = 0) {
      try {
        const I = await (await fetch(S)).text();
        At(I, C);
      } catch (A) {
        return s({
          code: 4,
          message: "FM2 Error: Unable to load fm2 file."
        }), Promise.reject(A);
      }
      return st;
    }
    function ut() {
      f.videoMode = !1, f.controllers[1].state = E(8, 64), f.controllers[2].state = E(8, 64), _();
    }
    function Xt(S, C = 0) {
      return At(S, C), Promise.resolve(st);
    }
    function Yt() {
      h = !0, yi();
    }
    function Ht() {
      h = !1, Mi();
    }
    const Wt = P(() => {
      const S = /^\d*$/;
      let C = c.width, A = c.height;
      return n.value && jt(() => {
        n.value && Ct(n.value);
      }), S.test(String(C)) && (C += "px"), S.test(String(A)) && (A += "px"), `width: ${C};height: ${A};background-color: #000;margin: auto;position: relative;overflow: hidden;`;
    });
    return mt(() => c.url, () => {
      M.buffer = null, N();
    }), mt(() => c.gain, () => {
      Et(c.gain);
    }), Ot(() => {
      M.buffer = null, c.autoStart && D(), Et(c.gain);
    }), vt(() => {
      g(), T();
    }), l({
      start: D,
      reset: N,
      stop: T,
      pause: Yt,
      play: Ht,
      save: v,
      load: k,
      remove: Vt,
      clear: Bt,
      screenshot: xt,
      fm2URL: qt,
      fm2Text: Xt,
      fm2Play: st,
      fm2Stop: ut
    }), (S, C) => (dt(), Rt("div", {
      style: zt(Wt.value)
    }, [
      _t("canvas", {
        ref_key: "cvs",
        ref: n,
        width: St(tt),
        height: St(it),
        style: { display: "inline-block" }
      }, null, 8, Li),
      Qt(_t("div", wi, null, 512), [
        [$t, e.value]
      ]),
      e.value ? (dt(), Rt("div", {
        key: 0,
        style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", cursor: "pointer", color: "#f8f4ed", "font-size": "20px" },
        onClick: C[0] || (C[0] = (A) => D())
      }, ti(S.label), 1)) : ii("", !0)
    ], 4));
  }
}), Bi = {
  install(p) {
    p.component(Tt.name, Tt);
  }
};
export {
  Tt as NesVue,
  Y as controllerState,
  Bi as default,
  f as nes
};
