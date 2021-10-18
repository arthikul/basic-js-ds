module.exports = class st {

  st = [];


  push(element) {
    this.st.push(element);
  }

  pop() {
    return this.st.pop();
  } 

  peek() {
    return this.st[this.st.length - 1];
  }
}
