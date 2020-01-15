// Stack class
class Stack {

  constructor(el) {
    this.items = [];
    this.max = el;
  }

  // isEmpty function
  isEmpty() {
    return this.items.length == 0;
  }

  // isEmpty function
  isFull() {
    if (this.items.length >= this.max) return true;
    return false;
  }

  // push function
  push(element) {
    if (this.isFull()) return -1;
    this.items.push(element);
    return 1;
  }

  // pop function
  pop() {
    if (this.isEmpty()) return -1;
    return this.items.pop();
  }

  // printStack function
  printStack() {
    var str = this.items.join();
    return str;
  }

  //peek
  peek() {
    return this.items[this.items.length - 1];
  }
}

// creating object for stack class
var stack = new Stack(3);

// console.log(stack.isEmpty());
console.log(stack.push(4)); //1
console.log(stack.push(41)); //1
console.log(stack.push(42)); //1
console.log(stack.push(43)); //-1

console.log(stack.pop()); //42
console.log(stack.pop()); //41
console.log(stack.pop()); //4
console.log(stack.pop()); //-1
console.log(stack.pop()); //-1

// console.log(stack.push(4));
//console.log(stack.peek());
//console.log(stack.printStack());



// Queue class
class Queue {
  constructor(el) {
    this.items = [ ];
    this.max = el;
    // this.length = this.items.length;
    // (this.length == 0) ? this.rear=this.items[this.length-1] :  this.rear= -1
    // (this.length == 0) ? this.fornt=this.items[0] :  this.fornt= -1
  }

  // isEmpty function
  isEmpty() {
    return this.items.length == 0;
  }

  // isEmpty function
  isFull() {
    if (this.items.length >= this.max) return true;
    return false;
  }

  // enqueue function
  enqueue(element) {
    if (this.isFull()) return -1;
    this.items.push(element);
    return 1;
  }

  // dequeue function
  dequeue() {
    if (this.isEmpty()) return -1;
    return this.items.shift();
  }

  // printQueue function
  printQueue() {
    var str = this.items.join();
    return str;
  }
}

// creating object for queue class
var queue = new Queue(3);

console.log(queue.dequeue()); // -1
console.log(queue.enqueue(1)); // 1
console.log(queue.enqueue(2)); // 1
console.log(queue.enqueue(3)); // 1
// console.log(queue.dequeue());
console.log(queue.length)
console.log(queue.rear)
console.log(queue.fornt)
console.log(queue.enqueue(4)); //-1