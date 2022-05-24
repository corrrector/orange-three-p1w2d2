// const Orange = require("./orange")
class OrangeTree {
  constructor(age = 0, height = 0) {
    this.age = age;
    this.height = height;
    this.orange = [];
  }
  passGrowingSeason() {
    this.age += 1
    this.orange = []
    if (this.height < 25) {
      this.height += 2.5
    }
    if (this.age > 5) {
      let orangeTest = Math.floor(Math.random() * (300 - 100) + 100)
      for (let i = 0; i < orangeTest; i++) {
        this.orange.push(new Orange)
      }
    }
    console.log(this.orange)
  }

  isMature() {
    //  Returns true if the tree is old enough to bear fruit, false otherwise
    return this.age > 5
  }

  hasOranges() {
    return this.orange.length
  }

  isDead() {
    return this.age >= 100
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
   return this.orange.pop()
  }
}

// module.exports = OrangeTree;
