import { DB } from 'src/db'
import { getNesData } from 'src/nes'

class Playback {
    db: DB
    length: number
    frameData: FrameData
    frameCache: FrameData
    frameList: number[]
    dbIndex: number
    constructor() {
        this.db = new DB('auto-save', 'playback_data')
        this.length = 0
        this.frameList = []
        this.frameData = {}
        this.frameCache = {}
        this.dbIndex = 1
    }

    get lastIndex() {
        return this.frameList[this.frameList.length - 1]
    }

    push(this: Playback, data: number[], frameCounter: number) {
        this.length++
        this.frameList.push(frameCounter)
        this.frameData[frameCounter] = data
        this.frameCache[frameCounter] = data
    }

    action(frame: number) {
        return this.frameData[frame]
    }

    clear() {
        this.length = 0
        this.frameList = []
        this.frameData = {}
    }

    clearDB() {
        this.db.clear()
    }

    save() {
        const id = `playback-${this.dbIndex++}`
        const saveDatas = {
            length: this.length,
            frameList: this.frameList,
            frameData: this.frameData,
            nes: getNesData(id),
        }
        this.clear()
        this.db.setItem(id, saveDatas)
    }

    load(cb: (data: SaveData) => void) {
        const id = `playback-${--this.dbIndex}`
        this.db.getItem(id, (data) => {
            this.length = data.length
            this.frameList = data.frameList
            this.frameData = data.frameData
            this.db.removeItem(id)
            cb(data.nes)
        })
    }
}

export {
    Playback,
}