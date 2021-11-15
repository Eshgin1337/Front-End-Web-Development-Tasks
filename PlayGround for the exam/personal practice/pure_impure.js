function Counter() {
    let a = 0;
    this.up = function () {
        return a++;
    }
    this.down = function () {
        return a--;
    }
}

let counter = new Counter();

console.log(counter.up());
console.log(counter.up());
console.log(counter.up());
console.log(counter.down());
console.log(counter.down());
