class DOM {
  constructor(el) {
    const $el = document.createElement(el);
    this.$el = $el;
  }

  static create(el) {
    return new DOM(el);
  }

  static createMany(el) {
    let myArr = [];
    Array.from(arguments).map(item => {
      item = new DOM(item);
      myArr.push(item);
    });
    // console.log(myArr);
    return myArr;
  }

  setSize(x, y) {
    this.$el.style.width = x;
    this.$el.style.height = y;
    return this;
  }

  text(value) {
    this.$el.innerText = value;
    return this;
  }

  attr(name, value) {
    this.$el.setAttribute(name, value);
    return this;
  }

  css(cssValue) {
    Object.keys(cssValue).forEach(key => {
      this.$el.style[key] = cssValue[key];
    });
    return this;
  }
}

export {
  DOM
};