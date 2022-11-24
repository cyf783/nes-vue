import type { NES } from 'jsnes'
import { ignoreSourceError } from 'src/utils'

let audio_ctx = {} as AudioContext
let script_processor: ScriptProcessorNode
const AUDIO_BUFFERING = 512
const SAMPLE_COUNT = 4 * 1024
const SAMPLE_MASK = SAMPLE_COUNT - 1
const audio_samples_L = new Float32Array(SAMPLE_COUNT)
const audio_samples_R = new Float32Array(SAMPLE_COUNT)
let audio_write_cursor = 0, audio_read_cursor = 0

function audio_remain() {
  return (audio_write_cursor - audio_read_cursor) & SAMPLE_MASK
}

export const onAudioSample = (left: number, right: number) => {
  audio_samples_L[audio_write_cursor] = left
  audio_samples_R[audio_write_cursor] = right
  audio_write_cursor = (audio_write_cursor + 1) & SAMPLE_MASK
}

export const getSampleRate = () => {
  if (!window.AudioContext) {
    return 44100
  }
  const myCtx = new window.AudioContext()
  const sampleRate = myCtx.sampleRate
  myCtx.close()
  return sampleRate
}

export const audioFrame = (nes: NES) => {
  audio_ctx = new AudioContext()
  script_processor = audio_ctx.createScriptProcessor(AUDIO_BUFFERING, 0, 2)
  script_processor.onaudioprocess = (event: AudioProcessingEvent) => {
    const dst = event.outputBuffer
    const len = dst.length

    if (audio_remain() < AUDIO_BUFFERING) {
      ignoreSourceError(nes.frame)
    }

    const dst_l = dst.getChannelData(0)
    const dst_r = dst.getChannelData(1)
    for (let i = 0; i < len; i++) {
      const src_idx = (audio_read_cursor + i) & SAMPLE_MASK
      dst_l[i] = audio_samples_L[src_idx]
      dst_r[i] = audio_samples_R[src_idx]
    }

    audio_read_cursor = (audio_read_cursor + len) & SAMPLE_MASK
  }
  script_processor.connect(audio_ctx.destination)
}

export const audioStop = () => {
  script_processor.disconnect(audio_ctx.destination)
  script_processor.onaudioprocess = null
  script_processor = {} as ScriptProcessorNode

  if ('close' in audio_ctx) {
    audio_ctx.close()
  }
}