class LRUCache {
  protected cacheTable: Map<any, any> = new Map();
  protected capacity: number = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  put(key: any, value: any) {
    if (this.cacheTable.has(key)) {
      this.cacheTable.delete(key);
    } else if (this.cacheTable.size >= this.capacity) {
      const firstKey = this.cacheTable.keys().next().value;
      this.cacheTable.delete(firstKey);
    }

    this.cacheTable.set(key, value);
  }

  get(key: any) {
    if (this.cacheTable.has(key)) {
      const value = this.cacheTable.get(key);

      this.cacheTable.delete(key);
      this.cacheTable.set(key, value);

      return value;
    }

    return -1;
  }
}

const lru = new LRUCache(2);

lru.put(1, 1); // cache: {1=1}
lru.put(2, 2); // cache: {1=1, 2=2}

console.log(lru.get(1)); // returns 1, cache: {2=2, 1=1}

lru.put(3, 3); // removes key 2, cache: {1=1, 3=3}

console.log(lru.get(2)); // returns -1 (key not found)

lru.put(4, 4); // removes key 1, cache: {3=3, 4=4}
console.log(lru.get(1)); // returns -1 (key not found)
console.log(lru.get(3)); // returns 3
console.log(lru.get(4)); // returns 4
