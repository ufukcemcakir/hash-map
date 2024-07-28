class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
      this.buckets = new Array(initialCapacity).fill(null).map(() => []);
      this.loadFactor = loadFactor;
      this.size = 0;
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
      }
      return hashCode;
    }
  
    set(key, value) {
      if (this.size / this.buckets.length >= this.loadFactor) {
        this.grow();
      }
      
      const index = this.hash(key);
      const bucket = this.buckets[index];
      
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
      }
      
      bucket.push([key, value]);
      this.size++;
    }
  
    get(key) {
      const index = this.hash(key);
      this.checkBounds(index);
      
      const bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
      
      return null;
    }
  
    has(key) {
      const index = this.hash(key);
      this.checkBounds(index);
      
      const bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return true;
        }
      }
      
      return false;
    }
  
    remove(key) {
      const index = this.hash(key);
      this.checkBounds(index);
      
      const bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          this.size--;
          return true;
        }
      }
      
      return false;
    }
  
    length() {
      return this.size;
    }
  
    clear() {
      this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
      this.size = 0;
    }
  
    keys() {
      const allKeys = [];
      for (let i = 0; i < this.buckets.length; i++) {
        const bucket = this.buckets[i];
        for (let j = 0; j < bucket.length; j++) {
          allKeys.push(bucket[j][0]);
        }
      }
      return allKeys;
    }
  
    values() {
      const allValues = [];
      for (let i = 0; i < this.buckets.length; i++) {
        const bucket = this.buckets[i];
        for (let j = 0; j < bucket.length; j++) {
          allValues.push(bucket[j][1]);
        }
      }
      return allValues;
    }
  
    entries() {
      const allEntries = [];
      for (let i = 0; i < this.buckets.length; i++) {
        const bucket = this.buckets[i];
        for (let j = 0; j < bucket.length; j++) {
          allEntries.push(bucket[j]);
        }
      }
      return allEntries;
    }
  
    grow() {
      const newCapacity = this.buckets.length * 2;
      const newBuckets = new Array(newCapacity).fill(null).map(() => []);
      
      for (let i = 0; i < this.buckets.length; i++) {
        const bucket = this.buckets[i];
        for (let j = 0; j < bucket.length; j++) {
          const [key, value] = bucket[j];
          const newIndex = this.hash(key) % newCapacity;
          newBuckets[newIndex].push([key, value]);
        }
      }
      
      this.buckets = newBuckets;
    }
  
    checkBounds(index) {
      if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bound");
      }
    }
  }
  
  module.exports = HashMap;