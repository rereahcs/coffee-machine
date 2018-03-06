const MAX_BEANS = 200; // grams
const MAX_WATER = 1000; // milliliters
const MAX_GROUNDS = 150; // grams

const ESPRESSO = {
  beans: 10,
  water: 10
};

const AMERICANO = {
  beans: 10,
  water: 10
};

class CoffeeMachine {
  constructor() {
    this.beans = MAX_BEANS;
    this.water = MAX_WATER;

    this.grounds = 0;
  }

  validate({ beans, water }) {
    return true;
  }

  use({ beans, water }) {
    try {
      if (this.beans - beans < 0) {
        throw new Error("Not enough beans! Please refill using `fillBeans()`.");
      }

      if (this.water - water < 0) {
        throw new Error("Not enough water! Please refill using `fillWater()`.");
      }

      if (this.grounds + beans > MAX_GROUNDS) {
        throw new Error(
          "Too much grounds! Please empty using `emptyGrounds()`."
        );
      }

      this.beans -= beans;
      this.water -= water;

      this.grounds += beans;
    } catch (e) {
      console.error(e);
    }

    return this.getState();
  }

  espresso() {
    return this.use(ESPRESSO);
  }

  americano() {
    return this.use(AMERICANO);
  }

  fillWater() {
    this.water = MAX_WATER;

    return this.water;
  }

  fillBeans() {
    this.beans = MAX_BEANS;

    return this.beans;
  }

  emptyGrounds() {
    this.grounds = 0;

    return this.grounds;
  }

  getState() {
    return {
      beans: this.beans,
      water: this.water,
      grounds: this.grounds
    };
  }
}

window.coffeeMachine = new CoffeeMachine();
