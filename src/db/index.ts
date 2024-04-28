import { DB } from "@taiyuuki/utils";
import { Idb, IdbIndex } from "src/types";

function createIndexDB<T = any>(dbName: string, storeName: string): Idb {
  return {
    dbName:'indexedDB',
    db: new DB(dbName, storeName),
    setItem(id, data) {
      console.log(data)
      this.db.set_item(id, data);
    },
    getItem(id) {
      return this.db.get_item(id);
    },
    removeItem(id) {
      this.db.remove_item(id);
    },
    clear() {
      this.db.clear();
    },
  } as IdbIndex;
}

function createLocalStoreDB<T = any>(): Idb {
  return {
    dbName:'localStorage',
    setItem(id, data) {
      if (typeof data === "object" && data !== null) {
        localStorage.setItem(id, JSON.stringify(data));
      } else {
        localStorage.setItem(id, data);
      }
    },
    getItem(id) {
      const res = localStorage.getItem(id);
      try {
        if (res) return JSON.parse(res);
      } catch (error) {}
      return res;
    },
    removeItem(id) {
      localStorage.removeItem(id);
    },
    clear() {
      localStorage.clear();
    },
  };
}

export { createIndexDB,createLocalStoreDB };
