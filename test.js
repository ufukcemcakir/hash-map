const HashMap = require('./HashMap');

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log("Initial length:", test.length());

test.set('apple', 'green');
test.set('dog', 'white');

console.log("Length after overwriting:", test.length());

test.set('moon', 'silver');

console.log("Length after adding moon:", test.length());

console.log("Get 'banana':", test.get('banana'));
console.log("Has 'elephant':", test.has('elephant'));
console.log("Remove 'frog':", test.remove('frog'));
console.log("Length after removing frog:", test.length());

console.log("Keys:", test.keys());
console.log("Values:", test.values());
console.log("Entries:", test.entries());

test.clear();
console.log("Length after clearing:", test.length());

class HashSet {
  constructor() {
    this.hashMap = new HashMap();
  }

  add(key) {
    this.hashMap.set(key, true);
  }

  has(key) {
    return this.hashMap.has(key);
  }

  remove(key) {
    return this.hashMap.remove(key);
  }

  clear() {
    this.hashMap.clear();
  }

  size() {
    return this.hashMap.length();
  }

  values() {
    return this.hashMap.keys();
  }
}

console.log("\nTesting HashSet:");
const set = new HashSet();
set.add('apple');
set.add('banana');
set.add('carrot');

console.log("Set size:", set.size());
console.log("Has 'banana':", set.has('banana'));
console.log("Remove 'carrot':", set.remove('carrot'));
console.log("Set values:", set.values());